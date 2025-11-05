import { cn } from '@eluelu/elu-ui/lib/classes';
import type { ComponentPropsWithoutRef } from 'react';

type SkeletonProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

const Skeleton: RC<SkeletonProps> = ({ className, ...props }) => (
  <div
    data-slot="skeleton"
    className={cn('bg-muted animate-pulse rounded-md', className)}
    {...props}
  />
);

export { Skeleton };
