"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { id: "about",    label: "About"      },
  { id: "skills",   label: "Skills"     },
  { id: "timeline", label: "Experience" },
  { id: "projects", label: "Projects"   },
  { id: "articles", label: "Articles"   },
  { id: "contact",  label: "Contact"    },
];

const HEADER_HEIGHT = 72;

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-pink-500">
          Portfolio
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
