import { useState } from "react";
import { Reveal } from "../motion/Reveal";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What accessibility standards does ADA Corrector check against?",
    a: "WCAG 2.1 AA and Section 508, the standards most public and government documents are required to meet.",
  },
  {
    q: "What happens if something can't be fixed automatically?",
    a: "It's flagged clearly in your report for manual review, never silently skipped or falsely marked as resolved.",
  },
  {
    q: "Do I need any accessibility expertise to use this?",
    a: "No. Upload your PDF and the report explains, in plain language, what was found and what was fixed.",
  },
  {
    q: "Can I use this for a single document, or do I need a subscription?",
    a: "Either. A single scan is $19.99 with no commitment, or go unlimited for $99/month.",
  },
];

const Item = ({ faq, index, open, onToggle }) => {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-slate-700/70">
      <h3>
        <button
          type="button"
          data-testid={`faq-question-${index}`}
          aria-expanded={open}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-heading text-lg font-bold leading-snug text-white sm:text-xl">
            {faq.q}
          </span>
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-600 text-white transition-transform duration-300 ${
              open ? "rotate-45 bg-[#3A86FF]" : "bg-transparent"
            }`}
            aria-hidden="true"
          >
            <Plus size={20} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              data-testid={`faq-answer-${index}`}
              className="max-w-3xl pb-7 text-base font-normal leading-relaxed text-slate-100 sm:text-lg"
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative scroll-mt-24 bg-[#0d1630] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="font-heading text-base font-bold uppercase tracking-[0.2em] text-[#7fb0ff]">
            FAQ
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            Frequently asked questions.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            {FAQS.map((faq, i) => (
              <Item
                key={faq.q}
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
