import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uthman Azeez · Frontend Engineer",
  description:
    "Portfolio of Uthman Azeez, a Lagos-based frontend developer crafting immersive digital experiences and growing into full stack innovation.",
  metadataBase: new URL("https://agentic-8b907344.vercel.app"),
  openGraph: {
    title: "Uthman Azeez · Frontend Engineer",
    description:
      "Explore Uthman Azeez's work — a frontend specialist evolving into a full stack creator.",
    url: "https://agentic-8b907344.vercel.app",
    siteName: "Uthman Azeez Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uthman Azeez · Frontend Engineer",
    description:
      "Interfaces with intent. Systems with soul. Discover Uthman Azeez.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
