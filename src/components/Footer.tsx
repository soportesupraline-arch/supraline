import { Instagram, Mail } from 'lucide-react';
import logoSupraLine from 'figma:asset/c1a353a717fcb23b002769cfaa822d809be39eb5.png';

export function Footer() {
  return (
    <footer className="bg-[#0C3754] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src={logoSupraLine} alt="SupraLine" className="h-16 brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Transformamos sonrisas con tecnología de vanguardia y el respaldo profesional que merecés.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/supraline"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0578B7] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:soportesupraline@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0578B7] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#por-que" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Por Qué SupraLine
                </a>
              </li>
              <li>
                <a href="#para-vos" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Para Vos
                </a>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-lg mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <a href="#experiencias" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#0578B7] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} SupraLine. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
