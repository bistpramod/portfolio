import { BarChart3, Search, Target } from "lucide-react";
import { motion } from "framer-motion";
import { expertise, toolGroups } from "../data/content";

const icons = [Target, BarChart3, Search];

export default function Expertise() {
  return (
    <section className="expertise section-space" id="expertise">
      <div className="section-shell">
        <div className="section-heading expertise-heading">
          <div>
            <p className="section-kicker">Expertise</p>
            <h2>A marketer who likes the details.</h2>
          </div>
          <p>
            Strategy gets stronger when the platform setup, measurement and
            audience journey all make sense together.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                className={`expertise-card tone-${item.tone}`}
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="expertise-icon">
                  <Icon size={22} />
                </div>
                <p className="card-eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
                <div className="skill-cloud">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="toolkit"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="toolkit-title">
            <p className="card-eyebrow">Working toolkit</p>
            <h3>Platforms I use to turn activity into insight.</h3>
          </div>
          <div className="tool-groups">
            {toolGroups.map((group) => (
              <div className="tool-row" key={group.label}>
                <p>{group.label}</p>
                <div>
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
