"use client";

import { motion } from "framer-motion";
import {
  FiLayout,
  FiCpu,
  FiFeather,
  FiBriefcase,
  FiUsers,
} from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/profile";

const icons: Record<string, React.ElementType> = {
  layout: FiLayout,
  cpu: FiCpu,
  flask: FiFeather,
  briefcase: FiBriefcase,
  handshake: FaHandshake,
  users: FiUsers,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Open To"
          title="How we could work together"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? FiLayout;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-signal-blue/20 to-signal-violet/20 text-signal-cyan">
                  <Icon size={19} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
