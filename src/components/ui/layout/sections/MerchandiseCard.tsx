import { useState } from "react";
import { motion } from "motion/react";
import { cardReveal } from "../../../../motion/variants";
// src/components/ui/layout/sections/MerchandiseCard.tsx
import type { MerchandiseBundle, MerchandiseVariant } from '../../../../types/Merchandise';

export interface MerchandiseCardProps {
  bundle: MerchandiseBundle;
  onSelect?: (bundleId: string) => void;
}

interface MerchandiseCardStyle {
  wrapper: string;
  ribbonWrapper: string;
  ribbonIcon?: 'sparkle' | 'pulse';
  tierBadge: string;
  skuLabel: string;
  title: string;
  accentBar: string;
  itemsText: string;
  priceBlockWrapper: string;
  priceLabel: string;
  price: string;
  button: string;
}

const cardStyles: Record<MerchandiseVariant, MerchandiseCardStyle> = {
  starter: {
    wrapper:
      'w-full sm:w-80 lg:w-[275px] bg-[#FFFFFF] border-2 border-gray-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative transition-all duration-300 hover:scale-105 hover:z-30 lg:-rotate-3 lg:translate-y-4 group',
    ribbonWrapper:
      'absolute -top-3.5 left-8 bg-[#F3F3F3] text-gray-700 border border-gray-300 px-3.5 py-0.5 rounded-sm text-[10px] font-mono tracking-wider shadow-sm uppercase -rotate-2',
    tierBadge:
      'text-[10px] font-extrabold uppercase tracking-wider bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full border border-gray-200',
    skuLabel: 'text-[10px] font-mono text-gray-400 font-semibold',
    title: 'text-xl font-bold font-display text-gray-900 mt-1',
    accentBar: 'w-8 h-1 bg-ted-red mt-2 mb-3 rounded-full',
    itemsText: 'text-xs text-gray-600 leading-relaxed min-h-[40px]',
    priceBlockWrapper: 'mt-6 pt-4 border-t border-dashed border-gray-200',
    priceLabel: 'text-[11px] font-mono uppercase text-gray-400 font-medium',
    price: 'text-3xl font-display font-extrabold text-gray-900 mt-0.5',
    button:
      'mt-6 w-full py-3 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all',
  },
  popular: {
    wrapper:
      'w-full sm:w-80 lg:w-[280px] bg-[#FAF9F6] border-2 border-gray-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative transition-all duration-300 hover:scale-105 hover:z-30 lg:rotate-1 lg:-translate-y-2 group z-10',
    ribbonWrapper:
      'absolute -top-4 right-6 bg-[#FFF4D9] text-[#8C5D00] border border-[#FFE7A8] px-3 py-1 rounded-full text-[10px] font-black tracking-wide shadow-sm rotate-6 flex items-center gap-1',
    ribbonIcon: 'sparkle',
    tierBadge:
      'text-[10px] font-extrabold uppercase tracking-wider bg-ted-red/10 text-ted-red px-2.5 py-1 rounded-full border border-ted-red/20',
    skuLabel: 'text-[10px] font-mono text-gray-400 font-semibold',
    title: 'text-xl font-bold font-display text-gray-900 mt-1',
    accentBar: 'w-8 h-1 bg-gray-900 mt-2 mb-3 rounded-full',
    itemsText: 'text-xs text-gray-600 leading-relaxed min-h-[40px]',
    priceBlockWrapper: 'mt-6 pt-4 border-t border-dashed border-gray-200',
    priceLabel: 'text-[11px] font-mono uppercase text-gray-400 font-medium',
    price: 'text-3xl font-display font-extrabold text-gray-900 mt-0.5',
    button:
      'mt-6 w-full py-3 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all',
  },
  featured: {
    wrapper:
      'w-full sm:w-84 lg:w-[305px] bg-[#FFFFFF] border-2 border-ted-red rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative transition-all duration-300 hover:scale-105 hover:z-40 lg:-translate-y-6 group z-20',
    ribbonWrapper:
      'absolute -top-4 left-1/2 -translate-x-1/2 bg-ted-red text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5',
    ribbonIcon: 'pulse',
    tierBadge:
      'text-[10px] font-extrabold uppercase tracking-wider bg-ted-red text-white px-2.5 py-1 rounded-full shadow-sm',
    skuLabel: 'text-[10px] font-mono text-ted-red font-bold',
    title: 'text-2xl font-bold font-display text-gray-900 mt-1 leading-tight',
    accentBar: 'w-12 h-1 bg-ted-red mt-2 mb-3 rounded-full',
    itemsText: 'text-xs text-gray-700 leading-relaxed font-medium min-h-[40px]',
    priceBlockWrapper:
      'mt-6 pt-4 border-t-2 border-ted-red/20 bg-[#FFF8F7] -mx-4 px-4 py-2.5 rounded-2xl',
    priceLabel: 'text-[10px] font-mono uppercase text-ted-red font-bold tracking-wide',
    price: 'text-3xl font-display font-black text-ted-red mt-0.5',
    button:
      'mt-6 w-full py-3.5 bg-ted-red hover:bg-ted-hover text-white text-xs font-bold rounded-full shadow-lg shadow-ted-red/25 transition-all',
  },
  collector: {
    wrapper:
      'w-full sm:w-80 lg:w-[285px] bg-[#111111] text-white border-2 border-gray-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative transition-all duration-300 hover:scale-105 hover:z-30 lg:rotate-3 lg:translate-y-3 group z-10',
    ribbonWrapper:
      'absolute -top-3.5 right-8 bg-ted-red text-white border border-white/20 px-3 py-0.5 rounded-sm text-[10px] font-mono tracking-wider shadow-md uppercase rotate-3',
    tierBadge:
      'text-[10px] font-extrabold uppercase tracking-wider bg-white/15 text-white border border-white/20 px-2.5 py-1 rounded-full',
    skuLabel: 'text-[10px] font-mono text-gray-400 font-semibold',
    title: 'text-xl font-bold font-display text-white mt-1',
    accentBar: 'w-8 h-1 bg-ted-red mt-2 mb-3 rounded-full',
    itemsText: 'text-xs text-gray-300 leading-relaxed min-h-[40px]',
    priceBlockWrapper: 'mt-6 pt-4 border-t border-dashed border-gray-700',
    priceLabel: 'text-[11px] font-mono uppercase text-gray-400 font-medium',
    price: 'text-3xl font-display font-extrabold text-white mt-0.5',
    button:
      'mt-6 w-full py-3 bg-ted-red hover:bg-ted-hover text-white text-xs font-bold rounded-full shadow-md transition-all',
  },
};

const MerchandiseCard = ({ bundle, onSelect }: MerchandiseCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const s = cardStyles[bundle.variant];

  return (
    <motion.div
      variants={cardReveal}
      whileTap={{ scale: 0.985 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className={`${s.wrapper} [perspective:1200px]`}
    >
      <motion.div
        className="relative w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="pt-2">
            <div className="flex items-center justify-between mb-4">
              <span className={s.tierBadge}>{bundle.tierLabel}</span>
              <span className={s.skuLabel}>{bundle.skuLabel}</span>
            </div>
            <div className="text-left">
              <div className={s.ribbonWrapper}>
                {s.ribbonIcon === 'sparkle' && (
                  <>
                    <span>✦</span> {bundle.ribbonLabel}
                  </>
                )}
                {s.ribbonIcon === 'pulse' && (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    {bundle.ribbonLabel}
                  </>
                )}
                {!s.ribbonIcon && bundle.ribbonLabel}
              </div>
              <h4 className={s.title}>{bundle.title}</h4>
              <div className={s.accentBar}></div>
              <p className={s.itemsText}>{bundle.items}</p>
              <div className={s.priceBlockWrapper}>
                <div className={s.priceLabel}>{bundle.priceLabel}</div>
                <div className={s.price}>{bundle.price}</div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            type="button"
            className={s.button}
            onClick={() => onSelect?.(bundle.id)}
          >
            {bundle.ctaText}
          </motion.button>
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-[inherit] text-white"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            background: `linear-gradient(to bottom, ${bundle.themeColor} 0%, ${bundle.themeColor}DD 48%, ${bundle.themeColor}99 100%)`,
          }}
        >
          {bundle.imageUrl ? (
            <img
              src={bundle.imageUrl}
              alt={bundle.title}
              className="absolute inset-x-4 top-4 h-40 w-[calc(100%-2rem)] rounded-2xl object-cover shadow-lg"
            />
          ) : (
            <div className="absolute inset-x-4 top-4 h-40 rounded-2xl border border-white/30 bg-white/15 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] opacity-80">
                  TEDxUNM 2026
                </div>
                <div className="mt-2 text-lg font-bold tracking-tight">
                  Merchandise
                </div>
                <div className="mt-1 text-[11px] opacity-80">
                  Bundle preview
                </div>
              </div>
            </div>
          )}

          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-80">
              {bundle.tierLabel}
            </div>
            <h4 className="mt-1 text-lg font-display font-bold leading-tight">
              {bundle.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-white/90">
              {bundle.items}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MerchandiseCard;
