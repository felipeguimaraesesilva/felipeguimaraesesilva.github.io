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

function deepMerge<T>(base: T, override: Partial<T>): T {
  const result = { ...base };
  for (const key in override) {
    const ov = override[key];
    const bv = base[key];
    if (
      ov !== null &&
      typeof ov === "object" &&
      !Array.isArray(ov) &&
      bv !== null &&
      typeof bv === "object" &&
      !Array.isArray(bv)
    ) {
      result[key] = deepMerge(bv, ov as Partial<typeof bv>);
    } else if (ov !== undefined) {
      result[key] = ov as T[typeof key];
    }
  }
  return result;
}

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
    const loadContent = async () => {
      const base: PortfolioContent = await fetch("/content.json").then((r) =>
        r.json()
      );
      if (locale === "en") {
        setContent(base);
        return;
      }
      const override: Partial<PortfolioContent> = await fetch(
        "/content_fr.json"
      ).then((r) => r.json());
      setContent(deepMerge(base, override));
    };
    loadContent().catch((err) => console.error("Failed to load content:", err));
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
