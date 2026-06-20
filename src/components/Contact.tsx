import { motion } from "framer-motion";
import {
  Download,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { siteConfig, socialLinks } from "../data/content";

const socialIconMap = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="glow-orb right-0 bottom-0 h-80 w-80 bg-brand-600/10" />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-5"
        >
          <div className="md:col-span-2">
            <h2 className="inline-block rounded-2xl bg-brand-600 px-5 py-2 text-lg font-bold text-white">
              Contact Me
            </h2>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-zinc-400 transition hover:text-brand-300"
              >
                <Mail size={18} className="shrink-0 text-brand-400" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-zinc-400 transition hover:text-brand-300"
              >
                <Phone size={18} className="shrink-0 text-brand-400" />
                {siteConfig.phone}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:-translate-y-1 hover:border-brand-500/40 hover:text-brand-300"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <a
              href="/cv.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-6 sm:p-8"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500 disabled:opacity-60"
                disabled={submitted}
              >
                <Send size={16} />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-brand-300"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      <footer className="mt-16 border-t border-white/5 py-6 text-center text-sm text-zinc-500">
        Copyright &copy; {new Date().getFullYear()} {siteConfig.name}. All
        rights reserved.
      </footer>
    </section>
  );
}
