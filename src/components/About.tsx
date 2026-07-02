"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiAward } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { personal, highlightCards } from "@/data/profile";

const icons: Record<string, React.ElementType> = {
  code: FiCode,
  brain: FiCpu,
  trophy: FiAward,
};

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A builder who likes to understand the why"
          description="Currently finishing my CSE degree while working across the full stack and into applied AI/ML."
        />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {personal.aboutParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-ink-500">
                {p}
              </p>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {highlightCards.map((card, i) => {
              const Icon = icons[card.icon] ?? FiCode;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass glass-hover rounded-2xl p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-signal-blue/20 to-signal-violet/20 text-signal-cyan">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink-100">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
