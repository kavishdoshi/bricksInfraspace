import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bricks Infraspace | Quality Construction & Renovations",
  description:
    "Experienced builder delivering residential and commercial projects: new builds, renovations, interiors, and maintenance.",
  openGraph: {
    title: "Bricks Infraspace",
    description:
      "Experienced builder delivering residential and commercial projects: new builds, renovations, interiors, and maintenance.",
    type: "website",
    url: "https://example.com",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {/* Header injected by pages */}
        {children}
      </body>
    </html>
  );
}
