import { motion } from 'motion/react';

// Sección dedicada al "disco-objeto" como firma de marca.
// Tono Aesop: producto descansando sobre superficies táctiles, mucho aire,
// microcopy elegante.
export function ObjectFeature() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-center">
          {/* Imagen principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden rounded-3xl bg-[#ECEBE4]"
          >
            <img
              src="/media/object-cabin.jpg"
              alt="Disco Supra, anteojos y mochila sobre madera, bosque nevado detrás"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span
              className="text-xs sm:text-sm text-[#0578B7] tracking-[0.18em]"
              style={{
                fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                fontWeight: 600,
              }}
            >
              05 · EL OBJETO
            </span>
            <h2
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-[#0C3754] leading-[1.02] tracking-tight"
              style={{
                fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                fontWeight: 600,
              }}
            >
              El disco.
              <br />
              Tu pase al ecosistema.
            </h2>
            <p
              className="mt-6 text-[#0C3754]/70 leading-relaxed max-w-md"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
            >
              Más que un estuche. Lo que viaja en tu bolso, llega al campo, al
              gimnasio, a la oficina. Es la firma del ecosistema: si lo tenés, ya
              sos parte.
            </p>

            <ul
              className="mt-8 space-y-3 text-[#0C3754]"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
            >
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0578B7] shrink-0" />
                <span>Incluido en cada kit Supra</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0578B7] shrink-0" />
                <span>Diseñado para tu día a día</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0578B7] shrink-0" />
                <span>Hecho para que la marca te acompañe</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
