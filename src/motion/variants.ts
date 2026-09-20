import type { Variants } from "motion/react";

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const revealSoft: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerParentSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: easeOut,
    },
  },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const imageHover = {
  scale: 1.045,
};

export const cardHover = {
  y: -6,
  transition: {
    type: "spring",
    stiffness: 360,
    damping: 26,
  },
};

export const featuredCardHover = {
  y: -8,
  scale: 1.02,
  transition: {
    type: "spring",
    stiffness: 360,
    damping: 25,
  },
};

export const buttonHover = {
  y: -2,
  scale: 1.015,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 22,
  },
};

export const buttonTap = {
  scale: 0.985,
  transition: { duration: 0.12 },
};

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.28, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.22, ease: easeInOut },
  },
};

export const modalPanel: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 18,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 10,
    filter: "blur(3px)",
    transition: { duration: 0.22, ease: easeInOut },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};
