import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold">
          My Portfolio
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-gray-500">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-500">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};