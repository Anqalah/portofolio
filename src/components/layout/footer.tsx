export function Footer() {
    return (
      <footer className="border-t border-paper-200 bg-paper-100">
        <div className="container-ink px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-ink-500 text-sm">
            © {new Date().getFullYear()} Fadhil. Dibuat dengan Next.Js dan Prompt.
          </p>
          <p className="font-display text-seal-500 text-lg">水墨风</p>
        </div>
      </footer>
    );
  }