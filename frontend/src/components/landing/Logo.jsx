/* Text-based brand mark. Client will replace the glyph with their uploaded logo. */
export const Logo = ({ className = "", showText = true, subtitle = false }) => {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 place-items-center rounded-lg bg-[#3A86FF] shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_8px_24px_-8px_rgba(58,134,255,0.7)]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m8.5 12.5 2.2 2.2 4.3-4.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-lg font-extrabold tracking-tight text-white">
            ADA Corrector
          </span>
          {subtitle && (
            <span className="mt-1 text-sm font-semibold tracking-wide text-slate-300">
              by EnhanceGov LLC
            </span>
          )}
        </span>
      )}
    </span>
  );
};
