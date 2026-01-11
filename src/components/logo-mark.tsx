export default function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <defs>
        <linearGradient id="gvGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4361ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#gvGrad)" />
      <g transform="translate(16,18)">
        <rect x="0" y="18" width="6" height="12" rx="3" fill="url(#barGrad)" />
        <rect x="10" y="12" width="6" height="18" rx="3" fill="url(#barGrad)" />
        <rect x="20" y="6" width="6" height="24" rx="3" fill="url(#barGrad)" />
      </g>
      <path d="M44 20 L58 28 L44 36 Z" fill="#ffffff" fillOpacity="0.95" />
    </svg>
  );
}
