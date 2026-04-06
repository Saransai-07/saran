const Contact = () => {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
      <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-10 text-center backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Let&apos;s Build Something Great</h2>
        <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
          Open to freelance, full-time, and collaboration opportunities. If you
          have an idea, let&apos;s turn it into a polished product.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:0Saransai7@gmail.com"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30"
          >
            0Saransai7@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/saran-sai-bessabathina-45817a380/"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-400 dark:border-slate-700 dark:text-slate-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;