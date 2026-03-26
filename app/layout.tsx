import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://tola-to-grams.com'),
  title: {
    default: "Tola to Grams Converter",
    template: "%s | Tola"
  },
  description: "Convert tola to grams instantly. Free online converter. 1 tola = 11.6638 grams.",
  keywords: ["tola to grams", "converter", "gold weight"],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#111827" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-900 text-gray-200" suppressHydrationWarning>
        <Header />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
