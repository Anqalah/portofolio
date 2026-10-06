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
    "bg-ink-900 dark:bg-paper-50 text-paper-50 dark:text-ink-900 hover:bg-ink-700 dark:hover:bg-paper-100 hover:-translate-y-px hover:shadow-seal",
  secondary:
    "bg-transparent text-ink-900 dark:text-paper-50 border border-ink-900 dark:border-paper-50 hover:bg-ink-900 dark:hover:bg-paper-50 hover:text-paper-50 dark:hover:text-ink-900",
  ghost:
    "bg-transparent text-ink-500 dark:text-ink-100 hover:text-ink-900 dark:hover:text-paper-50 hover:bg-paper-100 dark:hover:bg-night-800",
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