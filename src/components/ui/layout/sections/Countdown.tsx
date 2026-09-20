import { motion } from "motion/react";
// src/components/ui/layout/sections/Countdown.tsx
import { useEffect, useState } from 'react';

export interface CountdownProps {
  targetDate: string; // ISO string, mis. '2026-10-03T09:00:00+08:00'
  label?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Jarak dari atas dalam px. Idealnya diisi dari tinggi render Navbar (lihat onHeightChange di Navbar). */
  offsetTop?: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetTime: number): TimeLeft {
  const diff = targetTime - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const Countdown = ({
  targetDate,
  label = 'TEDxUNM 2026 IN',
  ctaText = 'Reserve →',
  ctaHref = '#tickets',
  offsetTop = 96,
}: CountdownProps) => {
  const targetTime = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 z-40 px-4 sm:px-8 pointer-events-none"
      style={{ top: offsetTop }}
    >
      <div className="max-w-7xl mx-auto pt-1 flex justify-end items-center pointer-events-auto">
        <motion.div
          whileHover={{ y: -1, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-full px-3.5 py-1 shadow-sm text-xs text-gray-800">
          {/* Live Indicator + Label */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E10600] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E10600]"></span>
            </span>

            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 hidden sm:inline">
              {label}
            </span>
          </div>

          <span className="text-gray-300 hidden sm:inline">|</span>

          {/* Countdown Numbers */}
          <div className="flex items-center gap-1 font-mono font-bold text-gray-900 text-xs tracking-tight">
            <span className="font-display font-bold text-gray-900">{timeLeft.days}</span>
            <span className="text-[10px] font-normal text-gray-400">d</span>

            <span className="text-gray-300 font-normal">:</span>

            <span className="font-display font-bold text-gray-900">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-normal text-gray-400">h</span>

            <span className="text-gray-300 font-normal">:</span>

            <span className="font-display font-bold text-gray-900">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-normal text-gray-400">m</span>

            <span className="text-gray-300 font-normal">:</span>

            <span className="font-display font-bold text-ted-red">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-normal text-ted-red">s</span>
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            href={ctaHref}
            className="hidden sm:inline-flex items-center text-[10px] font-semibold text-ted-red hover:underline ml-1"
          >
            {ctaText}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Countdown;