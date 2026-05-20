import styles from "./page.module.css";

import { MyPhoto } from "@/components/ui/MyPhoto/MyPhoto";

export default function Home({ PhotoComponent = MyPhoto }) {
  const skills = ["{", "HTML", "CSS", "TypeScript", "React", "Next.js", "}"];

  return (
    <>
      <section className={styles.wordCloud}>
        <p className={styles.myName}>
          <span>
            &lt;Vladislav
            <br />
          </span>
          <span>Zhuravskii&gt;</span>
        </p>
        <p className={styles.occupation}>
          <span className={styles.line1}>
            a{" "}
            <span className="accent-color-1">&lt;Front-end Developer&gt;</span>
            <br />
          </span>
          <span className={styles.line2}>student</span>
        </p>

        <p className={styles.hello}>Hi! I am</p>

        <p className={`${styles.skills} accent-color-2`}>
          {skills.map((skill, i) => (
            <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
              {skill === "{" || skill === "}" ? skill : `    ${skill}`}
              <br />
            </span>
          ))}
        </p>

        <p className={`${styles.hobbies1} accent-color-3`}>
          <span>
            # a cook
            <br />
          </span>
          <span>
            # a coder
            <br />
          </span>
        </p>

        <p className={`${styles.hobbies2} accent-color-3`}>
          <span>
            # a woodworker
            <br />
          </span>
          <span>
            # a gamer
            <br />
          </span>
        </p>
      </section>

      <PhotoComponent className={styles.myPhoto} />
    </>
  );
}
