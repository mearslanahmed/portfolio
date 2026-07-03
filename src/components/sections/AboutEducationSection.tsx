import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FadeIn } from "@/components/ui/fade-in";
import { personalInfo } from "@/data/personalInfo";
import { educationData } from "@/data/education";

export function AboutEducationSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-32 mb-24 md:mb-32">
      <FadeIn>
        <div className="flex items-center justify-between mb-16">
          <h2 id="about-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
            About & Education
          </h2>
          <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12">
        <FadeIn>
          <h3 className="text-2xl font-heading font-bold mb-6">My Journey & Philosophy</h3>
          <div className="prose prose-invert max-w-none text-secondary-text">
            <div className="border-l-4 border-primary pl-6 py-2 my-6 bg-surface/10 rounded-r-lg">
              <p className="text-xl leading-relaxed text-foreground font-medium">
                {personalInfo.longBio}
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn>
            <h3 className="text-2xl font-heading font-bold mb-6">Education</h3>
          </FadeIn>
          {educationData.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 0.1} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-primary font-medium">
                    {edu.url ? (
                      <a 
                        href={edu.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline flex items-center gap-1 w-fit"
                      >
                        {edu.institution}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </p>
                </div>
                <div className="text-sm font-bold text-secondary-text mt-4 md:mt-0 w-fit">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              <div className="space-y-3 text-secondary-text">
                {edu.description.map((desc, idx) => (
                  <p key={idx} className="leading-relaxed text-[15px]">
                    {desc}
                  </p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
