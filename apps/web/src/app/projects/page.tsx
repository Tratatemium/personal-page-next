import styles from "./page.module.css";

import { Section } from "@/components/layout/Section/Section";
import { getProjects } from "@/lib/sanity/fetchers/getProjects";

async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h1 className={styles.title}>&lt;My projects&gt;</h1>
      {projects && (
        <div className={styles.content}>
          {projects.map((project) => (
            <Section key={project._id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}

export default Projects;
