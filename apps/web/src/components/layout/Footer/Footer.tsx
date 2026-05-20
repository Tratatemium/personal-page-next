import styles from "./Footer.module.css";
import {
  FaAt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

interface SocialLink {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  href?: string;
  label: string;
}

function Footer() {
  const socialLinks: Record<string, SocialLink> = {
    Email: {
      icon: FaAt,
      href: "mailto:visitanoinvitado@gmail.com",
      label: "Send email",
    },
    Linkedin: {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/vladislav-zhuravskii-8b24a22b6/",
      label: "LinkedIn profile",
    },
    Github: {
      icon: FaGithub,
      href: "https://github.com/Tratatemium",
      label: "GitHub profile",
    },
    Instagram: {
      icon: FaInstagram,
      href: "https://www.instagram.com/visitanoinvitado/",
      label: "Instagram profile",
    },
    Telegram: {
      icon: FaTelegram,
      href: "https://t.me/tratatemium",
      label: "Telegram profile",
    },
    Whatsapp: {
      icon: FaWhatsapp,
      href: "Whatsapp profile",
      label: "https://wa.me/46769762974",
    },
  };

  return (
    <footer className={styles.footer}>
      <ul className={styles.socialWrapper}>
        {Object.entries(socialLinks).map(([name, data]) => {
          const Icon = data.icon;
          return (
            <li key={name}>
              <a
                href={data.href}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={data.label}
              >
                <Icon className={styles.icon} aria-hidden={true} />
              </a>
            </li>
          );
        })}
      </ul>
      <p className={styles.copyright}>
        @ {new Date().getFullYear()} Vladislav Zhuravskii. All rights reserved.
      </p>
    </footer>
  );
}

export { Footer };
