"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { experiences } from "@/data/profile";

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-5">
          <p className="section-eyebrow"><span className="eyebrow-index mr-3">04 /</span> Professional journey</p>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700 sm:block">Learning by building</span>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-eyebrow mb-5">A growing path</p>
            <h2 className="display-quote max-w-lg font-display font-semibold text-ink-100">Momentum over <span className="text-gradient">labels.</span></h2>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-ink-500">Each role adds a new lens: product thinking, machine learning, research, collaboration, and the discipline to keep shipping.</p>
          </div>

          <div className="space-y-5">
            {experiences.map((experience, i) => (
              <motion.article key={`${experience.role}-${experience.organization}`} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.65, delay: i * 0.1 }} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-signal-blue/45 sm:p-8">
                <div className="absolute right-6 top-6 font-mono text-xs text-ink-700">0{i + 1}</div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[8rem_1fr_13rem] md:items-start">
                  <div className="font-mono text-xs uppercase tracking-[0.14em] text-signal-blue"><FiCalendar className="mb-2" size={16} />{experience.period}</div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-700">{experience.type}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-ink-100">{experience.role}</h3>
                    <p className="mt-1 text-sm font-medium text-signal-blue">{experience.organization}</p>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-500">{experience.description}</p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {experience.highlights.map((highlight) => <span key={highlight} className="font-mono text-[11px] text-ink-300">/ {highlight}</span>)}
                    </div>
                    {experience.link && <a href={experience.link} target="_blank" rel="noreferrer" className="group/link mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-signal-blue">View LinkedIn updates <FiArrowUpRight className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" /></a>}
                  </div>
                  {experience.image && <div className="relative min-h-52 overflow-hidden rounded-xl border border-white/10 md:min-h-64"><Image src={experience.image} alt={`${experience.role} at ${experience.organization}`} fill sizes="(max-width: 768px) 100vw, 220px" className="object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent" /></div>}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
