// Monograma Supra: dos óvalos entrelazados (loop / disco-objeto).
// Usado como firma visual a lo largo de toda la landing.
interface LogoProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export function Logo({
  size = 32,
  color = 'currentColor',
  className = '',
  strokeWidth = 2,
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 32"
      width={size}
      height={(size * 32) / 64}
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <ellipse cx="20" cy="16" rx="13" ry="13" />
      <ellipse cx="44" cy="16" rx="13" ry="13" />
    </svg>
  );
}

export function LogoMark({
  size = 40,
  color = 'currentColor',
  className = '',
  strokeWidth = 2.2,
}: LogoProps) {
  // Versión cuadrada (1:1) para favicons, avatares, monogramas chicos
  return (
    <svg
      viewBox="0 0 48 32"
      width={size}
      height={size * 0.66}
      className={className}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <ellipse cx="16" cy="16" rx="13" ry="13" />
      <ellipse cx="32" cy="16" rx="13" ry="13" />
    </svg>
  );
}
