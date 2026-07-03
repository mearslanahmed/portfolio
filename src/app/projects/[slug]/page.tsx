import React from "react";
import { getProjectBySlug, getProjectSlugs, getAllProjects } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft, ArrowRight, ExternalLink, Download } from "lucide-react";
import { ShareProject } from "@/components/ShareProject";
import type { Metadata } from "next";

function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  const baseUrl = "https://arslanahmed.me";
  const projectUrl = `${baseUrl}/projects/${slug}`;
  // Use the project thumbnail as the OG image, ensuring it's an absolute URL
  const ogImage = project.metadata.thumbnail.startsWith("http")
    ? project.metadata.thumbnail
    : `${baseUrl}${project.metadata.thumbnail}`;

  return {
    title: `${project.metadata.title} | Arslan Ahmed Naseem`,
    description: project.metadata.description,
    alternates: {
      canonical: projectUrl,
      languages: {
        "en-US": projectUrl,
      },
    },
    openGraph: {
      title: `${project.metadata.title} | Arslan Ahmed Naseem`,
      description: project.metadata.description,
      url: projectUrl,
      siteName: "Arslan Ahmed Portfolio",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.metadata.title} | Arslan Ahmed Naseem`,
      description: project.metadata.description,
      images: [ogImage],
    },
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

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  // Define custom MDX components for consistent styling
  const components = {
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-heading font-bold mt-12 mb-4 text-foreground" {...props} />,
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-heading font-semibold mt-8 mb-3 text-foreground" {...props} />,
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-secondary-text leading-relaxed mb-6" {...props} />,
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc list-inside space-y-2 mb-6 text-secondary-text" {...props} />,
    li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
    strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-foreground" {...props} />,
  };

  return (
    <article className="min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": project.metadata.title,
            "description": project.metadata.description,
            "applicationCategory": "WebApplication",
            "operatingSystem": "Any",
            "author": {
              "@type": "Person",
              "name": "Arslan Ahmed Naseem",
              "url": "https://arslanahmed.me"
            },
            "url": project.metadata.liveUrl || `https://arslanahmed.me/projects/${slug}`,
            "image": project.metadata.thumbnail.startsWith("http")
              ? project.metadata.thumbnail
              : `https://arslanahmed.me${project.metadata.thumbnail}`,
            ...(project.metadata.githubUrl && { "codeRepository": project.metadata.githubUrl })
          }),
        }}
      />
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-8 pt-20 pb-10 md:pt-32 md:pb-16">
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
                Visit Website
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
                {project.metadata.webGithubUrl ? "App Source" : "View Source"}
              </a>
            )}
            {project.metadata.webGithubUrl && (
              <a
                href={project.metadata.webGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                Website Source
              </a>
            )}
            {project.metadata.downloadUrl && (
              <a
                href={project.metadata.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-emerald-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Download className="mr-2 h-4 w-4" />
                Download App
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-8 md:mt-12 grid md:grid-cols-[1fr_300px] gap-12 items-start">
        <div className="space-y-12">
          {project.metadata.videoUrl && getYouTubeId(project.metadata.videoUrl) && (
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeId(project.metadata.videoUrl)}`}
                title={`${project.metadata.title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={project.content} components={components} />
          </div>
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
          
          <ShareProject title={project.metadata.title} slug={slug} />
        </aside>
      </div>

      {/* Next / Previous Navigation */}
      <div className="container mx-auto px-4 md:px-8 mt-24 border-t border-border pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col items-start w-full md:w-1/2 p-4 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all">
              <span className="text-xs font-medium text-secondary-text mb-1 flex items-center gap-1.5 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous
              </span>
              <span className="font-heading font-bold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">{prevProject.metadata.title}</span>
            </Link>
          ) : <div className="w-full md:w-1/2" />}
          
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col md:items-end md:text-right w-full md:w-1/2 p-4 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all">
              <span className="text-xs font-medium text-secondary-text mb-1 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Next <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="font-heading font-bold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">{nextProject.metadata.title}</span>
            </Link>
          ) : <div className="w-full md:w-1/2" />}
        </div>
      </div>
    </article>
  );
}
