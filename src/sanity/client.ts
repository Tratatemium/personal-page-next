import { createClient } from "next-sanity";

const client = createClient({
  projectId: "vsd49p5h",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export { client };
