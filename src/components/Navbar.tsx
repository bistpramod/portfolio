import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "../data/content";
import { useScrollSpy } from "../hooks/useTypewriter";

const sectionIds = ["home", "portfolio", "services", "about", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const shouldUseDark = savedTheme === "dark";
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#home" className="wordmark" aria-label="Pramod Bist, home">
          {siteConfig.name}<span>.</span>
        </a>

        <div className="nav-actions">
          <ul className="desktop-nav">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={activeSection === id ? "active" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={isDark ? "Use light theme" : "Use dark theme"}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
