export interface BarcodeBar {
  width: "thin" | "thick";
  height: 2 | 3 | 4 | 5;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: string;
  external?: boolean;
}

export interface PassCardData {
  position: "left" | "right";
  badgeLabel: string;
  badgeClassName: string;
  indicator: "bar" | "dot";
  eyebrow: string;
  eyebrowClassName: string;
  title: string;
  subtitle: string;
  footerLabel: string;
  footerValue: string;
  footerValueClassName: string;
  barcodeBars: BarcodeBar[];
}

export interface CTAContent {
  badgeText: string;
  headlinePrefix: string;
  headlineEmphasis: string;
  headlineSuffix: string;
  subtitle: string;
  buttons: CTAButton[];
  passCards: PassCardData[];
}

export const ctaContent: CTAContent = {
  badgeText: "TEDxUNM 2026",
  headlinePrefix: "Curiosity is",
  headlineEmphasis: "the Beginning",
  headlineSuffix: "of Everything.",
  subtitle:
    "Discover new perspectives, hear inspiring stories, and be part of a bigger conversation.",
  buttons: [
    {
      label: "Save Your Spot",
      href: "#tickets",
      variant: "primary",
      icon: "↗",
    },
    {
      label: "Be Part of This Story",
      href: "#speakers",
      variant: "secondary",
      external: false,
    },
  ],
  passCards: [
    {
      position: "left",
      badgeLabel: "PASS",
      badgeClassName: "bg-ted-red/10 text-ted-red",
      indicator: "bar",
      eyebrow: "Ideas Worth Spreading",
      eyebrowClassName: "text-gray-400 font-semibold",
      title: "The Art of Human Language",
      subtitle: "Every voice, a language of its own.",
      footerLabel: "THEME",
      footerValue: "2026",
      footerValueClassName: "text-gray-900",
      barcodeBars: [
        { width: "thin", height: 4 },
        { width: "thick", height: 5 },
        { width: "thin", height: 3 },
        { width: "thick", height: 5 },
        { width: "thin", height: 4 },
        { width: "thick", height: 5 },
        { width: "thin", height: 2 },
        { width: "thick", height: 4 },
      ],
    },
    {
      position: "right",
      badgeLabel: "VIP 2026",
      badgeClassName: "bg-[#111111] text-white",
      indicator: "dot",
      eyebrow: "Join the Conversation",
      eyebrowClassName: "text-ted-red font-bold",
      title: "Share Ideas That Matter",
      subtitle: "Ideas can inspire someone. Conversations can spark change.",
      footerLabel: "TAGLINE",
      footerValue: "VOICE",
      footerValueClassName: "text-ted-red",
      barcodeBars: [
        { width: "thick", height: 5 },
        { width: "thin", height: 3 },
        { width: "thick", height: 5 },
        { width: "thin", height: 4 },
        { width: "thin", height: 2 },
        { width: "thick", height: 4 },
        { width: "thin", height: 5 },
      ],
    },
  ],
};