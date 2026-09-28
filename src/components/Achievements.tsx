"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { achievements } from "@/data/profile";

export default function Achievements() {
  return (
    <section id="impact" className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-14 grid grid-cols-1 gap-8 border-b border-white/10 pb-7 lg:grid-cols-[1fr_24rem] lg:items-end lg:gap-16">
          <div><p className="section-eyebrow mb-5"><span className="eyebrow-index mr-3">06 /</span> Volunteering / leadership / impact</p><h2 className="display-quote max-w-4xl font-display font-semibold text-ink-100">Proof beyond <span className="text-gradient">the code.</span></h2></div>
          <p className="text-sm leading-relaxed text-ink-500">Engineering is only one part of the work. These records reflect problem solving, leadership, community, and the habit of showing up.</p>
        </div>

        <div className="border-y border-white/10">
          {achievements.map((item, i) => (
            <motion.article key={item.title + item.org} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group grid grid-cols-[3rem_1fr] gap-5 border-b border-white/10 py-6 last:border-0 sm:grid-cols-[5rem_4rem_1fr_auto] sm:items-center sm:gap-7">
              <span className="font-mono text-sm text-signal-violet">0{i + 1}</span>
              {item.image ? <div className="relative hidden aspect-square overflow-hidden border border-white/10 bg-base-900 sm:block"><Image src={item.image} alt={`${item.title} — ${item.org}`} fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-110" /></div> : <div className="hidden h-10 w-10 items-center justify-center border border-signal-violet/30 bg-signal-violet/10 text-signal-cyan sm:flex"><FiAward /></div>}
              <div><h3 className="font-display text-lg font-semibold tracking-[-0.025em] text-ink-100 transition-colors group-hover:text-signal-cyan">{item.title}</h3><p className="mt-1 text-sm text-ink-500">{item.org}</p>{item.place && <p className="mt-2 font-mono text-xs text-ink-700">{item.place}</p>}</div>
              {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="col-start-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-signal-blue sm:col-start-auto">LinkedIn <FiArrowUpRight /></a>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
