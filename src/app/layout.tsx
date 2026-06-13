import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Yuna Web Studio | Portfolio",
  description:
    "フロントエンドエンジニア Yuna Web Studioのポートフォリオサイトです。TypeScript・Vue.js・React・Next.jsを中心に、設計から実装まで一貫して対応します。",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  openGraph: {
    title: "Yuna Web Studio | Portfolio",
    description:
      "フロントエンドエンジニア Yuna Web Studioのポートフォリオサイトです。TypeScript・Vue.js・React・Next.jsを中心に、設計から実装まで一貫して対応します。",
    images: [{ url: "/images/ogp.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/ogp.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <LoadingScreen />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
