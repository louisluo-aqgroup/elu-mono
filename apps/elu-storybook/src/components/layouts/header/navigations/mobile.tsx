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
      <SheetContent className="w-[300px] sm:w-[400px]" side="left">
        <SheetHeader>
          <SheetTitle>選單</SheetTitle>
        </SheetHeader>
        <nav className="mt-6">
          <Accordion collapsible type="single">
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
                  <AccordionItem key={item.title} value={`item-${index}`}>
                    <AccordionTrigger
                      className={cn(
                        'py-3 hover:no-underline',
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
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        {subItems.map((subItem) => {
                          const isSubItemActive = checkPathMatch(
                            pathname,
                            subItem.href
                          );
                          return (
                            <li key={subItem.title}>
                              <Link
                                className={cn(
                                  'hover:bg-accent block rounded-md px-3 py-2 transition-colors',
                                  isSubItemActive && 'bg-accent'
                                )}
                                href={subItem.href}
                                onClick={() => setOpen(false)}
                              >
                                <Typography
                                  className={cn(
                                    'transition-colors',
                                    isSubItemActive &&
                                      'text-primary font-semibold'
                                  )}
                                  variant="sm"
                                >
                                  {subItem.title}
                                </Typography>
                                {subItem.description && (
                                  <Typography
                                    className="mt-1"
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
                <div className="border-b" key={item.title}>
                  <Link
                    className={cn(
                      'hover:text-primary block py-3 transition-colors',
                      isItemActive && 'text-primary font-semibold'
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
