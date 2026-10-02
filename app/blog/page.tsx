import type { Metadata } from 'next'
import { BlogPostList } from '@/components/site/blog-post-list'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { getAllBlogPosts } from '@/lib/blog-posts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '畑だより | 〇〇農園',
  description: '〇〇農園の畑の様子や、作物のおいしい食べ方をお届けします。',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <>
      <SiteHeader />
      <main className="min-h-[60vh]">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <span className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              BLOG
            </span>
            <h1 className="mt-3 font-serif text-3xl font-medium tracking-wide md:text-4xl">畑だより</h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              畑の様子や、作物のおいしい食べ方をお届けします。
            </p>
            <BlogPostList posts={posts} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
