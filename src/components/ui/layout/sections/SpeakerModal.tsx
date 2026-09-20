import { motion } from "motion/react";
import { modalBackdrop, modalPanel } from "../../../../motion/variants";
import type { Speaker } from '../../../../types/Speaker'

export default function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: Speaker | null
  onClose: () => void
}) {
  if (!speaker) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div
        variants={modalPanel}
        className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl overflow-visible border ${speaker.colors.cardBg} ${speaker.colors.cardBorder} text-[#222222]`}
      >

        {/* Close Button */}
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-gray-600 flex items-center justify-center transition-colors z-20"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            ></path>
          </svg>
        </button>

        <div className="hidden sm:block absolute -top-7 -right-4 w-40 bg-white p-2.5 pb-7 rounded-sm shadow-xl rotate-3 border border-gray-200/60 z-10">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm">
            <img
              alt={`${speaker.name} Portrait`}
              className="w-full h-full object-cover"
              src={speaker.modalImage}
            />
          </div>
        </div>

        <div className="sm:max-w-[24rem]">

          <div className={`text-[11px] font-mono font-bold tracking-widest uppercase mb-3 ${speaker.colors.badgeText}`}>
            {speaker.tag}
          </div>

          <div className="mb-5 pr-2">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight leading-none mb-2">
              {speaker.name}
            </h3>

            <p className={`text-sm sm:text-[15px] font-medium leading-snug ${speaker.colors.badgeText}`}>
              {speaker.role}
            </p>
          </div>

          <div className="mb-5">

            <div className={`text-[11px] font-mono tracking-wider font-bold uppercase mb-2 ${speaker.colors.badgeText}`}>
              BIO
            </div>

            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
              {speaker.behavior.join(' ')}
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-4 border-t border-black/10">

            <div>

              <div className={`text-[11px] font-mono tracking-wider font-bold uppercase mb-2 ${speaker.colors.badgeText}`}>
                TOPIC
              </div>

              <p className="text-xs text-[#555555] leading-relaxed">
                {speaker.painPoint.join(' ')}
              </p>

            </div>

            <div>

              <div className={`text-[11px] font-mono tracking-wider font-bold uppercase mb-2 ${speaker.colors.badgeText}`}>
                KEY MESSAGE
              </div>

              <p className="text-xs text-[#555555] leading-relaxed">
                {speaker.needs.join(' ')}
              </p>

            </div>

          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}