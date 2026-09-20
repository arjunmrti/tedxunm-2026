import { motion } from "motion/react";
import { cardReveal, sectionReveal, staggerParent } from "../../../../motion/variants";
import { speakers } from '../../../../constants/speakers'
import type { Speaker } from '../../../../types/Speaker'
import SpeakerCard from './SpeakerCard'

export default function Speakers({ onSelectSpeaker }: { onSelectSpeaker: (speaker: Speaker) => void }) {
  return (
    <motion.section
      aria-labelledby="speakers-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200"
      id="speakers"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.div variants={cardReveal} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block bg-[#F4EEFD] text-ted-purple text-xs font-bold px-3 py-1 rounded-full mb-3">Curated Lineup</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" id="speakers-heading">Voices of Resonance</h2>
        <p className="text-base text-gray-600 mt-4 leading-relaxed">Six distinct minds exploring how vocal frequencies, coded structures, and unspoken signs shape our collective destiny.</p>
      </motion.div>

      <motion.div variants={staggerParent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} onClick={onSelectSpeaker} />
        ))}
      </motion.div>

      {/* Full-Width Secret Keynote Card */}
      <motion.div variants={cardReveal} className="bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#111111] text-white flex flex-col items-center justify-center shrink-0 shadow-inner relative overflow-hidden">
            <svg className="w-7 h-7 mb-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-gray-400">SECRET #07</span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-ted-purple/10 text-ted-purple text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                + SECRET KEYNOTE
              </span>
              <span className="bg-gray-100 text-gray-600 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full">
                Curated Reveal
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight leading-tight mb-1">
              To Be Revealed
            </h3>
            <p className="text-xs font-semibold text-gray-500 mb-2">Diplomatic Discourse & Global Perspective</p>
            <p className="text-xs text-gray-600 leading-relaxed max-w-xl mb-3">
              A special honorary speaker will be unveiled 14 days prior to Phinisi stage day. An international statesman navigating cross-border treaties through linguistic nuance.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-ted-purple animate-pulse"></span>
              <span>Official Lineup Unveil Soon</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto shrink-0 flex justify-end">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-sm hover:shadow transition-all">
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>Revealing Soon</span>
          </button>
        </div>
      </motion.div>
    </motion.section>
  )
}