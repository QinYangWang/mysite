import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-none border px-2 py-0.5 text-[11px] font-normal transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-white/30 bg-transparent text-white/90",
        secondary:
          "border-white/15 bg-white/[0.06] text-white/70",
        destructive:
          "border-[#D71921]/60 bg-transparent text-[#D71921]",
        outline: "border-white/30 bg-transparent text-white/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
