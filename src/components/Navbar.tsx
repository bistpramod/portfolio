import { motion } from "framer-motion";
import { navLinks } from "../data/content";
import { useScrollSpy } from "../hooks/useTypewriter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const sectionIds = ["home", "about", "services", "portfolio", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-5 py-3 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Pramod Bist logo"
            className="h-10 w-auto rounded-lg"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-brand-600/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-zinc-300 transition hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed right-0 top-0 z-40 h-full w-64 border-l border-white/10 bg-zinc-900/95 p-6 pt-20 backdrop-blur-xl md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-brand-600/20 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
    </motion.header>
  );
}
