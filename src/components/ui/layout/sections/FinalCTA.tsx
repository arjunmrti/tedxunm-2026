import { motion } from "motion/react";
import { cardReveal, sectionReveal } from "../../../../motion/variants";
import { ctaContent } from "../../../../constants/cta";
import type { PassCardData } from "../../../../constants/cta";

const barWidthClass: Record<"thin" | "thick", string> = {
  thin: "w-0.5",
  thick: "w-1",
};

const barHeightClass: Record<2 | 3 | 4 | 5, string> = {
  2: "h-2",
  3: "h-3",
  4: "h-4",
  5: "h-5",
};

const primaryButtonClass =
  "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ted-red hover:bg-ted-hover text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-red-900/50 hover:scale-105 transition-all";

const secondaryButtonClass =
  "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-7 py-4 rounded-full border border-white/25 backdrop-blur-sm transition-all hover:scale-105";

function PassCard({ data }: { data: PassCardData }) {
  const isLeft = data.position === "left";

  return (
    <div
      className={`hidden md:block absolute -bottom-8 z-10 pointer-events-none select-none transition-transform duration-500 hover:scale-105 ${
        isLeft ? "-left-6 lg:-left-4" : "-right-6 lg:-right-4"
      }`}
    >
      <div
        className={`relative w-64 lg:w-72 h-44 rounded-2xl bg-white text-gray-900 p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] border-2 border-white/90 flex flex-col justify-between overflow-hidden ${
          isLeft ? "rotate-12" : "-rotate-12"
        }`}
      >
        {/* Header strip */}
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-black text-ted-red text-xs tracking-tighter">
              TEDx
            </span>
            <span className="font-display font-black text-gray-900 text-xs">
              UNM
            </span>
            <span
              className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ml-1 ${data.badgeClassName}`}
            >
              {data.badgeLabel}
            </span>
          </div>
          {data.indicator === "bar" ? (
            <div className="w-5 h-1.5 rounded-full bg-gray-200" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-ted-red animate-pulse" />
          )}
        </div>

        {/* Body */}
        <div className="py-1 text-left">
          <p
            className={`text-[9px] font-mono uppercase tracking-widest ${data.eyebrowClassName}`}
          >
            {data.eyebrow}
          </p>
          <p className="font-display font-extrabold text-sm text-gray-900 leading-tight">
            {data.title}
          </p>
          <p className="text-[10px] text-gray-500 mt-0.5">{data.subtitle}</p>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between pt-2 border-t border-dashed border-gray-200 text-left">
          <div className="text-[9px] font-mono text-gray-400">
            <span>{data.footerLabel}</span>{" "}
            <strong className={data.footerValueClassName}>
              {data.footerValue}
            </strong>
          </div>
          {/* Mini barcode */}
          <div className="flex gap-0.5 items-end h-5">
            {data.barcodeBars.map((bar, index) => (
              <span
                key={index}
                className={`${barWidthClass[bar.width]} ${
                  barHeightClass[bar.height]
                } bg-gray-900`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FinalCTA = () => {
  return (
    <motion.section
      aria-labelledby="cta-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      <motion.div variants={cardReveal} className="relative overflow-hidden rounded-[32px] sm:rounded-4xl border border-ted-red/30 text-white text-center shadow-2xl p-8 sm:p-14 lg:p-20 transition-all bg-gradient-to-b from-[#111111] via-[#1a0505] to-[#700603]">
        {/* Radial lighting glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-ted-red/25 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[750px] h-[300px] bg-[#E10600]/40 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

        {/* Angled 3D pass cards, rendered from data */}
        {ctaContent.passCards.map((card) => (
          <PassCard key={card.position} data={card} />
        ))}

        {/* Central content stack */}
        <motion.div variants={cardReveal} className="relative z-20 max-w-2xl sm:max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-ted-red animate-pulse" />
            <span>{ctaContent.badgeText}</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-5"
            id="cta-heading"
          >
            {ctaContent.headlinePrefix} <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-white/95">
              {ctaContent.headlineEmphasis}
            </span>{" "}
            {ctaContent.headlineSuffix}
          </h2>

          <p className="text-white/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto mb-10">
            {ctaContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {ctaContent.buttons.map((button) => (
              <motion.a
                key={button.label}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noopener noreferrer" : undefined}
                className={
                  button.variant === "primary"
                    ? primaryButtonClass
                    : secondaryButtonClass
                }
              >
                <span>{button.label}</span>
                {button.icon && (
                  <span className="text-base leading-none">{button.icon}</span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FinalCTA;