// ロゴや農園名はここを書き換えるだけでサイト全体に反映されます。
// ロゴ画像は public/ フォルダに置き、パスを logo.src に指定してください。
export const siteConfig = {
  name: '〇〇農園',
  nameEn: 'MARUMARU FARM',
  description:
    'とうもろこしを中心に、玉ねぎを育てている農園です。土づくりから収穫まで、ひとつひとつ丁寧に。',
  logo: {
    src: '/logo.svg',
    alt: '〇〇農園 ロゴ',
    width: 40,
    height: 40,
  },
  location: '〇〇県〇〇市',
  email: 'info@example.com',
  // Instagram のユーザー名（@なし）を入れてください
  instagram: {
    username: 'your_farm',
    url: 'https://www.instagram.com/your_farm/',
  },
}

export const navItems = [
  { label: '想い', href: '#about' },
  { label: '作物', href: '#crops' },
  { label: '収穫時期', href: '#season' },
  { label: 'お問い合わせ', href: '#contact' },
]
