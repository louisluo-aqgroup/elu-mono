import { JSX } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"


const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "typography-h1",
      h2: "typography-h2",
      h3: "typography-h3",
      h4: "typography-h4",
      p: "typography-p",
      blockquote: "typography-blockquote",
      list: "typography-list",
      inlineCode: "typography-inline-code",
      lead: "typography-lead",
      large: "typography-large",
      small: "typography-small",
      muted: "typography-muted",
      xl: "typography-fluid-xl",
      lg: "typography-fluid-lg",
      md: "typography-fluid-md",
      sm: "typography-fluid-sm",
      xs: "typography-fluid-xs",
    },
    color: {
      default: "",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      accent: "text-accent",
      muted: "text-muted-foreground",
      success: "text-green-600 dark:text-green-500",
      error: "text-destructive",
      warning: "text-amber-600 dark:text-amber-500",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

const defaultElements: Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  list: "ul",
  inlineCode: "code",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
  xl: "div",
  lg: "div",
  md: "div",
  sm: "span",
  xs: "span",
}

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: keyof JSX.IntrinsicElements
}

function Typography({
  className,
  variant,
  color,
  asChild = false,
  as,
  ...props
}: TypographyProps) {
  const Comp = asChild
    ? Slot
    : (as ?? (variant ? defaultElements[variant] : "div"))

  return (
    <Comp
      className={cn(typographyVariants({ variant, color, className }))}
      {...props}
    />
  )
}

export { Typography, typographyVariants }
