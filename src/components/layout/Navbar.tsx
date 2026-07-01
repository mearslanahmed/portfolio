import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Absolute Left Aligned Badge */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 pointer-events-auto hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 bg-background/60 backdrop-blur-md shadow-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium text-secondary-text">Available for work</span>
      </div>

      {/* Absolute Right Aligned Theme Toggle */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 pointer-events-auto hidden md:flex">
        <ThemeToggle />
      </div>

      <header className="pointer-events-auto flex h-14 items-center justify-between px-6 rounded-full border border-border/40 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 shadow-2xl shadow-black/20 w-full max-w-4xl">
        <Link href="/" className="font-heading font-bold text-lg tracking-tight hover:text-primary transition-colors">
          {personalInfo.name.split(" ")[0]}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-bold text-background shadow transition-transform hover:scale-105 active:scale-95"
          >
            Resume
          </a>
        </div>
      </header>
    </div>
  );
}
