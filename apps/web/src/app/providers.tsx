"use client";

import { AnimationProvider } from "@/components/providers/AnimationProvider/AnimationProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <AnimationProvider>{children}</AnimationProvider>;
}

export { Providers };
