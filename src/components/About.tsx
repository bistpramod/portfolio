import { motion } from "framer-motion";
import { education, siteConfig } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section-block about-section">
      <div className="section-shell about-layout">
        <div>
          <p className="section-index">03 / About</p>
          <h2>Curious about how the whole product works.</h2>
        </div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="about-lead">
            I started with frontend development and kept following the questions
            behind the screen: where the data comes from, how access is controlled,
            why a page is fast—or why nobody can find it.
          </p>
          <p>
            That curiosity now takes me through UI work, backend architecture,
            authentication, realtime features and technical SEO. I learn best by
            making complete projects, testing the rough edges and documenting what
            I understand along the way.
          </p>
          <p>
            I’m currently based in {siteConfig.location} and looking for a place
            where I can contribute as a junior developer while continuing to grow
            around experienced engineers.
          </p>

          <div className="education-list">
            <p className="note-label">Education & training</p>
            {education.map((item, index) => (
              <div className="education-row" key={item.title}>
                <span>0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.place}</p></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
