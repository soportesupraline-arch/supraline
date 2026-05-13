import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './Logo';

interface NavProps {
  onQuizOpen: () => void;
}

const links = [
  { href: '#tratamiento', label: 'Tratamiento' },
  { href: '#ecosistema', label: 'Ecosistema' },
  { href: '#por-que', label: '¿Por qué Supra?' },
  { href: '#quiz', label: 'Quiz' },
];

export function Nav({ onQuizOpen }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#ECEBE4]/80 backdrop-blur-md border-b border-[#0C3754]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-[#0C3754]">
          <LogoMark size={36} color="#0C3754" strokeWidth={2.2} />
          <span
            className="text-lg sm:text-xl tracking-[0.18em]"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
          >
            SUPRA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#0C3754]/80 hover:text-[#0C3754] transition-colors"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onQuizOpen}
            className="ml-2 px-5 py-2.5 rounded-full bg-[#0C3754] text-white text-sm hover:bg-[#0578B7] transition-colors"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
          >
            Empezar quiz
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 rounded-full bg-[#0C3754]/5 flex items-center justify-center text-[#0C3754]"
          aria-label="Abrir menú"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0C3754] z-50 md:hidden"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
              <LogoMark size={36} color="#ECEBE4" strokeWidth={2.2} />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-2 px-6 pt-10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl sm:text-4xl text-white py-3"
                  style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onQuizOpen();
                }}
                className="mt-8 px-6 py-3 rounded-full bg-white text-[#0C3754]"
                style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
              >
                Empezar quiz
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
