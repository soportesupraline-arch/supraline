import { Award, Zap, Sparkles, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function WhySupraLine() {
  const features = [
    {
      icon: Shield,
      title: 'Respaldo profesional',
      description: 'Equipo odontológico especializado que te acompaña en todo el proceso.'
    },
    {
      icon: Zap,
      title: 'Tecnología 3D avanzada',
      description: 'Escaneo digital preciso para un tratamiento personalizado y efectivo.'
    },
    {
      icon: Sparkles,
      title: 'Comodidad absoluta',
      description: 'Alineadores removibles, prácticamente invisibles y cómodos de usar.'
    },
    {
      icon: Award,
      title: 'Estética impecable',
      description: 'Mejorá tu sonrisa sin comprometer tu imagen durante el tratamiento.'
    }
  ];

  return (
    <section id="por-que" className="py-12 sm:py-16 lg:py-20 bg-[#ECEBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0C3754] mb-3 sm:mb-4 px-4">
            Por qué elegir SupraLine
          </h2>
          <p className="text-base sm:text-lg text-[#0C3754]/70 max-w-2xl mx-auto px-4">
            La combinación perfecta entre tecnología, profesionalismo y cuidado personal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0578B7] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl text-[#0C3754] mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#0C3754]/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
