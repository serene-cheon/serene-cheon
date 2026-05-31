import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serene Cheon — UX Researcher",
  description:
    "UX researcher passionate about inclusive, human-centered design. Berkeley graduate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-stone-50 text-stone-800 antialiased min-h-screen flex flex-col`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-100 py-8 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} Serene Cheon ·{" "}
          <a
            href="mailto:serenecheon@berkeley.edu"
            className="hover:text-teal-600 transition-colors"
          >
            serenecheon@berkeley.edu
          </a>
        </footer>
      </body>
    </html>
  );
}
