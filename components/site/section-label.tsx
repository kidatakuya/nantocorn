import { cn } from '@/lib/utils'

export function SectionLabel({ en, ja, className }: { en: string; ja: string; className?: string }) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="flex items-center gap-3 text-xs tracking-[0.4em] text-muted-foreground">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {en}
      </span>
      <h2 className="font-serif text-3xl font-medium tracking-wide md:text-4xl">{ja}</h2>
    </div>
  )
}
