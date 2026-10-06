export const inkEase = [0.22, 1, 0.36, 1] as const;

export const inkFade = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: inkEase },
  },
};

export const brushReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  show: {
    clipPath: "inset(0 0 0 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: inkEase },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};