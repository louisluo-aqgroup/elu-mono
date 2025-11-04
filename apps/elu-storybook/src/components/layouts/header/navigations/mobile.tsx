'use client';

import { Button } from '@eluelu/elu-ui/components/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@eluelu/elu-ui/components/sheet';
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from '@eluelu/elu-ui/components/sidebar';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { cn } from '@eluelu/elu-ui/lib/classes';
import { ChevronRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { match } from 'path-to-regexp';
import { useState } from 'react';

import type { NavigationItem } from './types';

type MobileNavigationProps = {
  items: NavigationItem[];
};

/**
 * Check if the current pathname matches a target path pattern
 * Uses path-to-regexp for pattern matching
 */
const checkPathMatch = (pathname: string, target?: string): boolean => {
  if (!target) return false;

  try {
    const matcher = match(target, { decode: decodeURIComponent });
    return !!matcher(pathname);
  } catch {
    return pathname === target || pathname.startsWith(`${target}/`);
  }
};

export const MobileNavigation: RCC<MobileNavigationProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  const toggleItem = (title: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu className="size-5" />
          <span className="sr-only">開啟選單</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-80 p-0" side="left">
        <SheetHeader className="border-b px-4 py-6">
          <SheetTitle className="sr-only">導覽選單</SheetTitle>
          <SheetDescription className="sr-only h-8">
            網站主要導覽選單
          </SheetDescription>
        </SheetHeader>
        <SidebarProvider>
          <SidebarContent className="p-2">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => {
                    const subItems = item.items ?? [];
                    const isItemActive =
                      checkPathMatch(pathname, item.href) ||
                      subItems.some((subItem) =>
                        checkPathMatch(pathname, subItem.href)
                      );
                    const isExpanded = expandedItems.has(item.title);

                    return (
                      <SidebarMenuItem key={item.title}>
                        {subItems.length > 0 ? (
                          <>
                            <SidebarMenuButton
                              className={cn(
                                'text-primary hover:bg-primary/10 hover:text-primary',
                                isItemActive &&
                                  'bg-primary/10 text-primary font-semibold'
                              )}
                              isActive={isItemActive}
                              onClick={() => toggleItem(item.title)}
                            >
                              <Typography variant="sm">{item.title}</Typography>
                              <ChevronRight
                                className={cn(
                                  'ml-auto size-4 transition-transform',
                                  isExpanded && 'rotate-90'
                                )}
                              />
                            </SidebarMenuButton>
                            {isExpanded && (
                              <SidebarMenuSub>
                                {subItems.map((subItem) => {
                                  const isSubItemActive = checkPathMatch(
                                    pathname,
                                    subItem.href
                                  );
                                  return (
                                    <SidebarMenuSubItem key={subItem.title}>
                                      <SidebarMenuSubButton
                                        asChild
                                        className={cn(
                                          'text-primary hover:bg-primary/10 hover:text-primary',
                                          isSubItemActive &&
                                            'bg-primary/10 text-primary font-semibold'
                                        )}
                                        isActive={isSubItemActive}
                                      >
                                        <Link
                                          href={subItem.href}
                                          onClick={() => setOpen(false)}
                                        >
                                          <Typography variant="sm">
                                            {subItem.title}
                                          </Typography>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  );
                                })}
                              </SidebarMenuSub>
                            )}
                          </>
                        ) : (
                          <SidebarMenuButton
                            asChild
                            className={cn(
                              'text-primary hover:bg-primary/10 hover:text-primary',
                              isItemActive &&
                                'bg-primary/10 text-primary font-semibold'
                            )}
                            isActive={isItemActive}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                            >
                              <Typography variant="sm">{item.title}</Typography>
                            </Link>
                          </SidebarMenuButton>
                        )}
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </SidebarProvider>
      </SheetContent>
    </Sheet>
  );
};
