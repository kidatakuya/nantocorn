import { About } from '@/components/site/about'
import { Crops } from '@/components/site/crops'
import { Hero } from '@/components/site/hero'
import { Season } from '@/components/site/season'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Crops />
        <Season />
      </main>
      <SiteFooter />
    </>
  )
}
