"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Suspense } from "react";

gsap.registerPlugin(ScrollTrigger);

function AnimationProviderInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.utils.toArray(".animate-in").forEach((el) => {
        gsap.fromTo(
          el as Element,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el as Element,
              start: "top 70%",
            },
          },
        );
      });
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return <>{children}</>;
}

function AnimationProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <AnimationProviderInner>{children}</AnimationProviderInner>
    </Suspense>
  );
}

export { AnimationProvider };
