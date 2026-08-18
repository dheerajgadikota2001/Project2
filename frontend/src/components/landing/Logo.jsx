/* Brand mark using EnhanceGov's uploaded logo. */
export const Logo = ({ className = "", showText = true, subtitle = false }) => {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand-logo.png"
        alt="ADA Corrector by EnhanceGov LLC"
        className="h-10 w-auto shrink-0"
        width="277"
        height="218"
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-lg font-extrabold tracking-tight text-white">
            ADA Corrector
          </span>
          {subtitle && (
            <span className="mt-1 text-[11px] font-normal tracking-wide text-slate-400/80">
              by EnhanceGov LLC
            </span>
          )}
        </span>
      )}
    </span>
  );
};
