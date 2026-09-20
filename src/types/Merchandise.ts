// src/types/Merchandise.ts

export type MerchandiseVariant = 'starter' | 'popular' | 'featured' | 'collector';

export interface MerchandiseBundle {
  id: string;
  variant: MerchandiseVariant;
  ribbonLabel: string; // teks pada label sudut kartu, mis. "★ PACK // 01", "BEST VALUE"
  tierLabel: string; // "Starter", "Popular", "Featured", "Complete VIP"
  skuLabel: string; // "TEDx2026-SP", "SERIES // 02", dst.
  title: string;
  items: string; // deskripsi isi bundle
  priceLabel: string; // "Official Bundle", "Curator's Top Pick", dst.
  price: string; // "Rp75.000"
  ctaText: string; // teks tombol, mis. "Select Bundle"
  themeColor: string; // dynamic theme color used by the flip back gradient
  imageUrl?: string; // optional merchandise image for the back face
}

export interface MerchandiseSectionContent {
  badgeLabel: string;
  heading: string;
  description: string;
  subheading: string;
}