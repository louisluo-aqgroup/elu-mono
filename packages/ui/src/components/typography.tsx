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
}

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: keyof JSX.IntrinsicElements
}

function Typography({
  className,
  variant,
  asChild = false,
  as,
  ...props
}: TypographyProps) {
  const Comp = asChild
    ? Slot
    : (as ?? (variant ? defaultElements[variant] : "div"))

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Typography, typographyVariants }
