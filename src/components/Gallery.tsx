import styles from "./Gallery.module.css";

import Image from "next/image";

interface ImageType {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryProps {
  images: ImageType[];
  openLightbox: (images: ImageType[], index: number) => void;
}

function Gallery({ images, openLightbox }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <Image
          key={img.src}
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
