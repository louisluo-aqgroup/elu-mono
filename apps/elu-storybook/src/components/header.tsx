import { Button } from '@eluelu/elu-ui/components/button';
import { Input } from '@eluelu/elu-ui/components/input';
import { Bell, Grid3x3, Search, User } from 'lucide-react';

import LogoSvg from '@/assets/logo/icon_logo.svg';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Logo */}
      <div className="flex items-center">
        <LogoSvg className="fill-primary h-6 w-auto" />
      </div>

      {/* Search Bar */}
      <div className="relative mx-auto w-full max-w-xl">
        <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="搜尋..."
          className="w-full pl-9"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2">
        {/* Notification Bell with Badge */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500" />
        </Button>

        {/* Grid Menu */}
        <Button variant="ghost" size="icon">
          <Grid3x3 className="size-5" />
        </Button>

        {/* User Profile */}
        <Button variant="ghost" size="icon">
          <User className="size-5" />
        </Button>
      </div>
    </header>
  );
}
