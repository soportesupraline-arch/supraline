import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import defaultHero from '../assets/db4ecc90b5f5556c86d59acad317214ac1dbac21.png';

interface HeroProps {
  onOpenQuiz: () => void;
}

export function Hero({ onOpenQuiz }: HeroProps) {
  const handleHeroClick = () => {
    document
      .querySelector<HTMLElement>('[data-quiz-section]')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    onOpenQuiz();
  };
  // Usa src/assets/hero.(jpg|jpeg|png|webp); si no existe, cae al asset por defecto del proyecto.
  const heroAssetUrl = useMemo(() => {
    const matches = import.meta.glob('../assets/hero.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
      eager: true,
      as: 'url',
    }) as Record<string, string>;
    return Object.values(matches)[0] ?? (defaultHero as unknown as string);
  }, []);
  return (
    <section id="inicio" className="flex flex-col justify-start pt-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-start">
          {/* Imagen - Izquierda */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg h-[360px] sm:h-[420px] lg:h-[360px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={heroAssetUrl}
                alt="Alineadores SupraLine"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Texto - Derecha */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col items-start justify-start lg:pt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#0C3754] mb-4 lg:mb-6 leading-tight">
              Estamos en cada movimiento
            </h1>
            <p className="text-lg sm:text-xl text-[#0C3754]/70 mb-4 lg:mb-8">
              SupraLine es innovación y respaldo odontológico profesional.
            </p>
            <p className="text-base sm:text-lg text-[#0C3754]/70 mb-6 lg:mb-10">
              Transformá tu sonrisa de manera cómoda, estética y con el acompañamiento que merecés en cada paso del proceso.
            </p>
            <button
              type="button"
              onClick={handleHeroClick}
              className="inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap bg-[#0578B7] text-white px-5 py-2.5 rounded-full text-base shadow-[0_10px_18px_rgba(12,55,84,0.14)] hover:bg-[#0C3754] hover:shadow-[0_14px_24px_rgba(12,55,84,0.18)] transition-colors"
            >
              Descubrí tu tratamiento
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
