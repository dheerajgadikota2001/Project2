import { Reveal } from "../motion/Reveal";

const CHAPTERS = [
  {
    number: "01",
    title: "Screen readers get nothing",
    desc: "Someone using a screen reader hits an untagged PDF and gets no reading order, no image descriptions, no way to jump between headings. They're shut out entirely.",
  },
  {
    number: "02",
    title: "Fixing it by hand is slow",
    desc: "Remediation requires specialized tools and training most teams don't have in-house. Outsourcing is slow and priced per document.",
  },
  {
    number: "03",
    title: "The compliance clock runs",
    desc: "Every document you publish carries the same legal risk. Meanwhile, the standards you're required to meet aren't going anywhere.",
  },
];

export const Problem = () => {
  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="relative scroll-mt-24 bg-[#0B132B] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-heading text-base font-bold uppercase tracking-[0.2em] text-[#7fb0ff]">
            The problem
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            Accessibility isn't optional. It shouldn't be this hard either.
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-100">
            Every year, thousands of public documents go out untagged, unreadable
            by screen readers, and out of step with the standards your
            organization is legally required to meet.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.number} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border border-slate-700/70 bg-[#111a35] p-8 transition-colors duration-300 hover:border-[#3A86FF]/60">
                <span className="font-heading text-5xl font-extrabold text-slate-700 transition-colors duration-300 group-hover:text-[#3A86FF]">
                  {ch.number}
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-white">
                  {ch.title}
                </h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-slate-100">
                  {ch.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
