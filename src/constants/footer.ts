export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterContent {
  brand: {
    prefix: string;
    suffix: string;
    logoUrl: string;
    disclaimer: string;
    venue: string;
    address: string;
  };
  navigation: FooterLink[];
  channels: FooterLink[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    successMessage: string;
  };
  bottomBar: {
    copyright: string;
    themeLabel: string;
    themeValue: string;
  };
}

export const footerContent: FooterContent = {
  brand: {
    prefix: "TEDx",
    suffix: "UNM",
    logoUrl:
      "https://res.cloudinary.com/c4wbxcmp/image/upload/f_auto,q_auto/TED_LOGO_B",
    disclaimer:
      "An independent, TED-licensed event bringing together ideas, people, and perspectives through the theme The Art of Human Language.",
    venue: "Universitas Negeri Makassar",
    address:
      "Jl. A. P. Pettarani, Tidung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan.",
  },
  navigation: [
    { label: "Home", href: "#" },
    { label: "About TEDxUNM", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Journey", href: "#journey" },
    { label: "Merchandise", href: "#merchandise" },
    { label: "Tickets", href: "#tickets" },
    { label: "FAQ", href: "#faq" },
  ],
  channels: [
    {
      label: "Instagram: @tedxunm",
      href: "https://instagram.com/tedxunm",
      external: true,
    },
    {
      label: "TikTok: @tedxunm",
      href: "https://tiktok.com/@tedxunm",
      external: true,
    },
    {
      label: "YouTube: ted.com/watch/tedx-talks",
      href: "https://www.ted.com/watch/tedx-talks",
      external: true,
    },
    {
      label: "tedxunm@gmail.com",
      href: "mailto:tedxunm@gmail.com",
    },
    {
      label: "+62 82357837337",
      href: "https://wa.me/6282357837337",
      external: true,
    },
  ],
  newsletter: {
    title: "Join the Conversation",
    description:
      "Every idea has the potential to inspire someone. Every conversation has the potential to spark change.",
    placeholder: "Your email",
    buttonText: "Join",
    successMessage: "Thank you for joining the TEDxUNM conversation.",
  },
  bottomBar: {
    copyright: "© 2026 TEDxUNM. All rights reserved.",
    themeLabel: "Theme:",
    themeValue: "The Art of Human Language",
  },
};
