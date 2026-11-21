import { BarChart3, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/content";

const stack = [
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "GA4",
  "GTM",
  "Looker Studio",
  "Ahrefs",
  "Semrush",
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid section-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">
            <span /> {siteConfig.title} · {siteConfig.location}
          </p>
          <h1>
            From clicks to
            <span className="hero-highlight">compounding growth.</span>
          </h1>
          <p className="hero-intro">{siteConfig.intro}</p>

          <div className="hero-actions">
            <a className="button button-dark" href="#experience">
              <BarChart3 size={18} /> View experience
            </a>
            <a
              className="button button-light"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <div className="hero-facts" aria-label="Career highlights">
            <div>
              <strong>2.5+</strong>
              <span>years in digital marketing</span>
            </div>
            <div>
              <strong>Paid + organic</strong>
              <span>full-funnel perspective</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="signal-board-wrap"
          initial={{ opacity: 0, x: 28, rotate: 1.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="orbit-stamp" aria-hidden="true">
            <span>Plan · Measure · Optimize · </span>
          </div>
          <div className="signal-board">
            <div className="board-top">
              <div>
                <span className="board-dot" />
                Campaign lens
              </div>
              <span>Performance view</span>
            </div>

            <div className="board-summary">
              <p>Growth comes from the whole journey.</p>
              <div className="mini-bars" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>

            <div className="channel-list">
              <div>
                <span>Paid search</span>
                <strong>Capture intent</strong>
                <i className="channel-line line-lime" />
              </div>
              <div>
                <span>Paid social</span>
                <strong>Create demand</strong>
                <i className="channel-line line-blue" />
              </div>
              <div>
                <span>Organic search</span>
                <strong>Build relevance</strong>
                <i className="channel-line line-orange" />
              </div>
            </div>

            <div className="board-footer">
              <div>
                <span>01</span>
                <p>Track what matters</p>
              </div>
              <div>
                <span>02</span>
                <p>Read the signals</p>
              </div>
              <div>
                <span>03</span>
                <p>Improve the journey</p>
              </div>
            </div>
          </div>
          <a className="floating-email" href={`mailto:${siteConfig.email}`}>
            <Mail size={17} /> Available for opportunities
          </a>
        </motion.div>
      </div>

      <div className="stack-band" aria-label="Marketing tools">
        <div className="stack-track">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <i />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
