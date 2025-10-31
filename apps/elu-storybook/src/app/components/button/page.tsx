import { Button } from '@eluelu/elu-ui/components/button';
import { Download, Loader2, Mail } from 'lucide-react';

import { ComponentPreview } from '@/components/component-preview';

export default function ButtonPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <div>
        <h1 className="mb-2 text-3xl font-bold">Button</h1>
        <p className="text-muted-foreground">
          按鈕元件用於觸發動作或事件，支援多種樣式和尺寸變體。
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
                <td className="px-4 py-2 font-mono">variant</td>
                <td className="px-4 py-2 font-mono text-xs">
                  "default" | "destructive" | "outline" | "secondary" | "accent"
                  | "accent-outline" | "ghost" | "link"
                </td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">按鈕的樣式變體</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">size</td>
                <td className="px-4 py-2 font-mono text-xs">
                  "default" | "sm" | "lg" | "icon"
                </td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">按鈕的尺寸大小</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">radius</td>
                <td className="px-4 py-2 font-mono text-xs">
                  "default" | "pill" | "circle" | "none"
                </td>
                <td className="px-4 py-2 font-mono">"default"</td>
                <td className="px-4 py-2">按鈕的圓角樣式</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">color</td>
                <td className="px-4 py-2 font-mono text-xs">
                  "primary" | "secondary" | "accent" | "destructive"
                </td>
                <td className="px-4 py-2 font-mono">"primary"</td>
                <td className="px-4 py-2">搭配 foreground 使用的顏色主題</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">foreground</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">啟用前景色樣式，適用於深色背景</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">asChild</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">
                  將按鈕樣式套用到子元素（使用 Radix Slot）
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono">disabled</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 font-mono">false</td>
                <td className="px-4 py-2">禁用按鈕</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-muted/30 mt-12 space-y-4 rounded-lg border p-6">
        <h3 className="text-lg font-semibold">使用範例</h3>
        <pre className="overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
          <code>{`import { Button } from "@eluelu/elu-ui/components/button"

// 基本用法
<Button>Click me</Button>

// 不同樣式
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="accent-outline">Accent Outline</Button>

// 不同尺寸
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// 不同圓角樣式
<Button radius="default">標準圓角</Button>
<Button radius="pill">兩邊圓角（膠囊形）</Button>
<Button radius="circle" size="icon">圓形</Button>
<Button radius="none">無圓角</Button>

// 實際應用範例
<Button variant="outline" radius="pill">追蹤</Button>
<Button variant="accent" radius="pill">訂閱</Button>

// 帶圖示
<Button>
  <Mail />
  Login with Email
</Button>

// 禁用狀態
<Button disabled>Disabled</Button>

// 圖示按鈕
<Button size="icon">
  <Mail />
</Button>

// 圓形圖示按鈕
<Button size="icon" radius="circle">
  <Mail />
</Button>

// 前景色樣式 - 適用於深色背景（如 footer、header）
<Button variant="ghost" color="primary" foreground>
  Ghost on Primary
</Button>
<Button variant="link" color="secondary" foreground>
  Link on Secondary
</Button>
<Button size="icon" radius="circle" color="accent" foreground>
  <Mail />
</Button>`}</code>
        </pre>
      </div>
      {/* Variants */}
      <ComponentPreview
        description="Button 元件提供多種樣式變體，適用於不同的使用場景"
        title="樣式變體"
      >
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="accent-outline">Accent Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </ComponentPreview>

      {/* Sizes */}
      <ComponentPreview description="三種不同的尺寸大小供選擇" title="尺寸">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </ComponentPreview>

      {/* Radius */}
      <ComponentPreview
        description="支援不同的圓角樣式，從標準圓角到完全圓形"
        title="圓角樣式"
      >
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            <Button radius="default">Default</Button>
            <Button radius="pill">Pill</Button>
            <Button radius="circle" size="icon">
              <Mail />
            </Button>
            <Button radius="none">None</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button radius="pill" variant="outline">
              追蹤
            </Button>
            <Button radius="pill" variant="accent">
              訂閱
            </Button>
            <Button radius="circle" size="icon" variant="outline">
              <Download />
            </Button>
          </div>
        </div>
      </ComponentPreview>

      {/* With Icons */}
      <ComponentPreview
        description="按鈕可以包含圖示，增加視覺識別度"
        title="帶圖示"
      >
        <Button>
          <Mail />
          Login with Email
        </Button>
        <Button variant="secondary">
          <Download />
          Download
        </Button>
        <Button size="sm">
          <Loader2 className="animate-spin" />
          Loading
        </Button>
      </ComponentPreview>

      {/* Icon Only */}
      <ComponentPreview
        description="只包含圖示的按鈕，適合工具列或緊湊的介面"
        title="圖示按鈕"
      >
        <Button size="icon" variant="outline">
          <Mail />
        </Button>
        <Button size="icon" variant="ghost">
          <Download />
        </Button>
        <Button size="icon">
          <Loader2 />
        </Button>
      </ComponentPreview>

      {/* States */}
      <ComponentPreview description="按鈕的不同狀態展示" title="狀態">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button>
          <Loader2 className="animate-spin" />
          Loading
        </Button>
      </ComponentPreview>

      {/* Width Variations */}
      <ComponentPreview
        className="flex-col items-stretch"
        description="按鈕可以自適應內容或填滿容器"
        title="寬度變化"
      >
        <Button>Auto Width</Button>
        <Button className="w-full">Full Width</Button>
      </ComponentPreview>

      {/* Pill Width Variations */}
      <ComponentPreview
        className="flex-col items-stretch"
        description="Pill 按鈕的自適應內容與填滿容器範例"
        title="Pill 樣式 - 寬度變化"
      >
        <div className="flex flex-wrap gap-3">
          <Button radius="pill">追蹤</Button>
          <Button radius="pill" variant="outline">
            取消追蹤
          </Button>
          <Button radius="pill" variant="accent">
            立即訂閱我們的頻道
          </Button>
        </div>
        <Button className="w-full" radius="pill">
          填滿容器的 Pill 按鈕
        </Button>
        <Button className="w-full" radius="pill" variant="outline">
          填滿容器的 Outline Pill
        </Button>
        <div className="flex gap-3">
          <Button className="flex-1" radius="pill">
            彈性寬度 1
          </Button>
          <Button className="flex-1" radius="pill" variant="accent">
            彈性寬度 2
          </Button>
        </div>
      </ComponentPreview>

      {/* Combinations */}
      <ComponentPreview
        className="flex-col gap-2 md:flex-row"
        description="實際應用中的按鈕組合"
        title="組合範例"
      >
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">Skip</Button>
          <Button variant="secondary">Back</Button>
          <Button>Next</Button>
        </div>
      </ComponentPreview>

      {/* Foreground */}
      <ComponentPreview
        description="使用 foreground 和 color 屬性來適應深色背景，常用於 footer、header 等區域"
        title="前景色樣式 (Foreground)"
      >
        <div className="w-full space-y-6">
          {/* Primary background example */}
          <div className="bg-primary space-y-3 rounded-lg p-6">
            <p className="text-primary-foreground mb-3 text-sm font-medium">
              Primary 背景範例
            </p>
            <div className="flex flex-wrap gap-3">
              <Button color="primary" foreground variant="ghost">
                Ghost
              </Button>
              <Button color="primary" foreground variant="link">
                Link
              </Button>
              <Button color="primary" foreground radius="circle" size="icon">
                <Mail />
              </Button>
            </div>
          </div>

          {/* Secondary background example */}
          <div className="bg-secondary space-y-3 rounded-lg p-6">
            <p className="text-secondary-foreground mb-3 text-sm font-medium">
              Secondary 背景範例
            </p>
            <div className="flex flex-wrap gap-3">
              <Button color="secondary" foreground variant="ghost">
                Ghost
              </Button>
              <Button color="secondary" foreground variant="link">
                Link
              </Button>
              <Button color="secondary" foreground radius="circle" size="icon">
                <Download />
              </Button>
            </div>
          </div>

          {/* Accent background example */}
          <div className="bg-accent space-y-3 rounded-lg p-6">
            <p className="text-accent-foreground mb-3 text-sm font-medium">
              Accent 背景範例
            </p>
            <div className="flex flex-wrap gap-3">
              <Button color="accent" foreground variant="ghost">
                Ghost
              </Button>
              <Button color="accent" foreground variant="link">
                Link
              </Button>
              <Button color="accent" foreground radius="circle" size="icon">
                <Loader2 />
              </Button>
            </div>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
