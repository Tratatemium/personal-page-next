import { client } from "@/lib/sanity/client";
import { PROJECTS_QUERY } from "@/lib/sanity/queries";
import type { PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

const options = { next: { tags: ["project"] } };

const getProjects = async () =>
  await client.fetch<PROJECTS_QUERY_RESULT>(PROJECTS_QUERY, {}, options);

export { getProjects };
