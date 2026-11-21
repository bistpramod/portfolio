import { BarChart3, Check, FileSearch, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { experienceAreas } from "../data/content";

const icons = [Megaphone, BarChart3, FileSearch];

export default function Experience() {
  return (
    <section className="experience section-space" id="experience">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>What I&apos;ve worked on.</h2>
          </div>
          <p>
            A straightforward view of the marketing work I have practiced and
            supported across campaigns, reporting and search fundamentals.
          </p>
        </div>

        <div className="experience-list">
          {experienceAreas.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                className="experience-card"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="experience-icon">
                  <Icon size={22} />
                </div>
                <div className="experience-content">
                  <h3>{item.title}</h3>
                  <p className="experience-summary">{item.description}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>
                        <Check size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
