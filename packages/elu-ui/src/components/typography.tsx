import { cn } from '@eluelu/elu-ui/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { JSX } from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'typography-h1',
      h2: 'typography-h2',
      h3: 'typography-h3',
      h4: 'typography-h4',
      p: 'typography-p',
      blockquote: 'typography-blockquote',
      inlineCode: 'typography-inline-code',
      lead: 'typography-lead',
      large: 'typography-large',
      small: 'typography-small',
      muted: 'typography-muted',
      xl: 'typography-fluid-xl',
      lg: 'typography-fluid-lg',
      md: 'typography-fluid-md',
      sm: 'typography-fluid-sm',
      xs: 'typography-fluid-xs',
    },
    color: {
      default: '',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      accent: 'text-accent',
      muted: 'text-muted-foreground',
      success: 'text-green-600 dark:text-green-500',
      error: 'text-destructive',
      warning: 'text-amber-600 dark:text-amber-500',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'primary',
  },
});

const defaultElements: Record<
  NonNullable<VariantProps<typeof typographyVariants>['variant']>,
  string
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  inlineCode: 'code',
  lead: 'p',
  large: 'div',
  small: 'small',
  muted: 'p',
  xl: 'div',
  lg: 'div',
  md: 'div',
  sm: 'span',
  xs: 'span',
};

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  foreground?: boolean;
}

function Typography({
  className,
  variant,
  color,
  asChild = false,
  as,
  foreground = false,
  ...props
}: TypographyProps) {
  const Comp = asChild
    ? Slot
    : (as ?? (variant ? defaultElements[variant] : 'div'));

  // Special color handling for certain variants
  const finalColor =
    color ??
    (variant === 'muted'
      ? 'muted'
      : variant === 'p'
        ? 'default'
        : variant === 'blockquote'
          ? 'secondary'
          : variant === 'lead'
            ? 'accent'
            : undefined);

  // Generate foreground color class if foreground prop is true
  const foregroundClass =
    foreground && finalColor && finalColor !== 'default'
      ? `text-${finalColor}-foreground`
      : undefined;

  return (
    <Comp
      className={cn(
        typographyVariants({
          variant,
          color: foreground ? undefined : finalColor,
          className,
        }),
        foregroundClass
      )}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
