
> 本文件定義 monorepo 內所有 React 元件、型別、與撰寫風格規範。
> 適用範圍：`apps/*`, `packages/*`

---

## 🎯 React Component 撰寫規範

### ⚠️ 重要：優先使用 RC / RCC 類型

所有 React 元件都必須使用 `@eluelu/types` 提供的 `RC` 和 `RCC` 類型。
預設 `@eluelu/types` 引用至 `src/types/globals/react.d.ts` 無需個別引入

```typescript
// ✅ 一般元件使用 RC
export const Button: RC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

// ✅ 有 children 的元件使用 RCC
export const Card: RCC<{ title: string; className?: string }> = ({ title, children, className }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
```

### 類型定義

```typescript
// 定義在 @eluelu/types/src/globals/react.d.ts
type RC<P = {}> = (props: P) => ReactElement | null;
type RCC<P = {}> = RC<React.PropsWithChildren<P>>;
```

- **`RC<P>`** - React Component，接收 props 並返回 ReactElement 或 null
- **`RCC<P>`** - React Component with Children，自動包含 children prop

> 撰寫箭頭函式時統一使用 `{ ... return (...) }` 格式，確保未來擴充邏輯時不需重構為 block body。
