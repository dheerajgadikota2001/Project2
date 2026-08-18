import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, AlertTriangle, FileText, Loader2 } from "lucide-react";

const CHECKS = [
  { label: "Document structure & tags", status: "fixed" },
  { label: "Image descriptions (4 images)", status: "fixed" },
  { label: "Reading order", status: "fixed" },
  { label: "Title & language metadata", status: "fixed" },
  { label: "Bookmarks from headings", status: "fixed" },
  { label: "Form field labels", status: "fixed" },
  { label: "Complex chart on page 12", status: "flagged" },
];

/*
  Hero widget: an honest, on-brand mock of a scan.
  It does NOT claim a perfect score — one item is flagged for human review,
  mirroring the product's core promise.
*/
export const ScanSimulator = () => {
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(reduce ? CHECKS.length : 0);

  useEffect(() => {
    if (reduce) return;
    if (revealed >= CHECKS.length) return;
    const t = setTimeout(() => setRevealed((n) => n + 1), 620);
    return () => clearTimeout(t);
  }, [revealed, reduce]);

  const done = revealed >= CHECKS.length;
  const fixedCount = CHECKS.slice(0, revealed).filter(
    (c) => c.status === "fixed"
  ).length;
  const flaggedCount = CHECKS.slice(0, revealed).filter(
    (c) => c.status === "flagged"
  ).length;

  return (
    <div
      data-testid="hero-scan-simulator"
      className="relative w-full rounded-2xl border border-slate-700/80 bg-[#111a35]/90 p-5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-6"
    >
      {/* window chrome */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#3A86FF]/15 text-[#7fb0ff]">
            <FileText size={18} aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold text-white">
              public-notice-2026.pdf
            </p>
            <p className="text-sm font-medium text-slate-200">
              Scanning against WCAG 2.1 AA & Section 508
            </p>
          </div>
        </div>
        {!done ? (
          <Loader2
            size={22}
            className="animate-spin text-[#7fb0ff]"
            aria-hidden="true"
          />
        ) : (
          <span className="rounded-full bg-[#06D6A0]/15 px-3 py-1 text-sm font-bold text-[#5EEAD4]">
            Complete
          </span>
        )}
      </div>

      <ul className="space-y-2.5" aria-label="Remediation results">
        {CHECKS.map((c, i) => {
          const shown = i < revealed;
          const flagged = c.status === "flagged";
          return (
            <motion.li
              key={c.label}
              initial={reduce ? false : { opacity: 0, x: -8 }}
              animate={
                shown ? { opacity: 1, x: 0 } : { opacity: 0.25, x: -8 }
              }
              transition={{ duration: 0.35 }}
              className={`flex items-center justify-between gap-3 rounded-xl border px-3.5 py-3 ${
                flagged
                  ? "border-[#FFB703]/40 bg-[#FFB703]/10"
                  : "border-slate-700/70 bg-[#0d1630]"
              }`}
            >
              <span className="text-base font-medium text-white">
                {c.label}
              </span>
              {shown &&
                (flagged ? (
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#FFCB47]">
                    <AlertTriangle size={16} aria-hidden="true" />
                    Flagged
                  </span>
                ) : (
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#5EEAD4]">
                    <Check size={16} aria-hidden="true" />
                    Fixed
                  </span>
                ))}
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-slate-700/70 bg-[#0d1630] px-4 py-3">
          <p className="text-3xl font-extrabold text-white">{fixedCount}</p>
          <p className="text-sm font-medium text-slate-200">
            Fixed automatically
          </p>
        </div>
        <div className="rounded-xl border border-[#FFB703]/30 bg-[#FFB703]/10 px-4 py-3">
          <p className="text-3xl font-extrabold text-white">{flaggedCount}</p>
          <p className="text-sm font-medium text-slate-100">
            Flagged for review
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm font-medium leading-relaxed text-slate-200">
        We never mark the flagged item as done. You see exactly what changed,
        and exactly what still needs a human eye.
      </p>
    </div>
  );
};
