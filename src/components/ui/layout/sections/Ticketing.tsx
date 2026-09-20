import { motion } from "motion/react";
import { cardReveal, sectionReveal, staggerParent } from "../../../../motion/variants";
import { tickets } from '../../../../constants/tickets'
import type { Ticket } from '../../../../types/Ticket'
import TicketCard from './TicketCard'

export default function Ticketing({ onSelectTicket }: { onSelectTicket: (ticket: Ticket) => void }) {
  return (
    <motion.section
      aria-labelledby="pricing-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200"
      id="tickets"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.div variants={cardReveal} className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block bg-[#FBEBEB] text-ted-red text-xs font-bold px-3 py-1 rounded-full mb-3">
          Join In Person
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" id="pricing-heading">
          Reserve Your Seat at Phinisi Hall
        </h2>
        <p className="text-base text-gray-600 mt-4 leading-relaxed">
          Every ticket grants full-day access to all 6 visionary talks, official delegate kit, lunch, interactive lounge exhibitions, and verifiable digital certificate.
        </p>
      </motion.div>

      <motion.div variants={staggerParent} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.title} ticket={ticket} onSelect={onSelectTicket} />
        ))}
      </motion.div>
    </motion.section>
  )
}