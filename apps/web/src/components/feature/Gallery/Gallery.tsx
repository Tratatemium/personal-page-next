"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { useState } from "react";

import type { Gallery } from "@/lib/sanity/sanity.types";
import { urlFor } from "@/lib/sanity/client";

import styles from "./Gallery.module.css";
interface GalleryProps {
  rawImages: Gallery["images"];
}

function Gallery({ rawImages }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = rawImages?.map((img) => ({
    src: urlFor(img).width(1600).url(),
  }));

  return (
    <>
      <div className={styles.wraper}>
        {rawImages?.map((img, i) => (
          <button
            key={img._key}
            type="button"
            className={styles.imageButton}
            aria-label={`Open gallery image ${i + 1} in full screen`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={urlFor(img).width(600).url()}
                alt={(img as { alt?: string }).alt ?? `Gallery image ${i + 1}`}
                width={600}
                height={400}
              />
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
      />
    </>
  );
}

export { Gallery };
