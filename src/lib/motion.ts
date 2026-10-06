export const inkEase = [0.22, 1, 0.36, 1] as const;

export const inkFade = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 16 },
  show: {
    opacity: 1, filter: "blur(0px)", y: 0,
    transition: { duration: 0.8, ease: inkEase },
  },
};

export const brushReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  show: {
    clipPath: "inset(0 0 0 0)", opacity: 1,
    transition: { duration: 1, ease: inkEase },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// Efek tinta menyebar dramatis
export const inkSpread = {
  hidden: {
    opacity: 0,
    filter: "blur(24px)",
    scale: 0.85,
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.1, ease: inkEase },
  },
};

// Stroke garis tinta (untuk timeline, divider)
export const brushStroke = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1, opacity: 1,
    transition: { duration: 1.4, ease: inkEase },
  },
};

// Tinta menetes (untuk elemen kecil)
export const inkDrip = {
  hidden: { y: -12, opacity: 0, scaleY: 0.2 },
  show: {
    y: 0, opacity: 1, scaleY: 1,
    transition: { duration: 0.7, ease: inkEase },
  },
};

// Card muncul dari bawah seperti tinta mengalir
export const inkRise = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, filter: "blur(16px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.9, ease: inkEase, delay },
  },
});