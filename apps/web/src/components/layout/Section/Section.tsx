"use client";

import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "next-sanity/image";

import styles from "./Section.module.css";
import { ArrowLink } from "../../ui/ArrowLink/ArrowLink";

import { useInView } from "@/hooks/useInView";

import type { PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";
import { urlFor } from "@/lib/sanity/client";

type Project = PROJECTS_QUERY_RESULT[number];
interface SectionProps {
  project: Project;
}

// --- Portable Text components ---

const components: PortableTextComponents = {
  block: {
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h2>{children}</h2>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  types: {
    image: ({ value }) => {
      const { width, height } = getImageDimensions(value);
      return (
        <div className={styles.image}>
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            width={width}
            height={height}
          />
        </div>
      );
    },
    // gallery: ({ value }: { value: Gallery }) => (
    //   <BlogGallery rawImages={value.images} />
    // ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        className={styles.link}
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

function Section({ project }: SectionProps) {
  const { ref, isInView, isScrollingUp } = useInView();
  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.show : isScrollingUp ? styles.hideUp : styles.hideDown}`}
    >
      <h2 className={styles.title}>{project.title}</h2>

      {project.body && (
        <PortableText value={project.body} components={components} />
      )}

      {project.links && (
        <div className={styles.links}>
          {project.links.map((link) => (
            <ArrowLink key={link._key} link={link} />
          ))}
        </div>
      )}
      {/* {images && <Gallery images={images}></Gallery>} */}
    </section>
  );
}

export { Section };
