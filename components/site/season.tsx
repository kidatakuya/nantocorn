import { cn } from "@/lib/utils";
import { SectionLabel } from "./section-label";

const months = Array.from({ length: 12 }, (_, i) => i + 1);

const crops = [
  { name: "とうもろこし", months: [6, 7, 8], className: "bg-accent" },
  { name: "玉ねぎ", months: [5, 6], className: "bg-primary" },
];

export function Season() {
  return (
    <section id="season" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel en="SEASON" ja="収穫カレンダー" />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          天候により前後することがあります。
        </p>

        <div className="mt-12 overflow-x-auto ">
          <table className="w-full border-collapse text-sm min-w-160">
            <caption className="sr-only">作物ごとの収穫時期</caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-32 pb-4 text-left font-normal text-muted-foreground"
                >
                  作物
                </th>
                {months.map((m) => (
                  <th
                    key={m}
                    scope="col"
                    className="pb-4 text-center font-normal text-muted-foreground"
                  >
                    {m}月
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {crops.map((crop) => (
                <tr key={crop.name} className="border-t border-border">
                  <th
                    scope="row"
                    className="py-5 text-left font-serif text-base font-medium"
                  >
                    {crop.name}
                  </th>
                  {months.map((m) => {
                    const active = crop.months.includes(m);
                    return (
                      <td key={m} className="px-0.5 py-5">
                        <div
                          className={cn(
                            "h-2 rounded-full",
                            active ? crop.className : "bg-muted",
                          )}
                        />
                        {active && (
                          <span className="sr-only hidden">{m}月 収穫</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
