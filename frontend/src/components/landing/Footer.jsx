import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-slate-700/70 bg-[#0d1630] py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-base font-normal leading-relaxed text-slate-100">
              ADA Corrector, automated PDF accessibility remediation for WCAG
              2.1 AA and Section 508. Built by EnhanceGov.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-4">
            <Link
              to="/privacy-policy"
              data-testid="footer-privacy-link"
              className="text-base font-medium text-slate-100 underline-offset-4 hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookie-policy"
              data-testid="footer-cookie-link"
              className="text-base font-medium text-slate-100 underline-offset-4 hover:text-white hover:underline"
            >
              Cookie Policy
            </Link>
            <a
              href="mailto:support@enhancegov.com"
              data-testid="footer-contact-link"
              className="text-base font-medium text-slate-100 underline-offset-4 hover:text-white hover:underline"
            >
              Contact / Support
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-slate-700/60 pt-8">
          <p className="text-base font-normal text-slate-200">
            © 2026 EnhanceGov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
