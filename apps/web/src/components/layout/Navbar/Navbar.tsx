import styles from "./Navbar.module.css";
import { NavLink } from "../NavLink/NavLink";

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
          <NavLink key={link.href} href={link.href}>
            {link.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export { Navbar };
