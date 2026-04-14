import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgb(35,131,226)] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#37352f] text-white hover:bg-[#37352f]/90 rounded-[6px]",
        destructive:
          "bg-[#eb5757] text-white hover:bg-[#eb5757]/90 rounded-[6px]",
        outline:
          "border border-[rgba(55,53,47,0.16)] bg-transparent hover:bg-[#f7f6f3] hover:text-[#37352f] rounded-[6px]",
        secondary:
          "bg-[#f7f6f3] text-[#37352f] hover:bg-[rgba(55,53,47,0.12)] rounded-[6px]",
        ghost: "hover:bg-[rgba(55,53,47,0.08)] hover:text-[#37352f] rounded-[6px]",
        link: "text-[#37352f] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
