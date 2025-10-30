"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Layers } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { Typography } from "@workspace/ui/components/typography"

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

export function LayoutSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href="/"
          className="flex items-center gap-2 px-2 py-1.5 hover:text-sidebar-primary transition-colors"
        >
          <Layers className="size-5 text-accent" />
          <Typography variant="large" className="font-bold">ELUELU Design Demo</Typography>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>元件</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {components.map((component) => {
                const isActive = pathname === component.href
                return (
                  <SidebarMenuItem key={component.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={component.href}>
                        <Typography variant="sm">{component.name}</Typography>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
