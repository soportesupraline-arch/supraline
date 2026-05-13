import { motion } from 'motion/react';

// Banda manifesto que separa el hero del resto. Texto gigante en navy,
// repetido y en movimiento horizontal — gesto "Chillax monumental" del playbook.
export function Marquee() {
  const items = [
    'Salud bucal',
    '·',
    'Tecnología',
    '·',
    'Estética',
    '·',
    'Comunidad',
    '·',
    'Lifestyle',
    '·',
  ];
  // Triplicamos para que el loop se vea continuo
  const repeated = [...items, ...items, ...items];

  return (
    <section
      aria-hidden="true"
      className="bg-[#0C3754] py-10 sm:py-14 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <motion.div
        className="flex gap-10 sm:gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((word, i) => (
          <span
            key={i}
            className="text-[#ECEBE4] text-5xl sm:text-7xl md:text-8xl shrink-0"
            style={{
              fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 600,
              opacity: word === '·' ? 0.4 : 1,
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
