import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { getBlogPost } from '@/lib/blog-posts'
import { siteConfig } from '@/lib/site-config'

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return { title: `記事が見つかりません | ${siteConfig.name}` }
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-[60vh]">
        <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <Link href="/blog" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            ← 畑だより一覧へ
          </Link>
          <header className="mt-10 border-b border-border pb-8">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <time dateTime={post.dateTime}>{post.date}</time>
              {post.category && <span>{post.category}</span>}
            </div>
            <h1 className="mt-5 font-serif text-3xl leading-relaxed font-medium md:text-4xl">{post.title}</h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </header>
          {post.eyecatch && (
            <Image
              src={post.eyecatch.url}
              alt={post.eyecatch.alt ?? post.title}
              width={post.eyecatch.width ?? 1200}
              height={post.eyecatch.height ?? 800}
              className="mt-10 h-auto w-full"
            />
          )}
          <div
            className="blog-content py-10 leading-loose text-foreground/85"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="border-t border-border pt-8">
            <Link href="/blog" className="text-sm underline underline-offset-4">
              畑だより一覧へ戻る
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
