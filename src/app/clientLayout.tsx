"use client";

import styles from "./clientLayout.module.css";

import { usePathname } from "next/navigation";

import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SkipLink } from "@/components/SkipLink";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  return (
    <Providers>
      <div className={styles.app}>
        <SkipLink mainId={"main"} />
        <ThemeToggle />
        <main
          className={`${styles.content} ${isAboutPage ? styles.aboutContent : ""}`}
          id="main"
        >
          <Navbar />
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
