'use client';

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
import { useModalController } from '@eluelu/elu-ui/components/modal-provider';
import { MODAL_BACK } from '@eluelu/elu-ui/components/modal-renderer';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { AlertCircle, CheckCircle, Info, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { ComponentPreview } from '@/components/ui/component-preview';

const ModalPage: RC = () => {
  const openModal = useModalController('app');
  const [result, setResult] = useState<string>('');

  const handleConfirm = async () => {
    const confirmed = await openModal<
      { title: string; description: string },
      boolean
    >('confirm', {
      title: '確認操作',
      description: '您確定要執行此操作嗎？',
    });
    setResult(confirmed ? '✅ 用戶點擊確認' : '❌ 用戶點擊取消');
  };

  const handleAlert = async () => {
    await openModal('alert', {
      title: '成功',
      description: '操作已成功完成！',
    });
    setResult('✅ Alert 已顯示');
  };

  const handleInput = async () => {
    const value = await openModal<
      { title: string; placeholder: string },
      string
    >('input', {
      title: '請輸入名稱',
      placeholder: '輸入您的名稱...',
    });
    setResult(value ? `📝 用戶輸入: ${value}` : '❌ 用戶取消輸入');
  };

  const handleDeleteConfirm = async () => {
    const confirmed = await openModal<
      {
        title: string;
        description: string;
        variant: 'destructive';
        confirmText: string;
      },
      boolean
    >('confirm', {
      title: '確認刪除',
      description: '刪除後將無法恢復，確定要繼續嗎？',
      variant: 'destructive',
      confirmText: '確認刪除',
    });
    setResult(confirmed ? '🗑️ 項目已刪除' : '❌ 取消刪除');
  };

  const handleNestedModal = async () => {
    setResult('🔄 開始三層 Modal 流程...');

    let userName = '';
    let permission = '';

    // 第一層：選擇用戶
    step1: while (true) {
      userName = (await openModal<
        {
          title: string;
          placeholder: string;
          description: string;
          showBack?: boolean;
          defaultValue?: string;
        },
        string
      >('input', {
        title: '步驟 1/3：選擇用戶',
        description: '請輸入要編輯的用戶名稱',
        placeholder: '例如：張三',
        defaultValue: userName, // 回填之前的值
        showBack: false,
      })) as string;

      if (!userName) {
        setResult('❌ 取消流程：未輸入用戶名稱');
        return;
      }

      setResult(`📝 第一層完成：選擇用戶 "${userName}"`);

      // 第二層：選擇操作類型
      step2: while (true) {
        const actionConfirmed = await openModal<
          {
            title: string;
            description: string;
            confirmText: string;
            showBack: boolean;
          },
          boolean | symbol
        >('confirm', {
          title: '步驟 2/3：確認操作',
          description: `您即將編輯用戶「${userName}」的權限設定`,
          confirmText: '繼續編輯',
          showBack: true,
        });

        // 檢查是否點擊返回
        if (actionConfirmed === MODAL_BACK) {
          setResult('🔙 返回第一層：重新選擇用戶（資料已保留）');
          continue step1;
        }

        if (!actionConfirmed) {
          setResult(`❌ 取消流程：用戶 "${userName}" 的操作未確認`);
          return;
        }

        setResult(`✅ 第二層完成：用戶 "${userName}" 操作已確認`);

        // 第三層：輸入新權限
        step3: while (true) {
          const permissionResult = await openModal<
            {
              title: string;
              placeholder: string;
              description: string;
              showBack: boolean;
              defaultValue?: string;
            },
            string | symbol
          >('input', {
            title: '步驟 3/3：設定權限',
            description: `為用戶「${userName}」設定新的權限等級`,
            placeholder: '例如：管理員、編輯者、檢視者',
            defaultValue: permission, // 回填之前的值
            showBack: true,
          });

          // 檢查是否點擊返回
          if (permissionResult === MODAL_BACK) {
            setResult('🔙 返回第二層：重新確認操作（資料已保留）');
            continue step2;
          }

          permission = permissionResult as string;

          if (!permission) {
            setResult(`❌ 取消流程：未設定權限給用戶 "${userName}"`);
            return;
          }

          // 最終確認
          const finalConfirm = await openModal<
            {
              title: string;
              description: string;
              confirmText: string;
              variant: 'accent';
              showBack: boolean;
            },
            boolean | symbol
          >('confirm', {
            title: '最終確認',
            description: `即將為用戶「${userName}」設定權限為「${permission}」，確定要繼續嗎？`,
            confirmText: '確定送出',
            variant: 'accent',
            showBack: true,
          });

          // 檢查是否點擊返回
          if (finalConfirm === MODAL_BACK) {
            setResult('🔙 返回第三層：重新設定權限（資料已保留）');
            continue step3;
          }

          if (finalConfirm) {
            setResult(
              `✅ 完成！用戶: "${userName}" | 權限: "${permission}" | 狀態: 已更新`
            );
            return;
          } else {
            setResult(
              `❌ 已取消：用戶 "${userName}" 的權限 "${permission}" 未套用`
            );
            return;
          }
        }
      }
    }
  };

  const handleAsyncModal = async () => {
    setResult('🔄 開始異步操作流程...');

    type AsyncStep =
      | 'inputEmail'
      | 'confirmSend'
      | 'inputCode'
      | 'confirmVerify';

    let email = '';
    let code = '';
    let step: AsyncStep = 'inputEmail';

    // 使用簡單狀態機來處理流程，避免巢狀 while 與 label
    while (true) {
      if (step === 'inputEmail') {
        const emailResult = await openModal<
          {
            title: string;
            placeholder: string;
            description: string;
            showBack?: boolean;
            defaultValue?: string;
          },
          string
        >('input', {
          title: '步驟 1/2：驗證 Email',
          description: '請輸入您的電子郵件地址',
          placeholder: '例如：user@example.com',
          defaultValue: email,
          showBack: false,
        });

        if (!emailResult) {
          setResult('❌ 取消流程：未輸入 Email');
          return;
        }

        email = emailResult;
        setResult(`📧 正在發送驗證碼到 ${email}...`);
        step = 'confirmSend';
        continue;
      }

      if (step === 'confirmSend') {
        const sendConfirmed = await openModal<
          {
            title: string;
            description: string;
            confirmText: string;
            showBack: boolean;
            confirmLoadingText?: string;
            onConfirm?: () => Promise<boolean | symbol> | boolean | symbol;
          },
          boolean | symbol
        >('confirm', {
          title: '發送驗證碼',
          description: `即將發送驗證碼到「${email}」，確定繼續嗎？`,
          confirmText: '發送驗證碼',
          showBack: true,
          confirmLoadingText: '發送中...',
          onConfirm: async () => {
            setResult('⏳ 正在發送驗證碼...');
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setResult(`✅ 驗證碼已發送到 ${email}`);
            return true;
          },
        });

        if (sendConfirmed === MODAL_BACK) {
          setResult('🔙 返回重新輸入 Email（資料已保留）');
          step = 'inputEmail';
          continue;
        }

        if (!sendConfirmed) {
          setResult('❌ 取消流程：未發送驗證碼');
          return;
        }

        step = 'inputCode';
        continue;
      }

      if (step === 'inputCode') {
        const codeResult = await openModal<
          {
            title: string;
            placeholder: string;
            description: string;
            showBack: boolean;
            defaultValue?: string;
          },
          string | symbol
        >('input', {
          title: '步驟 2/2：輸入驗證碼',
          description: `請輸入發送到「${email}」的 6 位數驗證碼`,
          placeholder: '例如：123456',
          defaultValue: code,
          showBack: true,
        });

        if (codeResult === MODAL_BACK) {
          setResult('🔙 返回重新發送驗證碼（資料已保留）');
          step = 'confirmSend';
          continue;
        }

        if (!codeResult || typeof codeResult === 'symbol') {
          setResult('❌ 取消流程：未輸入驗證碼');
          return;
        }

        code = codeResult;
        step = 'confirmVerify';
        continue;
      }

      const verifyConfirmed = await openModal<
        {
          title: string;
          description: string;
          confirmText: string;
          variant: 'accent';
          showBack: boolean;
          confirmLoadingText?: string;
          onConfirm?: () => Promise<boolean | symbol> | boolean | symbol;
        },
        boolean | symbol
      >('confirm', {
        title: '驗證確認',
        description: `即將驗證 Email「${email}」與驗證碼「${code}」`,
        confirmText: '開始驗證',
        variant: 'accent',
        showBack: true,
        confirmLoadingText: '驗證中...',
        onConfirm: async () => {
          setResult('⏳ 正在驗證中...');
          await new Promise((resolve) => setTimeout(resolve, 3000));
          setResult(
            `✅ 驗證成功！Email: "${email}" | 驗證碼: "${code}" | 狀態: 已驗證`
          );
          return true;
        },
      });

      if (verifyConfirmed === MODAL_BACK) {
        setResult('🔙 返回重新輸入驗證碼（資料已保留）');
        step = 'inputCode';
        continue;
      }

      if (!verifyConfirmed) {
        setResult('❌ 取消流程：未進行驗證');
        return;
      }

      return;
    }
  };

  const handleAsyncResultModal = async () => {
    setResult('📦 準備查詢最新訂單狀態...');

    const order = await openModal<
      {
        title: string;
        description: string;
        confirmText: string;
        variant: 'accent';
        confirmLoadingText: string;
        defaultResult: false;
        onConfirm: () => Promise<{ orderId: string; status: string }>;
      },
      { orderId: string; status: string } | false
    >('confirm', {
      title: '同步訂單狀態',
      description: '系統將即時查詢最新訂單狀態，並在完成後回傳資料。',
      confirmText: '開始同步',
      variant: 'accent',
      confirmLoadingText: '同步中...',
      defaultResult: false,
      onConfirm: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        return {
          orderId: 'ELU-2025-001',
          status: '已完成',
        };
      },
    });

    if (!order || typeof order === 'boolean' || typeof order === 'symbol') {
      setResult('❌ 已取消資料同步');
      return;
    }

    setResult(
      `✅ 同步完成！訂單編號：${order.orderId}｜狀態：${order.status}`
    );
  };

  return (
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
</Dialog>

// 使用 Modal Provider (推薦)
import { useModalController } from "@eluelu/elu-ui/components/modal-provider"

const openModal = useModalController('app')

// 確認對話框
const confirmed = await openModal('confirm', {
  title: '確認操作',
  description: '您確定要執行此操作嗎？',
})

// Alert 對話框
await openModal('alert', {
  title: '成功',
  description: '操作已成功完成！',
})

// 輸入對話框
const value = await openModal('input', {
  title: '請輸入名稱',
  placeholder: '輸入您的名稱...',
})

// 多層 Modal 資料傳遞 + 返回功能
import { MODAL_BACK } from "@eluelu/elu-ui/components/modal-renderer"

const handleNestedFlow = async () => {
  let userName = ''

  // 使用 label 和 while 循環來支持返回功能
  step1: while (true) {
    userName = await openModal('input', {
      title: '步驟 1/3：選擇用戶',
      placeholder: '輸入用戶名稱',
      showBack: false, // 第一層不顯示返回
    })

    if (!userName) return

    // 第二層：使用第一層的資料
    step2: while (true) {
      const confirmed = await openModal('confirm', {
        title: '步驟 2/3：確認操作',
        description: \`即將編輯用戶「\${userName}」\`,
        showBack: true, // 顯示返回按鈕
      })

      // 檢測返回信號
      if (confirmed === MODAL_BACK) {
        continue step1 // 返回第一層
      }

      if (!confirmed) return

      // 第三層：再次使用前面的資料
      const permission = await openModal('input', {
        title: '步驟 3/3：設定權限',
        description: \`為「\${userName}」設定權限\`,
        placeholder: '例如：管理員',
        showBack: true,
      })

      if (permission === MODAL_BACK) {
        continue step2 // 返回第二層
      }

      // 完成流程
      console.log({ userName, permission })
      return
    }
  }
}`}</code>
        </pre>
      </div>

      <ComponentPreview
        description="使用 ModalProvider 統一管理 Modal，支援 Promise-based API"
        title="Modal Provider 用法 (推薦)"
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleConfirm}>確認對話框</Button>
            <Button onClick={handleAlert} variant="accent">
              Alert 對話框
            </Button>
            <Button onClick={handleInput} variant="secondary">
              輸入對話框
            </Button>
            <Button onClick={handleDeleteConfirm} variant="destructive">
              <Trash2 className="mr-2 size-4" />
              刪除確認
            </Button>
            <Button onClick={handleAsyncModal} variant="outline">
              多步驗證流程
            </Button>
            <Button onClick={handleAsyncResultModal} variant="secondary">
              同步資料並回傳
            </Button>
          </div>
          {result && (
            <div className="bg-primary/5 rounded-md p-4">
              <p className="text-primary text-sm font-medium">
                結果: {result}
              </p>
            </div>
          )}
        </div>
      </ComponentPreview>

      <ComponentPreview
        description="展示三層 Modal 嵌套，並在不同層級之間傳遞資料"
        title="多層 Modal 資料傳遞"
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleNestedModal} variant="accent">
              開始三層 Modal 流程
            </Button>
          </div>
          <div className="bg-muted/30 space-y-2 rounded-lg border p-4">
            <Typography className="font-medium" variant="small">
              流程說明：
            </Typography>
            <ol className="text-primary/70 list-inside list-decimal space-y-1 text-sm">
              <li>第一層：輸入用戶名稱</li>
              <li>
                第二層：確認要編輯該用戶（會顯示第一層的資料）
                <span className="text-accent ml-1">✨ 可返回第一層</span>
              </li>
              <li>
                第三層：輸入權限等級（會顯示用戶名稱）
                <span className="text-accent ml-1">✨ 可返回第二層</span>
              </li>
              <li>
                最終確認：顯示完整的用戶名稱 + 權限資料
                <span className="text-accent ml-1">✨ 可返回第三層</span>
              </li>
            </ol>
            <div className="bg-accent/10 mt-3 rounded-md p-3">
              <p className="text-accent text-xs font-medium">
                💡
                提示：點擊標題左側的返回按鈕可以回到上一層，輸入欄位會自動回填之前的資料！
              </p>
            </div>
          </div>
          {result && (
            <div className="bg-primary/5 rounded-md p-4">
              <p className="text-primary text-sm font-medium">
                結果: {result}
              </p>
            </div>
          )}
        </div>
      </ComponentPreview>

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
};

export default ModalPage;
