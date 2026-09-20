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
        className="rounded-3xl p-6 sm:p-10 relative max-w-2xl w-full bg-[#FFF0ED] text-[#222222] shadow-2xl overflow-visible border border-red-100">

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

        <div className="hidden sm:block absolute -top-8 -right-4 sm:-right-6 w-44 sm:w-52 bg-white p-3 pb-8 rounded-sm shadow-2xl rotate-3 border border-gray-200/60 z-10">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm">
            <img
              alt={`${speaker.name} Portrait`}
              className="w-full h-full object-cover"
              src={speaker.modalImage}
            />
          </div>
        </div>

        <div className="sm:max-w-md">

          <div className="text-xs font-mono font-bold tracking-widest text-[#D45B3F] uppercase mb-4">
            {speaker.tag}
          </div>

          <div className="mb-6">

            <div className="flex items-baseline gap-8 text-[11px] font-mono tracking-wider text-gray-500 uppercase font-semibold mb-1">
              <span>NAME</span>
              <span>AGE</span>
            </div>

            <div className="flex items-baseline gap-8">

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
                {speaker.name}
              </h3>

              <span className="font-display font-bold text-2xl sm:text-3xl text-[#111111]">
                {speaker.age}
              </span>

            </div>
          </div>

          <div className="mb-6">

            <div className="text-[11px] font-mono tracking-wider text-[#D45B3F] font-bold uppercase mb-2">
              BEHAVIOR
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-[#444444] leading-relaxed">
              {speaker.behavior.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  • <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-red-200/60">

            <div>

              <div className="text-[11px] font-mono tracking-wider text-[#D45B3F] font-bold uppercase mb-2">
                PAIN POINT
              </div>

              <ul className="space-y-1.5 text-xs text-[#555555] leading-relaxed">
                {speaker.painPoint.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    • <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            <div>

              <div className="text-[11px] font-mono tracking-wider text-[#D45B3F] font-bold uppercase mb-2">
                NEEDS
              </div>

              <ul className="space-y-1.5 text-xs text-[#555555] leading-relaxed">
                {speaker.needs.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    • <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}