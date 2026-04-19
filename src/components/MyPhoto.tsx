import styles from "./MyPhoto.module.css";

import Image from "next/image";

import myPhoto from "../assets/my-photo.png";

interface MyPhotoProps {
  className?: string;
}

function MyPhoto({ className }: MyPhotoProps) {
  return (
    <section className={`${styles.myPhoto}${className ? ` ${className}` : ""}`}>
      <Image
        src={myPhoto}
        alt="Vladislav Zhuravskii - Front-end Developer"
        loading="lazy"
      />
    </section>
  );
}

export { MyPhoto };
