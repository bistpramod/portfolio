import { Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Pramod Bist, home">
          <span className="brand-mark">{siteConfig.initials}</span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>Digital marketer</small>
          </span>
        </a>

        <div className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-contact" href={`mailto:${siteConfig.email}`}>
            <Mail size={16} /> Let&apos;s talk
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
