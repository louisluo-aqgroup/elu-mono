import { Button } from '@eluelu/elu-ui/components/button';
import Link from 'next/link';

const components = [
  {
    name: 'Accordion',
    href: '/components/accordion',
    description: '手風琴元件，展示單一與多重展開模式、FAQ 等情境',
  },
  {
    name: 'Button',
    href: '/components/button',
    description: '按鈕元件的各種樣式和用法展示',
  },
  {
    name: 'Input',
    href: '/components/input',
    description: '輸入框元件，支援多種圓角樣式和輸入類型',
  },
  {
    name: 'Scroll Area',
    href: '/components/scroll-area',
    description: '可滾動區域元件，提供自訂樣式的滾動條',
  },
  {
    name: 'Typography',
    href: '/components/typography',
    description: '優雅且一致的文字排版系統展示',
  },
  // 未來可以在這裡添加更多元件
];

const Page: RC = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="mx-auto max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Component Demo</h1>
        <p className="text-muted-foreground text-lg">
          探索和測試各種 UI 元件的展示範例
        </p>
      </div>

      <section className="space-y-6" id="components">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">元件範例</h2>
          <p className="text-muted-foreground text-sm">
            探索各個元件頁面，查看實際使用範例與 props 說明。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {components.map((component) => (
            <Link
              className="group hover:border-primary block rounded-lg border p-6 transition-all hover:shadow-md"
              href={component.href}
              key={component.name}
            >
              <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
                {component.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="bg-muted/30 mt-12 rounded-lg border p-6"
        id="quickstart"
      >
        <h2 className="mb-2 text-lg font-semibold">快速開始</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          點擊上方的元件卡片即可查看該元件的各種用法和展示範例
        </p>
        <Button asChild>
          <Link href="/components/button">查看 Button 元件</Link>
        </Button>
      </section>
    </div>
  </div>
);

export default Page;
