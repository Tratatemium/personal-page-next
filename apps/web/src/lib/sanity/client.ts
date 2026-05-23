import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const client = createClient({
  projectId: "vsd49p5h",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export { client, urlFor };
