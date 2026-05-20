import styles from "./Gallery.module.css";

import Image, { StaticImageData } from "next/image";

import { useLightboxContext } from "@/context/LightboxContext";

interface ImageType {
  src: StaticImageData;
  alt: string;
  caption: string;
}

interface GalleryProps {
  images: ImageType[];
}

function Gallery({ images }: GalleryProps) {
  const { openLightbox } = useLightboxContext();

  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <Image
          key={img.src.src}
          src={img.src}
          alt={img.alt}
          data-caption={img.caption}
          loading="lazy"
          tabIndex={0}
          onClick={() => openLightbox(images, index)}
          onKeyDown={(e) => {
            if (e.key === "Enter") openLightbox(images, index);
          }}
        />
      ))}
    </div>
  );
}

export type { ImageType };
export { Gallery };
