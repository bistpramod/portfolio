import { motion } from "framer-motion";
import { Code2, Film } from "lucide-react";
import { services } from "../data/content";

const iconMap = {
  code: Code2,
  film: Film,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="glow-orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-brand-600/10" />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block rounded-xl border-2 border-brand-600 px-4 py-1 text-2xl font-bold text-brand-400">
            Services
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Code2;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/60 p-8 transition hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-900/20"
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-600/10 transition group-hover:bg-brand-600/20" />

                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-xl bg-brand-600/20 p-3 text-brand-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
