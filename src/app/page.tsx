import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/projects";

const skills = {
  Frontend: ["TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  Backend: ["Java", "Spring Boot"],
  Tools: ["Git", "GitHub", "GitLab", "Docker", "CI/CD"],
  "AI Tools": ["Claude Code", "Codex"],
};

const timeline = [
  {
    period: "2023 - 現在",
    role: "フロントエンドエンジニア",
    place: "Web系スタートアップ",
    description:
      "React / TypeScript / Next.js を用いたプロダクト開発。UI実装、機能改修、不具合調査を担当。",
  },
  {
    period: "2021 - 2023",
    role: "システムエンジニア",
    place: "SIer企業",
    description:
      "Java / Spring Boot を用いた業務系システム開発。設計・実装・テスト・ドキュメント整備に従事。",
  },
  {
    period: "2017 - 2021",
    role: "情報工学部 卒業",
    place: "〇〇大学",
    description: "プログラミング・アルゴリズム・データベースなどを学ぶ。",
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
              Frontend Engineer Portfolio
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-gray-800">
              ユーザーにとって
              <br />
              使いやすいWebを
              <br />
              <span className="text-pink-500">つくるエンジニア</span>
            </h1>
            <p className="mb-8 max-w-lg text-gray-500 leading-relaxed">
              TypeScript・React・Next.js・Vue.jsを中心に、
              フロントエンド開発を行っています。
              UI実装から既存機能改修、不具合調査、ドキュメント整備まで対応します。
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

          {/* Decorative illustration */}
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
                フロントエンド開発を中心に、Webアプリケーション開発に携わっています。
                TypeScript・Vue.js・React・Next.jsを用いた画面実装や、
                既存機能の改修、不具合調査、UI改善などを行っています。
              </p>
              <p>
                チーム開発におけるドキュメント整備や、GitHub / GitLabを用いた
                コードレビューにも関わってきました。
                ユーザー視点を大切にしながら、読みやすくメンテナブルなコードを心がけています。
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
          <div className="flex flex-col sm:flex-row gap-4">
            <FadeIn delay={0}>
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-3 rounded-2xl border border-pink-200 bg-white px-6 py-5 hover:bg-pink-50 transition-colors group"
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-pink-600">
                    your-email@example.com
                  </p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={80}>
              <a
                href="https://github.com/your-name"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-pink-200 bg-white px-6 py-5 hover:bg-pink-50 transition-colors group"
              >
                <span className="text-2xl">🐙</span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">GitHub</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-pink-600">
                    github.com/your-name
                  </p>
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={160}>
              <a
                href="https://x.com/your-name"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-pink-200 bg-white px-6 py-5 hover:bg-pink-50 transition-colors group"
              >
                <span className="text-2xl">🐦</span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">X (Twitter)</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-pink-600">
                    @your-name
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
