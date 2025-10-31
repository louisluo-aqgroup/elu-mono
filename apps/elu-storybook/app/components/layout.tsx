import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@workspace/elu-ui/components/sidebar';

import { LayoutSidebar } from '@/components/sidebar';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <LayoutSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="text-sm text-muted-foreground">元件展示</div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
