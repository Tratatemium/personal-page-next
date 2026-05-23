import styles from "./page.module.css";

import { Section } from "@/components/layout/Section/Section";
import { getHobbies } from "@/lib/sanity/fetchers/getHobbies";

async function Hobbies() {
  const hobbies = await getHobbies();

  return (
    <>
      <h1 className={styles.title}>&lt;My projects&gt;</h1>
      {hobbies && (
        <div className={styles.content}>
          {hobbies.map((hobby) => (
            <Section key={hobby._id} data={hobby} variant="hobby" />
          ))}
        </div>
      )}
    </>
  );
}

export default Hobbies;
