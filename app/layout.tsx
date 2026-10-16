import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteConfig.name} | とうもろこし・玉ねぎ農家`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.location}で${siteConfig.description}`,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  icons: {
    icon: siteConfig.logo.src,
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | とうもろこし・玉ねぎ農家`,
    description: `${siteConfig.location}で${siteConfig.description}`,
    url: siteUrl?.toString(),
    images: siteUrl ? ["/images/hero-field.png"] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | とうもろこし・玉ねぎ農家`,
    description: `${siteConfig.location}で${siteConfig.description}`,
    images: siteUrl ? ["/images/hero-field.png"] : undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f6f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="light">
      <body className="font-sans antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": siteUrl ? new URL("#organization", siteUrl).toString() : undefined,
                name: siteConfig.name,
                url: siteUrl?.toString(),
                logo: siteUrl
                  ? new URL(siteConfig.logo.src, siteUrl).toString()
                  : undefined,
                sameAs: [siteConfig.instagram.url],
                address: siteConfig.location,
              },
              {
                "@type": "WebSite",
                "@id": siteUrl ? new URL("#website", siteUrl).toString() : undefined,
                name: siteConfig.name,
                url: siteUrl?.toString(),
                inLanguage: "ja",
              },
            ],
          }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
