import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ALLEVIATE — AI Engineer & Builder",
  description: "I build reliable AI & delightful UX. From RAG systems to design systems, I ship end‑to‑end.",
  openGraph: {
    title: "ALLEVIATE — AI Engineer & Builder",
    description: "I build reliable AI & delightful UX. From RAG systems to design systems, I ship end‑to‑end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-black text-text-primary`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
