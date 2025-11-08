import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      age: 28,
      text: 'Mi sonrisa cambió sin dejar de ser yo. El proceso fue súper cómodo y el equipo siempre estuvo atento a cada detalle.',
      image: 'https://images.unsplash.com/photo-1611387861356-ec34b25e052a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzYyMjAzNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5
    },
    {
      name: 'Lucas Rodríguez',
      age: 35,
      text: 'Increíble cómo mejoró mi confianza. Los alineadores son prácticamente invisibles, nadie notó que estaba en tratamiento.',
      image: 'https://images.unsplash.com/photo-1484360870888-416c16cd4f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYyMjAzNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5
    },
    {
      name: 'Sofía Martínez',
      age: 23,
      text: 'El seguimiento profesional me dio mucha tranquilidad. Siempre supe que estaba en buenas manos con SupraLine.',
      image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwcm9mZXNzaW9uYWwlMjBjbGluaWN8ZW58MXx8fHwxNzYyMTM0MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="experiencias" className="py-20 bg-[#ECEBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-[#0C3754] mb-4">
            Experiencias reales
          </h2>
          <p className="text-lg text-[#0C3754]/70 max-w-2xl mx-auto">
            Conocé las historias de quienes ya transformaron su sonrisa
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <ImageWithFallback
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute -top-4 -right-4 bg-[#0578B7] w-12 h-12 rounded-full flex items-center justify-center">
                      <Quote className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#0578B7] text-[#0578B7]" />
                    ))}
                  </div>

                  <p className="text-lg text-[#0C3754] mb-6 italic">
                    "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <p className="text-[#0C3754]">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#0C3754]/60 text-sm">
                    {testimonials[currentIndex].age} años
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#0578B7] hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#0578B7] w-8' : 'bg-[#D4D4CD]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#0578B7] hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
