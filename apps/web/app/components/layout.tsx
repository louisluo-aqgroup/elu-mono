import { DemoSidebar } from "@/components/demo-sidebar"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <DemoSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
