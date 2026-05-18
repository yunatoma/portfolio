export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoStatus?: "preparing";
};

export const projects: Project[] = [
  {
    title: "人材管理SaaS風アプリ",
    description:
      "社員情報の一覧・検索・登録・編集、認証、プロフィール画像管理に対応した人材管理SaaS風アプリです。Firebaseへのデプロイ、マルチテナント構造を前提に、OpenSearchによる全文検索やAIチャット機能の拡張も見据えて設計しています。",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "React Hook Form",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Cloud Run",
      "Node.js",
      "Express.js",
      "OpenSearch",
      "AIチャット",
      "マルチテナント",
    ],
    githubUrl: "https://github.com/yunatoma/employee-profile-app",
    demoStatus: "preparing",
  },
  {
    title: "ポートフォリオサイト",
    description:
      "Next.js、TypeScript、Tailwind CSSを使用して作成したポートフォリオサイトです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/yunatoma/portfolio",
  },
  ];
