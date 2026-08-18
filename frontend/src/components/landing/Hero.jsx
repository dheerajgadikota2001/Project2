import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { MaskedLines } from "../motion/Reveal";
import { ScanSimulator } from "./ScanSimulator";

export const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const ySim = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* layered backdrop */}
      <div className="pointer-events-none absolute inset-0 ada-grid-bg opacity-40" aria-hidden="true" />
      <motion.div
        style={reduce ? undefined : { y: yGlow }}
        className="pointer-events-none absolute inset-0 ada-radial-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-[#3A86FF]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100"
          >
            <ShieldCheck size={16} className="text-[#5EEAD4]" aria-hidden="true" />
            Built to meet WCAG 2.1 AA & Section 508
          </motion.div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <MaskedLines
              lines={["Every PDF deserves", "to be read", "by everyone."]}
            />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl text-lg font-normal leading-relaxed text-slate-100 sm:text-xl"
          >
            Upload any PDF. ADA Corrector finds every WCAG 2.1 AA and Section 508
            issue, fixes what it can fix automatically, and shows you exactly
            what changed. Minutes, not weeks.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#pricing"
              data-testid="hero-primary-cta"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3A86FF] px-7 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_-12px_rgba(58,134,255,0.9)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#2f78f0]"
            >
              Scan your first PDF free
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#how-it-works"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 py-2 text-lg font-semibold text-white underline-offset-4 transition-colors hover:border-[#3A86FF]"
            >
              See how it works
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 text-base font-medium leading-relaxed text-slate-200"
          >
            Made for government agencies, universities, and public institutions
            that get audited.
          </motion.p>
        </div>

        <motion.div
          style={reduce ? undefined : { y: ySim }}
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <ScanSimulator />
        </motion.div>
      </div>
    </section>
  );
};
