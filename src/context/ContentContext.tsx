"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { PortfolioContent } from "@/data/portfolio";

const ContentContext = createContext<PortfolioContent | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PortfolioContent | null>(null);

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data: PortfolioContent) => setContent(data))
      .catch((err) => console.error("Failed to load content.json:", err));
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): PortfolioContent | null {
  return useContext(ContentContext);
}
