import Image from 'next/image'
import { SectionLabel } from './section-label'

export function Crops() {
  return (
    <section id="crops" className="scroll-mt-16 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel en="CROPS" ja="育てているもの" />

        <article className="mt-16 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/corn.png"
              alt="皮をむいた収穫したてのとうもろこし"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block bg-accent px-3 py-1 text-xs tracking-widest text-accent-foreground">
              MAIN
            </span>
            <h3 className="mt-6 font-serif text-3xl font-medium md:text-4xl">とうもろこし</h3>
            <p className="mt-2 text-xs tracking-[0.3em] text-muted-foreground">SWEET CORN</p>
            <p className="mt-8 leading-loose text-muted-foreground">
              農園の主役。粒がぎっしりと詰まり、かじった瞬間に果汁があふれる甘さが自慢です。
              収穫したその日のうちにお届けできるよう、朝採りにこだわっています。
              生でも食べられるほどのみずみずしさを、ぜひ味わってください。
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
              <div>
                <dt className="text-muted-foreground">収穫時期</dt>
                <dd className="mt-1 font-serif text-lg">6月 〜 8月</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">おすすめ</dt>
                <dd className="mt-1 font-serif text-lg">焼き・茹で・生</dd>
              </div>
            </dl>
          </div>
        </article>

        <article className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden md:order-2">
            <Image
              src="/images/onion.png"
              alt="収穫した玉ねぎ"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <h3 className="font-serif text-3xl font-medium md:text-4xl">玉ねぎ</h3>
            <p className="mt-2 text-xs tracking-[0.3em] text-muted-foreground">ONION</p>
            <p className="mt-8 leading-loose text-muted-foreground">
              じっくり育てた玉ねぎは、火を通すととろけるような甘みに。
              しっかりと乾燥させてから出荷するため、保存性にも優れています。
              毎日の料理に欠かせない、頼れる存在です。
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
              <div>
                <dt className="text-muted-foreground">収穫時期</dt>
                <dd className="mt-1 font-serif text-lg">5月 〜 6月</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">おすすめ</dt>
                <dd className="mt-1 font-serif text-lg">炒め・煮込み</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  )
}
