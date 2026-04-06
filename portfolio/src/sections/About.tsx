const About = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">About Me</h2>
      <p className="mx-auto max-w-3xl text-center text-slate-600 dark:text-slate-300">
        I am a frontend developer specializing in React, building dashboards,
        CRM systems, and scalable web applications with clean architecture.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-sm text-indigo-500">Experience</p>
          <h3 className="mt-2 text-lg font-semibold">Production UI Systems</h3>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-sm text-fuchsia-500">Specialty</p>
          <h3 className="mt-2 text-lg font-semibold">React + TypeScript Apps</h3>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-sm text-cyan-500">Focus</p>
          <h3 className="mt-2 text-lg font-semibold">Performance & UX Polish</h3>
        </div>
      </div>
    </section>
  );
};

export default About;