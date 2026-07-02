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
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-ink-500">{description}</p>
      )}
    </motion.div>
  );
}
