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
  badgeText: "Join The Conversation",
  headlinePrefix: "Curiosity is",
  headlineEmphasis: "the Beginning",
  headlineSuffix: "of Everything.",
  subtitle:
    "Discover new perspectives, hear inspiring stories, and be part of a bigger conversation at TEDxUNM 2026.",
  buttons: [
    {
      label: "Save Your Spot",
      href: "#tickets",
      variant: "primary",
      icon: "↗",
    },
    {
      label: "Follow @tedxunm",
      href: "https://instagram.com/tedxunm",
      variant: "secondary",
      external: true,
    },
  ],
  passCards: [
    {
      position: "left",
      badgeLabel: "PASS",
      badgeClassName: "bg-ted-red/10 text-ted-red",
      indicator: "bar",
      eyebrow: "October 2026 // Access",
      eyebrowClassName: "text-gray-400 font-semibold",
      title: "Phinisi Main Stage",
      subtitle: "The Art of Human Language",
      footerLabel: "SEAT",
      footerValue: "A-14",
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
      eyebrow: "Official Delegate",
      eyebrowClassName: "text-ted-red font-bold",
      title: "Voices of Resonance",
      subtitle: "Interactive Lounge & Banquet",
      footerLabel: "TIER",
      footerValue: "DELEGATE",
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