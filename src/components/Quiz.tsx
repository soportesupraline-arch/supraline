import { useState } from 'react';
import { CheckCircle, ArrowRight, User, Users, Baby, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  onClose: () => void;
}

export function Quiz({ isOpen: externalIsOpen, onClose: externalOnClose }: QuizProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen || internalIsOpen;
  const [currentStep, setCurrentStep] = useState<QuizStep>('start');
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    telefono: ''
  });

  const biteOptions = [
    { label: 'Sobremordida', image: '/Sobremordida.png' },
    { label: 'Mordida cruzada', image: '/Mordida_cruzada.png' },
    { label: 'Mordida abierta', image: '/Mordida_abierta.png' },
    { label: 'Dientes separados', image: '/Dientes_separados.png' },
    { label: 'Dientes apiñados', image: '/Mordida_apinados.png', imageClass: 'scale-125' },
    { label: 'Mordida profunda anterior', image: '/Mordida_profunda_anterior.png' }
  ];

  const totalQuestions = 5;
  const stepToNumber: Record<string, number> = {
    q1: 1, q2: 2, q3: 3, q4: 4, q5: 5, form: 6
  };
  const progress = currentStep === 'start' || currentStep === 'thanks' 
    ? 0 
    : (stepToNumber[currentStep] / (totalQuestions + 1)) * 100;

  const handleAnswer = (question: keyof Answers, answer: string) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
    
    // Avanzar a la siguiente pregunta
    const nextSteps: Record<string, QuizStep> = {
      q1: 'q2', q2: 'q3', q3: 'q4', q4: 'q5', q5: 'form'
    };
    setTimeout(() => {
      setCurrentStep(nextSteps[question]);
    }, 300);
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();

  const data = {
    ...formData,
    ...answers,
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx5f2W6DdMiFNX9MU7Yvc0uGzKbsKU5njoc4mnYRsm-8J28gFdf_xh1diXSPgDB_1XW/exec",
      {
        method: "POST",
        mode: "no-cors", // ðŸ‘ˆ esto evita que bloquee la solicitud
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    alert("Datos enviados correctamente. Gracias por completar el quiz!");
    setCurrentStep("thanks");
  } catch (error) {
    console.error("...Error al enviar los datos:", error);
    alert("Error de conexión con el servidor");
  }
};

  const resetQuiz = () => {
    setCurrentStep('start');
    setAnswers({});
    setFormData({ nombre: '', apellido: '', email: '', direccion: '', telefono: '' });
    setInternalIsOpen(false);
    externalOnClose();
  };

  if (!isOpen) {
    return (
      <section
        className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(/fondo_quiz.png)' }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            <CheckCircle size={18} className="sm:w-5 sm:h-5" />
            <span>Evaluación rápida y sin compromiso</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 px-4">
            ¿Sos candidato para SupraLine?
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Respondé algunas preguntas simples y descubr­í si los alineadores SupraLine son la solución ideal para tu sonrisa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button 
              onClick={() => setInternalIsOpen(true)}
              className="w-full sm:w-auto bg-white text-[#0578B7] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#ECEBE4] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Completá el quiz
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-white/70 mt-6 sm:mt-8">
            Tiempo estimado: 2 minutos
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-0 sm:p-4 overflow-y-auto relative">
      <img
        src="/fondo_quiz.png"
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none -z-10"
      />
      <motion.div 
        className="bg-white rounded-none sm:rounded-3xl shadow-2xl w-full max-w-3xl min-h-screen sm:min-h-0 sm:my-8 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Progress Bar */}
        {currentStep !== 'start' && currentStep !== 'thanks' && (
          <div className="h-2 bg-[#ECEBE4] sm:rounded-t-3xl overflow-hidden">
            <motion.div 
              className="h-full bg-[#0578B7]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={resetQuiz}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-[#ECEBE4] rounded-full flex items-center justify-center hover:bg-[#D4D4CD] transition-colors z-20"
        >
          <X className="text-[#0C3754]" size={20} />
        </button>

        <div className="p-6 sm:p-8 lg:p-12 pt-16 sm:pt-8 lg:pt-12">
          <AnimatePresence mode="wait">
            {/* Pantalla de Inicio */}
            {currentStep === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#0C3754] mb-3 sm:mb-4">
                  ¿Querés saber si los alineadores SupraLine son para vos?
                </h2>
                <p className="text-base sm:text-lg text-[#0C3754]/70 mb-8 sm:mb-10">
                  Responde unas preguntas rapidas y descubrilo.
                </p>
                <button
                  onClick={() => setCurrentStep('q1')}
                  className="w-full sm:w-auto bg-[#0578B7] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#0C3754] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Empezar quiz
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </motion.div>
            )}

            {/* Pregunta 1 */}
            {currentStep === 'q1' && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0C3754] mb-6 sm:mb-8 text-center">
                  Contanos quien usaríra los alineadores.
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { icon: User, label: 'Soy adulto', value: 'adulto' },
                    { icon: Users, label: 'Soy adolescente', value: 'adolescente' },
                    { icon: Baby, label: 'Soy padre o madre', value: 'padre' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer('q1', option.value)}
                      className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] hover:text-white transition-all group shadow-sm hover:shadow-lg"
                    >
                      <option.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#0578B7] group-hover:text-white" />
                      <span className="text-sm sm:text-base text-[#0C3754] group-hover:text-white">{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Pregunta 2 */}
            {currentStep === 'q2' && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0C3754] mb-6 sm:mb-8 text-center">
                  ¿Cómo describirías tu sonrisa actual?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {biteOptions.map(option => (
                    <button
                      key={option.label}
                      onClick={() => handleAnswer('q2', option.label)}
                      className="p-3 sm:p-4 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] hover:text-white transition-all shadow-sm hover:shadow-lg text-[#0C3754] hover:text-white text-center text-sm sm:text-base flex flex-col items-center"
                    >
                      <img
                        src={option.image}
                        alt={option.label}
                        className={`w-full h-24 sm:h-28 object-contain mb-3 ${option.imageClass ?? ''}`}
                      />
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {/* Pregunta 3 */}
            {currentStep === 'q3' && (
              <motion.div
                key="q3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0C3754] mb-6 sm:mb-8 text-center">
                  ¿Qué es lo que mas te gustaría mejorar de tu sonrisa?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    'Alinear mis dientes',
                    'Mejorar la mordida',
                    'Verme más seguro/a',
                    'Tener una sonrisa más estética'
                  ].map(option => (
                    <button
                      key={option}
                      onClick={() => handleAnswer('q3', option)}
                      className="p-5 sm:p-6 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] hover:text-white transition-all shadow-sm hover:shadow-lg text-[#0C3754] hover:text-white text-center text-sm sm:text-base"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Pregunta 4 */}
            {currentStep === 'q4' && (
              <motion.div
                key="q4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0C3754] mb-6 sm:mb-8 text-center">
                  ¿Qué duda te gustaría resolver sobre el tratamiento?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    '¿Cuánto dura?',
                    '¿Duele?',
                    '¿Es caro?',
                    '¿Necesito ir al odontólogo seguido?'
                  ].map(option => (
                    <button
                      key={option}
                      onClick={() => handleAnswer('q4', option)}
                      className="p-5 sm:p-6 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] hover:text-white transition-all shadow-sm hover:shadow-lg text-[#0C3754] hover:text-white text-center text-sm sm:text-base"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Pregunta 5 */}
            {currentStep === 'q5' && (
              <motion.div
                key="q5"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0C3754] mb-6 sm:mb-8 text-center">
                  ¿En qué etapa estás?
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 max-w-xl mx-auto">
                  {[
                    'Recién estoy averiguando',
                    'Quiero una consulta',
                    'Ya tengo turno'
                  ].map(option => (
                    <button
                      key={option}
                      onClick={() => handleAnswer('q5', option)}
                      className="p-5 sm:p-6 bg-[#ECEBE4] rounded-2xl hover:bg-[#0578B7] hover:text-white transition-all shadow-sm hover:shadow-lg text-[#0C3754] hover:text-white text-center text-sm sm:text-base"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Formulario */}
            {currentStep === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-[#0C3754] mb-3 sm:mb-4 text-center">
                  Dejanos tus datos y te ayudamos a resolver tus dudas.
                </h3>
                <p className="text-sm sm:text-base text-[#0C3754]/70 mb-6 sm:mb-8 text-center">
                  Un odontólogo de Supra te contactará en breve.
                </p>
                <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4 max-w-xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={formData.nombre}
                      onChange={e => setFormData({...formData, nombre: e.target.value})}
                      required
                      className="px-4 py-3 bg-[#ECEBE4] rounded-xl text-[#0C3754] placeholder:text-[#0C3754]/50 focus:outline-none focus:ring-2 focus:ring-[#0578B7] text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      placeholder="Apellido"
                      value={formData.apellido}
                      onChange={e => setFormData({...formData, apellido: e.target.value})}
                      required
                      className="px-4 py-3 bg-[#ECEBE4] rounded-xl text-[#0C3754] placeholder:text-[#0C3754]/50 focus:outline-none focus:ring-2 focus:ring-[#0578B7] text-sm sm:text-base"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-[#ECEBE4] rounded-xl text-[#0C3754] placeholder:text-[#0C3754]/50 focus:outline-none focus:ring-2 focus:ring-[#0578B7] text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChange={e => setFormData({...formData, direccion: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-[#ECEBE4] rounded-xl text-[#0C3754] placeholder:text-[#0C3754]/50 focus:outline-none focus:ring-2 focus:ring-[#0578B7] text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={e => setFormData({...formData, telefono: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-[#ECEBE4] rounded-xl text-[#0C3754] placeholder:text-[#0C3754]/50 focus:outline-none focus:ring-2 focus:ring-[#0578B7] text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#0578B7] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#0C3754] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Enviar y recibir asesoramiento
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* Pantalla de Agradecimiento */}
            {currentStep === 'thanks' && (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0578B7] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl text-[#0C3754] mb-3 sm:mb-4">
                  ¡Gracias por completar tu quiz!
                </h3>
                <p className="text-base sm:text-lg text-[#0C3754]/70 mb-6 sm:mb-8 max-w-lg mx-auto px-4">
                  Un profesional te contactará en breve por WhatsApp o email.
                </p>
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto bg-[#0578B7] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#0C3754] transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
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


