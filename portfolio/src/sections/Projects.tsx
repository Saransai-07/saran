import { useState } from "react";

import { motion } from "framer-motion";
import { projects } from "../Data/ProjectsData";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">

      <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Projects</h2>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {["all", "dashboard", "Assets"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === item
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                : "border border-slate-300 bg-white/70 text-slate-700 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            }`}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map(project => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-md transition dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
              {project.category}
            </p>
            <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>

            <div className="mt-5 flex gap-4 text-sm font-semibold">
              <a className="text-indigo-500 hover:underline" href={project.github}>GitHub</a>
              <a className="text-fuchsia-500 hover:underline" href={project.demo}>Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;