"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiClock, FiZoomIn } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certifications, additionalCertificateImages, type Certificate } from "@/data/profile";

export default function Certifications() {
  const [active, setActive] = useState<Certificate | null>(null);
  const allImages = [...certifications, ...additionalCertificateImages];

  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications & Training"
          title="Continuous learning"
          description="Verified certificates, awards, competitions, and training records. Tap any card to preview the certificate."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allImages.map((cert, i) => (
            <motion.button
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setActive(cert)}
              className="gradient-border glass glass-hover group relative overflow-hidden rounded-2xl text-left"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/20 to-transparent" />
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-base-950/70 text-ink-100 opacity-0 transition-opacity group-hover:opacity-100">
                  <FiZoomIn size={14} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm font-semibold text-ink-100">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-ink-500">{cert.issuer}</p>
                <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-ink-700">
                  {cert.hours && (
                    <span className="inline-flex items-center gap-1">
                      <FiClock size={11} /> {cert.hours}
                    </span>
                  )}
                  <span>{cert.year}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-700">
          {allImages.length} certificate records on file — each card opens the original certificate preview.
        </p>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-base-950/85 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="gradient-border glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-4"
            >
              <button
                aria-label="Close preview"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-base-950/80 text-ink-100"
              >
                <FiX />
              </button>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image src={active.image} alt={active.title} fill sizes="640px" className="object-contain" />
              </div>
              <div className="p-3">
                <h3 className="font-display text-lg font-semibold text-ink-100">
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  {active.issuer} {active.hours ? `· ${active.hours}` : ""} · {active.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
