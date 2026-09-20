// src/constants/merchandise.ts
import type { MerchandiseBundle, MerchandiseSectionContent } from '../types/Merchandise';

export const merchandiseSectionContent: MerchandiseSectionContent = {
  badgeLabel: 'Official Merchandise',
  heading: 'Choose Your Pieces. Carry the Conversation.',
  description:
    'Get your Spark Pack and keep the ideas spreading.',
  subheading: 'The Art of Human Language Collection',
};

export const merchandiseBundles: MerchandiseBundle[] = [
  {
    id: 'spark-pack',
    variant: 'starter',
    ribbonLabel: 'PACK // 01',
    tierLabel: 'Spark Pack',
    skuLabel: 'BADGE + STICKERS',
    title: 'The Spark Pack',
    items: '1 Badge (choose 1): The Art of Human Language Badge / TEDxUNM Badge + 2 Stickers (choose 2): The Art of Human Language Sticker / The Power of Conversation Sticker / Human Connection Sticker.',
    priceLabel: 'Bundle',
    price: 'Rp15.000',
    ctaText: 'See Details',
  },
  {
    id: 'ideas-in-motion',
    variant: 'popular',
    ribbonLabel: 'PACK // 02',
    tierLabel: 'Ideas in Motion',
    skuLabel: 'KEYCHAIN + BADGE + STICKER',
    title: 'Ideas in Motion Pack',
    items: '1 Keychain: The Art of Human Language Keychain + 1 Badge (choose 1) + 1 Sticker (choose 1).',
    priceLabel: 'Bundle',
    price: 'Rp30.000',
    ctaText: 'See Details',
  },
  {
    id: 'tedx-essentials',
    variant: 'featured',
    ribbonLabel: 'PACK // 03',
    tierLabel: 'TEDx Essentials',
    skuLabel: 'KEYCHAIN + STICKER + SHEET',
    title: 'TEDx Essentials Pack',
    items: '1 Keychain: The Art of Human Language Keychain + 1 Sticker (choose 1) + 1 Sticker Sheet: TEDxUNM 2026 Sticker Sheet.',
    priceLabel: 'Bundle',
    price: 'Rp40.000',
    ctaText: 'See Details',
  },
  {
    id: 'ideas-worth-spreading',
    variant: 'collector',
    ribbonLabel: 'PACK // 04',
    tierLabel: 'Ideas Worth Spreading',
    skuLabel: 'COMPLETE SET',
    title: 'Ideas Worth Spreading Pack',
    items: '1 Keychain + 1 Badge (choose 1) + 3 Stickers + 1 Sticker Sheet: TEDxUNM 2026 Sticker Sheet.',
    priceLabel: 'Bundle',
    price: 'Rp45.000',
    ctaText: 'See Details',
  },
];
