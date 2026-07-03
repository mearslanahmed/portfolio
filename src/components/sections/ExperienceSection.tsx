import React from 'react';
import { FadeIn } from "@/components/ui/fade-in";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-32 mb-24 md:mb-32">
      <FadeIn>
        <div className="flex items-center justify-between mb-16">
          <h2 id="experience-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
            Professional Experience
          </h2>
          <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
        </div>
      </FadeIn>

      <div className="max-w-4xl mx-auto space-y-12">
        {experienceData.map((exp, index) => (
          <FadeIn key={exp.id} delay={index * 0.1}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
              <div className="md:w-1/4 shrink-0 text-secondary-text font-medium text-sm md:text-right mt-1.5">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="md:w-3/4 flex-1">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{exp.role}</h3>
                <div className="text-secondary-text font-medium text-lg mb-4">{exp.company} <span className="opacity-50 mx-2">·</span> <span className="text-sm">{exp.location}</span></div>
                
                <ul className="space-y-4 text-secondary-text">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed text-[15px]">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
