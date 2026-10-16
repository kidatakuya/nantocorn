// ロゴや農園名はここを書き換えるだけでサイト全体に反映されます。
// ロゴ画像は public/ フォルダに置き、パスを logo.src に指定してください。
export const siteConfig = {
  name: "〇〇農園",
  nameEn: "MARUMARU FARM",
  description:
    "とうもろこしを中心に、玉ねぎを育てている農園です。土づくりから収穫まで、ひとつひとつ丁寧に。",
  logo: {
    src: "/logo.svg",
    alt: "〇〇農園 ロゴ",
    width: 40,
    height: 40,
  },
  location: "奈良県桜井市",
  email: "info@example.com",
  // Instagram のユーザー名（@なし）を入れてください
  instagram: {
    username: "nantocorn",
    url: "https://www.instagram.com/nantocorn?stkn=MWhvdnNqcXlnbmNsYQ%3D%3D",
  },
};

const configuredSiteUrl = process.env.SITE_URL?.trim();

if (configuredSiteUrl) {
  let parsedSiteUrl: URL;

  try {
    parsedSiteUrl = new URL(configuredSiteUrl);
  } catch {
    throw new Error("SITE_URL must be an absolute HTTP(S) URL.");
  }

  if (
    !["http:", "https:"].includes(parsedSiteUrl.protocol) ||
    parsedSiteUrl.pathname !== "/" ||
    parsedSiteUrl.search ||
    parsedSiteUrl.hash ||
    parsedSiteUrl.username ||
    parsedSiteUrl.password
  ) {
    throw new Error(
      "SITE_URL must be an origin only, such as https://example.com.",
    );
  }
}

export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

export const navItems = [
  { label: "想い", href: "/#about" },
  { label: "作物", href: "/#crops" },
  { label: "収穫時期", href: "/#season" },
  { label: "ブログ", href: "/#blog" },
  { label: "お問い合わせ", href: "/#contact" },
];
