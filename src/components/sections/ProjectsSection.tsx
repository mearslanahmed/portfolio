import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectMetadata } from "@/lib/mdx";

const ProjectArchive = dynamic(() => import("@/components/ProjectArchive"));

interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-32 mb-24 md:mb-32">
      <FadeIn>
        <div className="flex items-center justify-between mb-12">
          <h2 id="projects-heading" className="text-4xl font-heading font-bold flex items-center gap-4">
            Projects
          </h2>
          <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
        </div>
      </FadeIn>
      
      {/* Featured Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {projects.slice(0, 4).map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
            <Link href={`/projects/${project.slug}`} className="group flex flex-col gap-6 h-full">
              
              {/* Image Media Block */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-surface border border-border/50 transition-colors group-hover:border-primary/30 mb-2">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-0 pointer-events-none" />
                <Image 
                  src={project.metadata.thumbnail} 
                  alt={project.metadata.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-10" 
                  priority={i < 2}
                />
              </div>
              
              {/* Typography Block */}
              <div className="flex flex-col flex-1 px-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-heading font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {project.metadata.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-secondary-text group-hover:text-primary group-hover:-rotate-45 transition-all shrink-0" aria-hidden="true" />
                </div>
                <p className="text-secondary-text mb-6 flex-1 text-base leading-relaxed line-clamp-2">
                  {project.metadata.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.metadata.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-surface border border-border text-secondary-text group-hover:border-primary/30 group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Project Archive Table */}
      {projects.length > 4 && (
        <FadeIn delay={0.2}>
          <h3 className="text-2xl font-heading font-bold mb-6">More Work</h3>
          <ProjectArchive projects={projects.slice(4)} />
        </FadeIn>
      )}
    </section>
  );
}
