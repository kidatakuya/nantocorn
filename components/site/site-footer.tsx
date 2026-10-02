import { Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { Logo } from './logo'
import { InstagramIcon } from './instagram-icon'

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="flex items-center gap-3 text-xs tracking-[0.4em] text-primary-foreground/70">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              CONTACT
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-wide md:text-4xl">お問い合わせ</h2>
            <p className="mt-6 max-w-sm leading-relaxed text-primary-foreground/75">
              ご購入や取材、畑の見学など、お気軽にご連絡ください。
            </p>
          </div>
          <ul className="flex flex-col justify-end gap-6">
            <li className="flex items-center gap-4">
              <Mail className="size-5 text-accent" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="font-serif text-lg underline-offset-4 hover:underline">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <InstagramIcon className="size-5 text-accent" />
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg underline-offset-4 hover:underline"
              >
                @{siteConfig.instagram.username}
                <span className="sr-only">（Instagram・新しいタブで開きます）</span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="size-5 text-accent" aria-hidden="true" />
              <span className="font-serif text-lg">{siteConfig.location}</span>
            </li>
          </ul>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-primary-foreground/15 pt-10 md:flex-row md:items-center md:justify-between">
          <Logo inverted />
          <p className="text-xs tracking-wider text-primary-foreground/60">
            © {new Date().getFullYear()} {siteConfig.nameEn}
          </p>
        </div>
      </div>
    </footer>
  )
}
