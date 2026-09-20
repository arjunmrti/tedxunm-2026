import { motion } from "motion/react";
import { cardReveal } from "../../../../motion/variants";
import type { Ticket } from '../../../../types/Ticket'

export default function TicketCard({ ticket, onSelect }: { ticket: Ticket; onSelect: (ticket: Ticket) => void }) {
  if (ticket.variant === 'featured') {
    return (
      <motion.div
        variants={cardReveal}
        whileHover={{ y: -8, scale: 1.015, transition: { type: "spring", stiffness: 320, damping: 24 } }}
        className="bg-[#111111] text-white rounded-[24px] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_40px_-8px_rgba(17,17,17,0.25)] relative z-10 md:-translate-y-3 md:scale-[1.02] transition-all">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFA800]">{ticket.category}</span>
            <span className="bg-[#E10600] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {ticket.badge}
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl text-white tracking-tight">{ticket.title}</h3>
          <p className="text-xs text-white/80 mt-1.5 leading-relaxed">{ticket.description}</p>
          <div className="mt-4 mb-4">
            <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">{ticket.price}</span>
            <span className="text-xs text-[#2ECF7A] font-semibold flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ECF7A] animate-pulse"></span>
              {ticket.priceNote}
            </span>
          </div>
          <ul className="space-y-2.5 text-xs text-white border-t border-white/10 pt-4">
            {ticket.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-[#E10600] text-white flex items-center justify-center shrink-0">
                  <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <motion.button
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          type="button"
          onClick={() => onSelect(ticket)}
          className="mt-6 w-full py-3 bg-[#E10600] hover:bg-[#c70500] text-white text-center font-bold text-sm rounded-full shadow-lg shadow-[#E10600]/30 transition-all tracking-wide cursor-pointer"
        >
          {ticket.buttonText}
        </motion.button>
      </motion.div>
    )
  }

  if (ticket.variant === 'soldout') {
    return (
      <motion.div
      variants={cardReveal}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 320, damping: 24 } }}
      className="bg-[#FFFFFF] rounded-[20px] border border-[#E5E5E5] p-6 flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] relative">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{ticket.category}</span>
            <span className="bg-[#F0F0F0] text-[#777777] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {ticket.badge}
            </span>
          </div>
          <h3 className="font-display font-bold text-xl text-[#111111] tracking-tight">{ticket.title}</h3>
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{ticket.description}</p>
          <div className="mt-4 mb-4">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#999999] line-through">{ticket.price}</span>
            <span className="text-xs text-gray-400 block mt-1">{ticket.priceNote}</span>
          </div>
          <ul className="space-y-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
            {ticket.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                  <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <motion.button whileTap={{ scale: 0.99 }} disabled className="mt-6 w-full py-3 bg-[#F5F5F5] border border-[#DCDCDC] text-[#888888] font-semibold text-xs rounded-full cursor-not-allowed tracking-wide">
          {ticket.buttonText}
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div
    variants={cardReveal}
    whileHover={{ y: -6, transition: { type: "spring", stiffness: 320, damping: 24 } }}
    className="bg-[#FFFFFF] rounded-[20px] border border-[#E5E5E5] p-6 flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] relative">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B3FE4]">{ticket.category}</span>
          <span className="bg-[#7B3FE4]/10 text-[#7B3FE4] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {ticket.badge}
          </span>
        </div>
        <h3 className="font-display font-bold text-xl text-[#111111] tracking-tight">{ticket.title}</h3>
        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{ticket.description}</p>
        <div className="mt-4 mb-4">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#111111]">{ticket.price}</span>
          <span className="text-xs text-[#7B3FE4] font-semibold block mt-1">{ticket.priceNote}</span>
        </div>
        <ul className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
          {ticket.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#7B3FE4]/10 text-[#7B3FE4] flex items-center justify-center shrink-0">
                <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <motion.button
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        type="button"
        onClick={() => onSelect(ticket)}
        className="mt-6 w-full py-3 bg-[#111111] hover:bg-[#252525] text-white text-center font-semibold text-sm rounded-full transition-colors tracking-wide cursor-pointer"
      >
        {ticket.buttonText}
      </motion.button>
    </motion.div>
  )
}