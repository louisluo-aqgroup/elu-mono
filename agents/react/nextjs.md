
> 本文件定義 Next.js 專案的元件撰寫規範。
> 適用範圍：使用 Next.js 框架的專案

---

## 🔷 Next.js Component 規範

### ⚠️ 重要：一律使用 RC / RCC 搭配箭頭函式

所有 Next.js 元件（包含 Page、Layout、Client Component）都必須採用 **常數 + 箭頭函式** 的寫法，並使用全域提供的 `RC` / `RCC` 型別。`export default` 依然寫在檔案最下方。

```typescript
// ✅ Server Component（預設）：RC + 箭頭函式
const HomePage: RC = () => <div>Home Page</div>;
export default HomePage;

// ✅ Client Component
'use client';

import { useState } from 'react';

const InteractiveButton: RC = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default InteractiveButton;

// ✅ Layout（RCC 已在 global d.ts 中定義，無需 import）
const RootLayout: RCC = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
```

### Next.js 特定情境

```typescript
// ✅ Server Component (預設)
type ProductPageProps = {
  params: { id: string };
};

const ProductPage: RC<ProductPageProps> = ({ params }) => (
  <div>Product {params.id}</div>
);

export default ProductPage;

// ✅ Async Server Component
type PostPageProps = {
  params: { slug: string };
};

const PostPage: RC<PostPageProps> = async ({ params }) => {
  const post = await fetchPost(params.slug);
  return <article>{post.content}</article>;
};

export default PostPage;

// ✅ 搭配 metadata export
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page',
};

const MyPage: RC = () => <div>Content</div>;

export default MyPage;
```

### 原因說明

1. **統一型別來源** - `RC` / `RCC` 由 `@eluelu/types` 全域提供，避免重複 import
2. **保留 async 支援** - 箭頭函式同樣可以標記 `async`，符合 Server Component 需求
3. **更好的除錯** - 常數命名仍會顯示在 stack trace 中
4. **export 分離** - 將 export 寫在下方，程式碼結構更清晰
