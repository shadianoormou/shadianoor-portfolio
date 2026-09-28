"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-5">
          <p className="section-eyebrow"><span className="eyebrow-index mr-3">03 /</span> The toolkit</p>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700 sm:block">Tools for turning ideas into systems</span>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-eyebrow mb-5">Tools I build with</p>
            <h2 className="display-quote max-w-xl font-display font-semibold text-ink-100">A stack that stays <span className="text-gradient">curious.</span></h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-ink-500">A practical mix of product engineering, modern web development, databases, and applied AI/ML—chosen to move an idea from question to working software.</p>
            <a href="#projects" className="group mt-9 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-signal-blue">See the stack in action <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </motion.div>

          <div className="border-t border-white/10">
            {skillGroups.map((group, i) => (
              <motion.div key={group.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.05 }} className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-6 transition-colors hover:border-signal-blue/50 sm:grid-cols-[5rem_10rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-ink-700">0{i + 1}</span>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-ink-100 transition-colors group-hover:text-signal-blue sm:text-base">{group.title}</h3>
                <div className="col-span-2 flex flex-wrap gap-x-5 gap-y-3 sm:col-span-1">
                  {group.skills.map((skill) => <span key={skill} className="font-mono text-xs text-ink-500 transition-colors group-hover:text-ink-300 sm:text-sm">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
