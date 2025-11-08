import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { motion } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      question: '¿Qué son los alineadores SupraLine?',
      answer: 'Los alineadores SupraLine son dispositivos ortodónticos transparentes y removibles, diseñados a medida para mover gradualmente tus dientes hacia la posición deseada. Son prácticamente invisibles y muy cómodos de usar.'
    },
    {
      question: '¿Cuánto tiempo dura el tratamiento?',
      answer: 'La duración del tratamiento varía según cada caso, pero generalmente oscila entre 6 y 18 meses. Durante tu consulta inicial, nuestro equipo odontológico evaluará tu situación específica y te brindará un plan de tratamiento personalizado.'
    },
    {
      question: '¿Los alineadores son dolorosos?',
      answer: 'Los alineadores SupraLine están diseñados para ser cómodos. Podés sentir una leve presión durante los primeros días de cada nuevo juego de alineadores, lo cual es normal y significa que están funcionando. Esta sensación es temporal y mucho menos molesta que los brackets tradicionales.'
    },
    {
      question: '¿Puedo comer con los alineadores puestos?',
      answer: 'Se recomienda retirar los alineadores al comer y beber (excepto agua). Esto protege los alineadores y te permite disfrutar de tus comidas sin restricciones. Después de comer, simplemente cepillá tus dientes y volvé a colocar los alineadores.'
    },
    {
      question: '¿Con qué frecuencia debo usar los alineadores?',
      answer: 'Para obtener los mejores resultados, se recomienda usar los alineadores entre 20 y 22 horas al día, retirándolos solo para comer, beber y realizar tu higiene bucal.'
    },
    {
      question: '¿Necesito controles odontológicos durante el tratamiento?',
      answer: 'Sí, el seguimiento profesional es fundamental. Realizamos controles periódicos cada 4-6 semanas para monitorear tu progreso, asegurarnos de que todo esté avanzando correctamente y brindarte el siguiente juego de alineadores.'
    },
    {
      question: '¿Los alineadores afectan mi forma de hablar?',
      answer: 'Podés notar un leve cambio en tu habla durante los primeros días, pero la mayoría de las personas se adapta rápidamente. En pocos días, hablarás con normalidad mientras usás los alineadores.'
    },
    {
      question: '¿Cómo limpio mis alineadores?',
      answer: 'Los alineadores se limpian fácilmente con un cepillo de dientes suave y agua tibia. También podés usar productos de limpieza específicos para alineadores. Nuestro equipo te brindará instrucciones detalladas sobre el cuidado adecuado.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-[#0C3754] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-[#0C3754]/70">
            Resolvemos tus dudas sobre el tratamiento
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#ECEBE4] rounded-2xl px-6 border-none"
            >
              <AccordionTrigger className="text-[#0C3754] hover:text-[#0578B7] text-left py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#0C3754]/70 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-[#0C3754]/70 mb-4">
            ¿Tenés más preguntas?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-[#0578B7] text-white px-8 py-4 rounded-full hover:bg-[#0C3754] transition-colors"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}
