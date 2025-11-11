import { ImageWithFallback } from './figma/ImageWithFallback';
import { Baby, Smile, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export function ForYou() {
  const segments = [
    {
      title: 'Supra Kids',
      subtitle: 'Para los más chicos',
      description: 'Tratamiento diseñado especialmente para niños, con seguimiento cercano acargo de odontopediatras.',
      image: 'https://images.unsplash.com/photo-1585628481967-1abce3066501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGtpZCUyMHNtaWxpbmd8ZW58MXx8fHwxNzYyMjAzNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Baby,
      gradient: 'from-[#0578B7]/20 to-[#ECEBE4]',
      accentColor: 'bg-[#0578B7]/80'
    },
    {
      title: 'Supra Teens',
      subtitle: 'Para adolescentes',
      description: 'Alineadores transparentes que se adaptan a tu estilo de vida activo y dinámico, incluso en el deporte.',
      image: 'https://images.unsplash.com/photo-1544806861-dc05b18f6c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB0ZWVuYWdlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjIwMzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Smile,
      gradient: 'from-[#0C3754]/20 to-[#ECEBE4]',
      accentColor: 'bg-[#0C3754]'
    },
    {
      title: 'Supra Adults',
      subtitle: 'Para adultos',
      description: 'Solución profesional y discreta que se integra perfectamente a tu rutina diaria.',
      image: 'https://images.unsplash.com/photo-1584940121730-93ffb8aa88b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZHVsdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjIwMzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Briefcase,
      gradient: 'from-[#D4D4CD]/50 to-[#ECEBE4]',
      accentColor: 'bg-[#0C3754]'
    }
  ];

  return (
    <section id="para-vos" className="py-12 sm:py-16 lg:py-20 bg-white">
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
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <ImageWithFallback
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${segment.gradient}`}></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <div className={`inline-flex items-center gap-2 ${segment.accentColor} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-2 sm:mb-3`}>
                  <segment.icon size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">{segment.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                  {segment.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
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