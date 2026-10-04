import { ArrowUpRight, Check, Clock3, Github, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/content";
import type { Project } from "../data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-block work-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / Selected work</p>
            <h2>Projects built around real workflows.</h2>
          </div>
          <p>
            Four recent builds, from small focused utilities to multi-role MERN
            applications.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              className="project"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <ProjectVisual project={project} />

              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span className={`project-status ${project.status === "Live" ? "live" : ""}`}>
                    <i /> {project.status}
                  </span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Check size={15} /> <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Visit live site <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="coming-link">
                      <Clock3 size={15} /> Live link coming soon
                    </span>
                  )}
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                      <Github size={15} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
      <div className="browser-bar">
        <div><i /><i /><i /></div>
        <span>{project.title.toLowerCase().replaceAll(" ", "-")}.app</span>
      </div>

      {project.visual === "atlas" && (
        <div className="atlas-preview">
          <div className="preview-brand"><b>DA</b><span>devtool atlas</span></div>
          <p>Three useful tools</p>
          <h4>A clearer route through everyday dev work.</h4>
          {["JSON Formatter", "JWT Decoder", "Regex Tester"].map((tool, index) => (
            <div className="tool-row" key={tool}>
              <span>0{index + 1}</span><b>{tool}</b><i>↗</i>
            </div>
          ))}
        </div>
      )}

      {project.visual === "townchart" && (
        <div className="town-preview">
          <div className="town-top"><b>TownChart</b><span>Pokhara⌄</span></div>
          <div className="weather-strip">
            <span>Today in Pokhara</span><b>22°</b><small>Mostly clear</small>
          </div>
          <div className="town-card">
            <div className="avatar">PB</div>
            <div><b>Road update</b><p>Lakeside traffic is moving slowly near Hallan Chowk.</p></div>
          </div>
          <div className="town-card short">
            <MapPin size={15} /><div><b>Community event</b><p>Saturday · 10:00 AM</p></div>
          </div>
          <div className="town-tabs"><span>Now</span><span>Map</span><span>Ask</span><span>Calendar</span></div>
        </div>
      )}

      {project.visual === "annapurna" && (
        <div className="hotel-preview">
          <div className="hotel-nav"><b>ANNAPURNA</b><span>Rooms&nbsp;&nbsp; Dining&nbsp;&nbsp; Gallery</span></div>
          <div className="mountains"><i /><i /><i /><div className="sun" /></div>
          <div className="hotel-title"><small>STAY IN THE HIMALAYAS</small><h4>Room to slow down.</h4></div>
          <div className="booking-strip">
            <span><small>CHECK IN</small>12 Oct</span>
            <span><small>CHECK OUT</small>14 Oct</span>
            <button>Check rooms</button>
          </div>
        </div>
      )}

      {project.visual === "commerce" && (
        <div className="shop-preview">
          <div className="shop-nav"><b>north.</b><span>Shop &nbsp; New in &nbsp; About</span><i>Bag 02</i></div>
          <div className="shop-hero"><p>Everyday objects,<br />made thoughtfully.</p><button>Shop the collection</button></div>
          <div className="product-grid">
            {["01", "02", "03"].map((item) => <div key={item}><i /><span>Object {item}</span><b>Rs. {(Number(item) * 850).toLocaleString()}</b></div>)}
          </div>
        </div>
      )}
    </div>
  );
}
