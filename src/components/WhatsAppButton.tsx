export function WhatsAppButton() {
  const whatsappNumber = '5491176008393';
  const whatsappMessage = encodeURIComponent(
    'Hola! Me gustaría obtener más información sobre los alineadores SupraLine.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactanos por WhatsApp"
      className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center bg-[#25D366] text-white rounded-full shadow-[0_10px_20px_rgba(12,55,84,0.15)] hover:shadow-[0_16px_28px_rgba(12,55,84,0.22)] overflow-hidden transition-[width,transform,box-shadow] duration-300 ease-out w-14 h-14 sm:w-16 sm:h-16 hover:w-[260px] focus-visible:w-[260px] hover:scale-[1.02]"
    >
      <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 shrink-0">
        <img
          src="/whatsapp-botton.png"
          alt="Logo de WhatsApp"
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
        />
      </span>
      <span className="pr-5 font-medium select-none whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
        Contactanos por WhatsApp
      </span>
    </a>
  );
}
