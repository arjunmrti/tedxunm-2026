// src/constants/merchandise.ts
import type { MerchandiseBundle, MerchandiseSectionContent } from '../types/Merchandise';

export const merchandiseSectionContent: MerchandiseSectionContent = {
  badgeLabel: 'Official Merchandise',
  heading: 'Choose Your Pieces. Carry the Conversation.',
  description:
    'Get your Spark Pack and keep the ideas spreading.',
  subheading: 'TEDxUNM 2026 Collection',
};

export const merchandiseBundles: MerchandiseBundle[] = [
  {
    id: 'spark-pack',
    variant: 'starter',
    ribbonLabel: 'PACK // 01',
    tierLabel: 'Starter',
    skuLabel: 'TEDx2026-SP',
    title: 'The Spark Pack',
    items: '1 Badge + 2 Stickers',
    priceLabel: 'Choose your pieces',
    price: 'Rp15.000',
    ctaText: 'See Details',
    imageSrc: 'https://res.cloudinary.com/c4wbxcmp/image/upload/v1789945175/WhatsApp_Image_2026-09-15_at_03.48.56.jpg',
    backDescription: 'A pocket-sized starter kit for anyone new to the community — badge on, stickers ready.',
  },
  {
    id: 'ideas-in-motion',
    variant: 'popular',
    ribbonLabel: 'POPULAR',
    tierLabel: 'Popular',
    skuLabel: 'PACK // 02',
    title: 'Ideas in Motion Pack',
    items: '1 Keychain + 1 Badge + 1 Sticker',
    priceLabel: 'Carry the conversation',
    price: 'Rp30.000',
    ctaText: 'See Details',
    imageSrc: 'https://res.cloudinary.com/c4wbxcmp/image/upload/v1789945175/WhatsApp_Image_2026-09-15_at_03.48.57.jpg',
    backDescription: 'Everyday carry for idea-chasers — a keychain, badge, and sticker made to move with you.',
  },
  {
    id: 'tedx-essentials',
    variant: 'featured',
    ribbonLabel: 'ESSENTIAL',
    tierLabel: 'Featured',
    skuLabel: 'PACK // 03',
    title: 'TEDx Essentials Pack',
    items: '1 Keychain + 1 Sticker + 1 Sticker Sheet',
    priceLabel: 'TEDxUNM 2026',
    price: 'Rp40.000',
    ctaText: 'See Details',
    imageSrc: 'https://res.cloudinary.com/c4wbxcmp/image/upload/v1789945174/WhatsApp_Image_2026-09-15_at_03.48.57_1.jpg',
    backDescription: 'The core TEDxUNM 2026 set — everything you need to represent the ideas worth spreading.',
  },
  {
    id: 'collectors-edition',
    variant: 'collector',
    ribbonLabel: 'FULL SET',
    tierLabel: 'Complete Set',
    skuLabel: 'PACK // 04',
    title: 'Ideas Worth Spreading Pack',
    items: '1 Keychain + 1 Badge + 3 Stickers + 1 Sticker Sheet',
    priceLabel: 'Keep the ideas spreading',
    price: 'Rp45.000',
    ctaText: 'See Details',
    imageSrc: 'https://res.cloudinary.com/c4wbxcmp/image/upload/v1789945174/WhatsApp_Image_2026-09-15_at_03.48.57_2.jpg',
    backDescription: 'Designed for creators, thinkers, and doers — the full set for those who keep every piece.',
  },
];
