import { motion } from "framer-motion";
import {
  ArrowDown,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";
import { siteConfig, socialLinks } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const typedRole = useTypewriter(siteConfig.typewriterRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="glow-orb -left-32 top-20 h-96 w-96 bg-brand-600/20" />
      <div className="glow-orb -right-32 bottom-20 h-80 w-80 bg-brand-400/15" />
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-6xl flex-1 items-center gap-12 px-4 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block rounded-full border border-brand-500/30 bg-brand-600/10 px-4 py-1.5 text-sm font-medium text-brand-300"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <div className="flex flex-wrap items-baseline gap-x-2 text-xl sm:text-2xl">
            <span className="font-medium text-zinc-400">I&apos;m</span>
            <span className="font-semibold text-brand-300 cursor-blink">
              {typedRole}
            </span>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            {siteConfig.about}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500 hover:shadow-brand-500/30"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-brand-500/50 hover:text-white"
            >
              View my work
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-2.5 text-zinc-400 transition hover:border-brand-500/40 hover:text-brand-300"
                aria-label={link.label}
              >
                {link.icon === "linkedin" ? (
                  <Linkedin size={18} />
                ) : (
                  <Facebook size={18} />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="animate-float relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-600/30 to-brand-400/10 blur-2xl" />
            <img
              src="/finallaptop.png"
              alt="Laptop illustration"
              className="relative w-full max-w-md rounded-2xl border border-white/10 shadow-2xl shadow-brand-900/50"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-brand-400"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
