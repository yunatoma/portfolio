export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "人材管理SaaS風アプリ",
    description:
      "社員情報の一覧表示、検索、登録、編集などを行う人材管理アプリです。",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    githubUrl: "https://github.com/your-name/project",
    demoUrl: "https://example.com",
  },
  {
    title: "旅行記録アプリ",
    description:
      "旅行先や思い出を記録できるWebアプリです。Next.jsの学習を兼ねて作成しました。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/your-name/travel-app",
  },
  {
    title: "ポートフォリオサイト",
    description:
      "Next.js、TypeScript、Tailwind CSSを使用して作成したポートフォリオサイトです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  ];
