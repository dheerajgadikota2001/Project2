import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Problem", href: "#problem" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Why us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-slate-700/70 bg-[#0B132B]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          data-testid="header-logo-link"
          aria-label="ADA Corrector home"
          className="shrink-0"
        >
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.href.slice(1)}`}
              className="rounded-md px-3.5 py-2 text-base font-medium text-slate-100 transition-colors hover:text-white hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-[#06D6A0]/40 bg-[#06D6A0]/10 px-3.5 py-1.5 text-sm font-semibold text-[#5EEAD4] xl:inline-flex">
            <ShieldCheck size={16} aria-hidden="true" />
            WCAG 2.1 AA · Section 508
          </span>
          <a
            href="#pricing"
            data-testid="header-cta-button"
            className="hidden rounded-full bg-[#3A86FF] px-5 py-2.5 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(58,134,255,0.9)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#2f78f0] sm:inline-block"
          >
            Scan a PDF
          </a>
          <button
            type="button"
            data-testid="mobile-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-700 text-white lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-700/70 bg-[#0B132B]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={`mobile-nav-link-${item.href.slice(1)}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-slate-100 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                data-testid="mobile-cta-button"
                className="mt-2 rounded-full bg-[#3A86FF] px-5 py-3 text-center text-lg font-semibold text-white"
              >
                Scan a PDF
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
