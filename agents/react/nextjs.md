
> 本文件定義 Next.js 專案的元件撰寫規範。
> 適用範圍：使用 Next.js 框架的專案

---

## 🔷 Next.js Component 規範

### ⚠️ 重要：一律使用 Function Component

所有 Next.js 元件（包括 Page、Layout、Client Component）都必須使用 **Function Component** 形式撰寫，並將 `export default` 寫在檔案最下方。

```typescript
// ✅ function component + export 分離
function HomePage() {
  return <div>Home Page</div>;
}

export default HomePage;

// ✅ Client Component
'use client';

import { useState } from 'react';

function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default InteractiveButton;

// ✅ Layout（RCC 已在 global d.ts 中定義，無需 import）
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
```

### Next.js 特定情境

```typescript
// ✅ Server Component (預設)
function ProductPage({ params }: { params: { id: string } }) {
  return <div>Product {params.id}</div>;
}

export default ProductPage;

// ✅ Async Server Component
async function PostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);
  return <article>{post.content}</article>;
}

export default PostPage;

// ✅ 搭配 metadata export
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page',
};

function MyPage() {
  return <div>Content</div>;
}

export default MyPage;
```

### 原因說明

1. **與 Next.js 官方文件一致** - Next.js 文件範例全部使用 function component
2. **支援 async/await** - Server Component 需要 async function 支援
3. **更好的除錯體驗** - Function 宣告會顯示函數名稱在 stack trace 中
4. **export 分離** - 將 export 寫在下方，程式碼結構更清晰
