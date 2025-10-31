import { Button } from '@eluelu/elu-ui/components/button';
import Link from 'next/link';

const components = [
  {
    name: 'Button',
    href: '/components/button',
    description: '按鈕元件的各種樣式和用法展示',
  },
  {
    name: 'Typography',
    href: '/components/typography',
    description: '優雅且一致的文字排版系統展示',
  },
  // 未來可以在這裡添加更多元件
];

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Component Demo</h1>
          <p className="text-muted-foreground text-lg">
            探索和測試各種 UI 元件的展示範例
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {components.map((component) => (
            <Link
              className="group hover:border-primary block rounded-lg border p-6 transition-all hover:shadow-md"
              href={component.href}
              key={component.name}
            >
              <h2 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
                {component.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {component.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="bg-muted/30 mt-12 rounded-lg border p-6">
          <h3 className="mb-2 text-lg font-semibold">快速開始</h3>
          <p className="text-muted-foreground mb-4 text-sm">
            點擊上方的元件卡片即可查看該元件的各種用法和展示範例
          </p>
          <Button asChild>
            <Link href="/components/button">查看 Button 元件</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
