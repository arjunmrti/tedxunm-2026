import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { cardReveal, sectionReveal } from "../../../../motion/variants";

const sponsorLogos = [
  { name: "Spring", src: "/sponsors/spring.svg" },
  { name: "Alpha", src: "/sponsors/alpha_logo.svg" },
  { name: "Vibe", src: "/sponsors/vibe.svg" },
  { name: "YRP", src: "/sponsors/yrp_logo.svg" },
  { name: "Culmi", src: "/sponsors/culmi_logo.svg" },
  { name: "Grab", src: "/sponsors/grab_logo.svg" },
  { name: "Light", src: "/sponsors/light_logo.svg" },
  { name: "Ajaba Industri", src: "/sponsors/ajaba_industri.svg" },
];

function SponsorCarousel() {
  const setRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((_time, delta) => {
    if (reducedMotion || isPaused || !setRef.current) return;

    const setWidth = setRef.current.offsetWidth;
    if (!setWidth) return;

    const speed = 0.035;
    const next = x.get() - delta * speed;
    x.set(next <= -setWidth ? next + setWidth : next);
  });

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-28"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-28"
        aria-hidden="true"
      />

      <motion.div style={{ x }} className="flex w-max">
        <div
          ref={setRef}
          className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-16 lg:pr-16"
        >
          {sponsorLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-20 w-32 shrink-0 items-center justify-center sm:h-24 sm:w-40 lg:h-28 lg:w-48"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 max-w-[82%] object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-14 lg:max-h-16"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 lg:gap-16 lg:pr-16"
        >
          {sponsorLogos.map((logo) => (
            <div
              key={"duplicate-" + logo.name}
              className="flex h-20 w-32 shrink-0 items-center justify-center sm:h-24 sm:w-40 lg:h-28 lg:w-48"
            >
              <img
                src={logo.src}
                alt=""
                className="max-h-12 max-w-[82%] object-contain opacity-75 grayscale sm:max-h-14 lg:max-h-16"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <motion.section
      id="sponsors"
      className="relative overflow-hidden border-y border-gray-200/80 bg-white py-20 sm:py-24"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={cardReveal} className="mb-12 flex flex-col gap-3 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Partners & Sponsors
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The people behind the ideas.
          </h2>
        </motion.div>

        <motion.div variants={cardReveal}>
          <div className="mb-5 flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Sponsors
            </span>
            <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
          </div>

          <div className="rounded-[2rem] border border-gray-200/80 bg-gray-50/70 py-7 sm:py-9">
            <SponsorCarousel />
          </div>
        </motion.div>

        <motion.div
          variants={cardReveal}
          className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-9"
        >
          <div className="flex flex-col items-center gap-7 sm:gap-8">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                Other Partners
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-12">
              <div className="flex items-center justify-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Media
                </span>
                <span className="font-display text-2xl font-black tracking-[-0.04em] text-gray-800 sm:text-3xl">
                  MND
                </span>
              </div>

              <div className="hidden h-7 w-px bg-gray-200 sm:block" aria-hidden="true" />

              <div className="flex items-center justify-center gap-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Community
                </span>
                <img
                  src="/sponsors/mager_logo.svg"
                  alt="Mager"
                  className="max-h-9 max-w-[8rem] object-contain opacity-80 sm:max-h-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
