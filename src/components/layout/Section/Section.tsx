"use client";

import styles from "./Section.module.css";
import type { ImageType } from "../../feature/Gallery/Gallery";
import { ArrowLink } from "../../ui/ArrowLink/ArrowLink";
import { Gallery } from "../../feature/Gallery/Gallery";

import useInView from "@/hooks/useInView";

interface SectionProps {
  title: string;
  body: string[];
  links?: {
    href: string;
    text: string;
    svgType: "GitHub" | "Globe";
  }[];
  images?: ImageType[];
}

function Section({ title, body, links, images }: SectionProps) {
  const { ref, isInView, isScrollingUp } = useInView();
  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.show : isScrollingUp ? styles.hideUp : styles.hideDown}`}
    >
      <h2 className={styles.title}>{title}</h2>
      {body.map((block, i) => (
        <p key={i}>{block}</p>
      ))}
      {links && (
        <div className={styles.links}>
          {links.map((link) => (
            <ArrowLink key={link.href} {...link} />
          ))}
        </div>
      )}
      {images && <Gallery images={images}></Gallery>}
    </section>
  );
}

export { Section };
