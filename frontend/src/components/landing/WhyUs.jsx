import { Reveal } from "../motion/Reveal";
import { Check, X } from "lucide-react";

const ROWS = [
  {
    label: "Reporting",
    generic: "A green checkmark, even when it's not really fixed",
    ada: "Honest pass, fail, or flagged, verified every time",
  },
  {
    label: "Uncertain items",
    generic: "Guessed at, or silently skipped",
    ada: "Flagged clearly for a human to review",
  },
  {
    label: "Image descriptions",
    generic: "Generic or missing alt text",
    ada: "Written per image, with a confidence check",
  },
  {
    label: "Proof of work",
    generic: "No report you can hand to an auditor",
    ada: "Plain-English report plus a compliance certificate",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="relative scroll-mt-24 overflow-hidden bg-[#0d1630] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 ada-radial-glow"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center rounded-full border border-[#06D6A0]/40 bg-[#06D6A0]/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#5EEAD4]">
                Our core promise
              </span>
              <h2 className="mt-6 font-heading text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
                We don't just say it's fixed. We prove it.
              </h2>
              <p className="mt-6 text-lg font-normal leading-relaxed text-slate-100">
                Most tools either automate everything and hope for the best, or
                leave everything to a specialist. ADA Corrector automates what
                can be proven correct instantly, structure, metadata, tagging,
                and uses AI carefully for the parts that require judgment, image
                descriptions and reading order, with its own confidence built
                in.
              </p>
              <p className="mt-6 text-lg font-normal leading-relaxed text-slate-100">
                If it isn't sure, it says so, and flags it for a human instead of
                quietly marking it done.
              </p>
              <p className="mt-8 border-l-4 border-[#3A86FF] pl-5 font-heading text-xl font-bold leading-snug text-white">
                A compliance report is only useful if you can trust it. Ours
                tells you the truth, every time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-slate-700/70 bg-[#111a35]">
              <div className="grid grid-cols-3 border-b border-slate-700/70 bg-[#0d1630]">
                <div className="p-4 text-sm font-bold uppercase tracking-wide text-slate-200 sm:p-5 sm:text-base">
                  &nbsp;
                </div>
                <div className="p-4 text-center text-sm font-bold text-slate-200 sm:p-5 sm:text-base">
                  Most tools
                </div>
                <div className="bg-[#3A86FF]/10 p-4 text-center text-sm font-bold text-white sm:p-5 sm:text-base">
                  ADA Corrector
                </div>
              </div>
              {ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 border-b border-slate-700/50 last:border-b-0"
                >
                  <div className="flex items-center p-4 text-sm font-semibold text-white sm:p-5 sm:text-base">
                    {row.label}
                  </div>
                  <div className="flex items-start gap-2 p-4 sm:p-5">
                    <X
                      size={18}
                      className="mt-0.5 shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-normal leading-relaxed text-slate-100 sm:text-base">
                      {row.generic}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 bg-[#3A86FF]/10 p-4 sm:p-5">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[#5EEAD4]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium leading-relaxed text-white sm:text-base">
                      {row.ada}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
