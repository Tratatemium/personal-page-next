import type { ImageType } from "../Gallery";
import styles from "./Lightbox.module.css";

import Image from "next/image";

interface LightboxProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  images: ImageType[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({
  containerRef,
  isOpen,
  images,
  index,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  if (!isOpen) return null;

  const currentImage = images[index];

  return (
    <div className={styles.lightbox} ref={containerRef}>
      <button className={styles.close} onClick={onClose}>
        ×
      </button>
      <div className={styles.lightboxContent}>
        <Image
          className={styles.lightboxImg}
          src={currentImage?.src}
          alt={currentImage?.alt}
        />
        <p className={styles.lightboxCaption}>{currentImage?.caption}</p>
      </div>
      <button className={styles.prev} onClick={onPrev}>
        ❮
      </button>
      <button className={styles.next} onClick={onNext}>
        ❯
      </button>
    </div>
  );
}

export { Lightbox };
