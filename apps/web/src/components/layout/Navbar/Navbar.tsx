import styles from "./Navbar.module.css";
import Link from "next/link";

const links = [
  { text: "[home]", href: "/" },
  { text: "[about]", href: "/about" },
  { text: "[my projects]", href: "/projects" },
  { text: "[my hobbies]", href: "/hobbies" },
];

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export { Navbar };
