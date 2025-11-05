'use client';

import Link from 'next/link';

import LogoSvg from '@/assets/logo/icon_logo.svg';
import { pagePath } from '@/constants/page-path';

import { DesktopMenu } from '../menu/desktop';
import { DesktopNavigation } from '../navigations/desktop';
import { MobileNavigation } from '../navigations/mobile';
import { SearchInput } from './search-input';

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

export const Header: RC = () => {
  return (
    <div className="bg-background fixed top-0 right-0 left-0 z-50">
      {/* Top Header */}
      <header className="flex h-16 items-center justify-between gap-4 border-b px-6">
        {/* Mobile Navigation Trigger (now always visible) */}
        <div className="lg:hidden">
          <MobileNavigation items={navigationItems} />
        </div>

        {/* Logo */}
        <Link className="flex items-center" href={pagePath.home}>
          <LogoSvg className="fill-primary h-6 w-auto" />
        </Link>

        {/* Right Side Container */}
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* Search Bar - hidden on mobile */}
          <div className="hidden md:block md:max-w-md md:flex-1">
            <SearchInput />
          </div>

          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden items-center gap-2 lg:flex">
            <DesktopMenu />
          </div>
        </div>
      </header>

      {/* Desktop Navigation hidden at lg */}
      <nav className="relative hidden border-b py-2 lg:block">
        <div className="container flex h-12 items-center px-6">
          <DesktopNavigation items={navigationItems} />
        </div>
      </nav>
    </div>
  );
};
