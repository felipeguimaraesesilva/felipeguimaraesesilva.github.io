"use client";

import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { useLocale } from "@/context/ContentContext";

/**
 * Wraps page content with a quick opacity fade when the locale changes.
 * This hides the brief background-image rescale that happens when section
 * heights change between languages.
 */
export function LocaleTransition({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  const [visible, setVisible] = useState(true);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 320);
    return () => clearTimeout(timer);
  }, [locale]);

  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        transition: visible ? "opacity 0.25s ease" : "opacity 0.15s ease",
      }}
    >
      {children}
    </Box>
  );
}
