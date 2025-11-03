'use client';

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
} from '@eluelu/elu-ui/components/sidebar';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { Layers } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const components = [
  {
    name: 'Button',
    href: '/components/button',
  },
  {
    name: 'Typography',
    href: '/components/typography',
  },
  // 未來可以在這裡添加更多元件
];

export const LayoutSidebar: RC = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          className="hover:text-sidebar-primary flex items-center gap-2 px-2 py-1.5 transition-colors"
          href="/"
        >
          <Layers className="text-accent size-5" />
          <Typography className="font-bold" variant="large">
            ELUELU Design Demo
          </Typography>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>元件</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {components.map((component) => {
                const isActive = pathname === component.href;
                return (
                  <SidebarMenuItem key={component.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={component.href}>
                        <Typography variant="sm">{component.name}</Typography>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
