import { cn } from '@eluelu/elu-ui/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

const inputVariants = cva(
  [
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-primary h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
    'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  ],
  {
    variants: {
      radius: {
        default: 'rounded-md',
        pill: 'rounded-full',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      radius: 'default',
    },
  }
);

type InputProps = ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof inputVariants>;

const Input: RC<InputProps> = ({ className, type, radius, ...props }) => (
  <input
    type={type}
    data-slot="input"
    className={cn(inputVariants({ radius }), className)}
    {...props}
  />
);

export { Input };
