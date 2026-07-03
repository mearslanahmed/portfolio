import React from 'react';
import Image from 'next/image';
import { ExternalLink, Award } from 'lucide-react';
import { FadeIn } from "@/components/ui/fade-in";
import { skillsData } from "@/data/skills";
import { certificationsData } from "@/data/certifications";

export function SkillsCertificationsSection() {
  return (
    <section aria-labelledby="skills-heading" className="scroll-mt-32 mb-24 md:mb-32">
      <FadeIn>
        <div className="flex items-center justify-between mb-16">
          <h2 id="skills-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
            Skills & Certifications
          </h2>
          <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-16 md:gap-12">
        <div>
          {skillsData.map((category, i) => (
            <FadeIn key={category.category} delay={i * 0.1} className="mb-10 last:mb-0">
              <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{category.category}</h3>
              <div className="text-secondary-text leading-relaxed text-[17px] font-medium">
                {category.skills.join(" · ")}
              </div>
            </FadeIn>
          ))}
        </div>

        <div>
          {certificationsData.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.1} className="mb-8 last:mb-0">
              <div className="group flex gap-4 items-start">
                {cert.image ? (
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-surface/50 border border-border/50 p-1.5 flex items-center justify-center overflow-hidden">
                    <Image src={cert.image} alt={cert.name} width={40} height={40} className="object-contain w-full h-full" />
                  </div>
                ) : (
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-surface/50 border border-border/50 flex items-center justify-center text-primary overflow-hidden">
                    <Award className="w-6 h-6" />
                  </div>
                )}
                <div className="flex flex-col items-start pt-0.5">
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1 leading-snug">{cert.name}</h4>
                  <p className="text-primary font-medium text-sm">
                    {cert.link ? (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline flex items-center gap-1 w-fit"
                      >
                        {cert.issuer}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      cert.issuer
                    )}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
