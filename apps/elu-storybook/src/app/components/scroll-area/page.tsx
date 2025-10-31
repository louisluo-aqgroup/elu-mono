import { ScrollArea } from '@eluelu/elu-ui/components/scroll-area';
import { Separator } from '@eluelu/elu-ui/components/separator';

import { ComponentPreview } from '@/components/component-preview';

export default function ScrollAreaPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <div>
        <h1 className="mb-2 text-3xl font-bold">Scroll Area</h1>
        <p className="text-muted-foreground">
          可滾動區域元件，提供自訂樣式的滾動條，支援垂直和水平滾動。
        </p>
      </div>

      {/* Props Table */}
      <div className="bg-muted/30 space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">Props</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left font-semibold">Prop</th>
                <th className="px-4 py-2 text-left font-semibold">Type</th>
                <th className="px-4 py-2 text-left font-semibold">Default</th>
                <th className="px-4 py-2 text-left font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2 font-mono">className</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">額外的 CSS 類名</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">children</td>
                <td className="px-4 py-2 font-mono text-xs">ReactNode</td>
                <td className="px-4 py-2 font-mono">-</td>
                <td className="px-4 py-2">滾動區域的內容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-muted/30 mt-12 space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">使用範例</h3>
        <pre className="overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
          <code>{`import { ScrollArea } from "@eluelu/elu-ui/components/scroll-area"

// 基本用法
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    {/* 你的內容 */}
  </div>
</ScrollArea>

// 帶分隔線的列表
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    {items.map((item) => (
      <div key={item}>
        <div className="text-sm">{item}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </div>
</ScrollArea>`}</code>
        </pre>
      </div>

      {/* Basic Example */}
      <ComponentPreview
        description="基本的垂直滾動區域，使用 accent 顏色和圓角樣式的滾動條"
        title="基本範例"
      >
        <ScrollArea className="h-72 w-48 rounded-md border p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">標籤</h4>
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="text-sm">
              標籤 {i + 1}
              {i < 49 && <Separator className="my-2" />}
            </div>
          ))}
        </ScrollArea>
      </ComponentPreview>

      {/* With Content */}
      <ComponentPreview
        description="包含豐富內容的滾動區域範例"
        title="內容範例"
      >
        <ScrollArea className="h-96 w-full max-w-md rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-base font-semibold">關於 ELUELU</h4>
            <div className="space-y-4 text-sm">
              <p>
                ELUELU 是一個現代化的 UI
                元件庫，專為建立優雅且高效的使用者介面而設計。
              </p>
              <p>
                我們的元件庫基於 Radix UI 和 Tailwind
                CSS，提供了高度可自訂且易於使用的元件。
              </p>
              <h5 className="font-semibold">主要特色</h5>
              <ul className="list-disc space-y-2 pl-4">
                <li>完全可自訂的主題系統</li>
                <li>支援深色模式</li>
                <li>無障礙設計</li>
                <li>TypeScript 支援</li>
                <li>響應式設計</li>
                <li>豐富的元件庫</li>
              </ul>
              <h5 className="font-semibold">元件列表</h5>
              <ul className="list-disc space-y-2 pl-4">
                <li>Button - 按鈕元件</li>
                <li>Input - 輸入框元件</li>
                <li>Typography - 文字排版</li>
                <li>Scroll Area - 滾動區域</li>
                <li>Separator - 分隔線</li>
                <li>Tooltip - 提示框</li>
                <li>更多元件持續開發中...</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </ComponentPreview>

      {/* Horizontal Scroll */}
      <ComponentPreview
        description="水平滾動區域範例"
        title="水平滾動"
      >
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="bg-accent text-accent-foreground h-32 w-32 shrink-0 rounded-md p-4"
              >
                <div className="text-sm font-medium">項目 {i + 1}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </ComponentPreview>

      {/* Multiple Scroll Areas */}
      <ComponentPreview
        className="flex-col items-stretch gap-4 md:flex-row"
        description="多個滾動區域並排使用"
        title="多個滾動區域"
      >
        <ScrollArea className="h-72 flex-1 rounded-md border p-4">
          <h4 className="mb-4 text-sm font-medium">清單 A</h4>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="text-sm">
              項目 A-{i + 1}
              {i < 29 && <Separator className="my-2" />}
            </div>
          ))}
        </ScrollArea>
        <ScrollArea className="h-72 flex-1 rounded-md border p-4">
          <h4 className="mb-4 text-sm font-medium">清單 B</h4>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="text-sm">
              項目 B-{i + 1}
              {i < 29 && <Separator className="my-2" />}
            </div>
          ))}
        </ScrollArea>
      </ComponentPreview>

      {/* Styled Content */}
      <ComponentPreview
        description="帶有樣式內容的滾動區域"
        title="樣式化內容"
      >
        <ScrollArea className="h-96 w-full max-w-md rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-base font-semibold">通知列表</h4>
            <div className="space-y-3">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-accent/50 rounded-lg border p-3 transition-colors"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">通知 {i + 1}</span>
                    <span className="text-muted-foreground text-xs">
                      {i + 1} 分鐘前
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    這是通知內容的描述文字，可能會包含更多詳細資訊。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </ComponentPreview>
    </div>
  );
}
