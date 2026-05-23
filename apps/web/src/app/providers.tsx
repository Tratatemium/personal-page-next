"use client";

import { ThemeProvider } from "@/context/ThemeContext";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export { Providers };
