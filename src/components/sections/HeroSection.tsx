import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { FadeIn } from "@/components/ui/fade-in";
import { personalInfo } from "@/data/personalInfo";

export function HeroSection() {
  return (
    <FadeIn className="max-w-4xl mx-auto text-center mb-32 flex flex-col items-center relative">
      {/* Cinematic Cutout Profile Picture */}
      <div className="relative w-56 h-56 md:w-72 md:h-72 -mt-4 mb-4 pointer-events-none mx-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] z-0">
        <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
          <Image
            src={personalInfo.profilePic}
            alt={personalInfo.name}
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-contain object-bottom transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>
      </div>

      <div className="relative z-20 mt-4">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter text-foreground mb-4 leading-[1.1]">
          {personalInfo.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-primary">{personalInfo.role}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-secondary-text mb-6 max-w-2xl font-medium mx-auto">
          {personalInfo.shortBio}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-bold text-background shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            View My Work
          </Link>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-8 text-sm font-bold shadow-sm hover:border-primary/50 hover:bg-background transition-all"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
