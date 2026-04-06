import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          aria-label="GitHub"
          className="rounded-full border border-slate-200/70 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900/60"
          href="https://github.com/Saransai-07"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="h-4 w-4" />
        </a>

        <a
          aria-label="LinkedIn"
          className="rounded-full border border-slate-200/70 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900/60"
          href="https://www.linkedin.com/in/saran-sai-bessabathina-45817a380/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="h-4 w-4" />
        </a>

        <a
          aria-label="Twitter/X"
          className="rounded-full border border-slate-200/70 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900/60"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter className="h-4 w-4" />
        </a>

        <a
          aria-label="Email"
          className="rounded-full border border-slate-200/70 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900/60"
          href="mailto:0Saransai7@gmail.com"
        >
          <FiMail className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-5">
        @2026 Saran. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;