"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { Lightbox } from "@/components/Lightbox/Lightbox";
import { useLightbox } from "@/components/Lightbox/useLightbox";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  const lightbox = useLightbox();

  return (
    <ThemeProvider>
      {children}
      <Lightbox {...lightbox} />
    </ThemeProvider>
  );
}

export { Providers };
