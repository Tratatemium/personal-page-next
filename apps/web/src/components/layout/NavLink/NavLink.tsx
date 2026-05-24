"use client";

import { usePathname } from "next/navigation";

import styles from "./NavLink.module.css";
import Link, { type LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

function NavLink({ children, className, href, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ""} ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export { NavLink };
