import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative h-2.5 w-full overflow-hidden rounded-lg bg-border",
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-lg bg-gradient-to-r from-primary to-destructive transition-all duration-500"
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  )
);
Progress.displayName = "Progress";

export { Progress };
