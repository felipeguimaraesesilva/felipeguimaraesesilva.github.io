import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import { ContentProvider } from "@/context/ContentContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Silva | Senior Software Engineer",
  description: "Senior Software Engineer with 18+ years of experience. Specializing in distributed systems, Big Data, and AI-driven development.",
  openGraph: {
    title: "Felipe Silva | Senior Software Engineer",
    description: "Senior Software Engineer with 18+ years of experience. Specializing in distributed systems, Big Data, and AI-driven development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeRegistry>
          <ContentProvider>{children}</ContentProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
