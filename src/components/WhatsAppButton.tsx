import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = '5491176008393'; // Número de WhatsApp de SupraLine
  const whatsappMessage = encodeURIComponent('¡Hola! Me gustaría obtener más información sobre los alineadores SupraLine.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Tooltip - Only visible on desktop */}
        <div className="hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#0C3754] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-sm">
          ¿Necesitás Ayuda? Chateá con Nosotros
        </div>

        {/* Button */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all cursor-pointer">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
      </div>
    </a>
  );
}
