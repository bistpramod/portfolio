import { Braces, Database, Search, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { capabilities, seoLearning } from "../data/content";

const iconMap = {
  frontend: Braces,
  backend: Database,
  search: Search,
};

export default function Services() {
  return (
    <section id="services" className="section-block skills-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / Capabilities</p>
            <h2>Comfortable across the stack.</h2>
          </div>
          <p>
            I like understanding the full path: what a person sees, what the API
            decides and how the data is stored.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = iconMap[capability.icon];
            return (
              <motion.article
                className="capability-card"
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="capability-number">0{index + 1}</div>
                <Icon size={22} />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="skill-list">
                  {capability.details.map((detail) => <span key={detail}>{detail}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="seo-note"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="seo-copy">
            <p className="note-label">SEO practice log</p>
            <h3>{seoLearning.title}</h3>
            <p>{seoLearning.description}</p>
            <a href={seoLearning.videoUrl} target="_blank" rel="noreferrer">
              Course reference <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="seo-topics">
            {seoLearning.topics.map((topic, index) => (
              <div key={topic}><span>0{index + 1}</span><p>{topic}</p></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
