'use client';

import { Button } from '@eluelu/elu-ui/components/button';
import { ScrollArea } from '@eluelu/elu-ui/components/scroll-area';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { cn } from '@eluelu/elu-ui/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const components = [
  {
    name: 'Button',
    href: '/components/button',
  },
  {
    name: 'Scroll Area',
    href: '/components/scroll-area',
  },
  {
    name: 'Typography',
    href: '/components/typography',
  },
  // 未來可以在這裡添加更多元件
];

type ComponentsLayoutProps = {
  children: ReactNode;
};

const ComponentsLayout: RCC<ComponentsLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-[calc(100vh-7rem)]">
      {/* Left Navigation */}
      <aside className="border-border sticky top-28 h-[calc(100vh-7rem)] w-64 shrink-0 border-r">
        <div className="flex h-full flex-col">
          <div className="border-border flex h-12 items-center border-b px-6">
            <Typography className="font-semibold" variant="sm">
              元件目錄
            </Typography>
          </div>
          <ScrollArea className="flex-1">
            <nav className="p-4">
              <ul className="space-y-1">
                {components.map((component) => {
                  const isActive = pathname === component.href;
                  return (
                    <li key={component.href}>
                      <Button
                        asChild
                        className={cn(
                          'w-full justify-start',
                          isActive && 'font-medium'
                        )}
                        size="sm"
                        variant={isActive ? 'accent' : 'ghost'}
                      >
                        <Link href={component.href}>
                          <Typography variant="sm">{component.name}</Typography>
                        </Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </ScrollArea>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default ComponentsLayout;
