import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

export const LegalPage = ({ title, testId }) => {
  return (
    <div className="min-h-screen bg-[#0B132B]">
      <header className="border-b border-slate-700/70 bg-[#0B132B]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="ADA Corrector home">
            <Logo />
          </Link>
          <Link
            to="/"
            data-testid="legal-back-link"
            className="inline-flex items-center gap-2 text-base font-medium text-slate-100 hover:text-white"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      <main
        data-testid={testId}
        className="mx-auto max-w-4xl px-5 py-24 sm:px-8"
      >
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-8 text-lg font-normal leading-relaxed text-slate-100">
          This page is a placeholder. The full {title.toLowerCase()} content
          will be added here.
        </p>
        <p className="mt-6 text-lg font-normal leading-relaxed text-slate-100">
          For questions in the meantime, contact{" "}
          <a
            href="mailto:support@enhancegov.com"
            className="font-semibold text-[#7fb0ff] underline underline-offset-4"
          >
            support@enhancegov.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};
