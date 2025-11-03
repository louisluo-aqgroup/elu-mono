'use client';

import { cn } from '@eluelu/elu-ui/lib/utils';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import type { ComponentPropsWithoutRef } from 'react';

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

const Separator: RC<SeparatorProps> = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) => (
  <SeparatorPrimitive.Root
    data-slot="separator"
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
      className
    )}
    {...props}
  />
);

export { Separator };
