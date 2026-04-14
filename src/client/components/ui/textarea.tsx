import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-[6px] border border-[rgba(55,53,47,0.16)] bg-white px-3 py-2 text-base text-[#37352f] placeholder:text-[#9b9a97] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgb(35,131,226)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
