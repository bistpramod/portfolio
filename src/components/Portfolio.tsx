import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block rounded-xl border-2 border-brand-600 px-4 py-1 text-2xl font-bold text-brand-400">
            My Work
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-brand-900/95 via-brand-800/80 to-brand-600/60 p-6 opacity-0 transition duration-400 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-center text-sm text-zinc-200">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-200 hover:text-white"
                    >
                      View project <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
