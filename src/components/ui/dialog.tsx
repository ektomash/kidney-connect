import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      {children}
    </div>
  );
}

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative w-[90%] max-w-[440px] rounded-2xl bg-white p-10",
      className
    )}
    onClick={(e) => e.stopPropagation()}
    {...props}
  >
    {children}
  </div>
));
DialogContent.displayName = "DialogContent";

function DialogClose({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "absolute top-4 right-5 bg-transparent border-none text-3xl text-gray-400 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      &times;
    </button>
  );
}

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-foreground mb-1", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-warm-subtle mb-6 text-[0.95rem]", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription };
