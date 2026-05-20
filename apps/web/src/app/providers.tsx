"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { LightboxProvider } from "@/context/LightboxContext";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <LightboxProvider>{children}</LightboxProvider>
    </ThemeProvider>
  );
}

export { Providers };
