'use client';

import { Button } from '@eluelu/elu-ui/components/button';
import { ScrollArea } from '@eluelu/elu-ui/components/scroll-area';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { cn } from '@eluelu/elu-ui/lib/classes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const components = [
  {
    name: 'Accordion',
    href: '/components/accordion',
  },
  {
    name: 'Button',
    href: '/components/button',
  },
  {
    name: 'Input',
    href: '/components/input',
  },
  {
    name: 'Phone Input',
    href: '/components/phone-input',
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
    <div className="flex min-h-[calc(100vh-128px)]">
      {/* Left Navigation */}
      <aside className="border-border sticky top-16 lg:top-32 h-[calc(100vh-128px)] w-64 shrink-0 border-r">
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
                        variant={isActive ? 'default' : 'ghost'}
                      >
                        <Link href={component.href}>{component.name}</Link>
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
