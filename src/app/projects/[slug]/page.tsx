import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.metadata.title} | Arslan Ahmed Naseem`,
    description: project.metadata.description,
  };
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Define custom MDX components for consistent styling
  const components = {
    h2: (props: any) => <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-foreground" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-heading font-semibold mt-8 mb-3 text-foreground" {...props} />,
    p: (props: any) => <p className="text-secondary-text leading-relaxed mb-6" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-secondary-text" {...props} />,
    li: (props: any) => <li className="leading-relaxed" {...props} />,
    strong: (props: any) => <strong className="font-semibold text-foreground" {...props} />,
  };

  return (
    <article className="min-h-screen pb-20">
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
          <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-secondary-text hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6">
            {project.metadata.title}
          </h1>
          <p className="text-xl text-secondary-text max-w-3xl leading-relaxed mb-10">
            {project.metadata.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            {project.metadata.liveUrl && (
              <a
                href={project.metadata.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
            {project.metadata.githubUrl && (
              <a
                href={project.metadata.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                View Source
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-16 grid md:grid-cols-[1fr_300px] gap-12 items-start">
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={project.content} components={components} />
        </div>
        
        <aside className="sticky top-24 bg-surface border border-border p-6 rounded-xl">
          <h3 className="font-heading font-bold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.metadata.technologies.map((tech) => (
              <span key={tech} className="text-xs font-medium px-2 py-1 rounded-md bg-background border border-border text-secondary-text">
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
}
