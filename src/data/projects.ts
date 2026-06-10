export type Project = {
  title: string;
  description: string;
  technologies: string[];
  thumbnails?: {
    src: string;
    alt: string;
  }[];
  githubUrl?: string;
  lpUrl?: string;
  demoUrl?: string;
  demoAccessCode?: string;
  demoStatus?: "preparing";
  adminUrl?: string;
  adminCredentials?: { email: string; password: string };
  imageClassName?: string;
};

export const projects: Project[] = [
  {
    title: "人材管理SaaS風アプリ",
    description:
      "社員情報の一覧・検索・登録・編集、認証、プロフィール画像管理、AIチャット機能に対応した人材管理SaaS風アプリです。Firebaseへのデプロイ、マルチテナント構造を前提に設計しています。",
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
      "AIチャット",
      "マルチテナント",
    ],
    thumbnails: [
      {
        src: "/images/employee-list-thumbnail.svg",
        alt: "人材管理SaaS風アプリの社員一覧画面",
      },
      {
        src: "/images/employee-org-thumbnail.svg",
        alt: "人材管理SaaS風アプリの組織図画面",
      },
      {
        src: "/images/employee-profile-thumbnail.svg",
        alt: "人材管理SaaS風アプリのマイプロフィール画面",
      },
      {
        src: "/images/employee-settings-thumbnail.svg",
        alt: "人材管理SaaS風アプリの組織設定画面",
      },
      {
        src: "/images/employee-dashboard-thumbnail.svg",
        alt: "人材管理SaaS風アプリのダッシュボード画面",
      },
    ],
    githubUrl: "https://github.com/yunatoma/employee-profile-app",
    lpUrl: "https://employee-profile-lp.vercel.app/",
    demoUrl: "https://employee-profile-app-184e1.web.app/",
    demoAccessCode: "demo2026",
  },
  {
    title: "さくらこもれび ホームページ（CMS付き）",
    description:
      "全国に展開する保育園運営団体「桜のこもれびキッズランド」の公式サイト（仮）です。管理者が画像・テキストをブラウザから更新できるよう、独自のCMSを自作したことがポイントです。Nuxt.js + Firebase（Firestore / Authentication / Storage）で構築し、Vercelにデプロイしています。",
    technologies: [
      "Nuxt.js",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Vercel",
    ],
    thumbnails: [
      {
        src: "/images/sakura-komorebi-thumbnail.png",
        alt: "さくらこもれびキッズランドのトップページ",
      },
      {
        src: "/images/komorebi-01.png",
        alt: "たいせつにしていること（Motto）ページ",
      },
      {
        src: "/images/komorebi-02.png",
        alt: "お知らせページ",
      },
      {
        src: "/images/komorebi-03.png",
        alt: "こもれびだよりページ",
      },
      {
        src: "/images/komorebi-admin01.png",
        alt: "管理画面 おたより管理",
      },
      {
        src: "/images/komorebi-admin-02.png",
        alt: "管理画面 おたより編集",
      },
    ],
    demoUrl: "https://sakura-komorebi-hp.vercel.app/",
    adminUrl: "https://sakura-komorebi-hp.vercel.app/admin/loguin",
    adminCredentials: {
      email: "employee.profile.app.test1@gmail.com",
      password: "PNBTodJPNjbnFjXwJa",
    },
    imageClassName:
      "object-cover object-top blur-[2px] transition-transform duration-500 group-hover:scale-[1.03]",
  },
  {
    title: "ポートフォリオサイト",
    description:
      "Next.js、TypeScript、Tailwind CSSを使用して作成したポートフォリオサイトです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    thumbnails: [
      {
        src: "/images/portfolio-thumbnail.svg",
        alt: "ポートフォリオサイトのファーストビュー",
      },
      {
        src: "/images/portfolio-skills-thumbnail.svg",
        alt: "ポートフォリオサイトのスキルセクション",
      },
      {
        src: "/images/portfolio-experience-thumbnail.svg",
        alt: "ポートフォリオサイトの経歴セクション",
      },
      {
        src: "/images/portfolio-articles-thumbnail.svg",
        alt: "ポートフォリオサイトの記事セクション",
      },
    ],
    githubUrl: "https://github.com/yunatoma/portfolio",
  },
  ];
