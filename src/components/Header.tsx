"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-pink-500">
          Portfolio
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-pink-500 transition-colors">
            Skills
          </a>
          <a href="#timeline" className="text-gray-600 hover:text-pink-500 transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-gray-600 hover:text-pink-500 transition-colors">
            Projects
          </a>
          <a href="#articles" className="text-gray-600 hover:text-pink-500 transition-colors">
            Articles
          </a>
          <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {["about", "skills", "timeline", "projects", "articles", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-gray-600 hover:text-pink-500 transition-colors capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {id === "timeline" ? "Experience" : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
