import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "青木 由奈 | Portfolio",
  description:
    "フロントエンドエンジニア 青木由奈のポートフォリオサイトです。TypeScript・Vue.js・React・Next.jsを中心に、設計から実装まで一貫して対応します。",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}