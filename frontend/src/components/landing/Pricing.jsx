import { Reveal } from "../motion/Reveal";
import { Check, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Single Scan",
    price: "$19.99",
    period: "one document, one fix",
    tagline: "Pay once, no subscription, no commitment.",
    popular: false,
    features: [
      "One document, one fix",
      "Full WCAG 2.1 AA & Section 508 remediation",
      "AI image descriptions with confidence checks",
      "Plain-English report of exactly what changed",
      "Downloadable compliance certificate",
    ],
  },
  {
    name: "Monthly Plan",
    price: "$99",
    period: "per month",
    tagline: "Unlimited scans, 1,000 pages included every month.",
    popular: true,
    features: [
      "Unlimited scans",
      "1,000 pages included every month",
      "Add page packs anytime, mid-cycle",
      "Everything in Single Scan",
      "Scan history for every document you process",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative scroll-mt-24 bg-[#0B132B] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="font-heading text-base font-bold uppercase tracking-[0.2em] text-[#7fb0ff]">
              Pricing
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
              Pay for one fix, or never think about it again.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                data-testid={`pricing-card-${plan.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`relative flex h-full flex-col rounded-2xl border p-8 sm:p-10 ${
                  plan.popular
                    ? "border-[#3A86FF] bg-[#111a35] shadow-[0_30px_80px_-30px_rgba(58,134,255,0.6)]"
                    : "border-slate-700/70 bg-[#111a35]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-8 inline-flex items-center gap-1.5 rounded-full bg-[#3A86FF] px-4 py-1.5 text-sm font-bold text-white">
                    <Sparkles size={15} aria-hidden="true" />
                    Most popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                  {plan.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-extrabold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-base font-medium text-slate-200">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-4 text-base font-normal leading-relaxed text-slate-100">
                  {plan.tagline}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#06D6A0]/15 text-[#5EEAD4]">
                        <Check size={15} aria-hidden="true" />
                      </span>
                      <span className="text-base font-normal leading-relaxed text-slate-100">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#final-cta"
                  data-testid={`pricing-cta-${plan.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-lg font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-[#3A86FF] text-white shadow-[0_16px_40px_-12px_rgba(58,134,255,0.9)] hover:bg-[#2f78f0]"
                      : "border-2 border-slate-500 text-white hover:border-white"
                  }`}
                >
                  Start scanning
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
