"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"

const components = [
  {
    name: "Button",
    href: "/components/button",
  },
  {
    name: "Typography",
    href: "/components/typography",
  },
  // 未來可以在這裡添加更多元件
]

export function DemoSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-muted/30 min-h-screen p-6">
      <div className="mb-8">
        <Link
          href="/"
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          Component Demo
        </Link>
      </div>

      <nav className="space-y-1">
        <div className="text-sm font-semibold text-muted-foreground mb-2 px-3">
          元件
        </div>
        {components.map((component) => {
          const isActive = pathname === component.href
          return (
            <Link
              key={component.href}
              href={component.href}
              className={cn(
                "block px-3 py-2 rounded-md text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground font-medium"
                  : "hover:bg-muted hover:text-foreground text-muted-foreground"
              )}
            >
              {component.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
