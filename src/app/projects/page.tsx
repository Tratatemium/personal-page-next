import styles from "./page.module.css";

import { Section } from "@/components/Section";
import { client } from "@/sanity/client";

type Project = {
  _id: string;
  title: string;
  body: string[];
  links?: {
    href: string;
    text: string;
    svgType: "GitHub" | "Globe";
  }[];
};

const POSTS_QUERY = `*[_type == "post"]
    {
      _id,
      title,
      "body": coalesce(body[].children[].text, []),
      "links": coalesce(links[]{href, text, svgType}, [])
    }
  `;
const options = { next: { revalidate: 3600 } };

async function Projects() {
  const projects = await client.fetch<Project[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <h1 className={styles.title}>&lt;My projects&gt;</h1>
      {projects && (
        <div className={styles.content}>
          {projects.map((project) => (
            <Section
              key={project._id}
              title={project.title}
              body={project.body ?? []}
              links={project.links ?? []}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Projects;
