import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  accent?: boolean;
}

export function Tag({ accent, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs tracking-wider",
        "rounded-sm font-heading",
        accent
          ? "bg-seal-500 text-paper-50"
          : "bg-paper-200 dark:bg-night-700 text-ink-500 dark:text-ink-100",
        className
      )}
      {...props}
    />
  );
}