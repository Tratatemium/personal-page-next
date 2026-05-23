import { defineQuery } from "next-sanity";

const PROJECTS_QUERY = defineQuery(`
    *[_type == "project" && defined(slug.current)] | order(orderRank)
`);

const HOBBIES_QUERY = defineQuery(`
    *[_type == "hobby" && defined(slug.current)] | order(orderRank)
`);

export { PROJECTS_QUERY, HOBBIES_QUERY };
