import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-[rgba(55,53,47,0.08)] rounded-[3px]", className)}
      {...props}
    />
  )
}

export { Skeleton }
