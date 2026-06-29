import { motion } from 'motion/react';

// "Dónde está Supra" — grid editorial de activaciones de marca.
// Es nuestro mejor diferencial respecto a Keep Smiling y cualquier otra
// marca de alineadores: Supra ya está donde el cliente aspira a estar.

type Event = {
  image: string;
  alt: string;
  city: string;
  title: string;
  span?: 'wide' | 'tall' | 'square';
};

const events: Event[] = [
  {
    image: '/media/event-snowpolo-stmoritz.jpg',
    alt: 'Supra en Snow Polo St. Moritz, fotógrafo captando el partido en el lago helado',
    city: 'ST. MORITZ',
    title: 'Snow Polo World Cup',
    span: 'wide',
  },
  {
    image: '/media/event-snowpolo-disc.jpg',
    alt: 'Guante negro sosteniendo el disco Supra en campo de polo nevado con caballos',
    city: 'ST. MORITZ',
    title: 'On Ice',
    span: 'tall',
  },
  {
    image: '/media/event-polo-argentino.jpg',
    alt: 'Mujer a caballo con el disco Supra, campo argentino',
    city: 'ARGENTINA',
    title: 'Open de Polo',
    span: 'square',
  },
  {
    image: '/media/event-alps-ski.jpg',
    alt: 'Esquiador con casco y goggles, montañas de los Alpes detrás',
    city: 'ALPES',
    title: 'Winter Season',
    span: 'square',
  },
  {
    image: '/media/event-paddock.jpg',
    alt: 'Disco Supra y anteojos sobre paja, caballo de fondo',
    city: 'EL CAMPO',
    title: 'Paddock',
    span: 'square',
  },
];

export function Events() {
  return (
    <section id="eventos" className="bg-[#ECEBE4] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span
            className="text-xs sm:text-sm text-[#0578B7] tracking-[0.18em]"
            style={{
              fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 600,
            }}
          >
            04 · DÓNDE ESTÁ SUPRA
          </span>
          <h2
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-[#0C3754] leading-[1.02] tracking-tight"
            style={{
              fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 600,
            }}
          >
            Estamos donde vivís.
          </h2>
          <p
            className="mt-6 text-[#0C3754]/70 leading-relaxed max-w-2xl"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
          >
            Supra se hace ver donde su comunidad ya está: pistas de polo, montañas,
            campo. La marca viaja, no se queda esperando en el consultorio.
          </p>
        </div>

        {/* Grid editorial: 1 ancha arriba, 4 cuadradas debajo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {events.map((e, i) => {
            const sizeClass =
              e.span === 'wide'
                ? 'md:col-span-2 lg:col-span-2 aspect-[16/10]'
                : e.span === 'tall'
                ? 'lg:row-span-2 aspect-[3/4] lg:aspect-[3/5]'
                : 'aspect-[4/3]';
            return (
              <motion.figure
                key={e.image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0C3754]/10 group ${sizeClass}`}
              >
                <img
                  src={e.image}
                  alt={e.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                {/* Gradiente para que el texto se lea */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(12,55,84,0) 50%, rgba(12,55,84,0.7) 100%)',
                  }}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7 text-white">
                  <span
                    className="block text-xs tracking-[0.18em] text-white/80"
                    style={{
                      fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {e.city}
                  </span>
                  <span
                    className="block mt-1 text-xl sm:text-2xl"
                    style={{
                      fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {e.title}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
