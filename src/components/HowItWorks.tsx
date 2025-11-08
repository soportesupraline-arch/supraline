import { Calendar, Scan, Package, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Consulta inicial',
      description: 'Agendá una cita con nuestro equipo odontológico para evaluar tu caso.'
    },
    {
      icon: Scan,
      title: 'Escaneo 3D',
      description: 'Realizamos un escaneo digital preciso de tu dentadura sin molestias.'
    },
    {
      icon: Package,
      title: 'Recibís tus alineadores',
      description: 'Te entregamos tu kit personalizado con todos los alineadores del tratamiento.'
    },
    {
      icon: Heart,
      title: 'Seguimiento profesional',
      description: 'Te acompañamos en cada etapa con controles odontológicos regulares incluidos dentro del tratamineto.'
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0C3754] mb-3 sm:mb-4 px-4">
            Estás a 4 pasos de conseguir tu sonrisa perfecta
          </h2>
          <p className="text-base sm:text-lg text-[#0C3754]/70 max-w-2xl mx-auto px-4">
            Un proceso simple y profesional diseñado para tu comodidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center px-4">
                {/* Step Number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0578B7] text-white rounded-full flex items-center justify-center text-lg sm:text-xl z-10 shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#ECEBE4] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mt-6 sm:mt-0 group hover:bg-[#0578B7] transition-colors">
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#0578B7] group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl text-[#0C3754] mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#0C3754]/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
