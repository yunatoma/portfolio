import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/projects";

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
    period: "2025年8月〜2026年3月",
    role: "フロントエンドエンジニア（業務委託）",
    place: "建設DX系スタートアップ（業務委託）",
    description:
      "建設・設計業務の生産性向上を目的としたバーティカルSaaSの開発。Vue.jsによる新規画面実装・既存機能改修・不具合調査に加え、Claude CodeなどAI開発支援ツールを活用した効率化を推進。",
  },
  {
    period: "2023年4月〜2025年8月",
    role: "フロントエンドエンジニア（正社員）",
    place: "AI・IoT系SaaS企業（正社員）",
    description:
      "農業用ドローン散布DXプラットフォームの開発。Java / Spring Bootによるバックエンド設計・実装と、TypeScript / Vue.jsによるフロントエンド開発を担当。CI/CDパイプライン（GitLab CI）の整備や開発基準のドキュメント化にも従事。",
  },
  {
    period: "2021年3月〜2023年3月",
    role: "システムエンジニア（アルバイト）",
    place: "AI・IoT系SaaS企業（アルバイト）",
    description:
      "LiDARセンサーを用いた3次元測量アプリおよびWebシステムの開発。TypeScript / Vue.js / Java / Spring Bootを使用し、画面実装からAPIバックエンドまで幅広く担当。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 pb-16 px-6 bg-gradient-to-br from-pink-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-pink-100 opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-pink-200 opacity-30 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold tracking-widest text-pink-400 uppercase">
              Frontend Engineer
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl text-gray-800">
              青木 由奈
            </h1>
            <p className="mb-6 text-lg text-pink-500 font-medium">
              フロントエンドエンジニア / フリーランス
            </p>
            <p className="mb-8 max-w-lg text-gray-500 leading-relaxed">
              TypeScript・Vue.jsを中心に、設計から実装・テストまで一貫して対応。
              Java / Spring Bootによるバックエンド開発やCI/CD環境の整備など、
              プロダクト全体を見ながら柔軟に対応できるエンジニアです。
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-600 transition-colors shadow-sm shadow-pink-200"
              >
                制作物を見る
              </a>
              <a
                href="#contact"
                className="rounded-full border border-pink-300 px-6 py-3 text-sm font-semibold text-pink-500 hover:bg-pink-50 transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 to-pink-400 opacity-30" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 opacity-40" />
            <div className="absolute inset-16 rounded-full bg-pink-400 opacity-50 flex items-center justify-center">
              <span className="text-5xl">🌸</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-2 text-xs font-bold tracking-widest text-pink-400 uppercase">About</p>
            <h2 className="mb-8 text-3xl font-bold text-gray-800">私について</h2>
            <div className="max-w-2xl space-y-4 text-gray-600 leading-relaxed">
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

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-pink-50">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-2 text-xs font-bold tracking-widest text-pink-400 uppercase">Skills</p>
            <h2 className="mb-10 text-3xl font-bold text-gray-800">スキル</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items], i) => (
              <FadeIn key={category} delay={i * 80}>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-pink-100">
                  <h3 className="mb-4 text-sm font-bold text-pink-500 uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-pink-50 border border-pink-200 px-3 py-1 text-xs font-medium text-pink-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-2 text-xs font-bold tracking-widest text-pink-400 uppercase">Experience</p>
            <h2 className="mb-12 text-3xl font-bold text-gray-800">経歴</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-200 md:left-8" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-pink-400 border-2 border-white shadow-sm md:left-6" />
                    <p className="mb-1 text-xs font-semibold text-pink-400 tracking-wide">
                      {item.period}
                    </p>
                    <h3 className="mb-0.5 text-lg font-bold text-gray-800">{item.role}</h3>
                    <p className="mb-2 text-sm text-gray-400">{item.place}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-pink-50">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-2 text-xs font-bold tracking-widest text-pink-400 uppercase">Projects</p>
            <h2 className="mb-3 text-3xl font-bold text-gray-800">制作物</h2>
            <p className="mb-10 text-gray-500">
              これまでに作成したアプリケーションや学習用プロジェクトです。
            </p>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 80}>
                <article className="rounded-2xl bg-white p-6 shadow-sm border border-pink-100 flex flex-col h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <h3 className="mb-3 text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="mb-4 text-gray-500 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-pink-50 border border-pink-200 px-3 py-1 text-xs font-medium text-pink-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-semibold">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-500 hover:text-pink-700 transition-colors"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-500 hover:text-pink-700 transition-colors"
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

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="mb-2 text-xs font-bold tracking-widest text-pink-400 uppercase">Contact</p>
            <h2 className="mb-3 text-3xl font-bold text-gray-800">お問い合わせ</h2>
            <p className="mb-10 text-gray-500">
              お仕事のご相談やご連絡は、以下よりお願いいたします。
            </p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <FadeIn delay={0}>
              <a
                href="mailto:yuna.aoki.web@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-pink-200 bg-white px-6 py-5 hover:bg-pink-50 transition-colors group"
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-pink-600">
                    yuna.aoki.web@gmail.com
                  </p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={80}>
              <a
                href="https://github.com/yunatoma"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-pink-200 bg-white px-6 py-5 hover:bg-pink-50 transition-colors group"
              >
                <span className="text-2xl">🐙</span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">GitHub</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-pink-600">
                    github.com/yunatoma
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
