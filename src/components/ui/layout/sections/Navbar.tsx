import { motion } from "motion/react";
import { useEffect, useRef } from 'react'

export interface NavbarProps {
  isBlurred?: boolean
  /** Dipanggil setiap kali tinggi render Navbar berubah (mis. ganti breakpoint). */
  onHeightChange?: (height: number) => void
}

export default function Navbar({ isBlurred = false, onHeightChange }: NavbarProps) {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el || !onHeightChange) return

    // Laporkan tinggi awal
    onHeightChange(el.getBoundingClientRect().height)

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        onHeightChange(entry.target.getBoundingClientRect().height)
      }
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [onHeightChange])

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300 ${
        isBlurred
          ? "blur-sm opacity-40 scale-[0.98] pointer-events-none"
          : ""
      }`}
    >
      <div
        className="max-w-7xl mx-auto backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-full px-5 py-3.5 flex items-center justify-between shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
      >

        {/* Brand Logo */}
        <a
          aria-label="TEDxUNM Home"
          className="flex items-center gap-2 group"
          href="#"
        >
          <img
            alt="TEDx Universitas Negeri Makassar"
            className="h-8 md:h-9 w-auto object-contain"
            src="https://res.cloudinary.com/c4wbxcmp/image/upload/v1789918308/TED_LOGO_A_1.png"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-700">
          <a
            className="hover:text-ted-red transition-colors"
            href="#about"
          >
            About
          </a>

          <a
            className="hover:text-ted-red transition-colors"
            href="#speakers"
          >
            Speakers
          </a>

          <a
            className="hover:text-ted-red transition-colors"
            href="#journey"
          >
            Journey
          </a>

          <a
            className="hover:text-ted-red transition-colors"
            href="#merchandise"
          >
            Merchandise
          </a>

          <a
            className="hover:text-ted-red transition-colors"
            href="#tickets"
          >
            Tickets
          </a>

          <a
            className="hover:text-ted-red transition-colors"
            href="#faq"
          >
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="inline-flex items-center justify-center bg-ted-red hover:bg-ted-hover text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all"
            href="#tickets"
          >
            Get Your Spot
          </motion.a>
        </div>

      </div>
    </motion.header>
  );
}