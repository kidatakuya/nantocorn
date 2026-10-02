import { About } from '@/components/site/about'
import { BlogSection } from '@/components/site/blog-section'
import { Crops } from '@/components/site/crops'
import { Hero } from '@/components/site/hero'
import { Season } from '@/components/site/season'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Crops />
        <Season />
        <BlogSection />
      </main>
      <SiteFooter />
    </>
  )
}
