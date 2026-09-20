import { motion } from "motion/react";
import { modalBackdrop, modalPanel } from "../../../../motion/variants";
import { useState, type FormEvent } from 'react'
import type { Ticket } from '../../../../types/Ticket'

export default function RegistrationModal({ ticket, onClose }: { ticket: Ticket | null; onClose: () => void }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [institution, setInstitution] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!ticket) return null

  const resetForm = () => {
    setFullName('')
    setEmail('')
    setWhatsapp('')
    setInstitution('')
    setAgreed(false)
    setStatus('idle')
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!agreed) return

    setIsLoading(true)
    setStatus('idle')

    const formData = new FormData()
    formData.append('FullName', fullName)
    formData.append('Email', email)
    formData.append('WhatsApp', whatsapp)
    formData.append('Institution', institution)
    formData.append('TicketName', ticket.ticketName)
    formData.append('TicketPrice', ticket.ticketPrice)

    const endpoint = import.meta.env.VITE_GOOGLE_SHEET_URL as string

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
      setStatus('success')
    } catch (error) {
      console.error('Registration submit failed:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <motion.div
        variants={modalPanel}
        className="relative max-w-lg w-full bg-[#18181b] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl text-white max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 id="reg-modal-title" className="font-display font-bold text-xl sm:text-2xl text-white leading-tight tracking-tight">
              Register for Your TEDxUNM 2026 Seat
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Fill in your attendee details to secure your TEDxUNM 2026 ticket.
            </p>
          </div>
          <button
            aria-label="Close registration modal"
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </button>
        </div>

        <div className="bg-[#232328] border border-white/10 rounded-xl p-3.5 flex items-center justify-between mb-5">
          <div>
            <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 block">Selected Tier</span>
            <span className="font-display font-bold text-base text-white">{ticket.ticketName}</span>
          </div>
          <div className="text-right flex items-center gap-3">
            <div className="text-right">
              <span className="text-[10px] font-mono tracking-wider uppercase text-gray-400 block">Price</span>
              <span className="font-display font-extrabold text-base text-ted-red">{ticket.ticketPrice}</span>
            </div>
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0">
              ✓ Selected
            </span>
          </div>
        </div>

        {status === 'success' ? (
          <div className="text-center py-6">
            <p className="text-emerald-400 font-semibold text-sm mb-1">Registration submitted successfully!</p>
            <p className="text-xs text-gray-400">Please check your email for confirmation and payment instructions.</p>
            <button
              onClick={handleClose}
              className="mt-5 w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g., Jane Doe"
                className="w-full bg-[#121215] border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#E10600] text-xs sm:text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g., jane.doe@example.com"
                className="w-full bg-[#121215] border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#E10600] text-xs sm:text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">WhatsApp Number</label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </span>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="e.g., +62 812 3456 789"
                  className="w-full bg-[#121215] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#E10600] text-xs sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">Institution or Campus</label>
              <input
                type="text"
                required
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="e.g., UNM - Universitas Negeri Makassar"
                className="w-full bg-[#121215] border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#E10600] text-xs sm:text-sm transition-colors"
              />
            </div>

            <div className="pt-1">
              <div className="text-sm font-bold text-white mb-2">Terms and Conditions</div>
              <div
                className="bg-[#121215] border border-white/10 rounded-xl p-3.5 h-[150px] overflow-y-auto text-xs text-gray-300 leading-relaxed space-y-2.5"
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#E10600 #1f1f23' }}
              >
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Refund Policy:</strong> Tickets are personal and non-refundable.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Ticket Transfer:</strong> Tickets can be transferred to another person by confirming with the committee no later than H-1 before the event.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Replacement Attendee:</strong> Replacement attendees must bring the required identification for verification.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Check-in:</strong> Attendees must show proof of their ticket or registration at check-in.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Documentation Consent:</strong> By entering the event area, attendees consent to being documented through photos and/or video during the event.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Attendance & Conduct:</strong> Attendees are expected to attend the full event and follow all applicable rules and regulations.</span>
                </p>
              </div>

              <label className="text-xs text-gray-300 flex items-start gap-2.5 cursor-pointer mt-3 select-none">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 rounded bg-[#121215] border-white/20 text-[#E10600] focus:ring-[#E10600] focus:ring-offset-0 shrink-0 cursor-pointer"
                />
                <span>I have read and agree to the Terms and Conditions above.</span>
              </label>
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-400 text-center">
                Registration could not be submitted. Please try again or contact the committee.
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading || !agreed}
              className="mt-5 w-full py-3.5 px-6 bg-[#E10600] hover:bg-[#b80500] disabled:bg-[#E10600]/50 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-red-900/30 transition-all cursor-pointer text-center"
            >
              {isLoading ? 'Submitting...' : 'Submit Registration'}
            </button>
            <p className="text-center text-xs text-gray-400 mt-2.5">
              By submitting, you agree to our Terms and Conditions and Privacy Policy.
            </p>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}