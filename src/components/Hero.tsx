import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from 'figma:asset/db4ecc90b5f5556c86d59acad317214ac1dbac21.png';

interface HeroProps {
  onOpenQuiz: () => void;
}

export function Hero({ onOpenQuiz }: HeroProps) {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - Left Side */}
          <motion.div 
            className="order-2 lg:order-1 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-md lg:max-w-lg">
              <img
                src={heroImage}
                alt="Alineadores SupraLine"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#0C3754] mb-4 lg:mb-6 leading-tight">
              Somos Creadores de Sonrisas
            </h1>
            <p className="text-lg sm:text-xl text-[#0C3754]/70 mb-4 lg:mb-8">
              SupraLine es innovación y respaldo odontológico profesional.
            </p>
            <p className="text-base sm:text-lg text-[#0C3754]/70 mb-6 lg:mb-10">
              Transformá tu sonrisa de manera cómoda, estética y con el acompañamiento que merecés en cada paso del proceso.
            </p>
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center justify-center gap-2 bg-[#0578B7] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#0C3754] transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
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
