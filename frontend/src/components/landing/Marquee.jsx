const ITEMS = [
  "WCAG 2.1 AA",
  "Section 508",
  "Structure tagging",
  "Reading order",
  "Alt text",
  "Bookmarks",
  "Form labels",
  "Metadata",
  "Compliance certificate",
];

export const Marquee = () => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="marquee"
      className="border-y border-slate-700/60 bg-[#0d1630] py-6"
      aria-hidden="true"
    >
      <div className="ada-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-heading whitespace-nowrap px-8 text-lg font-semibold tracking-tight text-slate-100">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#3A86FF]" />
          </span>
        ))}
      </div>
    </div>
  );
};
