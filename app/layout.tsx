import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Added proper font import
import "./globals.css";
import Navbar from "@/components/Navbar";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranadir | High-Performance AI Automation Systems",
  description: "Eliminating manual bottlenecks with custom AI operations. Built for scale, designed for growth.",
  openGraph: {
    title: "Pranadir | AI Systems Builder",
    description: "I turn manual operations into automated growth engines.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* suppressHydrationWarning on <html> is the primary fix for 
       attribute mismatches from browser extensions */
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.className} bg-white text-slate-900 antialiased grid-bg`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}