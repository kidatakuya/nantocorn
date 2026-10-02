import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link href="/" className={cn('flex items-center gap-3', className)}>
      <Image
        src={siteConfig.logo.src || '/placeholder.svg'}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        className={cn('h-10 w-auto', inverted && 'brightness-0 invert')}
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-base font-medium tracking-wider">{siteConfig.name}</span>
        <span className="text-[10px] tracking-[0.3em] opacity-70">{siteConfig.nameEn}</span>
      </span>
    </Link>
  )
}
