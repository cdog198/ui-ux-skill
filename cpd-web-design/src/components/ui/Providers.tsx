"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { LanguageProvider } from "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {/* reducedMotion="user" turns off transform animations when the OS asks for reduced motion. */}
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </LanguageProvider>
  );
}
