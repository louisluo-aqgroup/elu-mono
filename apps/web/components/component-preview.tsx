import { cn } from "@workspace/ui/lib/utils"

interface ComponentPreviewProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({
  title,
  description,
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="overflow-x-auto">
        <div
          className={cn(
            "flex min-w-max items-center justify-center gap-4 rounded-lg border bg-background px-8 py-6",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
