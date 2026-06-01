import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TopBar } from "@/components/layout/top-bar";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Two42 Christian Church | Loving strangers into family",
    template: "%s | Two42 Christian Church",
  },
  description:
    "Two42 Christian Church in Pointe aux Canonniers, Mauritius. A community built on love for God and people, inspired by Acts 2:42-47. Join us Sundays at 10 AM.",
  keywords: [
    "Two42",
    "Christian Church",
    "Mauritius",
    "Pointe aux Canonniers",
    "Acts 2:42",
    "church",
  ],
  openGraph: {
    title: "Two42 Christian Church",
    description: "Loving strangers into family — Sundays @ 10 AM",
    url: "https://two42.org",
    siteName: "Two42 Christian Church",
    locale: "en_US",
    type: "website",
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
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
