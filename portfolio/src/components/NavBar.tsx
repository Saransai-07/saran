import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-300/40 bg-white/60 px-6 py-4 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/50 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight">
          Saran<span className="text-indigo-500">.</span>
        </a>

        <div className="flex items-center gap-5 text-sm font-medium text-slate-700 dark:text-slate-200 md:text-base">
          <a className="hover:text-indigo-500 transition-colors" href="#about">About</a>
          <a className="hover:text-indigo-500 transition-colors" href="#projects">Projects</a>
          <a className="hover:text-indigo-500 transition-colors" href="#contact">Contact</a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border border-slate-300/80 p-2 transition hover:scale-105 hover:border-indigo-400 dark:border-slate-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;