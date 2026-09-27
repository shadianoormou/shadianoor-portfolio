"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import NeuralBackground from "./NeuralBackground";
import { personal, socials } from "@/data/profile";

const socialLinks = [
  { href: socials.github, icon: FaGithub, label: "GitHub" },
  { href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: socials.leetcode, icon: SiLeetcode, label: "LeetCode" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      <div className="absolute inset-0 bg-aurora" />
      <div className="grid-overlay absolute inset-0" />
      <NeuralBackground />

      {/* floating ambient shapes */}
      <div className="absolute -left-24 top-24 h-72 w-72 animate-float-slow rounded-full bg-signal-blue/20 blur-[100px]" />
      <div className="absolute -right-16 top-1/3 h-80 w-80 animate-float-slower rounded-full bg-signal-violet/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-signal-cyan" />
            Open to work &amp; collaboration
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink-100 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personal.firstName} Noor Mou</span>
          </h1>

          <p className="mt-5 font-mono text-sm text-signal-cyan sm:text-base">
            {personal.roles.join("  //  ")}
          </p>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-500 sm:text-lg">
            {personal.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal-blue to-signal-violet px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink-100"
            >
              <FiDownload /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-ink-300 transition-colors hover:border-white/30 hover:text-ink-100"
            >
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-ink-300 hover:text-ink-100"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="gradient-border glass relative overflow-hidden rounded-[1.75rem] p-3">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.35rem]">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent" />
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold text-ink-100">
                  {personal.name}
                </p>
                <p className="text-xs text-ink-500">{personal.location}</p>
              </div>
              <span className="h-2.5 w-2.5 animate-pulse-soft rounded-full bg-signal-cyan" />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-8 -top-6 hidden rounded-2xl px-4 py-3 shadow-glow sm:block"
          >
            <p className="font-mono text-[11px] text-ink-500">accuracy</p>
            <p className="font-display text-lg font-semibold text-signal-cyan">96.13%</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-6 -right-6 hidden rounded-2xl px-4 py-3 shadow-glow-violet sm:block"
          >
            <p className="font-mono text-[11px] text-ink-500">global youth</p>
            <p className="font-display text-lg font-semibold text-ink-100">IOY 2026–27</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
