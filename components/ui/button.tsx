import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "seal";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-paper-50 hover:bg-ink-700 hover:-translate-y-px hover:shadow-seal",
  secondary:
    "bg-transparent text-ink-900 border border-ink-900 hover:bg-ink-900 hover:text-paper-50",
  ghost: "bg-transparent text-ink-500 hover:text-ink-900 hover:bg-paper-100",
  seal:
    "bg-seal-500 text-paper-50 hover:bg-seal-600 hover:-translate-y-px hover:shadow-seal",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-brush font-heading tracking-wide",
        "transition-all duration-500 ease-ink",
        "disabled:opacity-40 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";