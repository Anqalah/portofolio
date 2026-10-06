import { Noto_Serif_SC, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { InkProgressBar, InkScrollBlob } from "@/components/motion/ink-scroll";
import { InkCursor } from "@/components/motion/ink-cursor";

const heading = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const display = Ma_Shan_Zheng({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Lingtar — Full-Stack Developer",
  description: "Portofolio Lingtar, Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable} ${display.variable}`}
    >
      <body className="font-body antialiased">
        <ThemeProvider>
          <InkProgressBar />
          <InkScrollBlob />
          <InkCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}