import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden">
      <Image
        src="/images/hero-field.png"
        alt="夕暮れのとうもろこし畑"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 text-white md:pb-28">
        <p className="mb-6 text-xs tracking-[0.4em] text-white/80">CORN &amp; ONION FARM</p>
        <h1 className="text-balance font-serif text-4xl leading-snug font-medium md:text-6xl md:leading-snug">
          土と太陽が育てる、
          <br />
          まっすぐな甘さ。
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
          とうもろこしを中心に、玉ねぎを育てています。
          <br />
          季節の恵みを、畑からそのままお届けします。
        </p>
      </div>
    </section>
  )
}
