'use client';

import { Button } from '@eluelu/elu-ui/components/button';
import { Menu } from 'lucide-react';

export const MobileMenu: RC = () => {
  return (
    <Button size="icon" variant="ghost">
      <Menu className="size-5" />
    </Button>
  );
};
