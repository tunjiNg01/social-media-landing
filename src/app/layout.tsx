import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import WebSiteHeader from "../components/WebSiteHeader";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Sans({
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sproutos | Social Media Management",
  description: "Manage your social media presence with Sproutos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        <WebSiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
