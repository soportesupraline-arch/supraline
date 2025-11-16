import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function ForYou() {
  const segments = [
    {
      title: 'Supra Kids',
      description:
        'Tratamientos guiados por odontopediatras para acompañar cada etapa de crecimiento con el seguimiento que necesitan los más chicos.',
      image: '/supra_kids.png'
    },
    {
      title: 'Supra Teens',
      description:
        'Alineadores que se adaptan al ritmo activo, social y deportivo de los adolescentes sin interrumpir su día a día.',
      image: '/supra_teens.png'
    },
    {
      title: 'Supra Adults',
      description:
        'Resultados discretos y profesionales pensados para integrarse fácilmente a cualquier rutina adulta.',
      image: '/supra_adults.png'
    }
  ];

  return (
    <section id="para-vos" className="py-12 sm:py-16 lg:py-20 bg-[#041B4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0C3754] mb-3 sm:mb-4 px-4">
            Supra piensa en todos
          </h2>
          <p className="text-base sm:text-lg text-[#0C3754]/70 max-w-2xl mx-auto px-4">
            Soluciones personalizadas para cada etapa de la vida
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              className="relative overflow-hidden rounded-[40px] shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ImageWithFallback
                src={segment.image}
                alt={segment.title}
                className="w-full h-[420px] object-cover rounded-[40px]"
                style={{ borderRadius: '40px' }}
              />
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-transparent via-[#041B4E]/35 to-[#041B4E]/95"></div>
              <div className="absolute inset-0 flex flex-col justify-between items-start p-6 sm:p-8 text-white">
                <h3 className="inline-flex self-start text-lg sm:text-xl font-semibold bg-[#0C3754] text-white px-3 py-1 rounded-full shadow-lg">
                  {segment.title}
                </h3>
                <p className="w-full text-sm sm:text-base leading-relaxed">
                  {segment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
