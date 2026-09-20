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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div className="relative max-w-lg w-full bg-[#18181b] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl text-white max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 id="reg-modal-title" className="font-display font-bold text-xl sm:text-2xl text-white leading-tight tracking-tight">
              Register for Your TEDxUNM 2026 Seat
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Fill in your credential details to secure your Phinisi Hall pass.
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
              <div className="text-sm font-bold text-white mb-2">Syarat dan Ketentuan</div>
              <div
                className="bg-[#121215] border border-white/10 rounded-xl p-3.5 h-[150px] overflow-y-auto text-xs text-gray-300 leading-relaxed space-y-2.5"
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#E10600 #1f1f23' }}
              >
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Kebijakan Refund:</strong> Tiket bersifat personal dan tidak dapat diuangkan kembali (non-refundable).</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Pindah Tangan Tiket:</strong> Jika nama pembeli berbeda dengan yang hadir, tiket dapat dipindahtangankan. Wajib melakukan konfirmasi kepada panitia maksimal H-1 sebelum acara.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Syarat Pengganti:</strong> Peserta pengganti wajib membawa identitas asli untuk keperluan verifikasi saat acara.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Proses Check-in:</strong> Peserta wajib menunjukkan bukti tiket atau registrasi saat melakukan check-in.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Persetujuan Dokumentasi:</strong> Dengan memasuki area acara, peserta dianggap telah memberikan persetujuan untuk didokumentasikan dalam bentuk foto dan/atau video selama acara berlangsung.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#E10600] font-bold shrink-0">•</span>
                  <span><strong className="text-white font-semibold">Kehadiran & Tata Tertib:</strong> Peserta diharapkan hadir, mengikuti seluruh rangkaian acara hingga selesai, serta wajib mematuhi ketentuan dan tata tertib yang berlaku.</span>
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
                <span>Saya telah membaca dan menyetujui seluruh Syarat dan Ketentuan di atas.</span>
              </label>
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-400 text-center">
                Gagal mengirim registrasi. Coba lagi, atau hubungi panitia kalau masih gagal.
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading || !agreed}
              className="mt-5 w-full py-3.5 px-6 bg-[#E10600] hover:bg-[#b80500] disabled:bg-[#E10600]/50 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-red-900/30 transition-all cursor-pointer text-center"
            >
              {isLoading ? 'Mengirim...' : 'Submit Registration'}
            </button>
            <p className="text-center text-xs text-gray-400 mt-2.5">
              By submitting, you agree to our Terms and Conditions and Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}