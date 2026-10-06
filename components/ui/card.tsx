import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-paper-100 border border-paper-200 rounded-md",
        "p-6 md:p-8 shadow-paper transition-all duration-500 ease-ink",
        "hover:shadow-ink hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}