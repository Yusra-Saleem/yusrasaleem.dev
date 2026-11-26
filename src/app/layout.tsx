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
  metadataBase: new URL("https://yusrasaleem.dev"),
  title: {
    default: "Yusra Saleem | AI Systems Architect & Full-Stack Engineer",
    template: "%s | Yusra Saleem",
  },
  description: "Yusra Saleem builds autonomous agent swarms, sub-280ms WebRTC voice AI, and scalable production SaaS platforms.",
  keywords: [
    "Yusra Saleem",
    "AI Systems Architect",
    "Autonomous Agents",
    "OpenAI Agents SDK",
    "WebRTC Voice AI",
    "Full-Stack Engineer",
    "Next.js 15",
    "FastAPI",
    "SaaS Engineer"
  ],
  authors: [{ name: "Yusra Saleem", url: "https://yusrasaleem.dev" }],
  creator: "Yusra Saleem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yusrasaleem.dev",
    title: "Yusra Saleem | AI Systems Architect & Full-Stack Engineer",
    description: "Systems engineer specializing in autonomous agent swarms, sub-280ms WebRTC voice AI, and scalable production SaaS.",
    siteName: "Yusra Saleem Console",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yusra Saleem - AI Systems Architect & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusra Saleem | AI Systems Architect & Full-Stack Engineer",
    description: "Autonomous Agent Swarms, Low-Latency WebRTC Voice AI, and Production SaaS Platforms.",
    creator: "@yusrasaleem_dev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
