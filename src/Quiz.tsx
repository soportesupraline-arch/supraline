import { useState, FormEvent } from 'react';
import { CheckCircle, ArrowRight, User, Users, Baby, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoMark } from './Logo';

// ────────────────────────────────────────────────────────────────────────────────
// IMPORTANTE: NO TOCAR esta URL — es el Apps Script que recibe los datos del
// formulario y envía el mail a soportesupraline@gmail.com. Si la cambiás, dejás
// de recibir los quizzes.
// ────────────────────────────────────────────────────────────────────────────────
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx5f2W6DdMiFNX9MU7Yvc0uGzKbsKU5njoc4mnYRsm-8J28gFdf_xh1diXSPgDB_1XW/exec';

type QuizStep = 'start' | 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'form' | 'thanks';

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  direccion: string;
  telefono: string;
}

interface Answers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
}

interface QuizProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const biteOptions = [
  { label: 'Sobremordida', image: '/Sobremordida.png' },
  { label: 'Mordida cruzada', image: '/Mordida_cruzada.png' },
  { label: 'Mordida abierta', image: '/Mordida_abierta.png' },
  { label: 'Dientes separados', image: '/Dientes_separados.png' },
  { label: 'Dientes apiñados (rotados)', image: '/Mordida_apinados.png', imageClass: 'scale-125' },
  { label: 'Mordida profunda anterior', image: '/Mordida_profunda_anterior.png' },
];

export function Quiz({ isOpen, onOpen, onClose }: QuizProps) {
  const [currentStep, setCurrentStep] = useState<QuizStep>('start');
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    telefono: '',
  });

  const totalQuestions = 5;
  const stepToNumber: Record<string, number> = {
    q1: 1, q2: 2, q3: 3, q4: 4, q5: 5, form: 6,
  };
  const progress =
    currentStep === 'start' || currentStep === 'thanks'
      ? 0
      : (stepToNumber[currentStep] / (totalQuestions + 1)) * 100;

  const handleAnswer = (question: keyof Answers, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
    const nextSteps: Record<string, QuizStep> = {
      q1: 'q2', q2: 'q3', q3: 'q4', q4: 'q5', q5: 'form',
    };
    setTimeout(() => setCurrentStep(nextSteps[question]), 280);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const payload = { ...formData, ...answers };

    try {
      // Apps Script no-cors: la respuesta es opaca pero el POST llega.
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setCurrentStep('thanks');
    } catch (error) {
      console.error('Error al enviar el quiz:', error);
      alert(
        'No pudimos enviar los datos. Revisá tu conexión e intentá de nuevo, o escribinos por Instagram @supra__global.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setCurrentStep('start');
    setAnswers({});
    setFormData({ nombre: '', apellido: '', email: '', direccion: '', telefono: '' });
    onClose();
  };

  // ─── Sección Hero del quiz (cuando el modal está cerrado) ───
  if (!isOpen) {
    return (
      <section
        id="quiz"
        data-quiz-section
        className="relative bg-[#0C3754] py-20 sm:py-28 lg:py-32 overflow-hidden"
      >
        {/* Decor orbits */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <ellipse cx="720" cy="300" rx="640" ry="240" stroke="#ECEBE4" strokeWidth="1" fill="none" />
          <ellipse cx="720" cy="300" rx="480" ry="180" stroke="#ECEBE4" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm mb-8"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', letterSpacing: '0.12em' }}
          >
            <CheckCircle size={14} />
            EVALUACIÓN RÁPIDA · 2 MIN
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.02] tracking-tight mb-6"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
          >
            ¿Sos candidato
            <br />
            para SupraLine?
          </h2>

          <p className="text-base sm:text-lg text-[#ECEBE4]/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Respondé algunas preguntas simples y descubrí si los alineadores Supra son la solución
            ideal para tu sonrisa. Un odontólogo del equipo te contacta en cuanto terminás.
          </p>

          <button
            data-quiz-trigger
            type="button"
            onClick={onOpen}
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#0C3754] px-7 py-4 rounded-full hover:bg-[#ECEBE4] transition-all text-sm sm:text-base"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
          >
            Empezar el quiz
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          <p
            className="mt-6 text-xs text-white/50 tracking-[0.12em]"
            style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
          >
            SIN COMPROMISO · TUS DATOS LLEGAN DIRECTO AL EQUIPO SUPRA
          </p>
        </div>
      </section>
    );
  }

  // ─── Modal abierto ───
  return (
    <div className="fixed inset-0 bg-[#0C3754]/70 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12 overflow-y-auto">
      <motion.div
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-3xl relative max-h-[calc(100vh-3rem)] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Progress bar */}
        {currentStep !== 'start' && currentStep !== 'thanks' && (
          <div className="h-1.5 bg-[#ECEBE4] sm:rounded-t-3xl overflow-hidden">
            <motion.div
              className="h-full bg-[#0578B7]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8">
          <div className="flex items-center gap-2 text-[#0C3754]">
            <LogoMark size={28} color="#0C3754" />
            <span
              className="text-xs sm:text-sm tracking-[0.18em]"
              style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
            >
              QUIZ SUPRA
            </span>
          </div>
          <button
            type="button"
            onClick={resetQuiz}
            className="w-10 h-10 bg-[#ECEBE4] rounded-full flex items-center justify-center hover:bg-[#D4D4CD] transition-colors"
            aria-label="Cerrar quiz"
          >
            <X className="text-[#0C3754]" size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 pt-6 sm:pt-8">
          <AnimatePresence mode="wait">
            {/* Start */}
            {currentStep === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="text-center py-6 sm:py-8"
              >
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl text-[#0C3754] mb-4 sm:mb-6 leading-[1.02] tracking-tight"
                  style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
                >
                  ¿Los alineadores
                  <br />
                  Supra son para vos?
                </h2>
                <p className="text-base sm:text-lg text-[#0C3754]/70 mb-10 max-w-md mx-auto">
                  Cinco preguntas rápidas. Tu respuesta llega directo al equipo.
                </p>
                <button
                  type="button"
                  onClick={() => setCurrentStep('q1')}
                  className="inline-flex items-center justify-center gap-3 bg-[#0C3754] text-white px-8 py-4 rounded-full hover:bg-[#0578B7] transition-colors"
                  style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
                >
                  Empezar
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {/* Q1 */}
            {currentStep === 'q1' && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <QuestionHeader index={1} total={5} text="Contanos quién usaría los alineadores." />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { icon: User, label: 'Soy adulto', value: 'adulto' },
                    { icon: Users, label: 'Soy adolescente', value: 'adolescente' },
                    { icon: Baby, label: 'Soy padre o madre', value: 'padre' },
                  ].map((option) => (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => handleAnswer('q1', option.value)}
                      className="flex flex-col items-center gap-4 p-6 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] hover:text-white transition-all group"
                    >
                      <option.icon className="w-10 h-10 text-[#0578B7] group-hover:text-white transition-colors" />
                      <span
                        className="text-sm sm:text-base text-[#0C3754] group-hover:text-white"
                        style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
                      >
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q2 */}
            {currentStep === 'q2' && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <QuestionHeader index={2} total={5} text="¿Cómo describirías tu sonrisa actual?" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {biteOptions.map((option) => (
                    <button
                      type="button"
                      key={option.label}
                      onClick={() => handleAnswer('q2', option.label)}
                      className="p-3 sm:p-4 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] transition-all text-center group"
                    >
                      <img
                        src={option.image}
                        alt={option.label}
                        loading="lazy"
                        decoding="async"
                        width={455}
                        height={261}
                        className={`w-full h-24 sm:h-28 object-contain mb-3 ${option.imageClass ?? ''}`}
                      />
                      <span
                        className="text-sm sm:text-base text-[#0C3754] group-hover:text-white"
                        style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
                      >
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Q3 */}
            {currentStep === 'q3' && (
              <motion.div
                key="q3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <QuestionHeader index={3} total={5} text="¿Qué te gustaría mejorar de tu sonrisa?" />
                <OptionGrid
                  options={[
                    'Alinear mis dientes',
                    'Mejorar la mordida',
                    'Verme más seguro/a',
                    'Tener una sonrisa más estética',
                  ]}
                  onPick={(v) => handleAnswer('q3', v)}
                  columns={2}
                />
              </motion.div>
            )}

            {/* Q4 */}
            {currentStep === 'q4' && (
              <motion.div
                key="q4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <QuestionHeader index={4} total={5} text="¿Qué duda querés resolver sobre el tratamiento?" />
                <OptionGrid
                  options={[
                    '¿Cuánto dura?',
                    '¿Duele?',
                    '¿Es caro?',
                    '¿Necesito ir al odontólogo seguido?',
                  ]}
                  onPick={(v) => handleAnswer('q4', v)}
                  columns={2}
                />
              </motion.div>
            )}

            {/* Q5 */}
            {currentStep === 'q5' && (
              <motion.div
                key="q5"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <QuestionHeader index={5} total={5} text="¿En qué etapa estás?" />
                <OptionGrid
                  options={[
                    'Recién estoy averiguando',
                    'Quiero una consulta',
                    'Ya tengo turno',
                  ]}
                  onPick={(v) => handleAnswer('q5', v)}
                  columns={1}
                />
              </motion.div>
            )}

            {/* Form */}
            {currentStep === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
              >
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl text-[#0C3754] mb-3 sm:mb-4 leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
                >
                  Dejanos tus datos y te ayudamos a resolver tus dudas.
                </h3>
                <p className="text-sm sm:text-base text-[#0C3754]/70 mb-8">
                  Un odontólogo del equipo Supra te contacta en breve.
                </p>
                <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      placeholder="Nombre"
                      value={formData.nombre}
                      onChange={(v) => setFormData({ ...formData, nombre: v })}
                      type="text"
                    />
                    <Input
                      placeholder="Apellido"
                      value={formData.apellido}
                      onChange={(v) => setFormData({ ...formData, apellido: v })}
                      type="text"
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    type="email"
                  />
                  <Input
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChange={(v) => setFormData({ ...formData, direccion: v })}
                    type="text"
                  />
                  <Input
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={(v) => setFormData({ ...formData, telefono: v })}
                    type="tel"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#0C3754] text-white px-6 py-4 rounded-full hover:bg-[#0578B7] transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                    style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
                  >
                    {submitting ? 'Enviando…' : 'Enviar y recibir asesoramiento'}
                    {!submitting && <ArrowRight size={18} />}
                  </button>
                  <p className="text-xs text-[#0C3754]/50 text-center pt-2">
                    Al enviar aceptás que el equipo Supra te contacte por mail o WhatsApp.
                  </p>
                </form>
              </motion.div>
            )}

            {/* Thanks */}
            {currentStep === 'thanks' && (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0578B7] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3
                  className="text-3xl sm:text-4xl text-[#0C3754] mb-4 leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
                >
                  ¡Gracias por completar tu quiz!
                </h3>
                <p className="text-base sm:text-lg text-[#0C3754]/70 mb-8 max-w-md mx-auto">
                  Recibimos tus respuestas. Un profesional te contacta en breve por WhatsApp o email.
                </p>
                <button
                  onClick={resetQuiz}
                  className="bg-[#0C3754] text-white px-7 py-3.5 rounded-full hover:bg-[#0578B7] transition-colors"
                  style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
                >
                  Volver al inicio
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Helpers ───

function QuestionHeader({ index, total, text }: { index: number; total: number; text: string }) {
  return (
    <div className="mb-6 sm:mb-8 text-center">
      <span
        className="text-xs text-[#0578B7] tracking-[0.18em]"
        style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
      >
        PASO {index} DE {total}
      </span>
      <h3
        className="mt-2 text-2xl sm:text-3xl lg:text-4xl text-[#0C3754] leading-[1.05] tracking-tight"
        style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif', fontWeight: 600 }}
      >
        {text}
      </h3>
    </div>
  );
}

function OptionGrid({
  options,
  onPick,
  columns,
}: {
  options: string[];
  onPick: (v: string) => void;
  columns: 1 | 2 | 3;
}) {
  const cols =
    columns === 1
      ? 'grid-cols-1 max-w-xl mx-auto'
      : columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-3';
  return (
    <div className={`grid ${cols} gap-3 sm:gap-4`}>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => onPick(option)}
          className="p-5 sm:p-6 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] hover:text-white transition-all text-center text-sm sm:text-base text-[#0C3754]"
          style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function Input({
  placeholder,
  value,
  onChange,
  type,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full px-4 py-3.5 bg-[#ECEBE4] rounded-xl text-[#0C3754] placeholder:text-[#0C3754]/50 focus:outline-none focus:ring-2 focus:ring-[#0578B7] text-sm sm:text-base"
      style={{ fontFamily: 'Chillax, ui-sans-serif, system-ui, sans-serif' }}
    />
  );
}
