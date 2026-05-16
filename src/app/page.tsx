import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/projects";

type ZennArticle = {
  slug: string;
  title: string;
  emoji: string;
  article_type: "tech" | "idea";
  liked_count: number;
  published_at: string;
  path: string;
};

async function fetchZennArticles(): Promise<ZennArticle[]> {
  try {
    const res = await fetch(
      "https://zenn.dev/api/articles?username=yuna_aoki&order=latest&count=6",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.articles ?? [];
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const skills = {
  Frontend: ["TypeScript", "Vue.js", "React", "Next.js", "Nuxt.js", "Astro", "Tailwind CSS"],
  Backend: ["Java", "Spring Boot", "Python"],
  Tools: ["Git", "GitLab", "GitHub", "Docker", "CI/CD (GitLab CI)"],
  Design: ["Figma", "Photoshop", "Illustrator", "WordPress", "Studio"],
};

const timeline = [
  {
    period: "2025年10月〜現在",
    role: "エンジニア育成スクール 講師（副業）",
    place: "Web制作会社",
    description:
      "未経験〜初級者を対象とした技術指導・カリキュラム設計・学習進捗管理。実戦的なコードレビューやモチベーション管理を含む多角的なサポートを担当。",
  },
  {
    period: "2025年12月〜2026年3月",
    role: "フロントエンドエンジニア（業務委託）",
    place: "建設DX系コンサル",
    description:
      "建設・設計業務の生産性向上を目的としたバーティカルSaaSの開発。Vue.jsによる新規画面実装・既存機能改修・不具合調査に加え、Claude CodeなどAI開発支援ツールを活用した効率化を推進。",
  },
  {
    period: "2023年4月〜2025年8月",
    role: "フルスタックエンジニア（正社員）",
    place: "AI・IoT系SaaS企業",
    description:
      "農業用ドローン散布DXプラットフォームの開発。Java / Spring Bootによるバックエンド設計・実装と、TypeScript / Vue.jsによるフロントエンド開発を担当。CI/CDパイプライン（GitLab CI）の整備や開発基準のドキュメント化にも従事。",
  },
  {
    period: "2021年3月〜2023年3月",
    role: "エンジニア（アルバイト）",
    place: "AI・IoT系SaaS企業",
    description:
      "LiDARセンサーを用いた3次元測量アプリおよびWebシステムの開発・検証に従事。TypeScript / Vue.js / Java / Spring Bootを使用し、画面実装からAPIバックエンド開発、動作検証まで幅広く担当。",
  },
];

function SectionLabel({ label, title }: { label: string; title: string }) {
  return (
    <>
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-pink-300 block" />
        <p className="text-xs font-bold tracking-widest text-pink-400 uppercase">{label}</p>
      </div>
      <h2 className="mb-10 text-3xl font-bold text-gray-800">{title}</h2>
    </>
  );
}

export default async function Home() {
  const articles = await fetchZennArticles();
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-24 px-6 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, #fbcfe8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Floating blobs */}
        <div className="animate-float          pointer-events-none absolute top-16  right-4   w-80 h-80 rounded-full bg-pink-100  opacity-60 blur-3xl" />
        <div className="animate-float-reverse  pointer-events-none absolute bottom-16 left-4  w-64 h-64 rounded-full bg-rose-100  opacity-50 blur-2xl" />
        <div className="animate-float-slow     pointer-events-none absolute top-1/2  right-1/3 w-48 h-48 rounded-full bg-pink-200 opacity-30 blur-2xl" />

        <div className="relative mx-auto max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <div className="animate-hero-enter mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 border border-pink-200 px-4 py-1.5 shadow-sm" style={{ animationDelay: "100ms" }}>
              <span className="animate-blink h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="text-xs font-semibold tracking-widest text-pink-500 uppercase">
                Engineer
              </span>
            </div>

            <h1 className="animate-hero-enter mb-4 text-5xl font-bold leading-tight md:text-6xl text-gray-800" style={{ animationDelay: "200ms" }}>
              Yuna Web Studio
            </h1>
            <p className="animate-hero-enter mb-6 text-lg font-medium text-pink-400" style={{ animationDelay: "300ms" }}>
              エンジニア / フリーランス
            </p>
            <p className="animate-hero-enter mb-10 max-w-lg text-gray-500 leading-relaxed" style={{ animationDelay: "400ms" }}>
              TypeScript・Vue.jsを中心に約4年の実務経験を持ち、設計から実装・テストまで対応。
              AIツールを活用した効率的な開発フローも取り入れながら、
              丁寧で確実な開発を通じて、チームとプロダクトに貢献するエンジニアです。
            </p>
            <div className="animate-hero-enter flex gap-4 flex-wrap" style={{ animationDelay: "500ms" }}>
              <a
                href="#projects"
                className="rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-all hover:bg-pink-600 hover:-translate-y-0.5 hover:shadow-pink-300"
              >
                制作物を見る
              </a>
              <a
                href="#contact"
                className="rounded-full border border-pink-300 bg-white/60 px-7 py-3 text-sm font-semibold text-pink-500 backdrop-blur-sm transition-all hover:bg-pink-50 hover:-translate-y-0.5"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          {/* Decorative illustration */}
          <div className="animate-hero-enter relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80" style={{ animationDelay: "300ms" }}>
            <div className="animate-rotate-slow absolute inset-0 rounded-full border-2 border-dashed border-pink-200" />
            <div className="animate-float        absolute inset-6  rounded-full bg-gradient-to-br from-pink-100 to-pink-200 opacity-70" />
            <div className="animate-float-reverse absolute inset-14 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 opacity-80" />
            <div className="absolute inset-[4.5rem] rounded-full bg-gradient-to-br from-pink-300 to-pink-400 opacity-80" />
            {/* Decorative dots */}
            <div className="absolute top-3  right-10 h-3 w-3 rounded-full bg-pink-300 opacity-80" />
            <div className="absolute bottom-8 left-5  h-2 w-2 rounded-full bg-pink-400 opacity-70" />
            <div className="absolute top-1/3 left-1   h-4 w-4 rounded-full bg-pink-200 opacity-60" />
            <div className="absolute bottom-4 right-6  h-2 w-2 rounded-full bg-rose-300 opacity-60" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest text-gray-400 uppercase">Scroll</span>
          <div className="flex h-8 w-5 items-start justify-center overflow-hidden rounded-full border border-gray-300 pt-1.5">
            <div className="animate-scroll-hint h-2 w-1 rounded-full bg-pink-400" />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionLabel label="About" title="私について" />
            <div className="max-w-2xl space-y-5 text-gray-600 leading-relaxed border-l-2 border-pink-100 pl-6">
              <p>
                フロントエンド開発を中心に、設計から実装・テストまで一貫して対応できる実装力と、
                チーム全体が開発しやすくなるよう改善していく姿勢を強みとしています。
              </p>
              <p>
                これまで画面実装や既存機能の改善、不具合調査、CI/CD環境の整備など、
                ユーザーが使いやすい画面づくりを意識して開発に取り組んできました。
                必要に応じてバックエンド開発にも携わり、プロダクト全体を見ながら柔軟に対応しています。
              </p>
              <p>
                また、副業としてエンジニア育成スクールの講師も務めており、
                未経験者から初級者への技術指導・カリキュラム設計を担当しています。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-pink-50/60 to-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionLabel label="Skills" title="スキル" />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, items], i) => (
              <FadeIn key={category} delay={i * 70}>
                <div className="group rounded-2xl border border-pink-100 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100">
                  <h3 className="mb-4 text-xs font-bold tracking-widest text-pink-400 uppercase">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700 transition-colors hover:border-pink-300 hover:bg-pink-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {category === "Design" && (
                    <a
                      href="https://yuna-design0.studio.site/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex text-sm font-semibold text-pink-400 transition-colors hover:text-pink-600"
                    >
                      Webデザイナーとしても活動中です →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section id="timeline" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionLabel label="Experience" title="経歴" />
          </FadeIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-pink-300 via-pink-200 to-transparent md:left-8" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 90}>
                  <div className="group relative pl-12 md:pl-20">
                    {/* Dot */}
                    <div className="animate-pulse-ring absolute left-2 top-1.5 h-4 w-4 rounded-full border-2 border-white bg-pink-400 shadow-sm md:left-6" />

                    <div className="rounded-2xl border border-transparent bg-transparent p-4 transition-all duration-300 group-hover:border-pink-100 group-hover:bg-pink-50/50">
                      <p className="mb-1 text-xs font-semibold tracking-wide text-pink-400">
                        {item.period}
                      </p>
                      <h3 className="mb-0.5 text-lg font-bold text-gray-800">{item.role}</h3>
                      <p className="mb-3 text-sm text-gray-400">{item.place}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-pink-50/60 to-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionLabel label="Projects" title="制作物" />
            <p className="-mt-6 mb-10 text-gray-400">
              これまでに作成したアプリケーションや学習用プロジェクトです。
            </p>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-100">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <h3 className="mb-3 text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5 text-sm font-semibold">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-400 transition-colors hover:text-pink-600"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-400 transition-colors hover:text-pink-600"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles ── */}
      <section id="articles" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionLabel label="Articles" title="記事" />
            <p className="-mt-6 mb-10 text-gray-400">
              Zennで書いた技術記事です。
            </p>
          </FadeIn>
          {articles.length === 0 ? (
            <p className="text-gray-400 text-sm">記事を取得できませんでした。</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {articles.map((article, i) => (
                <FadeIn key={article.slug} delay={i * 70}>
                  <a
                    href={`https://zenn.dev${article.path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex gap-4 rounded-2xl border border-pink-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-pink-50 text-2xl">
                      {article.emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 line-clamp-2 text-sm font-semibold leading-snug text-gray-800 transition-colors group-hover:text-pink-600">
                        {article.title}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>{formatDate(article.published_at)}</span>
                        <span>❤ {article.liked_count}</span>
                        <span className="rounded-full border border-pink-200 bg-pink-50 px-2 py-0.5 text-pink-600">
                          {article.article_type === "tech" ? "Tech" : "Idea"}
                        </span>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          )}
          <FadeIn delay={articles.length * 70}>
            <div className="mt-8 text-center">
              <a
                href="https://zenn.dev/yuna_aoki"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-pink-300 px-6 py-2.5 text-sm font-semibold text-pink-500 transition-all hover:bg-pink-50 hover:-translate-y-0.5"
              >
                Zennでもっと見る →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionLabel label="Contact" title="お問い合わせ" />
            <p className="-mt-6 mb-10 text-gray-400">
              お仕事のご相談やご連絡は、以下よりお願いいたします。
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            {[
              {
                href: "mailto:yuna.aoki.web@gmail.com",
                icon: "✉️",
                label: "Email",
                text: "yuna.aoki.web@gmail.com",
                delay: 0,
              },
              {
                href: "https://github.com/yunatoma",
                icon: "🐙",
                label: "GitHub",
                text: "github.com/yunatoma",
                delay: 80,
                external: true,
              },
            ].map((item) => (
              <FadeIn key={item.label} delay={item.delay}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-pink-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="mb-0.5 text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-pink-500">
                      {item.text}
                    </p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
