import { Button } from '@workspace/elu-ui/components/button';
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Component Demo</h1>
          <p className="text-muted-foreground text-lg">
            探索和測試各種 UI 元件的展示範例
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component) => (
            <Link
              key={component.name}
              href={component.href}
              className="group block p-6 border rounded-lg hover:border-primary hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {component.name}
              </h2>
              <p className="text-muted-foreground text-sm">
                {component.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 border rounded-lg bg-muted/30">
          <h3 className="text-lg font-semibold mb-2">快速開始</h3>
          <p className="text-sm text-muted-foreground mb-4">
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
