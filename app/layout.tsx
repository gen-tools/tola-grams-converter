import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111827',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tola-to-grams.com'),
  title: {
    default: "Tola to Grams Converter - Free & Accurate",
    template: "%s | Tola Converter"
  },
  description: "Convert tola to grams instantly. 1 tola = 11.6638 grams. Free online gold weight converter for Pakistan, India, Nepal, UAE, Dubai & UK traders and jewelers.",
  keywords: ["tola to grams", "tola converter", "gold weight converter", "tola grams pakistan", "tola grams india", "tola to grams calculator", "1 tola in grams"],
  authors: [{ name: "Tola Converter" }],
  creator: "Tola Converter",
  publisher: "Tola Converter",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tola-to-grams.com',
    siteName: 'Tola to Grams Converter',
    title: 'Tola to Grams Converter - Free & Accurate',
    description: 'Convert tola to grams instantly. 1 tola = 11.6638 grams. Free online converter for gold traders and jewelers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tola to Grams Converter - Free & Accurate',
    description: 'Convert tola to grams instantly. 1 tola = 11.6638 grams. Free tool for gold traders and jewelers.',
  },
  alternates: {
    canonical: 'https://tola-to-grams.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Tola to Grams Converter',
              url: 'https://tola-to-grams.com',
              description: 'Free online tola to grams converter for gold traders and jewelers.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://tola-to-grams.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
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
