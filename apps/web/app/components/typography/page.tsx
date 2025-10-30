import { Typography } from "@workspace/ui/components/typography"

export default function TypographyDemo() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <Typography variant="h1">Typography</Typography>
          <Typography variant="muted" className="mt-2">
            優雅且一致的文字排版系統
          </Typography>
        </div>

        {/* H1 */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">H1 - 主標題</Typography>
            <Typography variant="muted">
              使用 variant="h1"，預設渲染為 h1 標籤。未指定 variant 時，預設渲染為 div 標籤
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="h1">
              Taxing Laughter: The Joke Tax Chronicles
            </Typography>
          </div>
          <pre className="p-4 bg-muted rounded-md text-sm overflow-x-auto">
            <code>{`<Typography variant="h1">主標題</Typography>

// SEO 需求：視覺是 h1，但語意是 h2
<Typography variant="h1" as="h2">主標題</Typography>`}</code>
          </pre>
        </section>

        {/* H2 */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">H2 - 次標題</Typography>
            <Typography variant="muted">
              帶有底部邊框的次標題樣式
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="h2">
              The People of the Kingdom
            </Typography>
          </div>
        </section>

        {/* H3 */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">H3 - 三級標題</Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="h3">The Joke Tax</Typography>
          </div>
        </section>

        {/* H4 */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">H4 - 四級標題</Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="h4">People stopped telling jokes</Typography>
          </div>
        </section>

        {/* Paragraph */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">P - 段落</Typography>
            <Typography variant="muted">
              標準段落文字，自動處理間距
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="p">
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax.
            </Typography>
          </div>
        </section>

        {/* Blockquote */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">Blockquote - 引用</Typography>
            <Typography variant="muted">
              帶有左側邊框的引用區塊
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="blockquote">
              "After all," he said, "everyone enjoys a good joke, so it's only
              fair that they should pay for the privilege."
            </Typography>
          </div>
        </section>

        {/* List */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">List - 列表</Typography>
            <Typography variant="muted">
              無序列表樣式
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="list">
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </Typography>
          </div>
        </section>

        {/* Inline Code */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">Inline Code - 行內程式碼</Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="p">
              Install the package with{" "}
              <Typography variant="inlineCode" as="code">
                npm install @workspace/ui
              </Typography>{" "}
              command.
            </Typography>
          </div>
        </section>

        {/* Lead */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">Lead - 引導文字</Typography>
            <Typography variant="muted">
              較大且淡色的文字，適合作為引導說明
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="lead">
              A modal dialog that interrupts the user with important content and
              expects a response.
            </Typography>
          </div>
        </section>

        {/* Large */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">Large - 大號文字</Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="large">
              Are you absolutely sure?
            </Typography>
          </div>
        </section>

        {/* Small */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">Small - 小號文字</Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="small">Email address</Typography>
          </div>
        </section>

        {/* Muted */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">Muted - 次要文字</Typography>
            <Typography variant="muted">
              使用 muted-foreground 顏色的次要文字
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30">
            <Typography variant="muted">
              Enter your email address.
            </Typography>
          </div>
        </section>

        {/* Mixed Example */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">組合範例</Typography>
            <Typography variant="muted">
              展示如何組合不同的 Typography 變體
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30 space-y-4">
            <Typography variant="h3">Introduction</Typography>
            <Typography variant="lead">
              This is a lead paragraph that introduces the content below.
            </Typography>
            <Typography variant="p">
              The king, seeing how much happier his subjects were, realized the
              error of his ways and repealed the joke tax. The kingdom was
              filled with laughter once more.
            </Typography>
            <Typography variant="blockquote">
              "Laughter is the best medicine, and it should always be free."
            </Typography>
            <Typography variant="muted">
              - A wise person, probably
            </Typography>
          </div>
        </section>

        {/* Fluid Typography */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">流體字體大小</Typography>
            <Typography variant="muted">
              使用 clamp() 實現的流體字體大小，會根據視窗寬度自動調整。適合沒有格式要求的情況
            </Typography>
          </div>

          {/* 說明區塊 */}
          <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
            <Typography variant="small" className="font-semibold mb-2">字體放大範圍說明</Typography>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <div className="grid grid-cols-[60px_1fr] gap-2">
                <span className="font-medium text-foreground">XL:</span>
                <span>28px → 36px（放大 28.6%，增加 8px）</span>
              </div>
              <div className="grid grid-cols-[60px_1fr] gap-2">
                <span className="font-medium text-foreground">LG:</span>
                <span>20px → 24px（放大 20%，增加 4px）</span>
              </div>
              <div className="grid grid-cols-[60px_1fr] gap-2">
                <span className="font-medium text-foreground">MD:</span>
                <span>16px → 18px（放大 12.5%，增加 2px）</span>
              </div>
              <div className="grid grid-cols-[60px_1fr] gap-2">
                <span className="font-medium text-foreground">SM:</span>
                <span>14px → 16px（放大 14.3%，增加 2px）</span>
              </div>
              <div className="grid grid-cols-[60px_1fr] gap-2">
                <span className="font-medium text-foreground">XS:</span>
                <span>12px → 14px（放大 16.7%，增加 2px）</span>
              </div>
            </div>
            <Typography variant="xs" className="mt-3 text-muted-foreground">
              💡 提示：調整瀏覽器視窗大小以觀察字體的流體變化效果
            </Typography>
          </div>

          <div className="p-6 border rounded-lg bg-muted/30 space-y-6">
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">XL (28px → 36px)</Typography>
              <Typography variant="xl">Extra Large - 流體字體</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">LG (20px → 24px)</Typography>
              <Typography variant="lg">Large - 流體字體</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">MD (16px → 18px)</Typography>
              <Typography variant="md">Medium - 流體字體</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">SM (14px → 16px)</Typography>
              <Typography variant="sm">Small - 流體字體</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">XS (12px → 14px)</Typography>
              <Typography variant="xs">Extra Small - 流體字體</Typography>
            </div>
          </div>
          <pre className="p-4 bg-muted rounded-md text-sm overflow-x-auto">
            <code>{`<Typography variant="xl">Extra Large</Typography>
<Typography variant="lg">Large</Typography>
<Typography variant="md">Medium</Typography>
<Typography variant="sm">Small</Typography>
<Typography variant="xs">Extra Small</Typography>

// 流體字體大小範圍：
// xl: clamp(28px, 1.2vw + 18px, 36px)
// lg: clamp(20px, 0.8vw + 14px, 24px)
// md: clamp(16px, 0.5vw + 12px, 18px)
// sm: clamp(14px, 0.4vw + 11px, 16px)
// xs: clamp(12px, 0.3vw + 10px, 14px)`}</code>
          </pre>
        </section>

        {/* Color Variants */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">文字顏色</Typography>
            <Typography variant="muted">
              Typography 支援多種顏色選項，適用於不同的使用場景
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30 space-y-4">
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Default</Typography>
              <Typography variant="lg">這是預設顏色的文字</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Primary</Typography>
              <Typography variant="lg" color="primary">這是 Primary 顏色的文字</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Secondary</Typography>
              <Typography variant="lg" color="secondary">這是 Secondary 顏色的文字</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Accent</Typography>
              <Typography variant="lg" color="accent">這是 Accent 顏色的文字</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Muted</Typography>
              <Typography variant="lg" color="muted">這是 Muted 顏色的文字</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Success</Typography>
              <Typography variant="lg" color="success">✓ 操作成功完成</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Error</Typography>
              <Typography variant="lg" color="error">✗ 發生錯誤，請重試</Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="xs" className="text-muted-foreground">Warning</Typography>
              <Typography variant="lg" color="warning">⚠ 請注意此警告訊息</Typography>
            </div>
          </div>
          <pre className="p-4 bg-muted rounded-md text-sm overflow-x-auto">
            <code>{`<Typography variant="lg">預設顏色</Typography>
<Typography variant="lg" color="primary">Primary 顏色</Typography>
<Typography variant="lg" color="secondary">Secondary 顏色</Typography>
<Typography variant="lg" color="accent">Accent 顏色</Typography>
<Typography variant="lg" color="muted">Muted 顏色</Typography>
<Typography variant="lg" color="success">成功訊息</Typography>
<Typography variant="lg" color="error">錯誤訊息</Typography>
<Typography variant="lg" color="warning">警告訊息</Typography>`}</code>
          </pre>
        </section>

        {/* SEO Example */}
        <section className="space-y-4">
          <div>
            <Typography variant="h2">SEO 彈性範例</Typography>
            <Typography variant="muted">
              使用 as prop 來改變 HTML 標籤，同時保持視覺樣式。未指定 variant 時預設為 div 標籤
            </Typography>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30 space-y-4">
            <Typography>
              這是預設的 Typography（div 標籤，無額外樣式）
            </Typography>
            <Typography variant="h1" as="h2">
              這是 h2 標籤，但看起來像 h1
            </Typography>
            <Typography variant="h3" as="div">
              這是 div 標籤，但看起來像 h3
            </Typography>
            <Typography variant="lead" as="span">
              這是 span 標籤，但有 lead 的樣式
            </Typography>
          </div>
          <pre className="p-4 bg-muted rounded-md text-sm overflow-x-auto">
            <code>{`<Typography>
  這是預設的 Typography（div 標籤，無額外樣式）
</Typography>

<Typography variant="h1" as="h2">
  這是 h2 標籤，但看起來像 h1
</Typography>

<Typography variant="h3" as="div">
  這是 div 標籤，但看起來像 h3
</Typography>

<Typography variant="lead" as="span">
  這是 span 標籤，但有 lead 的樣式
</Typography>`}</code>
          </pre>
        </section>
      </div>
    </div>
  )
}
