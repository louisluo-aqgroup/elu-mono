import { cn } from '@eluelu/elu-ui/lib/classes';
import { fontSizes } from '@eluelu/elu-ui/lib/sizing';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, JSX } from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: ['scroll-m-20', fontSizes.h1, 'font-extrabold', 'tracking-tight'],
      h2: [
        'scroll-m-20',
        'border-b',
        'pb-2',
        fontSizes.h2,
        'font-semibold',
        'tracking-tight',
        'first:mt-0',
      ],
      h3: ['scroll-m-20', fontSizes.h3, 'font-semibold', 'tracking-tight'],
      h4: ['scroll-m-20', fontSizes.h4, 'font-semibold', 'tracking-tight'],
      p: ['leading-7', '[&:not(:first-child)]:mt-6'],
      blockquote: ['mt-6', 'border-l-2', 'pl-6', 'italic'],
      inlineCode: [
        'bg-muted',
        'relative',
        'rounded',
        'px-[0.3rem]',
        'py-[0.2rem]',
        'font-mono',
        fontSizes['small-muted'],
        'font-semibold',
      ],
      lead: ['text-muted-foreground', fontSizes.lead],
      large: [fontSizes.large, 'font-semibold'],
      small: [fontSizes['small-muted'], 'leading-none', 'font-medium'],
      muted: ['text-muted-foreground', fontSizes['small-muted']],
      xl: [fontSizes.xl, 'font-extrabold', 'tracking-tight'],
      lg: [fontSizes.lg, 'font-semibold', 'tracking-tight'],
      md: [fontSizes.md, 'font-medium'],
      sm: [fontSizes.sm],
      xs: [fontSizes.xs],
    },
    color: {
      default: '',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      accent: 'text-accent',
      muted: 'text-muted-foreground',
      success: 'text-green-600 dark:text-green-500',
      error: 'text-destructive/80',
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
  lead: 'div',
  large: 'div',
  small: 'span',
  muted: 'div',
  xl: 'div',
  lg: 'div',
  md: 'div',
  sm: 'div',
  xs: 'div',
};

type TypographyProps = {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  foreground?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'color'> &
  VariantProps<typeof typographyVariants>;

const Typography: RCC<TypographyProps> = ({
  className,
  variant,
  color,
  asChild = false,
  as,
  foreground = false,
  ...props
}) => {
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
};

export { Typography, typographyVariants };
