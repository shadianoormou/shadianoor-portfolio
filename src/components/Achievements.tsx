"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/data/profile";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Impact & Recognition"
          title="Beyond the build"
          description="Milestones in engineering, youth leadership, community service, and problem solving."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title + item.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="glass glass-hover flex gap-4 rounded-2xl p-5 sm:p-6"
            >
              {item.image ? (
                <div className="relative h-16 w-16 flex-none overflow-hidden rounded-xl border border-white/10 bg-base-800">
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.org}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-signal-blue/20 to-signal-violet/20 text-signal-cyan">
                  <FiAward size={20} />
                </div>
              )}
              <div>
                <h3 className="font-display text-base font-semibold text-ink-100">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-ink-500">{item.org}</p>
                {item.place && (
                  <p className="mt-0.5 font-mono text-xs text-ink-700">
                    {item.place}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-signal-cyan hover:text-ink-100"
                  >
                    LinkedIn update <FiArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
