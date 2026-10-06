import { cn } from "@/lib/cn";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full bg-transparent border-0 border-b border-ink-100",
        "py-3 font-body text-ink-900 placeholder:text-ink-300",
        "focus:outline-none focus:border-seal-500",
        "transition-colors duration-400 ease-ink",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";