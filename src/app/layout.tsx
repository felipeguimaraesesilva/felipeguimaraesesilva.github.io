import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import { ContentProvider } from "@/context/ContentContext";
import type { PortfolioContent } from "@/data/portfolio";
import contentData from "../../public/content.json";

const SITE_URL = "https://felipeguimaraesesilva.github.io";

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
  description:
    "Senior Software Engineer with 18+ years of experience delivering high-complexity distributed systems, Big Data pipelines, and AI-driven development. Currently driving engineering excellence for eBay in Montreal.",
  keywords: [
    "Felipe Silva",
    "Senior Software Engineer",
    "Java",
    "Spring Boot",
    "Big Data",
    "GCP",
    "Apache Spark",
    "eBay",
    "Montreal",
    "distributed systems",
    "AI-driven development",
  ],
  authors: [{ name: "Felipe Silva", url: SITE_URL }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Felipe Silva | Senior Software Engineer",
    description:
      "Senior Software Engineer with 18+ years of experience delivering high-complexity distributed systems, Big Data pipelines, and AI-driven development. Currently driving engineering excellence for eBay in Montreal.",
    type: "website",
    url: SITE_URL,
    siteName: "Felipe Silva — Portfolio",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/photo-placeholder.jpg`,
        width: 1200,
        height: 630,
        alt: "Felipe Silva — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Silva | Senior Software Engineer",
    description:
      "Senior Software Engineer with 18+ years of experience delivering high-complexity distributed systems, Big Data pipelines, and AI-driven development.",
    images: [`${SITE_URL}/images/photo-placeholder.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Felipe Silva | Senior Software Engineer",
      description:
        "Portfolio of Felipe Silva, Senior Software Engineer with 18+ years of experience in distributed systems, Big Data, and AI-driven development.",
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Felipe Guimarães Silva",
      alternateName: "Felipe Silva",
      jobTitle: "Senior Software Engineer",
      description: contentData.personal.competencies,
      url: SITE_URL,
      image: `${SITE_URL}/images/photo-placeholder.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      worksFor: {
        "@type": "Organization",
        name: "eBay",
        url: "https://www.ebay.com",
      },
      alumniOf: [
        {
          "@type": "Organization",
          name: "PUC Minas",
          url: "https://www.pucminas.br",
        },
      ],
      knowsAbout: [
        "Java",
        "Spring Boot",
        "Apache Spark",
        "Google Cloud Platform",
        "Distributed Systems",
        "Big Data",
        "Kafka",
        "CI/CD",
        "Microservices",
        "AI-driven Development",
      ],
      email: "mailto:felipeguimaraesesilva@gmail.com",
      sameAs: [
        contentData.personal.linkedin,
        contentData.personal.github,
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body>
        <ThemeRegistry>
          <ContentProvider initialContent={contentData as PortfolioContent}>{children}</ContentProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
