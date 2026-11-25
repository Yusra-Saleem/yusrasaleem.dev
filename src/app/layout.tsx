import type { Metadata } from "next";
import { Space_Grotesk, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Yusra Saleem | Agentic AI & Full Stack SaaS Engineer",
  description: "Yusra Saleem builds AI-powered systems, SaaS platforms, and automation agents that solve real business problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${cormorantGaramond.variable} dark`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background antialiased relative">
        {children}
      </body>
    </html>
  );
}
