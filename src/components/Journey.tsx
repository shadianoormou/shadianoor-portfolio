"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBriefcase, FiCalendar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Badge from "./Badge";
import { experiences } from "@/data/profile";

export default function Journey() {
  return (
    <section id="journey" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Professional Journey"
          title="Learning by building"
          description="A growing path through software engineering, machine learning, web development, and app development."
        />

        <div className="relative mt-16">
          <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-signal-cyan/60 via-signal-violet/50 to-transparent sm:block" />

          <div className="space-y-6">
            {experiences.map((experience, i) => (
              <motion.article
                key={`${experience.role}-${experience.organization}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="relative grid grid-cols-1 gap-5 sm:grid-cols-[2.5rem_1fr]"
              >
                <div className="relative z-10 mt-7 hidden h-3.5 w-3.5 rounded-full border-2 border-base-950 bg-signal-cyan shadow-[0_0_0_4px_rgba(63,208,255,0.16)] sm:block" />

                <div className="gradient-border glass glass-hover overflow-hidden rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_15rem]">
                    <div className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-500">
                        <span className="inline-flex items-center gap-1.5 font-mono text-signal-cyan">
                          <FiCalendar size={13} /> {experience.period}
                        </span>
                        <span className="hidden h-1 w-1 rounded-full bg-ink-700 sm:block" />
                        <span className="inline-flex items-center gap-1.5">
                          <FiBriefcase size={13} /> {experience.type}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-xl font-semibold text-ink-100">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-signal-cyan">
                        {experience.organization}
                      </p>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500">
                        {experience.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.highlights.map((highlight) => (
                          <Badge key={highlight}>{highlight}</Badge>
                        ))}
                      </div>

                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-ink-100"
                        >
                          View LinkedIn updates <FiArrowUpRight size={15} />
                        </a>
                      )}
                    </div>

                    {experience.image && (
                      <div className="relative min-h-48 overflow-hidden border-t border-white/10 md:min-h-full md:border-l md:border-t-0">
                        <Image
                          src={experience.image}
                          alt={`${experience.role} at ${experience.organization}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 240px"
                          className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-base-950/40 md:via-transparent md:to-transparent" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
