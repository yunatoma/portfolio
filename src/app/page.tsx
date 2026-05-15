import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-4 text-sm font-semibold text-gray-500">
        Frontend Engineer Portfolio
      </p>

      <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
        ユーザーにとって使いやすい
        <br />
        Webアプリケーションを作るエンジニアです。
      </h1>

      <p className="mb-8 max-w-2xl text-gray-600">
        TypeScript、React、Next.js、Vue.jsを中心に、
        フロントエンド開発を行っています。
        UI実装、既存機能改修、不具合調査、ドキュメント整備などに対応可能です。
      </p>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white"
        >
          制作物を見る
        </Link>

        <Link
          href="/contact"
          className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold"
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}