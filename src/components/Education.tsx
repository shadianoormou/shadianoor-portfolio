"use client";

import { motion } from "framer-motion";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-7">
          <div><p className="section-eyebrow mb-5"><span className="eyebrow-index mr-3">05 /</span> Education</p><h2 className="display-quote max-w-3xl font-display font-semibold text-ink-100">Foundations that shaped <span className="text-gradient">the work.</span></h2></div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-700 sm:block">Learning is part of the system</span>
        </div>

        <div className="ml-auto max-w-5xl border-y border-white/10">
          {education.map((item, i) => (
            <motion.div key={item.degree} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/10 py-7 last:border-0 sm:grid-cols-[5rem_1fr_10rem] sm:gap-8">
              <span className="font-mono text-sm text-signal-violet">0{i + 1}</span>
              <div><h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-ink-100">{item.degree}</h3><p className="mt-2 text-sm text-ink-500">{item.institution}</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-ink-400"><span>{item.detail}</span>{item.status && <span className="text-signal-cyan">{item.status}</span>}</div></div>
              <span className="col-start-2 font-mono text-xs uppercase tracking-[0.16em] text-signal-blue sm:col-start-auto sm:text-right">{item.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
