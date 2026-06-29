import { motion } from 'motion/react';

type Submark = {
  code: string;
  name: string;
  tagline: string;
  body: string;
  available: boolean;
  bg: 'navy' | 'cream' | 'sky';
};

const submarks: Submark[] = [
  {
    code: '01',
    name: 'SupraLine',
    tagline: 'Alineadores invisibles',
    body:
      'El corazón del tratamiento. Alineadores transparentes hechos a medida tras un diagnóstico integral, con seguimiento digital cada 15 días.',
    available: true,
    bg: 'navy',
  },
  {
    code: '02',
    name: 'Supralips',
    tagline: 'Manteca de cacao',
    body:
      'Cuidado labial diario que extiende el ritual Supra a tu rutina. Diseñada para que la marca viaje en tu bolso, no solo en el consultorio.',
    available: true,
    bg: 'cream',
  },
  {
    code: '03',
    name: 'Impact',
    tagline: 'Protectores bucales',
    body:
      'Protección deportiva sin perder estética. Pensados para entrenar y competir sin sentirlos.',
    available: true,
    bg: 'sky',
  },
  {
    code: '04',
    name: 'Supraimplant',
    tagline: 'Implantes y rehabilitación',
    body:
      'La etapa de rehabilitación cuando el caso lo requiere. Integrada al mismo diagnóstico, sin pasar de una clínica a otra.',
    available: true,
    bg: 'cream',
  },
];

const bgStyles = {
  navy: { bg: '#0C3754', fg: '#ECEBE4', accent: '#0578B7', subtle: 'rgba(236,235,228,0.7)' },
  cream: { bg: '#ECEBE4', fg: '#0C3754', accent: '#0578B7', subtle: 'rgba(12,55,84,0.7)' },
  sky: { bg: '#0578B7', fg: '#FFFFFF', accent: '#FFFFFF', subtle: 'rgba(255,255,255,0.8)' },
};

export function Ecosystem() {
  return (
    <section id="ecosistema" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span
            className="text-xs sm:text-sm text-[#0578B7] tracking-[0.18em]"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
          >
            02 · ECOSISTEMA
          </span>
          <h2
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-[#0C3754] leading-[1.02] tracking-tight"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
          >
            Supra no es solo alineadores. Es una marca completa.
          </h2>
          <p className="mt-6 text-[#0C3754]/70 leading-relaxed max-w-2xl">
            Cuatro líneas que conviven en un mismo universo. Salud, deporte, ritual diario y
            rehabilitación, ordenadas por un mismo diagnóstico y una misma comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {submarks.map((s, i) => {
            const style = bgStyles[s.bg];
            return (
              <motion.article
                key={s.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative aspect-[3/4] rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
                style={{ backgroundColor: style.bg }}
              >
                <div>
                  <span
                    className="text-xs tracking-[0.18em]"
                    style={{
                      fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 600,
                      color: style.accent,
                    }}
                  >
                    {s.code}
                  </span>
                  <h3
                    className="mt-3 text-3xl sm:text-4xl tracking-tight leading-[1.02]"
                    style={{
                      fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 600,
                      color: style.fg,
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="mt-1 text-sm sm:text-base"
                    style={{ color: style.subtle, fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
                  >
                    {s.tagline}
                  </p>
                </div>
                <p
                  className="text-sm sm:text-[15px] leading-relaxed"
                  style={{ color: style.subtle }}
                >
                  {s.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        <p
          className="mt-10 text-center text-sm text-[#0C3754]/60"
          style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
        >
          Próximamente · SUPRA KIDS · Wash · Sonic · Foam
        </p>
      </div>
    </section>
  );
}
