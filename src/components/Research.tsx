"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { researchAreas, researchSummary } from "@/data/profile";

export default function Research() {
  return (
    <section id="research" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Research & Academic Work"
          title="Where curiosity meets code"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="leading-relaxed text-ink-500"
          >
            {researchSummary}
          </motion.p>

          <div className="grid grid-cols-2 gap-3">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass glass-hover rounded-xl px-4 py-3.5 text-center text-sm text-ink-300"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
