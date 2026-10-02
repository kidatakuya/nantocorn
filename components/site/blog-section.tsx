import Link from 'next/link'
import { getLatestBlogPosts } from '@/lib/blog-posts'
import { BlogPostList } from './blog-post-list'
import { SectionLabel } from './section-label'

const HOME_POST_LIMIT = 5

export async function BlogSection() {
  const { posts, totalCount } = await getLatestBlogPosts(HOME_POST_LIMIT + 1)

  return (
    <section id="blog" className="scroll-mt-16 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel en="BLOG" ja="畑だより" />
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          畑の様子や、作物のおいしい食べ方をお届けします。
        </p>
        <BlogPostList posts={posts.slice(0, HOME_POST_LIMIT)} />
        {totalCount >= 6 && (
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex min-h-12 items-center justify-center gap-4 border border-primary px-8 text-sm tracking-wider transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              もっと見る
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
