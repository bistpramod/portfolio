import { motion } from "framer-motion";
import { useState } from "react";
import {
  siteConfig,
  skills,
  education,
  experience,
} from "../data/content";
import type { TabItem } from "../data/content";

type TabKey = "skills" | "education" | "experience";

const tabs: { key: TabKey; label: string; items: TabItem[] }[] = [
  { key: "skills", label: "Skills", items: skills },
  { key: "education", label: "Education", items: education },
  { key: "experience", label: "Experience", items: experience },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("skills");
  const currentItems = tabs.find((t) => t.key === activeTab)?.items ?? [];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-5"
        >
          <div className="md:col-span-2">
            <SectionLabel>About Me</SectionLabel>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              {siteConfig.about}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <StatCard value="6+" label="Months Web Dev" />
              <StatCard value="8+" label="Months Animation" />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex gap-6 border-b border-white/10 pb-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative pb-3 text-sm font-medium transition sm:text-base ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <motion.ul
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 space-y-5"
            >
              {currentItems.map((item) => (
                <li
                  key={item.title}
                  className="group rounded-xl border border-white/5 bg-zinc-900/50 p-5 transition hover:border-brand-500/30 hover:bg-zinc-900/80"
                >
                  <h3 className="font-semibold text-brand-300 group-hover:text-brand-200">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="inline-block rounded-2xl bg-brand-600 px-5 py-2 text-lg font-bold text-white">
      {children}
    </h2>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-4 text-center">
      <p className="text-2xl font-bold text-brand-400">{value}</p>
      <p className="mt-1 text-xs text-zinc-500">{label}</p>
    </div>
  );
}
