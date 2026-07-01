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

  const INITIAL_COUNT = 2;
  const visibleProjects = isExpanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50 text-secondary-text text-sm">
              <th className="py-4 px-4 font-medium w-1/3">Project</th>
              <th className="py-4 px-4 font-medium hidden md:table-cell">Technologies</th>
              <th className="py-4 px-4 font-medium text-right w-24">Link</th>
            </tr>
          </thead>
          <tbody>
            {visibleProjects.map((project) => (
              <tr key={project.slug} className="border-b border-border/20 hover:bg-surface/50 transition-colors group">
                <td className="py-5 px-4">
                  <Link href={`/projects/${project.slug}`} className="block">
                    <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors block mb-1">
                      {project.metadata.title}
                    </span>
                    <span className="text-sm text-secondary-text line-clamp-1">
                      {project.metadata.description}
                    </span>
                  </Link>
                </td>
                <td className="py-5 px-4 hidden md:table-cell">
                  <div className="flex flex-wrap gap-2">
                    {project.metadata.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-medium text-secondary-text bg-background border border-border px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.metadata.technologies.length > 3 && (
                      <span className="text-xs font-medium text-secondary-text">+{project.metadata.technologies.length - 3}</span>
                    )}
                  </div>
                </td>
                <td className="py-5 px-4 text-right">
                  <Link href={`/projects/${project.slug}`} className="inline-flex p-2 rounded-full hover:bg-background border border-transparent hover:border-border transition-colors text-secondary-text hover:text-primary">
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <>
          {!isExpanded && (
            <div className="absolute bottom-[4.5rem] left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none flex items-end justify-center pb-2">
            </div>
          )}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border text-foreground font-bold hover:border-primary/50 transition-all text-sm shadow-xl shadow-background"
            >
              {isExpanded ? "Show Less" : "Show More"}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
