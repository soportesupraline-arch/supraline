import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onQuizOpen: () => void;
}

const F = "Chillax, ui-sans-serif, system-ui, sans-serif";

const reel = [
  { src: '/media/hero-snowpolo.mp4',  poster: '/media/hero-snowpolo-poster.jpg',  duration: 3800 },
  { src: '/media/hero-mountains.mp4', poster: '/media/hero-mountains-poster.jpg', duration: 5800 },
  { src: '/media/hero-lifestyle.mp4', poster: '/media/hero-lifestyle-poster.jpg', duration: 2200 },
];

export function Hero({ onQuizOpen }: HeroProps) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % reel.length), reel[index].duration);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const play = () => { v.play().catch(() => {}); };
    if (v.readyState >= 2) play();
    else v.addEventListener('canplay', play, { once: true });
  }, [index]);

  return (
    <section id="top" className="relative h-[100vh] min-h-[640px] max-h-[900px] overflow-hidden bg-[#0C3754]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            src={reel[index].src}
            poster={reel[index].poster}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(12,55,84,0.30) 0%, rgba(12,55,84,0.10) 40%, rgba(12,55,84,0.65) 100%)' }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm mb-6"
                style={{ fontFamily: F, letterSpacing: '0.12em' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                SUPRA · EN CADA MOVIMIENTO
              </div>

              <h1
                className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
                style={{ fontFamily: F, fontWeight: 600 }}
              >
                Tu sonrisa,
                <br />
                en movimiento.
              </h1>

              <p
                className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed"
                style={{ fontFamily: F }}
              >
                Ortodoncia invisible y cuidado bucal integral. Diagnóstico con tecnología de
                última generación, seguimiento continuo, pensado para tu día a día.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onQuizOpen}
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#0C3754] px-7 py-4 rounded-full hover:bg-[#ECEBE4] transition-colors text-sm sm:text-base"
                  style={{ fontFamily: F }}
                >
                  Empezar mi diagnóstico
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#tratamiento"
                  className="inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-colors text-sm sm:text-base"
                  style={{ fontFamily: F }}
                >
                  Cómo funciona
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pb-6 sm:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              {reel.map((_, i) => (
                <span
                  key={i}
                  className={"h-0.5 transition-all duration-500 " + (i === index ? "w-12 bg-white" : "w-6 bg-white/40")}
                />
              ))}
            </div>

            <div
              className="flex items-center gap-6 text-xs sm:text-sm text-white/70"
              style={{ fontFamily: F, letterSpacing: '0.10em' }}
            >
              <span>TIGRE · BA</span>
              <span className="w-px h-3 bg-white/30" />
              <span>DIAGNÓSTICO INTEGRAL</span>
              <span className="hidden sm:inline w-px h-3 bg-white/30" />
              <span className="hidden sm:inline">IA + SEGUIMIENTO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
