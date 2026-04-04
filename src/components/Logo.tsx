export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon */}
      <polygon
        points="50,3 93,27 93,73 50,97 7,73 7,27"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Aperture blades - six lines from each vertex toward the center, offset to create iris */}
      <line x1="50" y1="3" x2="72" y2="40" strokeWidth="1.8" />
      <line x1="93" y1="27" x2="72" y2="60" strokeWidth="1.8" />
      <line x1="93" y1="73" x2="50" y2="60" strokeWidth="1.8" />
      <line x1="50" y1="97" x2="28" y2="60" strokeWidth="1.8" />
      <line x1="7" y1="73" x2="28" y2="40" strokeWidth="1.8" />
      <line x1="7" y1="27" x2="50" y2="40" strokeWidth="1.8" />
      {/* Inner hexagon formed by the aperture convergence */}
      <polygon
        points="50,40 72,40 72,60 50,60 28,60 28,40"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
