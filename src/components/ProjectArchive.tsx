"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ProjectMetadata } from "@/lib/mdx";

interface ProjectArchiveProps {
  projects: { slug: string; metadata: ProjectMetadata }[];
}

export default function ProjectArchive({ projects }: ProjectArchiveProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (projects.length === 0) return null;

  const INITIAL_COUNT = 3;
  const visibleProjects = isExpanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-5 rounded-2xl border border-border bg-surface hover:bg-background transition-all duration-300"
          >
            <h4 className="font-heading font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-tight">
              {project.metadata.title}
            </h4>
            <p className="text-sm text-secondary-text line-clamp-2 mb-4 leading-relaxed">
              {project.metadata.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.metadata.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[11px] font-medium text-secondary-text bg-background border border-border px-2 py-0.5 rounded-md">
                    {tech}
                  </span>
                ))}
                {project.metadata.technologies.length > 3 && (
                  <span className="text-[11px] font-medium text-secondary-text">+{project.metadata.technologies.length - 3}</span>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-foreground font-medium hover:bg-surface transition-all text-sm"
          >
            {isExpanded ? "Show Less" : `Show ${projects.length - INITIAL_COUNT} More`}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </div>
  );
}
