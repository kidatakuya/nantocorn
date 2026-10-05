import { navItems, siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";
import { InstagramIcon } from "./instagram-icon";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-6 md:gap-8">
          <nav aria-label="メインナビゲーション" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm tracking-wider">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="text-sm tracking-wider underline underline-offset-4 md:hidden"
          >
            お問い合わせ
          </a>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 transition-colors hover:text-foreground"
          >
            <InstagramIcon className="size-5" />
            <span className="sr-only">Instagram（新しいタブで開きます）</span>
          </a>
        </div>
      </div>
    </header>
  );
}
