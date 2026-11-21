import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/content";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="section-shell contact-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-copy">
          <p className="section-kicker">Let&apos;s connect</p>
          <h2>Need a marketer who sees beyond the click?</h2>
          <p>
            I&apos;m open to digital marketing opportunities where thoughtful
            execution, clean measurement and continuous improvement matter.
          </p>
          <div className="contact-actions">
            <a className="button button-lime" href={`mailto:${siteConfig.email}`}>
              <Mail size={18} /> Send an email
            </a>
          </div>
        </div>

        <div className="contact-details">
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={18} />
            <span><small>Email</small>{siteConfig.email}</span>
          </a>
          <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
            <Phone size={18} />
            <span><small>Phone</small>{siteConfig.phone}</span>
          </a>
          <div>
            <MapPin size={18} />
            <span><small>Based in</small>{siteConfig.location}</span>
          </div>
        </div>
      </motion.div>

      <footer className="section-shell site-footer">
        <a className="brand brand-footer" href="#home">
          <span className="brand-mark">{siteConfig.initials}</span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.title}</small>
          </span>
        </a>
        <p>Strategy · Performance · Insight</p>
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </footer>
    </section>
  );
}
