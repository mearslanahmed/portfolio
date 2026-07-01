import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  order?: number;
}

export function getProjectSlugs() {
  const projectsDir = path.join(contentDirectory, 'projects');
  if (!fs.existsSync(projectsDir)) return [];
  return fs.readdirSync(projectsDir).filter(file => file.endsWith('.mdx'));
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `projects/${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as ProjectMetadata,
    content,
  };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map(slug => getProjectBySlug(slug))
    .filter(project => project !== null) as { slug: string; metadata: ProjectMetadata; content: string }[];
  
  return projects.sort((a, b) => {
    const orderA = a.metadata.order ?? 999;
    const orderB = b.metadata.order ?? 999;
    return orderA - orderB;
  });
}
