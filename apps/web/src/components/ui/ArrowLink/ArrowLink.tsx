import styles from "./ArrowLink.module.css";

import type { SvgType } from "./SvgLogo";
import { SvgLogo } from "./SvgLogo";

interface ArrowLinkProps {
  href: string;
  text: string;
  svgType: SvgType;
}

function ArrowLink({ href, text, svgType }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={styles.arrowLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SvgLogo svgType={svgType} />
      <span>{text}</span>
    </a>
  );
}

export { ArrowLink };
