import { motion } from "motion/react";
import { cardReveal, sectionReveal, staggerParent } from "../../../../motion/variants";

export default function About() {
  return (
    <motion.section
      aria-labelledby="about-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] border-t border-gray-200"
      id="about"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div variants={cardReveal} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center bg-[#E10600]/10 text-[#E10600] text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">Why TEDxUNM</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-[#111111] tracking-tight my-4" id="about-heading">Where Ideas Find Their Voice</h2>
          <p className="text-base sm:text-lg text-[#5e3f3a] font-normal leading-relaxed max-w-2xl mx-auto mb-12">An independently organized TEDx event bringing together thinkers, researchers, innovators, creators, and agents of change on Makassar's most dynamic stage.</p>
        </motion.div>

        <motion.div variants={staggerParent} className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Fresh Perspectives */}
          <motion.div variants={cardReveal} className="bg-white rounded-3xl border border-[#E5E5E5] p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-full h-40 rounded-2xl bg-[#7B3FE4]/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#7B3FE4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B3FE4] block mb-2">Cognitive & Cultural</span>
              <h3 className="text-2xl font-bold font-display text-[#111111] mb-2.5">Fresh Perspectives</h3>
              <p className="text-sm text-[#5e3f3a] leading-relaxed">Challenging conventional narratives through linguistic anthropology, cognitive psychology, and the raw mechanics of storytelling.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Interdisciplinary Dialogues</span>
              <span>01</span>
            </div>
          </div>

          {/* Card 2: Meaningful Connections */}
          <motion.div variants={cardReveal} className="bg-white rounded-3xl border border-[#E5E5E5] p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-full h-40 rounded-2xl bg-[#2ECF7A]/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#2ECF7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2ECF7A] block mb-2">Collaborative Synergy</span>
              <h3 className="text-2xl font-bold font-display text-[#111111] mb-2.5">Meaningful Connections</h3>
              <p className="text-sm text-[#5e3f3a] leading-relaxed">Fostering unscripted dialogues among students, academics, tech builders, and cultural custodians across South Sulawesi and Eastern Indonesia.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Community Cross-Pollination</span>
              <span>02</span>
            </div>
          </div>

          {/* Card 3: Action Beyond Inspiration */}
          <motion.div variants={cardReveal} className="bg-white rounded-3xl border border-[#E5E5E5] p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-full h-40 rounded-2xl bg-[#FFA800]/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#FFA800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFA800] block mb-2">Impact Ecosystem</span>
              <h3 className="text-2xl font-bold font-display text-[#111111] mb-2.5">Action Beyond Inspiration</h3>
              <p className="text-sm text-[#5e3f3a] leading-relaxed">Turning spoken ideas into tangible community actions, youth initiatives, open research workshops, and published anthologies.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>Sustainable Legacy</span>
              <span>03</span>
            </div>
          </div>
        </motion.div>

        {/* Core Pillars Row */}
        <div className="border-t border-[#EAEAEA] pt-12 mt-12">
          <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400 mb-8 text-center">Core Pillars of TEDxUNM</h4>
          <motion.div variants={staggerParent} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {/* Pillar 01 */}
            <motion.div variants={cardReveal} className="bg-white p-5 rounded-2xl border border-[#E5E5E5] shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)]">
              <div className="w-8 h-8 rounded-full bg-[#E10600]/10 text-[#E10600] flex items-center justify-center font-mono font-bold text-xs mb-3">01</div>
              <div className="font-display font-semibold text-base text-[#111111] mb-1.5">Curiosity</div>
              <div className="text-xs text-[#5e3f3a] leading-relaxed">Relentless pursuit of unexplored inquiries.</div>
            </div>

            {/* Pillar 02 */}
            <motion.div variants={cardReveal} className="bg-white p-5 rounded-2xl border border-[#E5E5E5] shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)]">
              <div className="w-8 h-8 rounded-full bg-[#7B3FE4]/10 text-[#7B3FE4] flex items-center justify-center font-mono font-bold text-xs mb-3">02</div>
              <div className="font-display font-semibold text-base text-[#111111] mb-1.5">Openness</div>
              <div className="text-xs text-[#5e3f3a] leading-relaxed">Embracing nuances across diverse voices.</div>
            </div>

            {/* Pillar 03 */}
            <motion.div variants={cardReveal} className="bg-white p-5 rounded-2xl border border-[#E5E5E5] shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)]">
              <div className="w-8 h-8 rounded-full bg-[#FFA800]/10 text-[#FFA800] flex items-center justify-center font-mono font-bold text-xs mb-3">03</div>
              <div className="font-display font-semibold text-base text-[#111111] mb-1.5">Authenticity</div>
              <div className="text-xs text-[#5e3f3a] leading-relaxed">Honest narratives rooted in experience.</div>
            </div>

            {/* Pillar 04 */}
            <motion.div variants={cardReveal} className="bg-white p-5 rounded-2xl border border-[#E5E5E5] shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)]">
              <div className="w-8 h-8 rounded-full bg-[#2ECF7A]/10 text-[#2ECF7A] flex items-center justify-center font-mono font-bold text-xs mb-3">04</div>
              <div className="font-display font-semibold text-base text-[#111111] mb-1.5">Collaboration</div>
              <div className="text-xs text-[#5e3f3a] leading-relaxed">Collective intelligence over isolation.</div>
            </div>

            {/* Pillar 05 */}
            <div className="bg-white p-5 rounded-2xl border border-[#E5E5E5] shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 rounded-full bg-[#111111]/10 text-[#111111] flex items-center justify-center font-mono font-bold text-xs mb-3">05</div>
              <div className="font-display font-semibold text-base text-[#111111] mb-1.5">Impact</div>
              <div className="text-xs text-[#5e3f3a] leading-relaxed">Catalyzing shift in regional mindset.</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}