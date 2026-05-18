export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">About</h1>

      <div className="space-y-6 text-gray-700">
        <p>
          フロントエンド開発を中心に、Webアプリケーション開発に携わっています。
          TypeScript、Vue.js、React、Next.jsを用いた画面実装や、
          既存機能の改修、不具合調査、UI改善などを行っています。
        </p>

        <p>
          また、チーム開発におけるドキュメント整備や、
          GitHub / GitLabを用いたコードレビューにも関わってきました。
        </p>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 font-bold">Frontend</h3>
            <p className="text-gray-600">
              TypeScript / React / Next.js / Vue.js / Vite / Redux Toolkit /
              React Router / Tailwind CSS
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 font-bold">Backend</h3>
            <p className="text-gray-600">
              Java / Spring Boot / Node.js / Express.js / Python
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 font-bold">Cloud</h3>
            <p className="text-gray-600">
              Firebase Hosting / Firebase Authentication / Cloud Firestore /
              Firebase Storage / Cloud Run / Vercel
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 font-bold">Database / Search</h3>
            <p className="text-gray-600">Cloud Firestore / OpenSearch</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 font-bold">Testing</h3>
            <p className="text-gray-600">
              Vitest / Testing Library / fast-check
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 font-bold">Tools</h3>
            <p className="text-gray-600">
              Git / GitHub / GitLab / Docker / CI/CD / ESLint
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 font-bold">AI Tools</h3>
            <p className="text-gray-600">Claude Code / Codex</p>
          </div>
        </div>
      </div>
    </section>
  );
}
