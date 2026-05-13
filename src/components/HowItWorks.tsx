import { motion } from 'motion/react';
import { ScanLine, Brain, Layers, Activity } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: ScanLine,
    title: 'Escaneo y diagnóstico',
    body:
      'Hacemos un escaneo 3D completo y un diagnóstico integral. No vendemos un tratamiento puntual: ordenamos toda la salud bucal desde el inicio.',
  },
  {
    n: '02',
    icon: Brain,
    title: 'Plan con IA',
    body:
      'Diseñamos tu plan de movimientos pieza por pieza con tecnología e inteligencia artificial. Te mostramos la evolución antes de empezar.',
  },
  {
    n: '03',
    icon: Layers,
    title: 'Alineadores Supra',
    body:
      'En una semana tus alineadores están listos. Te los entregamos en kits numerados, con todos los accesorios y un manual claro de uso.',
  },
  {
    n: '04',
    icon: Activity,
    title: 'Seguimiento continuo',
    body:
      'Cada quince días renovamos placas. Hacemos controles digitales para asegurar que cada movimiento esté en plan. La salud bucal no termina con el tratamiento.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="tratamiento"
      className="py-20 sm:py-28 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span
            className="text-xs sm:text-sm text-[#0578B7] tracking-[0.18em]"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
          >
            01 · TRATAMIENTO
          </span>
          <h2
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl text-[#0C3754] leading-[1.02] tracking-tight"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
          >
            Diagnóstico, alineadores y seguimiento — en un solo ecosistema.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0C3754]/10 rounded-3xl overflow-hidden border border-[#0C3754]/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 sm:p-10 lg:p-12 relative group hover:bg-[#ECEBE4]/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-4xl sm:text-5xl text-[#0578B7]"
                  style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
                >
                  {s.n}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#0C3754]/5 flex items-center justify-center text-[#0C3754] group-hover:bg-[#0C3754] group-hover:text-white transition-colors">
                  <s.icon size={20} />
                </div>
              </div>
              <h3
                className="text-2xl sm:text-3xl text-[#0C3754] mb-4 tracking-tight"
                style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
              >
                {s.title}
              </h3>
              <p className="text-[#0C3754]/70 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
