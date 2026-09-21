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
        <span className="inline-block bg-[#F4EEFD] text-ted-purple text-xs font-bold px-3 py-1 rounded-full mb-3">The Speakers</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" id="speakers-heading">Meet the Voices</h2>
        <p className="text-base text-gray-600 mt-4 leading-relaxed">Six voices, six perspectives, brought together around the power of human language.</p>
      </motion.div>

      <motion.div variants={staggerParent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} onClick={onSelectSpeaker} />
        ))}
      </motion.div>

    </motion.section>
  )
}