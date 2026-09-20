import { motion } from "motion/react";
import {
  heroContainer,
  heroItem,
  imageHover,
} from "../../../../motion/variants";

export default function Hero() {
  return (
    <motion.section
      aria-labelledby="hero-heading"
      className="pt-12 pb-20 px-6 sm:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto text-center"
      variants={heroContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Event statement */}
      <motion.div
        variants={heroItem}
        className="inline-flex items-center gap-2.5 bg-white border border-gray-200/90 rounded-full px-4 py-1.5 shadow-sm mb-6 text-xs sm:text-sm font-medium text-gray-800"
      >
        <span className="flex h-2 w-2 rounded-full bg-ted-red animate-pulse"></span>
        <span className="text-gray-500">Where ideas find their voice</span>
        <span className="text-gray-300">|</span>
        <span className="font-semibold text-ted-red">TEDxUNM 2026</span>
      </motion.div>

      <motion.div
        variants={heroItem}
        className="relative max-w-4xl mx-auto mb-6"
      >
        <span className="hidden lg:inline-block absolute -left-12 top-2 -rotate-12 bg-[#FFF4D9] text-[#8C5D00] border border-[#FFE7A8] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          Where ideas find their voice
        </span>
        <span className="hidden lg:inline-block absolute -right-8 bottom-3 rotate-6 bg-[#E8F8F0] text-[#127943] border border-[#BDEFD4] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          Every voice, a language of its own.
        </span>

        <h1
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-ted-dark tracking-tight leading-[1.08]"
          id="hero-heading"
        >
          The Art of <br className="hidden sm:inline" />
          <span className="text-ted-red underline decoration-ted-red/20 underline-offset-8">
            Human Language
          </span>
        </h1>
      </motion.div>

      <motion.p
        variants={heroItem}
        className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8"
      >
        The way you speak shapes who you are, what you believe, and how you see the world.
        <span className="font-semibold text-gray-900 block mt-1">
          "Every voice, a language of its own."
        </span>
      </motion.p>

      <motion.div
        variants={heroItem}
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16"
      >
        <motion.a
          href="#tickets"
          whileHover={{ y: -3, scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-ted-red hover:bg-ted-hover text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-ted-red/20"
        >
          Get Your Spot
        </motion.a>
        <motion.a
          href="#speakers"
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-medium text-sm sm:text-base px-8 py-3.5 rounded-full"
        >
          See the Lineup
        </motion.a>
      </motion.div>

      <motion.div
        variants={heroItem}
        className="relative max-w-5xl mx-auto"
      >
        <div className="hidden md:flex items-center gap-2 absolute -top-8 left-8 text-xs font-medium text-gray-500">
          <svg className="w-5 h-5 text-gray-400 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span>TEDxUNM 2026</span>
        </div>

        <div className="hidden md:flex items-center gap-2 absolute -top-8 right-8 text-xs font-medium text-gray-500">
          <span>Ideas Worth Spreading</span>
          <svg className="w-5 h-5 text-gray-400 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch text-left">
          {/* Fresh Perspectives */}
          <motion.div
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 360, damping: 26 } }}
            className="bg-white text-gray-900 border border-gray-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ted-red/30 transition-shadow duration-300 relative group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-gray-500 font-semibold">
                    01 / Fresh Perspectives
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mt-1 leading-tight tracking-tight">
                    Fresh <span className="text-ted-red">Perspectives</span>
                  </h3>
                </div>
                <motion.a
                  className="w-11 h-11 rounded-full bg-gray-50 hover:bg-ted-red hover:text-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-sm"
                  href="#about"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </motion.a>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Challenge the way you see the world and uncover new possibilities in the everyday.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200/80">
              <motion.img
                alt="TEDxUNM 2026"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W5CZ2n3VLLr3ujOpDkfTatJrP74IMQ-F6j4eHQbJZNP0LEQfxRkEbNyay7bsKozrPKpLaDJB1EPSa07z580ASzKBOCA4LxNvBf1lNvE1QRVRQq5VrWjHTmniiwRY67-MybKlRCmouLkh9gWa3-B6rJisnm70IUhUTTp_uWkSt5sp6SyjqXbsxhsdGC14IZRtgq-P-Y7iaKPB9ITwm_ffGtFYgYt6t3JHIoMJE81jnbP730UO4RVPy8ygmW"
                whileHover={imageHover}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-white/90 border border-white/40 rounded-full px-3.5 py-1.5 text-[11px] text-gray-900 font-medium shadow-sm">
                <span>Fresh Perspectives</span>
                <span className="text-ted-red font-bold">See Details</span>
              </div>
            </div>
          </motion.div>

          {/* Meaningful Connections */}
          <motion.div
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 360, damping: 26 } }}
            className="bg-ted-red text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative md:-translate-y-2 group border border-ted-red"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 4 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-ted-red font-black flex items-center justify-center shadow-xl border-4 border-[#F8F9FA] z-20 cursor-pointer"
            >
              <svg className="w-7 h-7 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </motion.div>

            <div>
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-mono tracking-wider uppercase font-bold px-2.5 py-0.5 rounded-full mb-2">
                    02 / Meaningful Connections
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1 leading-tight tracking-tight">
                    Meaningful<br />Connections
                  </h3>
                </div>
                <motion.a
                  className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 border border-white flex items-center justify-center text-ted-red shrink-0 shadow-md"
                  href="#about"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </motion.a>
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-6 font-normal">
                Connect with a community of curious minds who believe ideas can shape a better future.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/20 border border-white/20 flex items-center justify-center p-2">
              <motion.img
                alt="Meaningful Connections"
                className="w-full h-full object-cover rounded-xl"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wg95A4IHQj7mIYePuu4HwCVfCgv2W4Uzo44v7yGbLbq0z0BT7cbfs29BCwij-cmnpBP6g0dPnXoUY1q8ZkeyZqMz6UHZftmKhVKw831qroR-lWNo7RWvJQMn5u_41qVQSx23rWJggCEvHm4aNrJa4UZYLiJ26mTx7JLCAEzfUqFNfSP0uA8tnRrZLcGS32qXhjffjbEsoVBwEuJOf6FycWh4nFJabeuApFsMddF44O09QIVUPw8n5NZyoE"
                whileHover={imageHover}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-white/90 border border-white/30 rounded-full px-3.5 py-1.5 text-[11px] text-gray-900 font-medium shadow-sm">
                <span>Meaningful Connections</span>
                <span className="text-ted-red font-bold">See Details</span>
              </div>
            </div>
          </motion.div>

          {/* Action Beyond Inspiration */}
          <motion.div
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 360, damping: 26 } }}
            className="bg-white text-gray-900 border border-gray-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ted-red/30 transition-shadow duration-300 relative group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-gray-500 font-semibold">
                    03 / Action Beyond Inspiration
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mt-1 leading-tight tracking-tight">
                    Action Beyond <span className="text-ted-red">Inspiration</span>
                  </h3>
                </div>
                <motion.a
                  className="w-11 h-11 rounded-full bg-gray-50 hover:bg-ted-red hover:text-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 shadow-sm"
                  href="#about"
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </motion.a>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Walk away with more than inspiration leave empowered to turn ideas into meaningful action.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200/80">
              <motion.img
                alt="Action Beyond Inspiration"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvJ2hh-ikrotGmIxmCmfXJuSQX_BAd1PqjNfar0hob5Aq3yvwUW2EZ51VWc1cWmC6VDG6JuGqRJCp3otVnKJDsyKFBsSxcMOhWCSQ_wS9mHiPfRDQi30CvP8ppVvxOrc4rSTV_N2dNrr1fiwBjJSALwnUhN4YLqsDhSRnB96cIvq9Q78v0TU3_keXxuLDqXY5KXE4VkWjWk-trKdJzaD0ppMCbd6MhIYUz0zNN6xCB9Q20BDFlmjH_jg"
                whileHover={imageHover}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-white/90 border border-white/40 rounded-full px-3.5 py-1.5 text-[11px] text-gray-900 font-medium shadow-sm">
                <span>Action Beyond Inspiration</span>
                <span className="text-ted-red font-bold">See Details</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={heroItem}
        className="mt-16 pt-8 border-t border-gray-200"
      >
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">
          Supported By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">Official Sponsor</span>
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">Media Partner @mnd</span>
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">Community Partner @mager.gamedev</span>
        </div>
      </motion.div>
    </motion.section>
  )
}
