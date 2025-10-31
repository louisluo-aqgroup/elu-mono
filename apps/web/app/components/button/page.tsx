import { Button } from "@workspace/ui/components/button";
import { ComponentPreview } from "@/components/component-preview";
import { Download, Mail, Loader2 } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Button</h1>
        <p className="text-muted-foreground">
          按鈕元件用於觸發動作或事件，支援多種樣式和尺寸變體。
        </p>
      </div>
      {/* Props Table */}
      <div className="space-y-4 p-6 border rounded-lg bg-muted/30">
        <h3 className="text-lg font-semibold">Props</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 font-semibold">Prop</th>
                <th className="text-left py-2 px-4 font-semibold">Type</th>
                <th className="text-left py-2 px-4 font-semibold">Default</th>
                <th className="text-left py-2 px-4 font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-2 px-4 font-mono">variant</td>
                <td className="py-2 px-4 font-mono text-xs">
                  "default" | "destructive" | "outline" | "secondary" | "accent"
                  | "accent-outline" | "ghost" | "link"
                </td>
                <td className="py-2 px-4 font-mono">"default"</td>
                <td className="py-2 px-4">按鈕的樣式變體</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">size</td>
                <td className="py-2 px-4 font-mono text-xs">
                  "default" | "sm" | "lg" | "icon"
                </td>
                <td className="py-2 px-4 font-mono">"default"</td>
                <td className="py-2 px-4">按鈕的尺寸大小</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">radius</td>
                <td className="py-2 px-4 font-mono text-xs">
                  "default" | "pill" | "circle" | "none"
                </td>
                <td className="py-2 px-4 font-mono">"default"</td>
                <td className="py-2 px-4">按鈕的圓角樣式</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">color</td>
                <td className="py-2 px-4 font-mono text-xs">
                  "primary" | "secondary" | "accent" | "destructive"
                </td>
                <td className="py-2 px-4 font-mono">"primary"</td>
                <td className="py-2 px-4">搭配 foreground 使用的顏色主題</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">foreground</td>
                <td className="py-2 px-4 font-mono text-xs">boolean</td>
                <td className="py-2 px-4 font-mono">false</td>
                <td className="py-2 px-4">啟用前景色樣式，適用於深色背景</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">asChild</td>
                <td className="py-2 px-4 font-mono text-xs">boolean</td>
                <td className="py-2 px-4 font-mono">false</td>
                <td className="py-2 px-4">
                  將按鈕樣式套用到子元素（使用 Radix Slot）
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">disabled</td>
                <td className="py-2 px-4 font-mono text-xs">boolean</td>
                <td className="py-2 px-4 font-mono">false</td>
                <td className="py-2 px-4">禁用按鈕</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Example */}
      <div className="space-y-4 mt-12 p-6 border rounded-lg bg-muted/30">
        <h3 className="text-lg font-semibold">使用範例</h3>
        <pre className="p-4 bg-black text-white rounded-md overflow-x-auto text-sm">
          <code>{`import { Button } from "@workspace/ui/components/button"

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
        title="樣式變體"
        description="Button 元件提供多種樣式變體，適用於不同的使用場景"
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
      <ComponentPreview title="尺寸" description="三種不同的尺寸大小供選擇">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </ComponentPreview>

      {/* Radius */}
      <ComponentPreview
        title="圓角樣式"
        description="支援不同的圓角樣式，從標準圓角到完全圓形"
      >
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-wrap gap-3">
            <Button radius="default">Default</Button>
            <Button radius="pill">Pill</Button>
            <Button radius="circle" size="icon">
              <Mail />
            </Button>
            <Button radius="none">None</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" radius="pill">
              追蹤
            </Button>
            <Button variant="accent" radius="pill">
              訂閱
            </Button>
            <Button variant="outline" radius="circle" size="icon">
              <Download />
            </Button>
          </div>
        </div>
      </ComponentPreview>

      {/* With Icons */}
      <ComponentPreview
        title="帶圖示"
        description="按鈕可以包含圖示，增加視覺識別度"
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
        title="圖示按鈕"
        description="只包含圖示的按鈕，適合工具列或緊湊的介面"
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
      <ComponentPreview title="狀態" description="按鈕的不同狀態展示">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button>
          <Loader2 className="animate-spin" />
          Loading
        </Button>
      </ComponentPreview>

      {/* Width Variations */}
      <ComponentPreview
        title="寬度變化"
        description="按鈕可以自適應內容或填滿容器"
        className="flex-col items-stretch"
      >
        <Button>Auto Width</Button>
        <Button className="w-full">Full Width</Button>
      </ComponentPreview>

      {/* Pill Width Variations */}
      <ComponentPreview
        title="Pill 樣式 - 寬度變化"
        description="Pill 按鈕的自適應內容與填滿容器範例"
        className="flex-col items-stretch"
      >
        <div className="flex flex-wrap gap-3">
          <Button radius="pill">追蹤</Button>
          <Button variant="outline" radius="pill">
            取消追蹤
          </Button>
          <Button variant="accent" radius="pill">
            立即訂閱我們的頻道
          </Button>
        </div>
        <Button radius="pill" className="w-full">
          填滿容器的 Pill 按鈕
        </Button>
        <Button variant="outline" radius="pill" className="w-full">
          填滿容器的 Outline Pill
        </Button>
        <div className="flex gap-3">
          <Button radius="pill" className="flex-1">
            彈性寬度 1
          </Button>
          <Button variant="accent" radius="pill" className="flex-1">
            彈性寬度 2
          </Button>
        </div>
      </ComponentPreview>

      {/* Combinations */}
      <ComponentPreview
        title="組合範例"
        description="實際應用中的按鈕組合"
        className="flex-col md:flex-row gap-2"
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
        title="前景色樣式 (Foreground)"
        description="使用 foreground 和 color 屬性來適應深色背景，常用於 footer、header 等區域"
      >
        <div className="space-y-6 w-full">
          {/* Primary background example */}
          <div className="p-6 bg-primary rounded-lg space-y-3">
            <p className="text-primary-foreground text-sm font-medium mb-3">
              Primary 背景範例
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" color="primary" foreground>
                Ghost
              </Button>
              <Button variant="link" color="primary" foreground>
                Link
              </Button>
              <Button size="icon" radius="circle" color="primary" foreground>
                <Mail />
              </Button>
            </div>
          </div>

          {/* Secondary background example */}
          <div className="p-6 bg-secondary rounded-lg space-y-3">
            <p className="text-secondary-foreground text-sm font-medium mb-3">
              Secondary 背景範例
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" color="secondary" foreground>
                Ghost
              </Button>
              <Button variant="link" color="secondary" foreground>
                Link
              </Button>
              <Button size="icon" radius="circle" color="secondary" foreground>
                <Download />
              </Button>
            </div>
          </div>

          {/* Accent background example */}
          <div className="p-6 bg-accent rounded-lg space-y-3">
            <p className="text-accent-foreground text-sm font-medium mb-3">
              Accent 背景範例
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" color="accent" foreground>
                Ghost
              </Button>
              <Button variant="link" color="accent" foreground>
                Link
              </Button>
              <Button size="icon" radius="circle" color="accent" foreground>
                <Loader2 />
              </Button>
            </div>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
