import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="experience section-space" id="experience">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>Hands-on work across the growth loop.</h2>
          </div>
          <p>
            Progressing from campaign support to independently planning,
            measuring and improving performance across paid and organic channels.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.article
              className="experience-card"
              key={item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="experience-meta">
                <span className="experience-index">0{index + 1}</span>
                <p>{item.period}</p>
              </div>
              <div className="experience-content">
                <h3>{item.role}</h3>
                <p className="experience-summary">{item.summary}</p>
                <ul>
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <Check size={16} />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
