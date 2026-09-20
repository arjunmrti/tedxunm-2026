import type { Speaker } from '../../../../types/Speaker'

export default function SpeakerCard({ speaker, onClick }: { speaker: Speaker; onClick: (speaker: Speaker) => void }) {
  const { name, role, talk, category, cardImage, colors } = speaker

  return (
    <article
      onClick={() => onClick(speaker)}
      className={`cursor-pointer ${colors.cardBg} border ${colors.cardBorder} rounded-3xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md ${colors.cardHoverBorder} transition-all duration-300 group`}
    >
      <div className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className={`bg-white border ${colors.badgeBorder} ${colors.badgeText} text-[11px] font-bold px-3 py-1 rounded-full shadow-sm`}>
            {category}
          </span>
          <button className={`w-8 h-8 rounded-full bg-white border ${colors.badgeBorder} flex items-center justify-center text-gray-500 ${colors.iconHover} transition-colors shadow-sm`}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
        <h3 className={`font-display font-bold text-2xl text-gray-900 tracking-tight leading-tight mb-1 ${colors.titleHover} transition-colors`}>
          {name}
        </h3>
        <p className="text-xs font-medium text-gray-500 mb-2">{role}</p>
        <p className="text-xs text-gray-700 italic leading-snug">"{talk}"</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-80">
        <img alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={cardImage} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-white/90 border border-white/40 rounded-full px-4 py-2 text-gray-900 shadow-sm">
          <span className="text-xs font-semibold tracking-wide">Explore Talk</span>
          <div className={`w-5 h-5 rounded-full ${colors.dot} text-white flex items-center justify-center shadow`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </div>
        </div>
      </div>
    </article>
  )
}