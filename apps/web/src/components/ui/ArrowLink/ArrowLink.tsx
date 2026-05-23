import { FaGithub, FaGlobe } from "react-icons/fa6";
import type { PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

import styles from "./ArrowLink.module.css";
interface ArrowLinkProps {
  link: NonNullable<PROJECTS_QUERY_RESULT[number]["links"]>[number];
}

const logos = {
  github: <FaGithub />,
  globe: <FaGlobe />,
};

function ArrowLink({ link }: ArrowLinkProps) {
  return (
    <a
      href={link.href}
      className={styles.arrowLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.content}>
        {link.svgType && logos[link.svgType]}
        <span>{link.text}</span>
        <span>↗</span>
      </div>
    </a>
  );
}

export { ArrowLink };
