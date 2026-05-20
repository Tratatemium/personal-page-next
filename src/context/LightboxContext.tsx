"use client";
import type { ImageType } from "@/components/feature/Gallery/Gallery";

import { createContext, useContext } from "react";

import { Lightbox } from "@/components/feature/Lightbox/Lightbox";
import { useLightbox } from "@/components/feature/Lightbox/useLightbox";

interface LightboxContextType {
  openLightbox: (images: ImageType[], index: number) => void;
}

const LightboxContext = createContext<LightboxContextType | null>(null);

interface LightboxProviderProps {
  children: React.ReactNode;
}

function LightboxProvider({ children }: LightboxProviderProps) {
  const lightbox = useLightbox();

  return (
    <LightboxContext.Provider value={{ openLightbox: lightbox.openLightbox }}>
      {children}
      <Lightbox {...lightbox} />
    </LightboxContext.Provider>
  );
}

function useLightboxContext(): LightboxContextType {
  const context = useContext(LightboxContext);

  if (!context) {
    throw new Error("useLightboxContext must be used within LightboxProvider");
  }

  return context;
}

export { LightboxContext, LightboxProvider, useLightboxContext };
