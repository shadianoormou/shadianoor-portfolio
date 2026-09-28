"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "@/data/profile";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-7">
          <div><p className="section-eyebrow mb-5"><span className="eyebrow-index mr-3">07 /</span> Open to</p><h2 className="display-quote max-w-3xl font-display font-semibold text-ink-100">Ways I can contribute <span className="text-gradient">next.</span></h2></div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-700 sm:block">Roles / products / research</span>
        </div>

        <div className="grid grid-cols-1 border-y border-white/10 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: (i % 2) * 0.07 }} className="group border-b border-white/10 p-6 transition-colors hover:bg-signal-blue/[0.04] md:even:border-l md:even:border-white/10 md:p-8">
              <div className="flex items-start justify-between gap-5"><span className="font-mono text-xs text-signal-violet">0{i + 1}</span><FiArrowUpRight className="text-ink-700 transition-colors group-hover:text-signal-cyan" /></div>
              <h3 className="mt-10 font-display text-xl font-semibold tracking-[-0.03em] text-ink-100 transition-colors group-hover:text-signal-cyan">{service.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
