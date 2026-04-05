import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-kidney-600 hover:-translate-y-0.5",
        secondary:
          "bg-white text-primary border-2 border-primary hover:bg-kidney-100 hover:-translate-y-0.5",
        outline:
          "border-2 border-border bg-white text-primary hover:bg-primary hover:text-white hover:border-primary",
        ghost:
          "bg-transparent text-primary hover:bg-kidney-50",
        link:
          "text-primary underline-offset-4 hover:underline bg-transparent",
        success:
          "bg-success text-success-foreground hover:bg-success/90",
      },
      size: {
        default: "px-8 py-3 text-base rounded-full",
        sm: "px-5 py-2 text-sm rounded-full",
        lg: "px-10 py-4 text-lg rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
