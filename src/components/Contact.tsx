import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, socialLinks } from "../data/content";

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-shell contact-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-copy">
          <p className="section-index">04 / Contact</p>
          <h2>Have a role, project or useful idea?</h2>
          <p>
            I’m open to junior full-stack opportunities, internships and practical
            projects where I can build, learn and be useful.
          </p>
          <a className="contact-email" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email} <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="contact-details">
          <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
            <Phone size={17} /><span><small>Phone</small>{siteConfig.phone}</span>
          </a>
          <div>
            <MapPin size={17} /><span><small>Based in</small>{siteConfig.location}</span>
          </div>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={17} /><span><small>Email</small>Start a conversation</span>
          </a>
        </div>
      </motion.div>

      <footer className="section-shell site-footer">
        <a href="#home" className="wordmark">{siteConfig.name}<span>.</span></a>
        <p>Built with care in Nepal.</p>
        <div className="social-links">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <Icon size={17} />
              </a>
            );
          })}
        </div>
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </footer>
    </section>
  );
}
