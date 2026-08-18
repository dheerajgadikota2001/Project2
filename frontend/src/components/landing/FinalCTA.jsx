import { Reveal } from "../motion/Reveal";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section
      id="final-cta"
      data-testid="final-cta-section"
      className="relative scroll-mt-24 overflow-hidden bg-[#0B132B] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 ada-grid-bg opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="rounded-3xl border border-[#3A86FF]/40 bg-gradient-to-b from-[#132048] to-[#0d1630] px-6 py-16 shadow-[0_40px_120px_-40px_rgba(58,134,255,0.5)] sm:px-14 sm:py-20">
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Make your next PDF accessible to everyone.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-100 sm:text-xl">
              No setup, no training, no waiting. Upload your first document and
              see what needs fixing.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#pricing"
                data-testid="final-cta-button"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3A86FF] px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_-12px_rgba(58,134,255,0.9)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#2f78f0]"
              >
                Scan your first PDF free
                <ArrowRight
                  size={20}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
