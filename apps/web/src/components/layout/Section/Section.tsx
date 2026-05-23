import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "next-sanity/image";

import { Gallery } from "@/components/feature/Gallery/Gallery";
import { urlFor } from "@/lib/sanity/client";
import type {
  Gallery as GalleryType,
  PROJECTS_QUERY_RESULT,
  HOBBIES_QUERY_RESULT,
} from "@/lib/sanity/sanity.types";

import { ArrowLink } from "../../ui/ArrowLink/ArrowLink";
import styles from "./Section.module.css";

type Project = PROJECTS_QUERY_RESULT[number];
type Hobby = HOBBIES_QUERY_RESULT[number];
interface SectionProps {
  data: Project | Hobby;
  variant: "project" | "hobby";
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
    gallery: ({ value }: { value: GalleryType }) => (
      <Gallery rawImages={value.images} className={styles.gallery} />
    ),
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

function Section({ data, variant }: SectionProps) {
  return (
    <section className={`${styles.section} ${styles[variant]} animate-in`}>
      <h2 className={styles.title}>{data.title}</h2>

      {data.body && <PortableText value={data.body} components={components} />}

      {data.links && (
        <div className={styles.links}>
          {data.links.map((link) => (
            <ArrowLink key={link._key} link={link} />
          ))}
        </div>
      )}
    </section>
  );
}

export { Section };
