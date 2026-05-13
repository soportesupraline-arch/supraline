import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onQuizOpen: () => void;
}

export function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden"
      style={{ backgroundColor: '#ECEBE4' }}
    >
      {/* Decorative orbit lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <ellipse cx="720" cy="400" rx="640" ry="320" stroke="#0C3754" strokeWidth="1" fill="none" />
        <ellipse cx="720" cy="400" rx="480" ry="240" stroke="#0C3754" strokeWidth="1" fill="none" />
        <ellipse cx="720" cy="400" rx="320" ry="160" stroke="#0C3754" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
          {/* LEFT — Manifesto */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C3754]/5 text-[#0C3754] text-xs sm:text-sm mb-8"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', letterSpacing: '0.12em' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0578B7]" />
              SALUD BUCAL · TECNOLOGÍA · LIFESTYLE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#0C3754] text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
            >
              Tu sonrisa,
              <br />
              <span className="text-[#0578B7]">en movimiento.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-[#0C3754]/75 leading-relaxed"
            >
              Ortodoncia invisible y cuidado bucal integral. Diagnóstico con tecnología de
              última generación y seguimiento continuo, pensado para tu día a día.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5"
            >
              <button
                onClick={onQuizOpen}
                className="group inline-flex items-center justify-center gap-3 bg-[#0C3754] text-white px-7 py-4 rounded-full hover:bg-[#0578B7] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
              >
                Empezar mi diagnóstico
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <a
                href="#tratamiento"
                className="inline-flex items-center justify-center gap-2 text-[#0C3754] px-7 py-4 rounded-full hover:bg-[#0C3754]/5 transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
              >
                Cómo funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-14 flex items-center gap-8 text-xs sm:text-sm text-[#0C3754]/60"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', letterSpacing: '0.08em' }}
            >
              <span>TIGRE · BA</span>
              <span className="w-px h-3 bg-[#0C3754]/20" />
              <span>DIAGNÓSTICO INTEGRAL</span>
              <span className="hidden sm:inline w-px h-3 bg-[#0C3754]/20" />
              <span className="hidden sm:inline">IA + SEGUIMIENTO</span>
            </motion.div>
          </div>

          {/* RIGHT — Disco-objeto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative w-full lg:w-[420px] aspect-square flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-[#0C3754]/15"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-6 rounded-full border border-[#0578B7]/20"
            />
            <div className="relative w-[68%] aspect-square rounded-full bg-white shadow-[0_30px_80px_-30px_rgba(12,55,84,0.4)] flex items-center justify-center">
              <Logo size={180} color="#0C3754" strokeWidth={2.2} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
