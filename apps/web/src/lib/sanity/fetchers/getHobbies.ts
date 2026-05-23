import { client } from "@/lib/sanity/client";
import { HOBBIES_QUERY } from "@/lib/sanity/queries";
import type { HOBBIES_QUERY_RESULT } from "@/lib/sanity/sanity.types";

const options = { next: { tags: ["hobby"] } };

const getHobbies = async () =>
  await client.fetch<HOBBIES_QUERY_RESULT>(HOBBIES_QUERY, {}, options);

export { getHobbies };
