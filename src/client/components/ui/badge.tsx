import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[3px] border px-2 py-0.5 text-[11px] font-normal transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(55,53,47,0.16)] bg-[#f7f6f3] text-[#37352f]",
        secondary:
          "border-[rgba(55,53,47,0.16)] bg-[#f7f6f3] text-[#37352f]/70",
        destructive:
          "border-[#eb5757]/40 bg-[#eb5757]/10 text-[#eb5757]",
        outline: "border-[rgba(55,53,47,0.16)] bg-transparent text-[#37352f]",
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
