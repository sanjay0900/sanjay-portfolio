import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const SITE_URL = "https://sanjay-portfolio-six-lime.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Sanjay Das | Community Operations & Growth Leader",
    template: "%s | Sanjay Das",
  },

  description:
    "Sanjay Das is a Web3 Community Operations & Growth Leader specializing in community building, regional expansion, campaigns, events, and ecosystem growth.",

  keywords: [
    "Sanjay Das",
    "Sanjay Das Web3",
    "Community Manager",
    "Community Operations",
    "Community Growth",
    "Web3 Community Manager",
    "Web3 Community Operations",
    "Blockchain Community Manager",
    "Web3 Events",
    "Bitget Wallet",
    "Gensyn",
    "PancakeSwap",
    "Blockchain",
  ],

  authors: [
    {
      name: "Sanjay Das",
    },
  ],

  creator: "Sanjay Das",
  publisher: "Sanjay Das",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sanjay Das",
    title: "Sanjay Das | Community Operations & Growth Leader",
    description:
      "Web3 Community Operations & Growth Leader specializing in community building, regional expansion, campaigns, events, and ecosystem growth.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanjay Das | Community Operations & Growth Leader",
    description:
      "Web3 Community Operations & Growth Leader specializing in community building, regional expansion, campaigns, and events.",
    creator: "@S4Sanjay_das",
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sanjay Das",
      url: SITE_URL,
      image: `${SITE_URL}/profile.png`,
      jobTitle: "Community Operations & Growth Leader",
      description:
        "Web3 Community Operations & Growth Leader specializing in community building, regional expansion, campaigns, events, and ecosystem growth.",
      knowsAbout: [
        "Web3",
        "Community Management",
        "Community Operations",
        "Community Growth",
        "Blockchain",
        "Regional Expansion",
        "Campaign Management",
        "Event Management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sanjay Das",
      description:
        "Portfolio of Sanjay Das, Community Operations & Growth Leader.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-[#09090B] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Navbar />

        {children}
      </body>
    </html>
  );
}