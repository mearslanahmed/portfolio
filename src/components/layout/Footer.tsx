import { personalInfo } from "@/data/personalInfo";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiMedium } from "react-icons/si";
import { Mail } from "lucide-react";

export function Footer() {
  const linkClass = "text-secondary-text hover:text-foreground hover:scale-110 transition-all";

  return (
    <footer className="w-full border-t border-border bg-background py-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-6">
        <p className="text-sm font-medium text-secondary-text">
          Designed & Built by {personalInfo.name}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="GitHub">
              <FaGithub className="h-6 w-6" />
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6" />
            </a>
          )}
          {personalInfo.youtube && (
            <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="YouTube">
              <FaYoutube className="h-6 w-6" />
            </a>
          )}
          {personalInfo.medium && (
            <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Medium">
              <SiMedium className="h-6 w-6" />
            </a>
          )}
          {personalInfo.fiverr && (
            <a href={personalInfo.fiverr} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Fiverr">
              <TbBrandFiverr className="h-6 w-6" />
            </a>
          )}
          <a href={`mailto:${personalInfo.email}`} className={linkClass} aria-label="Email">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
