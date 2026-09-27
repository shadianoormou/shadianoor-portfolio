"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiCpu, FiAward } from "react-icons/fi";
import { personal, highlightCards } from "@/data/profile";

const icons: Record<string, React.ElementType> = {
  code: FiCode,
  brain: FiCpu,
  trophy: FiAward,
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-5">
          <p className="section-eyebrow"><span className="eyebrow-index mr-3">01 /</span> About the builder</p>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700 sm:block">Curiosity → clarity → craft</span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.75 }} className="lg:col-span-7">
            <p className="section-eyebrow mb-5">A builder who likes to understand the why</p>
            <h2 className="display-quote max-w-4xl font-display font-semibold text-ink-100">
              Software should feel <span className="text-gradient">considered.</span>
            </h2>
            <div className="mt-10 grid gap-5 border-l border-signal-cyan/30 pl-6 text-sm leading-relaxed text-ink-500 sm:grid-cols-2 sm:gap-8 sm:pl-8">
              <p>{personal.aboutParagraphs[0]}</p>
              <p>{personal.aboutParagraphs[1]}</p>
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-500">{personal.aboutParagraphs[2]}</p>
            <a href="#contact" className="group mt-9 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-signal-cyan">
              Let&apos;s make something meaningful <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          <div className="space-y-3 lg:col-span-5 lg:pt-14">
            {highlightCards.map((card, i) => {
              const Icon = icons[card.icon] ?? FiCode;
              return (
                <motion.div key={card.title} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group glass glass-hover relative flex items-start gap-5 overflow-hidden rounded-2xl p-5 sm:p-6">
                  <span className="absolute right-5 top-5 font-mono text-[10px] text-ink-700">0{i + 1}</span>
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-signal-cyan/20 bg-signal-cyan/10 text-signal-cyan transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"><Icon size={20} /></div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-100">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
