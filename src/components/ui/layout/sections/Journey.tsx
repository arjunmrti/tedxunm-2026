import { motion } from "motion/react";
import { cardReveal, sectionReveal, staggerParent } from "../../../../motion/variants";

// src/components/ui/layout/sections/Journey.tsx

export interface JourneyStat {
  id: string;
  number: string; // "01" | "02" | "03"
  value: string; // "450+", "8", "1"
  hasDot?: boolean; // renders a trailing red "." after the value (stat #2 in the original)
  accent?: boolean; // true = red-themed badge/value (stat #1 in the original)
  title: string;
  description: string;
}

export interface JourneyQuote {
  text: string;
  source: string;
  year: string;
}

export interface Journey2025Data {
  archiveLabel: string;
  statusBadge: string;
  archiveLinkText: string;
  archiveLinkHref: string;
  yearLabel: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  location: string;
  footerTag: string;
}

export interface Journey2026Data {
  badgeLabel: string;
  dateLabel: string;
  chronologyLabel: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  statusLabel: string;
  ctaText: string;
  ctaHref: string;
}

export interface JourneyProps {
  badgeLabel?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  edition2025?: Journey2025Data;
  edition2026?: Journey2026Data;
  stats?: JourneyStat[];
  quote?: JourneyQuote;
}

const defaultEdition2025: Journey2025Data = {
  archiveLabel: 'D-DAY Archive',
  statusBadge: '2025 Edition',
  archiveLinkText: 'View D-DAY',
  archiveLinkHref: 'https://drive.google.com/drive/folders/1--NTmJKpyO1imqEijyum0s34GP9U7Mu8',
  yearLabel: '2025 Edition',
  titlePrefix: 'TEDxUNM 2025: ',
  titleHighlight: 'Lens of Reality',
  description:
    "Every individual views the world through a different lens, shaped by their experiences, culture, knowledge, and life journey. Through the theme \"Lens of Reality,\" TEDxUNM invited participants to see that no single perspective fully represents reality.",
  location: 'Universitas Negeri Makassar',
  footerTag: 'Diverse perspectives, meaningful dialogue & change',
};

const defaultEdition2026: Journey2026Data = {
  badgeLabel: '2026 Edition',
  dateLabel: '2026',
  chronologyLabel: 'Current Theme',
  titlePrefix: 'The Art of ',
  titleHighlight: 'Human Language',
  description:
    'The way you speak shapes who you are, what you believe, and how you see the world.'
  statusLabel: 'The Art of Human Language',
  ctaText: 'See the Lineup',
  ctaHref: '#speakers',
};

const defaultStats: JourneyStat[] = [
  {
    id: 'stat-1',
    number: '01',
    value: '06',
    accent: true,
    title: '2025 Speakers',
    description:
      'Six speakers shaped the 2025 conversation from climate and culture to psychology, peace, and women empowerment.'
  },
  {
    id: 'stat-2',
    number: '02',
    value: '01',
    hasDot: true,
    title: 'Previous Theme',
    description:
      'Lens of Reality'
  },
  {
    id: 'stat-3',
    number: '03',
    value: '01',
    title: 'D-DAY Archive',
    description:
      'Explore the documentation of TEDxUNM 2025 through the D-DAY archive.'
  },
];

const defaultQuote: JourneyQuote = {
  text: 'From climate change and psychological health to women\'s empowerment, youth, peace, and cultural preservation, TEDxUNM brought diverse perspectives together in one conversation.',
  source: '2025 Event Highlights',
  year: 'Lens of Reality',
};

interface ArrowUpRightIconProps {
  className?: string;
  strokeWidth?: number;
}

const ArrowUpRightIcon = ({
  className = 'w-3.5 h-3.5 text-ted-red',
  strokeWidth = 2,
}: ArrowUpRightIconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

const Journey = ({
  badgeLabel = 'The Journey of Ideas',
  heading = 'The Journey of Ideas:',
  headingHighlight = 'From One Perspective to Many Voices',
  description = "From \"Lens of Reality\" to \"The Art of Human Language,\" TEDxUNM continues to create space for ideas, people, and perspectives to meet.",
  edition2025 = defaultEdition2025,
  edition2026 = defaultEdition2026,
  stats = defaultStats,
  quote = defaultQuote,
}: JourneyProps) => {
  return (
    <motion.section
      aria-labelledby="journey-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200"
      id="journey"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.div variants={cardReveal} className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#FFF1F0] border border-red-100 text-ted-red text-xs font-bold px-3.5 py-1 rounded-full mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-ted-red"></span>
          <span>{badgeLabel}</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
          id="journey-heading"
        >
          {heading}
          <br className="hidden sm:inline" />
          <span className="text-ted-red">{headingHighlight}</span>
        </h2>
        <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      <motion.div variants={staggerParent} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* 2025 Feature */}
        <motion.div variants={cardReveal} className="md:col-span-7 bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ted-red/30 transition-all duration-300 relative group">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 text-gray-800 text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {edition2025.archiveLabel}
                </span>
                <span className="bg-[#FFF1F0] text-ted-red text-[11px] font-bold px-3 py-1 rounded-full border border-red-100">
                  {edition2025.statusBadge}
                </span>
              </div>
              <a
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-ted-red transition-colors bg-gray-50 border border-gray-200/80 px-3.5 py-1.5 rounded-full shadow-sm"
                href={edition2025.archiveLinkHref}
              >
                <span>{edition2025.archiveLinkText}</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-ted-red" strokeWidth={2} />
              </a>
            </div>
            <span className="text-xs font-mono tracking-wider uppercase text-ted-red font-semibold">
              {edition2025.yearLabel}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-gray-900 mt-1 mb-4 tracking-tight">
              {edition2025.titlePrefix}
              <span className="text-ted-red">{edition2025.titleHighlight}</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-6">
              {edition2025.description}
            </p>
          </div>
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ted-red"></span>
              <span>{edition2025.location}</span>
            </div>
            <span className="font-medium text-gray-700">{edition2025.footerTag}</span>
          </div>
        </motion.div>

        {/* 2026 Feature */}
        <motion.div variants={cardReveal} className="md:col-span-5 bg-gradient-to-b from-[#111111] to-[#1e1e1e] text-white rounded-3xl border border-gray-800 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative group overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-ted-red/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="inline-block bg-ted-red text-white text-[11px] font-mono tracking-wider uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                {edition2026.badgeLabel}
              </span>
              <span className="text-ted-red font-mono text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ted-red animate-pulse"></span>
                {edition2026.dateLabel}
              </span>
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
              {edition2026.chronologyLabel}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1 mb-3 leading-tight tracking-tight">
              {edition2026.titlePrefix}
              <br />
              <span className="text-ted-red underline decoration-ted-red/40 underline-offset-4">
                {edition2026.titleHighlight}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              {edition2026.description}
            </p>
          </div>
          <div className="relative z-10 pt-6 border-t border-gray-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-ted-red">
              ● {edition2026.statusLabel}
            </span>
            <a
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-ted-red hover:bg-ted-hover px-4 py-2 rounded-full transition-all shadow-md group-hover:scale-105"
              href={edition2026.ctaHref}
            >
              <span>{edition2026.ctaText}</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>

        {/* Stat Cards */}
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={cardReveal}
            className="md:col-span-3 bg-white rounded-3xl border border-gray-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ted-red/30 transition-all"
          >
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xs mb-4 ${
                stat.accent ? 'bg-[#FFF1F0] text-ted-red' : 'bg-gray-100 text-gray-900'
              }`}
            >
              {stat.number}
            </div>
            <div>
              <div
                className={`text-4xl sm:text-5xl font-extrabold font-display tracking-tight leading-none mb-2 ${
                  stat.hasDot ? 'flex items-baseline' : ''
                } ${stat.accent ? 'text-ted-red' : 'text-gray-900'}`}
              >
                {stat.value}
                {stat.hasDot && <span className="text-ted-red text-3xl">.</span>}
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1.5">{stat.title}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{stat.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Quote Card */}
        <motion.div variants={cardReveal} className="md:col-span-3 bg-[#FFF8F7] border border-red-100 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ted-red/30 transition-all">
          <div className="text-4xl font-serif text-ted-red leading-none mb-3">“</div>
          <p className="text-xs sm:text-sm italic font-medium text-gray-800 leading-relaxed mb-4">
            {quote.text}
          </p>
          <div className="pt-3 border-t border-red-200/60 flex items-center justify-between text-[11px] font-semibold text-gray-500">
            <span>{quote.source}</span>
            <span className="text-ted-red font-bold">{quote.year}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Journey;