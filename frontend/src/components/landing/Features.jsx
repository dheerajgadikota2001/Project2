import { Reveal } from "../motion/Reveal";
import {
  ListTree,
  AlignLeft,
  FileText,
  Bookmark,
  FormInput,
  ClipboardCheck,
  BadgeCheck,
  History,
  Image as ImageIcon,
} from "lucide-react";

const FEATURES = [
  {
    icon: ListTree,
    title: "Automatic structure tagging",
    desc: "Turns a flat, untagged PDF into one with real, navigable structure, so screen readers can actually make sense of it.",
  },
  {
    icon: ImageIcon,
    title: "AI-generated image descriptions",
    desc: "Every meaningful image gets a description. If the system isn't confident, it says so and flags it for a human, rather than guessing and staying quiet.",
  },
  {
    icon: AlignLeft,
    title: "Reading order correction",
    desc: "Multi-column layouts, sidebars, and pull quotes get read in the order a human would actually expect, not just top to bottom by coordinates.",
  },
  {
    icon: FileText,
    title: "Document metadata fixes",
    desc: "Title and language get set correctly, small details that assistive technology depends on.",
  },
  {
    icon: Bookmark,
    title: "Bookmarks from your headings",
    desc: "Long documents become navigable instead of a wall of pages.",
  },
  {
    icon: FormInput,
    title: "Form field labeling",
    desc: "Fillable forms get the labels screen reader users need to actually complete them.",
  },
  {
    icon: ClipboardCheck,
    title: "A report you can trust",
    desc: "Every fix is verified, not assumed. If something didn't fully succeed, the report says so plainly. You always know what changed and what still needs a human eye.",
  },
  {
    icon: BadgeCheck,
    title: "A compliance certificate",
    desc: "Ready to download and hand to whoever needs proof of the work.",
  },
  {
    icon: History,
    title: "Scan history",
    desc: "Every document you've ever processed is there when you need to pull it again.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative scroll-mt-24 bg-[#0B132B] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-heading text-base font-bold uppercase tracking-[0.2em] text-[#7fb0ff]">
            Features
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            Everything a document needs to actually be accessible.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <article className="group h-full rounded-2xl border border-slate-700/70 bg-[#111a35] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3A86FF]/60 hover:bg-[#141f3f]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#3A86FF]/15 text-[#7fb0ff] transition-colors duration-300 group-hover:bg-[#3A86FF] group-hover:text-white">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-white sm:text-xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-slate-100">
                    {f.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
