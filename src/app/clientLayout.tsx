"use client";

import styles from "./clientLayout.module.css";

import { usePathname } from "next/navigation";

import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { ThemeToggle } from "@/components/feature/ThemeToggle/ThemeToggle";
import { SkipLink } from "@/components/ui/SkipLink/SkipLink";

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
