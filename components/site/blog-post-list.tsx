import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-posts'

export function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="mt-10 divide-y divide-border border-y border-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-3 py-6 transition-colors hover:bg-secondary/60 md:grid-cols-[8rem_1fr_auto] md:items-center md:gap-8 md:px-4"
          >
            <time dateTime={post.dateTime} className="text-sm text-muted-foreground">
              {post.date}
            </time>
            <span>
              {post.category && (
                <span className="inline-block text-xs tracking-wider text-muted-foreground">{post.category}</span>
              )}
              <span className="mt-2 block font-serif text-lg font-medium transition-colors group-hover:text-primary md:text-xl">
                {post.title}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{post.excerpt}</span>
            </span>
            <span aria-hidden="true" className="hidden text-xl text-muted-foreground transition-transform group-hover:translate-x-1 md:block">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
