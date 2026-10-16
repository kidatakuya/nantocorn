import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { siteUrl } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!siteUrl) {
    throw new Error(
      "Set SITE_URL to the public site origin to generate the sitemap.",
    );
  }

  const posts = await getAllBlogPosts();

  return [
    {
      url: new URL("/", siteUrl).toString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/blog", siteUrl).toString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: new URL(`/blog/${encodeURIComponent(post.slug)}`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
