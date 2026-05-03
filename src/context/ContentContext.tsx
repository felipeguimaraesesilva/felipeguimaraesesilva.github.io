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

export function ContentProvider({
  children,
  initialContent,
}: {
  children: ReactNode;
  initialContent: PortfolioContent;
}) {
  const [locale, setLocaleState] = useState<Locale>("en");
  // Seed state with server-provided content so SSG HTML contains real data
  const [content, setContent] = useState<PortfolioContent>(initialContent);

  // Read locale from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (saved === "en" || saved === "fr") setLocaleState(saved);
  }, []);

  // Sync content whenever locale changes
  useEffect(() => {
    if (locale === "en") {
      setContent(initialContent);
      return;
    }
    const loadContent = async () => {
      const override: Partial<PortfolioContent> = await fetch(
        "/content_fr.json"
      ).then((r) => r.json());
      setContent(deepMerge(initialContent, override));
    };
    loadContent().catch((err) => console.error("Failed to load content:", err));
  }, [locale, initialContent]);

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
