import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/mdx';

/**
 * Generates /sitemap.xml for SEO crawlers.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://arslanahmed.me';
  const projects = await getAllProjects();

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    ...projects.map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return routes;
}
