import {
  createClient,
  isMicroCMSRequestError,
  type MicroCMSImage,
  type MicroCMSListContent,
} from 'microcms-js-sdk'

const endpoint = 'blogs'

type MicroCMSCategory = string | { name?: string } | Array<string | { name?: string }>

type MicroCMSBlogPost = MicroCMSListContent & {
  title: string
  content: string
  eyecatch?: MicroCMSImage
  date: string
  category?: MicroCMSCategory
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  dateTime: string
  category: string
  excerpt: string
  content: string
  eyecatch?: MicroCMSImage
}

function getMicroCMSClient() {
  const apiKey = process.env.MICROCMS_API_KEY

  if (!apiKey) {
    throw new Error('MICROCMS_API_KEY is not set. Add it to your server environment.')
  }

  return createClient({
    serviceDomain: 'nantocorn',
    apiKey,
  })
}

function getCategoryName(category?: MicroCMSCategory): string {
  if (!category) {
    return ''
  }

  const categories = Array.isArray(category) ? category : [category]

  return categories
    .map((item) => (typeof item === 'string' ? item : item.name ?? ''))
    .filter(Boolean)
    .join('、')
}

function toBlogPost(post: MicroCMSBlogPost): BlogPost {
  const date = new Date(post.date)

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Article "${post.id}" has an invalid date field.`)
  }

  const dateTime = post.date.slice(0, 10)
  const excerpt = post.content
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const shortenedExcerpt = excerpt.length > 120 ? `${excerpt.slice(0, 120)}…` : excerpt

  return {
    slug: post.id,
    title: post.title,
    date: new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'Asia/Tokyo',
    }).format(date),
    dateTime,
    category: getCategoryName(post.category),
    excerpt: shortenedExcerpt,
    content: post.content,
    eyecatch: post.eyecatch,
  }
}

export async function getLatestBlogPosts(limit = 6) {
  const response = await getMicroCMSClient().getList<MicroCMSBlogPost>({
    endpoint,
    queries: {
      limit,
      orders: '-date',
    },
  })

  return {
    posts: response.contents.map(toBlogPost),
    totalCount: response.totalCount,
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getMicroCMSClient().getAllContents<MicroCMSBlogPost>({
    endpoint,
    queries: {
      orders: '-date',
    },
  })

  return posts.map(toBlogPost)
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await getMicroCMSClient().getListDetail<MicroCMSBlogPost>({
      endpoint,
      contentId: slug,
    })

    return toBlogPost(post)
  } catch (error) {
    if (isMicroCMSRequestError(error) && error.status === 404) {
      return null
    }

    throw error
  }
}
