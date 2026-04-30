"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { PortfolioContent } from "@/data/portfolio";

type Locale = "en" | "fr";

const LOCALE_KEY = "portfolio_locale";
const CONTENT_FILE: Record<Locale, string> = {
  en: "/content.json",
  fr: "/content_fr.json",
};

const ContentContext = createContext<PortfolioContent | null>(null);

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function ContentProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [content, setContent] = useState<PortfolioContent | null>(null);

  // Read locale from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (saved === "en" || saved === "fr") setLocaleState(saved);
  }, []);

  // Fetch content whenever locale changes
  useEffect(() => {
    setContent(null);
    fetch(CONTENT_FILE[locale])
      .then((res) => res.json())
      .then((data: PortfolioContent) => setContent(data))
      .catch((err) => console.error("Failed to load content:", err));
  }, [locale]);

  const setLocale = (l: Locale) => {
    localStorage.setItem(LOCALE_KEY, l);
    setLocaleState(l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <ContentContext.Provider value={content}>
        {children}
      </ContentContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useContent(): PortfolioContent | null {
  return useContext(ContentContext);
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
