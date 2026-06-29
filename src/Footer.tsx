import type { ReactNode, ElementType } from 'react';
import { MapPin, Mail, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

// Lucide quitó los íconos de marca; inline SVG para Instagram.
function Instagram(props: { size?: number; className?: string }) {
  const { size = 16, className = '' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const F = "Chillax, ui-sans-serif, system-ui, sans-serif";

export function Footer() {
  return (
    <footer className="bg-[#0C3754] text-[#ECEBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <Logo size={120} color="#ECEBE4" strokeWidth={2} />
            <p
              className="mt-8 text-2xl sm:text-3xl text-white leading-[1.1] tracking-tight max-w-sm"
              style={{ fontFamily: F, fontWeight: 600 }}
            >
              Salud bucal como lifestyle.
            </p>
            <p className="mt-4 text-[#ECEBE4]/60 text-sm max-w-sm leading-relaxed">
              Diagnóstico integral, ortodoncia invisible y un ecosistema pensado para que la
              sonrisa sea parte del día a día.
            </p>
          </div>

          <FooterCol title="Marca">
            <FooterLink href="#tratamiento">Tratamiento</FooterLink>
            <FooterLink href="#ecosistema">Ecosistema</FooterLink>
            <FooterLink href="#por-que">¿Por qué Supra?</FooterLink>
            <FooterLink href="#quiz">Quiz</FooterLink>
          </FooterCol>

          <FooterCol title="Submarcas">
            <FooterText>SupraLine</FooterText>
            <FooterText>Supralips</FooterText>
            <FooterText>Impact</FooterText>
            <FooterText>Supraimplant</FooterText>
            <FooterText subtle>Supra Kids · próximamente</FooterText>
          </FooterCol>

          <FooterCol title="Contacto">
            <FooterRow icon={MapPin}>Tigre, Buenos Aires</FooterRow>
            <FooterRow icon={Instagram} href="https://instagram.com/supra__global" external>
              @supra__global
            </FooterRow>
            <FooterRow icon={Mail} href="mailto:soportesupraline@gmail.com" external>
              soportesupraline@gmail.com
            </FooterRow>
            <FooterRow icon={MessageCircle} href="https://wa.me/" external>
              WhatsApp
            </FooterRow>
          </FooterCol>
        </div>

        <div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#ECEBE4]/40 tracking-[0.12em]"
          style={{ fontFamily: F }}
        >
          <span>© {new Date().getFullYear()} SUPRA · SUPRALINE</span>
          <span>HECHO EN TIGRE, ARGENTINA</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4
        className="text-xs text-[#0578B7] tracking-[0.18em] mb-5"
        style={{ fontFamily: F, fontWeight: 600 }}
      >
        {title.toUpperCase()}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-[#ECEBE4]/80 hover:text-white transition-colors text-sm"
        style={{ fontFamily: F }}
      >
        {children}
      </a>
    </li>
  );
}

function FooterText({ children, subtle }: { children: ReactNode; subtle?: boolean }) {
  const cls = subtle ? "text-[#ECEBE4]/40" : "text-[#ECEBE4]/80";
  return (
    <li className={"text-sm " + cls} style={{ fontFamily: F }}>
      {children}
    </li>
  );
}

function FooterRow({
  icon: Icon,
  href,
  external,
  children,
}: {
  icon: ElementType;
  href?: string;
  external?: boolean;
  children: ReactNode;
}) {
  const inner = (
    <span className="flex items-center gap-3 text-[#ECEBE4]/80 hover:text-white transition-colors text-sm">
      <Icon size={16} className="shrink-0" />
      <span style={{ fontFamily: F }}>{children}</span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
