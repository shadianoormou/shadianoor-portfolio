"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span className="h-px w-8 bg-signal-cyan" />
        <p className="section-eyebrow">{eyebrow}</p>
        <span className="h-px w-8 bg-signal-cyan/30" />
      </div>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.045em] text-ink-100 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-ink-500">{description}</p>
      )}
    </motion.div>
  );
}
