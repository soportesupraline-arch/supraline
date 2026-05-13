import { motion } from 'motion/react';

const reasons = [
  {
    n: '01',
    title: 'Diagnóstico, no solo producto.',
    body:
      'Otras marcas venden alineadores. Supra parte de un diagnóstico integral y arma un plan de salud bucal completo desde el inicio.',
  },
  {
    n: '02',
    title: 'IA aplicada al seguimiento.',
    body:
      'No usamos tecnología solo en la planificación. La aplicamos al seguimiento continuo, asegurando que cada movimiento esté donde tiene que estar.',
  },
  {
    n: '03',
    title: 'Salud sistémica, no estética sola.',
    body:
      'Una mordida sana impacta postura, sueño y cefalea. Trabajamos la sonrisa entendiendo el cuerpo entero.',
  },
  {
    n: '04',
    title: 'Comunidad, no consultas sueltas.',
    body:
      'Sos parte del ecosistema Supra antes, durante y después del tratamiento. La relación no termina cuando termina el caso.',
  },
];

export function WhySupra() {
  return (
    <section id="por-que" className="bg-[#ECEBE4] py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 self-start">
            <span
              className="text-xs sm:text-sm text-[#0578B7] tracking-[0.18em]"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
            >
              03 · ¿POR QUÉ SUPRA?
            </span>
            <h2
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-[#0C3754] leading-[1.02] tracking-tight"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
            >
              Lo que nos separa de una clínica más.
            </h2>
            <p className="mt-6 text-[#0C3754]/70 leading-relaxed max-w-md">
              Cuatro cosas que cambian cómo se siente venir, hacerse el tratamiento y quedarse
              después.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 flex gap-6 sm:gap-8 items-start"
              >
                <span
                  className="text-[#0578B7] text-3xl sm:text-4xl shrink-0"
                  style={{
                    fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {r.n}
                </span>
                <div>
                  <h3
                    className="text-xl sm:text-2xl text-[#0C3754] mb-2 sm:mb-3 tracking-tight"
                    style={{
                      fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-[#0C3754]/70 leading-relaxed">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
