// src/constants/merchandise.ts
import type { MerchandiseBundle, MerchandiseSectionContent } from '../types/Merchandise';

export const merchandiseSectionContent: MerchandiseSectionContent = {
  badgeLabel: 'Official Memorabilia',
  heading: 'Carry the Conversation With You',
  description:
    'The official TEDxUNM 2026 Collection — crafted with sustainable materials and bespoke typography honoring the art of human expression.',
  subheading: 'Exclusive Curated Bundles',
};

export const merchandiseBundles: MerchandiseBundle[] = [
  {
    id: 'spark-pack',
    variant: 'starter',
    ribbonLabel: '★ PACK // 01',
    tierLabel: 'Starter',
    skuLabel: 'TEDx2026-SP',
    title: 'The Spark Pack',
    items: 'Badge + Keychain + Holographic Sticker',
    priceLabel: 'Official Bundle',
    price: 'Rp75.000',
    ctaText: 'Select Bundle',
  },
  {
    id: 'ideas-in-motion',
    variant: 'popular',
    ribbonLabel: 'POPULAR',
    tierLabel: 'Popular',
    skuLabel: 'SERIES // 02',
    title: 'Ideas in Motion',
    items: 'Enamel Pin + Full Sticker Set + Keychain',
    priceLabel: 'Full Creative Set',
    price: 'Rp120.000',
    ctaText: 'Select Bundle',
  },
  {
    id: 'tedx-essentials',
    variant: 'featured',
    ribbonLabel: 'BEST VALUE',
    tierLabel: 'Featured',
    skuLabel: 'ESSENTIAL // 03',
    title: 'TEDx Essentials',
    items: 'Enamel Pin + Master Sticker Sheet + Badge + Tote',
    priceLabel: "Curator's Top Pick",
    price: 'Rp160.000',
    ctaText: 'Select Bundle',
  },
  {
    id: 'collectors-edition',
    variant: 'collector',
    ribbonLabel: 'BOX // LIMITED',
    tierLabel: 'Complete VIP',
    skuLabel: 'EDITION 2026',
    title: "Collector's Edition",
    items: 'Complete 7-item set + Exclusive Event Lanyard & Box',
    priceLabel: 'Archival Presentation',
    price: 'Rp220.000',
    ctaText: 'Select Bundle',
  },
];