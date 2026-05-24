import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { handleRevalidation } from "@/lib/sanity/revalidate";

type WebhookPayload = { _type: string };

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        "Missing environment variable SANITY_REVALIDATE_SECRET",
        { status: 500 },
      );
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    );

    if (isValidSignature === null) {
      return new Response(JSON.stringify({ message: "No secret provided" }), {
        status: 401,
      });
    }

    if (!isValidSignature) {
      return new Response(JSON.stringify({ message: "Invalid signature" }), {
        status: 401,
      });
    }

    if (!body?._type) {
      return new Response(JSON.stringify({ message: "Bad Request", body }), {
        status: 400,
      });
    }

    handleRevalidation(body._type);
    return NextResponse.json({ body });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(message, { status: 500 });
  }
}
