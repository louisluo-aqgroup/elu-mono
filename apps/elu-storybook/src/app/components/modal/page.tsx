import { Button } from '@eluelu/elu-ui/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@eluelu/elu-ui/components/dialog';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { AlertCircle, CheckCircle, Info, Trash2 } from 'lucide-react';

import { ComponentPreview } from '@/components/ui/component-preview';

const ModalPage: RC = () => (
  <div className="mx-auto max-w-5xl space-y-12">
    <div>
      <Typography className="mb-2" variant="h1">
        Modal (Dialog)
      </Typography>
      <Typography color="muted" variant="p">
        彈出式對話框元件，用於顯示重要訊息或需要使用者互動的內容。採用 secondary
        背景色、primary 文字及邊框顏色的設計風格。
      </Typography>
    </div>

    <div className="bg-muted/30 space-y-4 rounded-lg border p-6">
      <Typography variant="h3">Props</Typography>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left font-semibold">元件</th>
              <th className="px-4 py-2 text-left font-semibold">Props</th>
              <th className="px-4 py-2 text-left font-semibold">Type</th>
              <th className="px-4 py-2 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-2 font-mono">Dialog</td>
              <td className="px-4 py-2 font-mono">open</td>
              <td className="px-4 py-2 font-mono text-xs">boolean</td>
              <td className="px-4 py-2">控制 Modal 開關狀態</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">Dialog</td>
              <td className="px-4 py-2 font-mono">onOpenChange</td>
              <td className="px-4 py-2 font-mono text-xs">
                (open: boolean) =&gt; void
              </td>
              <td className="px-4 py-2">狀態改變時的回調函數</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">DialogContent</td>
              <td className="px-4 py-2 font-mono">transparentOverlay</td>
              <td className="px-4 py-2 font-mono text-xs">boolean</td>
              <td className="px-4 py-2">
                設為 true 時遮罩變為透明（預設 false）
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">DialogContent</td>
              <td className="px-4 py-2 font-mono">className</td>
              <td className="px-4 py-2 font-mono text-xs">string</td>
              <td className="px-4 py-2">自定義樣式類名</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">DialogTitle</td>
              <td className="px-4 py-2 font-mono">-</td>
              <td className="px-4 py-2 font-mono text-xs">-</td>
              <td className="px-4 py-2">Modal 標題（必須包含以符合無障礙）</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">DialogDescription</td>
              <td className="px-4 py-2 font-mono">-</td>
              <td className="px-4 py-2 font-mono text-xs">-</td>
              <td className="px-4 py-2">Modal 描述文字</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-muted/30 mt-12 space-y-4 rounded-lg border p-6">
      <Typography variant="h3">使用範例</Typography>
      <pre className="overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
        <code>{`import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@eluelu/elu-ui/components/dialog"
import { Button } from "@eluelu/elu-ui/components/button"

// 基本用法
<Dialog>
  <DialogTrigger asChild>
    <Button>開啟 Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>標題</DialogTitle>
      <DialogDescription>
        這是描述文字
      </DialogDescription>
    </DialogHeader>
    <div>
      內容區域
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">取消</Button>
      </DialogClose>
      <Button>確認</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// 受控模式
const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  {/* ... */}
</Dialog>`}</code>
      </pre>
    </div>

    <ComponentPreview
      description="基本的 Modal 對話框，展示 secondary 背景與 primary 邊框樣式"
      title="基本用法"
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button>開啟 Modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>歡迎使用 Modal</DialogTitle>
            <DialogDescription>
              這是一個基本的對話框範例，使用 secondary 背景色和 primary
              邊框及文字顏色。
            </DialogDescription>
          </DialogHeader>
          <div className="text-primary py-4">
            <p>
              Modal
              元件適合用於需要使用者關注的重要訊息、確認操作或表單輸入等場景。
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">關閉</Button>
            </DialogClose>
            <Button>確認</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ComponentPreview>

    <ComponentPreview description="帶有圖示的資訊提示 Modal" title="資訊提示">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Info className="mr-2 size-4" />
            查看資訊
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="size-5" />
              系統通知
            </DialogTitle>
            <DialogDescription>
              以下是重要的系統資訊，請仔細閱讀。
            </DialogDescription>
          </DialogHeader>
          <div className="text-primary space-y-3 py-4">
            <p>您的帳戶已成功更新。</p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              <li>電子郵件地址已驗證</li>
              <li>個人資料已儲存</li>
              <li>偏好設定已套用</li>
            </ul>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>知道了</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ComponentPreview>

    <ComponentPreview
      description="需要使用者確認的操作對話框"
      title="確認對話框"
    >
      <div className="flex flex-wrap gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="accent">
              <CheckCircle className="mr-2 size-4" />
              確認操作
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle className="size-5" />
                確認提交
              </DialogTitle>
              <DialogDescription>
                請確認您要執行此操作，一旦提交將無法撤銷。
              </DialogDescription>
            </DialogHeader>
            <div className="text-primary py-4">
              <p className="mb-3">您即將執行以下操作：</p>
              <div className="bg-primary/5 rounded-md p-4">
                <p className="font-medium">變更將會立即生效</p>
                <p className="text-primary/70 mt-1 text-sm">
                  此操作會影響您的所有相關設定
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">取消</Button>
              </DialogClose>
              <Button variant="accent">確認提交</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="mr-2 size-4" />
              刪除項目
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <AlertCircle className="size-5" />
                確認刪除
              </DialogTitle>
              <DialogDescription>
                此操作無法復原，請謹慎確認。
              </DialogDescription>
            </DialogHeader>
            <div className="text-primary py-4">
              <div className="bg-destructive/10 border-destructive/20 rounded-md border p-4">
                <p className="text-destructive font-medium">警告</p>
                <p className="text-primary/70 mt-2 text-sm">
                  刪除後將永久移除此項目及其所有相關資料，此操作無法撤銷。
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">取消</Button>
              </DialogClose>
              <Button variant="destructive">確認刪除</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ComponentPreview>

    <ComponentPreview
      description="包含表單輸入的 Modal 範例"
      title="表單對話框"
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">編輯個人資料</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>編輯個人資料</DialogTitle>
            <DialogDescription>
              更新您的個人資訊，完成後點擊儲存。
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="name"
              >
                姓名
              </label>
              <input
                className="border-primary bg-secondary text-primary placeholder:text-primary/40 w-full rounded-md border-2 px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                id="name"
                placeholder="請輸入姓名"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-primary text-sm font-medium"
                htmlFor="email"
              >
                電子郵件
              </label>
              <input
                className="border-primary bg-secondary text-primary placeholder:text-primary/40 w-full rounded-md border-2 px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                id="email"
                placeholder="example@email.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-primary text-sm font-medium" htmlFor="bio">
                個人簡介
              </label>
              <textarea
                className="border-primary bg-secondary text-primary placeholder:text-primary/40 min-h-[100px] w-full rounded-md border-2 px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                id="bio"
                placeholder="簡單介紹一下自己..."
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">取消</Button>
            </DialogClose>
            <Button>儲存變更</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ComponentPreview>

    <ComponentPreview description="不同尺寸的 Modal 範例" title="尺寸變化">
      <div className="flex flex-wrap gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">
              小型 Modal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>小型對話框</DialogTitle>
              <DialogDescription>適合簡短的訊息提示</DialogDescription>
            </DialogHeader>
            <div className="text-primary py-4">
              <p className="text-sm">
                這是一個較小的對話框，適合顯示簡短內容。
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button size="sm">關閉</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">標準 Modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>標準對話框</DialogTitle>
              <DialogDescription>適合一般內容顯示</DialogDescription>
            </DialogHeader>
            <div className="text-primary py-4">
              <p>這是標準尺寸的對話框，適合大部分使用場景。</p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">取消</Button>
              </DialogClose>
              <Button>確認</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="outline">
              大型 Modal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>大型對話框</DialogTitle>
              <DialogDescription>
                適合需要展示較多內容或複雜表單的場景
              </DialogDescription>
            </DialogHeader>
            <div className="text-primary space-y-4 py-4">
              <p>
                這是一個較大的對話框，可以容納更多內容，適合複雜的資訊展示或表單操作。
              </p>
              <div className="bg-primary/5 grid grid-cols-2 gap-4 rounded-md p-4">
                <div>
                  <h4 className="font-medium">功能特點</h4>
                  <ul className="text-primary/70 mt-2 list-inside list-disc space-y-1 text-sm">
                    <li>支援較大的內容區域</li>
                    <li>適合複雜佈局</li>
                    <li>可包含多個區塊</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">使用場景</h4>
                  <ul className="text-primary/70 mt-2 list-inside list-disc space-y-1 text-sm">
                    <li>詳細資訊展示</li>
                    <li>多步驟表單</li>
                    <li>資料對比檢視</li>
                  </ul>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">關閉</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ComponentPreview>

    <ComponentPreview
      description="使用 transparentOverlay prop 移除背景遮罩"
      title="透明遮罩"
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="accent">開啟透明遮罩 Modal</Button>
        </DialogTrigger>
        <DialogContent transparentOverlay>
          <DialogHeader>
            <DialogTitle>無背景遮罩</DialogTitle>
            <DialogDescription>
              此 Modal 使用透明遮罩，背景不會變暗
            </DialogDescription>
          </DialogHeader>
          <div className="text-primary py-4">
            <p>
              設定{' '}
              <code className="bg-primary/10 rounded px-1.5 py-0.5 text-sm">
                transparentOverlay
              </code>{' '}
              為 true 可以移除背景遮罩，讓背景保持可見。
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">關閉</Button>
            </DialogClose>
            <Button>確認</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ComponentPreview>
  </div>
);

export default ModalPage;
