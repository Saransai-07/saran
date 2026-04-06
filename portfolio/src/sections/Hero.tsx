import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../UI/Button";

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const roles = ["Frontend Developer", "App Developer", "Backend Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pt-20 md:px-10">
      <div className="grid w-full items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <div className="mb-3 h-5 overflow-hidden text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m Saran.
            <span className="block bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              I build  web products and apps.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 md:mx-0 md:text-lg"
          >
            I create scalable and polished applications using React, TypeScript,
            and modern backend services with a strong focus on performance,
            maintainability, and user experience.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a href="#projects">
              <Button>View Projects</Button>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            >
              Let&apos;s Connect
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 mx-auto md:order-2"
        >
          <div className="relative rounded-[2rem] border border-slate-200/70 bg-white/70 p-4 shadow-2xl shadow-indigo-500/20 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
            {!imageError ? (
              <img
                src="/src/assets/Profile.png"
                alt="Saran profile"
                onError={() => setImageError(true)}
                className="h-100 w-100  rounded-[1.6rem] object-cover sm:h-100 sm:w-80"
              />
            ) : (
              <div className="flex h-72 w-72 items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-6xl font-black text-white sm:h-80 sm:w-80">
                Saran
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;