import { SectionLabel } from './section-label'

const values = [
  { title: '土づくり', body: '堆肥を使い、時間をかけて土を育てる。おいしさの根っこは、畑の土にあります。' },
  { title: '朝採り', body: 'とうもろこしは鮮度が命。甘さがいちばん乗った早朝に収穫します。' },
  { title: '少量を丁寧に', body: '目の届く範囲で、一本一本・一玉一玉の状態を確かめながら育てています。' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel en="ABOUT" ja="私たちの想い" />
          </div>
          <div className="md:col-span-7">
            <p className="text-pretty font-serif text-2xl leading-relaxed md:text-3xl md:leading-relaxed">
              手をかけた分だけ、
              <br />
              畑はこたえてくれる。
            </p>
            <p className="mt-8 leading-loose text-muted-foreground">
              私たちは、とうもろこしをメインに、玉ねぎを育てている小さな農園です。
              派手なことはしません。毎日畑に立ち、土と作物の声を聞きながら、
              ただ「おいしい」と言ってもらえるものを作り続けています。
            </p>
          </div>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title} className="bg-background p-8 md:p-10">
              <span className="font-serif text-sm text-accent-foreground/50">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-serif text-xl font-medium">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
