import { Reveal } from "../motion/Reveal";
import { Upload, ScanLine, Wrench, FileCheck2 } from "lucide-react";

const STEPS = [
  {
    icon: Upload,
    number: "01",
    title: "Upload your PDF.",
    desc: "Any standard PDF. No formatting required, no special setup.",
  },
  {
    icon: ScanLine,
    number: "02",
    title: "We scan it against real standards.",
    desc: "WCAG 2.1 AA and Section 508, checked line by line. We find missing structure, missing image descriptions, broken reading order, missing metadata, unlabeled form fields, and more.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "We fix what we can, and tell you what we can't.",
    desc: "Structure, image descriptions, reading order, metadata, bookmarks, and form labels corrected automatically. Anything uncertain gets flagged for you, never silently skipped.",
  },
  {
    icon: FileCheck2,
    number: "04",
    title: "You get a corrected file and proof of the work.",
    desc: "A fixed PDF, a full report, and a certificate ready to hand to anyone who asks.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="relative scroll-mt-24 bg-[#0d1630] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-heading text-base font-bold uppercase tracking-[0.2em] text-[#7fb0ff]">
            How it works
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            From inaccessible to compliant, in four steps.
          </h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={(i % 2) * 0.1}>
                <li className="flex h-full gap-5 rounded-2xl border border-slate-700/70 bg-[#111a35] p-7 sm:p-8">
                  <div className="flex flex-col items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#3A86FF]/15 text-[#7fb0ff]">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <span className="font-heading text-base font-bold text-slate-400">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold leading-snug text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base font-normal leading-relaxed text-slate-100">
                      {step.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
