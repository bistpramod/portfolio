import { ArrowDownRight, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/content";

const notes = [
  ["01", "Building useful MERN products"],
  ["02", "Practising technical SEO"],
  ["03", "Open to junior developer roles"],
];

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">
          <span className="status-dot" /> {siteConfig.title} · {siteConfig.location}
        </p>

        <h1>
          I build web products from the <span className="marker">interface</span>
          <br /> down to the API.
        </h1>

        <p className="hero-intro">{siteConfig.about}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#portfolio">
            See selected work <ArrowDownRight size={17} />
          </a>
          <a
            className="button button-quiet"
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>
          <a className="text-link" href={`mailto:${siteConfig.email}`}>
            <Mail size={16} /> Email me
          </a>
        </div>
      </motion.div>

      <motion.aside
        className="field-note"
        initial={{ opacity: 0, rotate: 1.5, y: 28 }}
        animate={{ opacity: 1, rotate: -1.2, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Currently"
      >
        <span className="note-tape" aria-hidden="true" />
        <p className="note-label">Currently</p>
        <div className="note-list">
          {notes.map(([number, note]) => (
            <div className="note-row" key={number}>
              <span>{number}</span>
              <p>{note}</p>
            </div>
          ))}
        </div>
        <p className="note-signoff">Pramod — 2026</p>
      </motion.aside>
    </section>
  );
}
