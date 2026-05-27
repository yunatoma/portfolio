import { BannerSlider } from "@/components/BannerSlider";
import { FadeIn } from "@/components/FadeIn";
import { ProjectThumbnailCarousel } from "@/components/ProjectThumbnailCarousel";
import { projects } from "@/data/projects";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import Image from "next/image";
import type { SVGProps } from "react";

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
  Frontend: [
    "TypeScript",
    "Vue.js",
    "React",
    "Next.js",
    "Nuxt.js",
    "Astro",
    "Vite",
    "React Router",
    "Redux Toolkit",
    "React Hook Form",
    "Tailwind CSS",
    "Recharts",
  ],
  Backend: ["Java", "Spring Boot", "Node.js", "Express.js", "Python"],
  Cloud: [
    "AWS",
    "Firebase Hosting",
    "Firebase Authentication",
    "Cloud Firestore",
    "Firebase Storage",
    "Cloud Run",
    "Vercel",
  ],
  Database: ["Cloud Firestore"],
  Testing: ["Vitest", "Testing Library", "fast-check"],
  Tools: ["Git", "GitLab", "GitHub", "Docker", "CI/CD (GitLab CI)", "ESLint"],
  Design: ["Photoshop", "Illustrator", "Figma", "Canva", "WordPress", "Studio"],
};

const timeline = [
  {
    period: "2025年10月〜現在",
    role: "エンジニア育成スクール 講師（副業）",
    place: "Web制作会社",
    description:
      "未経験〜初級者を対象とした技術指導・学習進捗管理。実戦的なコードレビューやモチベーション管理を含む多角的なサポートを担当。",
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

const designServices = [
  {
    title: "バナー / ビジュアル制作",
    description:
      "Photoshop、Illustrator、Figma、Canvaを用いて、告知・SNS・Web掲載向けの画像などを制作します。",
  },
  {
    title: "LPデザイン / Webサイト",
    description:
      "目的や導線を整理し、StudioやFigmaを使ってブランドらしさが伝わるページを制作します。",
  },
  {
    title: "WordPressサイト制作",
    description:
      "更新しやすいサイト設計や既存サイトの調整にも対応できるよう、WordPressでの制作を学習中です。",
    url: "https://hushed-sleet.localsite.io/",
    urlLabel: "制作サイトを見る（一次公開URL）",
    note: "LOCALの一次公開URLのため、閲覧URLが変更されている場合があります。",
    credentials: {
      username: "acoustics",
      password: "reflective",
    },
  },
];

const designKeywords = [
  "WordPress",
  "Studio",
  "Photoshop",
  "Illustrator",
  "Figma",
  "Canva",
  "UI Design",
  "LP Design",
];

type BannerImage = {
  src: string;
  alt: string;
};

async function getBannerImages(): Promise<BannerImage[]> {
  return getDesignWorkImages("banner", "バナー制作例");
}

async function getLpImages(): Promise<BannerImage[]> {
  const lpImages = await getDesignWorkImages("lp", "LPデザイン制作例");

  return [
    ...lpImages,
    {
      src: await getVersionedPublicImageSrc("design-portforio.webp"),
      alt: `LPデザイン制作例 ${lpImages.length + 1}`,
    },
  ];
}

async function getDesignWorkImages(
  prefix: "banner" | "lp",
  altPrefix: string
): Promise<BannerImage[]> {
  const imagesDirectory = path.join(process.cwd(), "public", "images");
  const filenames = await readdir(imagesDirectory);
  const pattern = new RegExp(`^${prefix}-.*\\.(?:avif|gif|jpe?g|png|webp)$`, "i");

  const workFilenames = filenames
    .filter((filename) => pattern.test(filename))
    .sort((a, b) => a.localeCompare(b, "ja"));

  return Promise.all(
    workFilenames.map(async (filename, index) => ({
      src: await getVersionedPublicImageSrc(filename),
      alt: `${altPrefix} ${index + 1}`,
    }))
  );
}

async function getVersionedPublicImageSrc(filename: string) {
  const filePath = path.join(process.cwd(), "public", "images", filename);
  const fileStats = await stat(filePath);

  return `/images/${filename}?v=${Math.round(fileStats.mtimeMs)}`;
}

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

function HeroOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-hero-enter flex-shrink-0 ${className}`}
      style={{ animationDelay: "300ms" }}
    >
      <div className="animate-rotate-slow absolute inset-0 rounded-full border-2 border-dashed border-pink-200" />
      <div className="animate-float absolute inset-6 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 opacity-70" />
      <div className="animate-float-reverse absolute inset-14 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 opacity-80" />
      <div className="absolute inset-[4.5rem] rounded-full bg-gradient-to-br from-pink-300 to-pink-400 opacity-80" />
      <div className="absolute top-3 right-10 h-3 w-3 rounded-full bg-pink-300 opacity-80" />
      <div className="absolute bottom-8 left-5 h-2 w-2 rounded-full bg-pink-400 opacity-70" />
      <div className="absolute top-1/3 left-1 h-4 w-4 rounded-full bg-pink-200 opacity-60" />
      <div className="absolute bottom-4 right-6 h-2 w-2 rounded-full bg-rose-300 opacity-60" />
    </div>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 496 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3 .3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.4c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.4-.3 75.5-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8z" />
    </svg>
  );
}

export default async function Home() {
  const articles = await fetchZennArticles();
  const bannerImages = await getBannerImages();
  const lpImages = await getLpImages();
  const designPortfolioImageSrc = await getVersionedPublicImageSrc(
    "design-portforio.webp"
  );

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
          <div className="relative flex-1 text-center md:text-left">
            <div className="animate-hero-enter relative z-10 mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 border border-pink-200 px-4 py-1.5 shadow-sm" style={{ animationDelay: "100ms" }}>
              <span className="animate-blink h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="text-xs font-semibold tracking-widest text-pink-500 uppercase">
                Engineer / Designer
              </span>
            </div>

            <h1 className="animate-hero-enter relative z-10 mb-4 text-5xl font-bold leading-tight md:text-6xl text-gray-800" style={{ animationDelay: "200ms" }}>
              Yuna Web Studio
            </h1>
            <p className="animate-hero-enter relative z-10 mb-6 text-lg font-medium text-pink-400" style={{ animationDelay: "300ms" }}>
              エンジニア / デザイナー / フリーランス
            </p>
            <p className="animate-hero-enter relative z-10 mx-auto mb-10 max-w-lg text-gray-500 leading-relaxed md:mx-0" style={{ animationDelay: "400ms" }}>
              TypeScript・Vue.jsを中心に約4年の実務経験を持ち、設計から実装・テストまで対応。
              AWSなどのクラウド活用やAIツールを取り入れた効率的な開発フローに加え、
              デザイン制作まで含めてチームとプロダクトに貢献します。
            </p>
            <div className="animate-hero-enter relative z-10 flex justify-center gap-4 flex-wrap md:justify-start" style={{ animationDelay: "500ms" }}>
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
          <HeroOrb className="relative hidden h-80 w-80 md:block" />
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
                未経験者から初級者への技術指導や学習進捗のサポートを担当しています。
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
                      href="#design"
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
          <div className="grid items-start gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 80}>
                <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-100">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {project.thumbnails && (
                    <ProjectThumbnailCarousel
                      thumbnails={project.thumbnails}
                      imageClassName="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}

                  <h3 className="mb-3 text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-500">
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
                    {project.lpUrl && (
                      <a
                        href={project.lpUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-400 transition-colors hover:text-pink-600"
                      >
                        LP →
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
                    {project.demoStatus === "preparing" && (
                      <span className="text-gray-400">Demo 準備中</span>
                    )}
                  </div>
                  {project.demoAccessCode && (
                    <p className="mt-3 text-xs font-medium text-gray-400">
                      デモ用アクセスコード:{" "}
                      <span className="font-semibold text-gray-500">
                        {project.demoAccessCode}
                      </span>
                    </p>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" className="py-24 px-6 bg-gradient-to-b from-white to-pink-50/60">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionLabel label="Design" title="デザイン制作" />
          </FadeIn>

          <div className="grid gap-10">
            <FadeIn delay={80}>
              <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
                <div className="min-w-0">
                  <p className="-mt-4 mb-5 text-lg font-semibold leading-relaxed text-gray-800 md:text-xl">
                    エンジニアとしての実装力に加えて、Webデザイナーとしても活動しています。
                  </p>
                  <p className="mb-7 leading-relaxed text-gray-500 md:text-lg">
                    見た目を整えるだけでなく、情報設計・導線・レスポンシブ対応まで見据えて、
                    WordPressでのサイト制作も学習中です。
                    「使いやすく、運用しやすく、伝わる」Web体験を形にします。
                  </p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {designKeywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-pink-200 bg-white/80 px-3 py-1 text-xs font-medium text-pink-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://yuna-design0.studio.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-all hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-pink-300"
                  >
                    デザインポートフォリオを見る（STUDIO実装） →
                  </a>
                </div>

                <a
                  href="https://yuna-design0.studio.site/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block min-w-0 overflow-hidden rounded-2xl border border-pink-100 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100"
                >
                  <Image
                    src={designPortfolioImageSrc}
                    width={1600}
                    height={1000}
                    alt="デザインポートフォリオのサムネイル"
                    className="aspect-[16/10] w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
              </div>
            </FadeIn>

            <div className="grid w-full min-w-0 gap-5">
              {designServices.map((service, i) => (
                <FadeIn key={service.title} delay={140 + i * 70}>
                  <article className="group relative min-w-0 overflow-hidden rounded-2xl border border-pink-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-pink-300 to-rose-200 opacity-70" />
                    <p className="mb-2 text-xs font-bold tracking-widest text-pink-400 uppercase">
                      0{i + 1}
                    </p>
                    <h3 className="mb-3 text-lg font-bold text-gray-800">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {service.description}
                    </p>
                    {i === 0 && <BannerSlider images={bannerImages} />}
                    {i === 1 && <BannerSlider images={lpImages} />}
                    {service.url && (
                      <div className="mt-4 space-y-2">
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-sm font-semibold text-pink-400 transition-colors hover:text-pink-600"
                        >
                          {service.urlLabel} →
                        </a>
                        {service.note && (
                          <p className="text-xs leading-relaxed text-gray-400">
                            {service.note}
                          </p>
                        )}
                        {service.credentials && (
                          <details className="rounded-xl border border-pink-100 bg-pink-50/60 px-4 py-3 text-sm text-gray-500">
                            <summary className="cursor-pointer text-xs font-semibold text-pink-500">
                              閲覧用ログイン情報
                            </summary>
                            <dl className="mt-3 grid gap-2 text-xs">
                              <div className="flex flex-wrap gap-x-2 gap-y-1">
                                <dt className="font-semibold text-gray-500">Username</dt>
                                <dd className="font-mono text-gray-600">
                                  {service.credentials.username}
                                </dd>
                              </div>
                              <div className="flex flex-wrap gap-x-2 gap-y-1">
                                <dt className="font-semibold text-gray-500">Password</dt>
                                <dd className="font-mono text-gray-600">
                                  {service.credentials.password}
                                </dd>
                              </div>
                            </dl>
                          </details>
                        )}
                      </div>
                    )}
                  </article>
                </FadeIn>
              ))}
            </div>
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
                icon: <MailIcon className="h-6 w-6" />,
                label: "Email",
                text: "yuna.aoki.web@gmail.com",
                delay: 0,
              },
              {
                href: "https://github.com/yunatoma",
                icon: <GitHubIcon className="h-6 w-6" />,
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-400 transition-colors group-hover:bg-pink-100 group-hover:text-pink-500">
                    {item.icon}
                  </span>
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
