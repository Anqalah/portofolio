import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export const mdxComponents = {
  h2: (p: any) => (
    <h2
      {...p}
      className="font-display text-3xl md:text-4xl text-ink-900 dark:text-paper-50 mt-16 mb-4 scroll-mt-24"
    />
  ),
  h3: (p: any) => (
    <h3
      {...p}
      className="font-heading text-2xl text-ink-900 dark:text-paper-50 mt-10 mb-3 scroll-mt-24"
    />
  ),
  p: (p: any) => (
    <p {...p} className="font-body text-lg leading-relaxed text-ink-500 dark:text-ink-100 my-5" />
  ),
  a: ({ href = "", ...p }: any) => (
    <Link
      href={href}
      className="text-seal-500 brush-underline"
      {...p}
    />
  ),
  ul: (p: any) => <ul {...p} className="my-5 space-y-2 list-none" />,
  li: (p: any) => (
    <li
      {...p}
      className="font-body text-ink-500 dark:text-ink-100 relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-seal-500"
    />
  ),
  blockquote: (p: any) => (
    <blockquote
      {...p}
      className="my-8 border-l-2 border-seal-500 bg-paper-100 dark:bg-night-800 px-5 py-4 rounded-sm font-heading italic text-ink-700 dark:text-paper-100"
    />
  ),
  code: ({ children, ...p }: any) => (
    <code
      {...p}
      className="px-1.5 py-0.5 rounded-sm bg-paper-100 dark:bg-night-800 text-seal-500 font-mono text-[0.9em]"
    >
      {children}
    </code>
  ),
  pre: (p: any) => (
    <pre
      {...p}
      className="my-6 p-5 rounded-md overflow-x-auto bg-ink-900 text-paper-50 dark:bg-night-950 text-sm leading-relaxed"
    />
  ),
  hr: () => (
    <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-ink-300 dark:via-ink-100 to-transparent" />
  ),
  img: ({ src = "", alt = "" }: any) => (
    <span className="my-8 block rounded-md overflow-hidden surface">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        className="w-full h-auto"
      />
    </span>
  ),
};