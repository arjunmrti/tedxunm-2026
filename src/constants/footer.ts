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
    "TEDxUNM is an independently organized TED-licensed event where ideas, people, and perspectives come together to spark meaningful change.",
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
    { label: "tedxunm@gmail.com", href: "mailto:tedxunm@gmail.com" },
    {
      label: "+62 82357837337",
      href: "https://wa.me/6282357837337",
      external: true,
    },
  ],
  newsletter: {
    title: "Stay Updated",
    description:
      "Stay connected with TEDxUNM 2026 updates, speakers, and the conversation around ideas worth spreading.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    successMessage: "Thank you for joining the TEDxUNM conversation!",
  },
  bottomBar: {
    copyright: "© 2026 TEDxUNM. All rights reserved.",
    themeLabel: "Theme:",
    themeValue: "The Art of Human Language",
  },
};