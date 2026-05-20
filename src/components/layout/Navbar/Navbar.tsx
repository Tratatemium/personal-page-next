import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">[home]</Link>
        </li>
        <li>
          <Link href="/about">[about]</Link>
        </li>
        <li>
          <Link href="/projects">[my projects]</Link>
        </li>
        <li>
          <Link href="/hobbies">[my hobbies]</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
