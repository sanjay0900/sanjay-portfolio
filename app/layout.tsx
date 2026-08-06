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

export const metadata: Metadata = {
  title: "Sanjay Das | Community Operations & Growth Leader",
  description:
    "Portfolio of Sanjay Das, Community Operations & Growth Leader specializing in Web3 ecosystems, regional expansion, campaigns, and offline community building.",
  keywords: [
    "Sanjay Das",
    "Community Manager",
    "Community Operations",
    "Web3",
    "Bitget Wallet",
    "Gensyn",
    "PancakeSwap",
    "Blockchain",
  ],
  authors: [{ name: "Sanjay Das" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-[#09090B] text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}