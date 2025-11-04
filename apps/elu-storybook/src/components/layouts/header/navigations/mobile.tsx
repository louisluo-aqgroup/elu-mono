'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@eluelu/elu-ui/components/accordion';
import { Button } from '@eluelu/elu-ui/components/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@eluelu/elu-ui/components/sheet';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { cn } from '@eluelu/elu-ui/lib/classes';
import { Menu } from 'lucide-react';
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
  const pathname = usePathname();

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu className="size-5" />
          <span className="sr-only">開啟選單</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-80 p-0" side="left">
        <SheetHeader className="border-b px-4 py-4">
          <SheetTitle className="text-base font-semibold">選單</SheetTitle>
        </SheetHeader>
        <nav className="px-3 py-4">
          <Accordion className="space-y-1" collapsible type="single">
            {items.map((item, index) => {
              const subItems = item.items ?? [];
              const isItemActive =
                checkPathMatch(pathname, item.href) ||
                subItems.some((subItem) =>
                  checkPathMatch(pathname, subItem.href)
                );

              // If item has subitems, render as accordion
              if (subItems.length > 0) {
                return (
                  <AccordionItem
                    className="border-0"
                    key={item.title}
                    value={`item-${index}`}
                  >
                    <AccordionTrigger
                      className={cn(
                        'hover:bg-primary/10 rounded-md px-3 py-2.5 hover:no-underline',
                        isItemActive && 'text-primary font-semibold'
                      )}
                    >
                      <Typography
                        className={cn(
                          'transition-colors',
                          isItemActive && 'text-primary font-semibold'
                        )}
                        variant="sm"
                      >
                        {item.title}
                      </Typography>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-1">
                      <ul className="space-y-1 pl-3">
                        {subItems.map((subItem) => {
                          const isSubItemActive = checkPathMatch(
                            pathname,
                            subItem.href
                          );
                          return (
                            <li key={subItem.title}>
                              <Link
                                className={cn(
                                  'hover:bg-primary/10 block rounded-md px-3 py-2 transition-colors',
                                  isSubItemActive && 'text-primary'
                                )}
                                href={subItem.href}
                                onClick={() => setOpen(false)}
                              >
                                <Typography
                                  className={cn(
                                    'leading-none font-medium transition-colors',
                                    isSubItemActive &&
                                      'text-primary font-semibold'
                                  )}
                                  variant="sm"
                                >
                                  {subItem.title}
                                </Typography>
                                {subItem.description && (
                                  <Typography
                                    className="mt-0.5 leading-snug"
                                    color="muted"
                                    variant="xs"
                                  >
                                    {subItem.description}
                                  </Typography>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              // Single item without subitems
              return (
                <div key={item.title}>
                  <Link
                    className={cn(
                      'hover:bg-primary/10 block rounded-md px-3 py-2.5 transition-colors',
                      isItemActive && 'text-primary'
                    )}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <Typography
                      className={cn(
                        'transition-colors',
                        isItemActive && 'text-primary font-semibold'
                      )}
                      variant="sm"
                    >
                      {item.title}
                    </Typography>
                  </Link>
                </div>
              );
            })}
          </Accordion>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
