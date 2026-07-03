"use client";

import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">

      {/* Absolute Right Aligned Theme Toggle */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 pointer-events-auto hidden md:flex">
        <ThemeToggle />
      </div>

      <header className="pointer-events-auto flex h-14 items-center justify-between px-6 rounded-full border border-border/40 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 shadow-2xl shadow-black/20 w-full max-w-4xl relative">
        <Link href="/" className="font-heading font-bold text-lg tracking-tight flex items-center group">
          <Terminal className="w-5 h-5 mr-2 text-primary group-hover:text-foreground transition-colors" strokeWidth={2.5} />
          <span className="text-foreground group-hover:text-secondary-text transition-colors">{personalInfo.name.split(" ")[0]}</span>
          <span className="text-primary ml-[1px]">.</span>
        </Link>
        
        {/* Desktop Nav */}
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
          <div className="hidden md:flex items-center gap-4 border-r border-border/40 pr-4">
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-foreground transition-colors" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-text hover:text-foreground transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
            )}
          </div>
          
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-bold text-background shadow transition-transform hover:scale-105 active:scale-95"
          >
            Resume
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl border border-border/40 bg-background/95 backdrop-blur-md shadow-2xl md:hidden flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-secondary-text hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-border/40 my-2" />
            <div className="flex items-center justify-between px-4 pb-2">
              <span className="text-sm font-medium text-secondary-text">Theme</span>
              <ThemeToggle />
            </div>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-foreground px-5 py-2 text-base font-bold text-background shadow transition-transform active:scale-95"
            >
              Download Resume
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
