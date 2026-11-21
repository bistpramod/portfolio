import { Code2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="education section-space" id="education">
      <div className="section-shell education-grid">
        <div className="education-copy">
          <p className="section-kicker">Education</p>
          <h2>Marketing judgment, backed by technical curiosity.</h2>
          <p>
            My computer science education adds a practical technical layer to
            campaign work—from understanding tracking and web systems to reading
            data with more context.
          </p>
        </div>

        <motion.article
          className="degree-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="degree-top">
            <span><GraduationCap size={22} /></span>
            <p>2023 — Expected 2027</p>
          </div>
          <p className="card-eyebrow">Tribhuvan University</p>
          <h3>BSc. Computer Science &amp; Information Technology</h3>
          <p>
            Building a foundation in programming, algorithms, operating systems,
            web technologies and data analysis.
          </p>
          <div className="degree-note">
            <Code2 size={18} />
            <span>Connecting technical thinking with digital marketing.</span>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
