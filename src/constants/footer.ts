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
    "This independent TEDx event is operated under license from TED. Bringing world-class idea dissemination to Universitas Negeri Makassar and Eastern Indonesia.",
  venue: "Menara Phinisi, Universitas Negeri Makassar",
  address:
    "Jl. A. P. Pettarani, Tidung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222",
},
  navigation: [
    { label: "Home", href: "#" },
    { label: "About TEDxUNM", href: "#about" },
    { label: "Speakers Roster", href: "#speakers" },
    { label: "Past Journey", href: "#journey" },
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
      "Receive speaker release announcements and agenda timetables.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing to TEDxUNM updates!",
  },
  bottomBar: {
    copyright: "© 2026 TEDxUNM. All rights reserved.",
    themeLabel: "Theme:",
    themeValue: "The Art of Human Language",
  },
};