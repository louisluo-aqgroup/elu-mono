'use client';

import { Button } from '@eluelu/elu-ui/components/button';
import { Input } from '@eluelu/elu-ui/components/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@eluelu/elu-ui/components/navigation-menu';
import { Typography } from '@eluelu/elu-ui/components/typography';
import { cn } from '@eluelu/elu-ui/lib/utils';
import { Bell, Grid3x3, Search, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoSvg from '@/assets/logo/icon_logo.svg';

const navigationItems = [
  {
    title: '智能媒合',
    href: '/matching',
    items: [
      {
        title: '找保姆',
        href: '/matching/nanny',
        description: '尋找專業的保姆服務',
      },
      {
        title: '找月嫂',
        href: '/matching/confinement',
        description: '產後護理專業月嫂',
      },
      {
        title: '找育兒幫手',
        href: '/matching/helper',
        description: '專業育兒協助服務',
      },
    ],
  },
  {
    title: '新手爸媽',
    href: '/new-parents',
    items: [
      {
        title: '懷孕準備',
        href: '/new-parents/pregnancy-prep',
        description: '孕前準備與注意事項',
      },
      {
        title: '產前課程',
        href: '/new-parents/prenatal-class',
        description: '專業產前教育課程',
      },
      {
        title: '新生兒照護',
        href: '/new-parents/newborn-care',
        description: '新生兒基本照護指南',
      },
    ],
  },
  {
    title: '關於孕婦',
    href: '/pregnancy',
  },
  {
    title: '準媽媽愛自己',
    href: '/prenatal-care',
  },
  {
    title: '寶寶照護',
    href: '/baby-care',
  },
  {
    title: '關於育兒',
    href: '/parenting',
  },
  {
    title: '孩童用品',
    href: '/products',
  },
  {
    title: '法律醫療',
    href: '/legal-medical',
  },
];

export function Header() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-background">
      {/* Top Header */}
      <header className="flex h-16 items-center justify-between border-b px-6">
        {/* Logo */}
        <div className="flex items-center">
          <LogoSvg className="fill-primary h-6 w-auto" />
        </div>

        {/* Search Bar */}
        <div className="relative mx-auto w-full max-w-xl">
          <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
          <Input type="search" placeholder="搜尋..." className="w-full pl-9" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          {/* Notification Bell with Badge */}
          <Button className="relative" size="icon" variant="ghost">
            <Bell className="size-5" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500" />
          </Button>

          {/* Grid Menu */}
          <Button size="icon" variant="ghost">
            <Grid3x3 className="size-5" />
          </Button>

          {/* User Profile */}
          <Button size="icon" variant="ghost">
            <User className="size-5" />
          </Button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="relative border-b py-2">
        <div className="container mx-auto px-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => {
                const subItems = item.items ?? [];
                const isItemActive =
                  pathMatches(currentPath, item.href) ||
                  subItems.some((subItem) =>
                    pathMatches(currentPath, subItem.href)
                  );

                if (subItems.length > 0) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <Button asChild variant="ghost">
                        <NavigationMenuTrigger active={isItemActive}>
                          <Typography
                            className={cn(
                              'transition-colors',
                              isItemActive && 'text-primary font-semibold'
                            )}
                            variant="sm"
                          >
                            {item.title}
                          </Typography>
                        </NavigationMenuTrigger>
                      </Button>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {subItems.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              active={pathMatches(currentPath, subItem.href)}
                              href={subItem.href}
                              title={subItem.title}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild active={isItemActive}>
                      <Button
                        asChild
                        className={cn(
                          'transition-colors',
                          isItemActive && 'text-primary'
                        )}
                        data-active={isItemActive ? 'true' : undefined}
                        variant="ghost"
                      >
                        <Link
                          aria-current={isItemActive ? 'page' : undefined}
                          href={item.href}
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
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
              <NavigationMenuIndicator />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
  href: string;
  title: string;
  children?: React.ReactNode;
  active?: boolean;
}

function ListItem({
  title,
  children,
  href,
  className,
  active = false,
  ...props
}: ListItemProps) {
  return (
    <li className={className} {...props}>
      <NavigationMenuLink
        asChild
        active={active}
        underlineVariant="muted"
      >
        <Button
          asChild
          className={cn(
            'h-auto flex-col items-start p-3 transition-colors',
            active && 'text-primary'
          )}
          data-active={active ? 'true' : undefined}
          variant="ghost"
        >
          <Link
            aria-current={active ? 'page' : undefined}
            className="w-full"
            href={href}
          >
            <Typography
              className={cn(
                'font-medium leading-none transition-colors',
                active && 'text-primary'
              )}
              variant="sm"
            >
              {title}
            </Typography>
            <Typography
              className="line-clamp-2 leading-snug"
              color="muted"
              variant="xs"
            >
              {children}
            </Typography>
          </Link>
        </Button>
      </NavigationMenuLink>
    </li>
  );
}

function normalizePath(path: string | null | undefined): string {
  if (!path) {
    return '/';
  }

  let normalized = path.startsWith('/') ? path : `/${path}`;

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.replace(/\/+$/, '');
  }

  return normalized.length === 0 ? '/' : normalized;
}

function pathMatches(currentPath: string, target?: string): boolean {
  if (!target) {
    return false;
  }

  const normalizedTarget = normalizePath(target);
  if (normalizedTarget === '/') {
    return currentPath === '/';
  }

  if (currentPath === normalizedTarget) {
    return true;
  }

  return currentPath.startsWith(`${normalizedTarget}/`);
}
