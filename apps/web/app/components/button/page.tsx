import { Button } from "@workspace/ui/components/button"
import { ComponentPreview } from "@/components/component-preview"
import { Download, Mail, Loader2 } from "lucide-react"

export default function ButtonPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Button</h1>
        <p className="text-muted-foreground">
          按鈕元件用於觸發動作或事件，支援多種樣式和尺寸變體。
        </p>
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
      <ComponentPreview
        title="尺寸"
        description="三種不同的尺寸大小供選擇"
      >
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
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
      <ComponentPreview
        title="狀態"
        description="按鈕的不同狀態展示"
      >
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
</Button>`}</code>
        </pre>
      </div>
    </div>
  )
}
