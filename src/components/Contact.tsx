import { MessageCircle, Instagram, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import contactImage from 'figma:asset/db236796fdfb669dfcbb2ea29e67855ee2b2458f.png';

export function Contact() {
  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-[#ECEBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0C3754] mb-3 sm:mb-4 px-4">
            Contactanos
          </h2>
          <p className="text-base sm:text-lg text-[#0C3754]/70 px-4">
            Estamos para ayudarte a lograr la sonrisa que soñás
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl text-[#0C3754] mb-4 sm:mb-6">
                Comunicate con nosotros
              </h3>
              <p className="text-sm sm:text-base text-[#0C3754]/70 mb-6 sm:mb-8">
                Elegí el canal que prefieras. Estamos disponibles para responder todas tus consultas.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5491176008393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-[#0C3754] mb-1 text-sm sm:text-base">WhatsApp</h4>
                  <p className="text-[#0C3754]/70 text-xs sm:text-sm">
                    Chateá con nosotros
                  </p>
                  <p className="text-[#0578B7] mt-1 sm:mt-2 text-sm sm:text-base">
                    +54 9 11 7600-8393
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/supraline"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-[#0C3754] mb-1 text-sm sm:text-base">Instagram</h4>
                  <p className="text-[#0C3754]/70 text-xs sm:text-sm">
                    Seguinos en redes
                  </p>
                  <p className="text-[#0578B7] mt-1 sm:mt-2 text-sm sm:text-base">
                    @supraline
                  </p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0578B7] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-[#0C3754] mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-[#0C3754]/70 text-xs sm:text-sm">
                    Escribinos
                  </p>
                  <p className="text-[#0578B7] mt-1 sm:mt-2 text-sm sm:text-base break-all">
                    soportesupraline@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={contactImage}
              alt="Alineadores SupraLine"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
