import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@eluelu/elu-ui/components/accordion';
import { Typography } from '@eluelu/elu-ui/components/typography';

import { ComponentPreview } from '@/components/ui/component-preview';

const AccordionPage: RC = () => (
  <div className="mx-auto max-w-5xl space-y-12">
    <div>
      <Typography className="mb-2" variant="h1">
        Accordion
      </Typography>
      <Typography color="muted" variant="p">
        手風琴元件用於顯示可折疊的內容區塊，適用於 FAQ、選單或分組內容。
      </Typography>
    </div>

    <div className="bg-muted/30 space-y-4 rounded-lg border p-6">
      <Typography variant="h3">Props</Typography>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left font-semibold">Component</th>
              <th className="px-4 py-2 text-left font-semibold">Prop</th>
              <th className="px-4 py-2 text-left font-semibold">Type</th>
              <th className="px-4 py-2 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-2 font-mono">Accordion</td>
              <td className="px-4 py-2 font-mono">type</td>
              <td className="px-4 py-2 font-mono text-xs">
                "single" | "multiple"
              </td>
              <td className="px-4 py-2">是否允許同時展開多個項目</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">Accordion</td>
              <td className="px-4 py-2 font-mono">collapsible</td>
              <td className="px-4 py-2 font-mono text-xs">boolean</td>
              <td className="px-4 py-2">
                是否允許收合所有項目（僅適用於 type="single"）
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">AccordionItem</td>
              <td className="px-4 py-2 font-mono">value</td>
              <td className="px-4 py-2 font-mono text-xs">string</td>
              <td className="px-4 py-2">唯一識別碼</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">AccordionTrigger</td>
              <td className="px-4 py-2 font-mono">children</td>
              <td className="px-4 py-2 font-mono text-xs">ReactNode</td>
              <td className="px-4 py-2">觸發按鈕的內容</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">AccordionContent</td>
              <td className="px-4 py-2 font-mono">children</td>
              <td className="px-4 py-2 font-mono text-xs">ReactNode</td>
              <td className="px-4 py-2">可折疊的內容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-muted/30 mt-12 space-y-4 rounded-lg border p-6">
      <Typography variant="h3">使用範例</Typography>
      <pre className="overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
        <code>{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@eluelu/elu-ui/components/accordion"

// 單一展開（一次只能展開一個）
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>什麼是手風琴元件？</AccordionTrigger>
    <AccordionContent>
      手風琴元件是一個垂直堆疊的互動式標題，可以展開或收合相關的內容區塊。
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>如何使用？</AccordionTrigger>
    <AccordionContent>
      點擊標題即可展開或收合內容。
    </AccordionContent>
  </AccordionItem>
</Accordion>

// 多重展開（可以同時展開多個）
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>項目 1</AccordionTrigger>
    <AccordionContent>內容 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>項目 2</AccordionTrigger>
    <AccordionContent>內容 2</AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
      </pre>
    </div>

    <ComponentPreview
      description="一次只能展開一個項目，點擊其他項目會自動收合當前項目"
      title="單一展開模式"
    >
      <div className="w-full max-w-2xl">
        <Accordion collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>什麼是手風琴元件？</AccordionTrigger>
            <AccordionContent>
              手風琴元件是一個垂直堆疊的互動式標題集合，每個標題都可以展開或收合相關的內容區塊。這種設計模式可以有效地組織大量資訊，讓使用者專注於他們感興趣的部分。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>何時使用手風琴？</AccordionTrigger>
            <AccordionContent>
              手風琴元件適合用於常見問題（FAQ）、產品功能說明、使用者設定選項、或任何需要組織多個相關內容區塊的場景。它可以幫助節省頁面空間，同時保持內容的可訪問性。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>支援哪些功能？</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-2 pl-4">
                <li>單一或多重展開模式</li>
                <li>平滑的動畫過渡效果</li>
                <li>鍵盤導航支援</li>
                <li>完全可自訂樣式</li>
                <li>無障礙支援（ARIA 屬性）</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ComponentPreview>

    <ComponentPreview
      description="可以同時展開多個項目，適合需要比較或同時查看多個內容的場景"
      title="多重展開模式"
    >
      <div className="w-full max-w-2xl">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>基本資訊</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>
                  <strong>姓名：</strong>王小明
                </p>
                <p>
                  <strong>年齡：</strong>28 歲
                </p>
                <p>
                  <strong>職業：</strong>前端工程師
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>聯絡方式</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>
                  <strong>Email：</strong>example@example.com
                </p>
                <p>
                  <strong>電話：</strong>0912-345-678
                </p>
                <p>
                  <strong>地址：</strong>台北市信義區
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>專業技能</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-1 pl-4">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ComponentPreview>

    <ComponentPreview
      description="適合用於常見問題頁面，讓使用者快速找到答案"
      title="FAQ 範例"
    >
      <div className="w-full max-w-2xl">
        <Accordion collapsible type="single">
          <AccordionItem value="faq-1">
            <AccordionTrigger>如何註冊帳號？</AccordionTrigger>
            <AccordionContent>
              點擊右上角的「註冊」按鈕，填寫必要資訊（電子郵件、密碼、姓名）後，系統會發送驗證信到您的信箱。請點擊信中的連結完成驗證即可開始使用。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>忘記密碼怎麼辦？</AccordionTrigger>
            <AccordionContent>
              在登入頁面點擊「忘記密碼」連結，輸入您的註冊信箱，系統會發送重設密碼的連結到您的信箱。請在
              24 小時內點擊連結並設定新密碼。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>如何聯絡客服？</AccordionTrigger>
            <AccordionContent>
              您可以透過以下方式聯絡我們的客服團隊：
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>客服信箱：support@example.com</li>
                <li>客服專線：0800-123-456（週一至週五 9:00-18:00）</li>
                <li>線上客服：點擊右下角的對話圖示</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>支援哪些付款方式？</AccordionTrigger>
            <AccordionContent>
              我們支援以下付款方式：信用卡（Visa、Mastercard、JCB）、ATM
              轉帳、超商代碼繳費、電子支付（LINE Pay、Apple
              Pay、Google Pay）。所有交易都採用 SSL 加密，確保您的付款安全。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ComponentPreview>
  </div>
);

export default AccordionPage;
