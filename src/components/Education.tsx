"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
        />

        <div className="relative mt-16 space-y-8 border-l border-white/10 pl-8">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-signal-blue to-signal-violet shadow-glow" />
              <div className="glass glass-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-signal-cyan">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-500">{item.institution}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-300">
                    {item.detail}
                  </span>
                  {item.status && (
                    <span className="rounded-full border border-signal-violet/30 bg-signal-violet/10 px-3 py-1 text-xs text-ink-100">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
