"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiMove } from "react-icons/fi";
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
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % personal.roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-aurora" />
      <div className="grid-overlay absolute inset-0" />
      <NeuralBackground />

      <div className="absolute -left-28 top-24 h-96 w-96 animate-float-slow rounded-full bg-signal-blue/10 blur-[130px]" />
      <div className="absolute -right-20 top-1/3 h-[34rem] w-[34rem] animate-float-slower rounded-full bg-signal-cyan/10 blur-[150px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-cyan/60 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:px-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <p className="section-eyebrow mb-7 inline-flex items-center gap-3 rounded-full border border-signal-cyan/20 bg-signal-cyan/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-cyan" />
            </span>
            Available for meaningful work
          </p>

          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-ink-500">Software engineer · Rajshahi, Bangladesh</p>

          <h1 className="hero-title max-w-5xl font-display font-semibold text-ink-100">
            Building <span className="text-gradient">useful</span>
            <br />
            things with code.
          </h1>

          <div className="mt-8 flex min-h-7 items-center gap-3 font-mono text-sm text-signal-cyan sm:text-base">
            <span className="h-px w-8 bg-signal-cyan/60" />
            <AnimatePresence mode="wait">
              <motion.span key={personal.roles[roleIndex]} initial={{ opacity: 0, y: 10, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -10, filter: "blur(5px)" }} transition={{ duration: 0.35 }}>
                {personal.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg">{personal.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-signal-cyan px-6 py-3.5 text-sm font-semibold text-base-950 shadow-glow transition-transform hover:scale-[1.04]">
              Explore selected work
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={personal.resumeUrl} download className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-ink-100">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-ink-300 transition-colors hover:text-signal-cyan">Contact me <FiArrowDown /></a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="group inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-signal-cyan">
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {[["3.78", "B.Sc. CGPA"], ["96.13%", "Model accuracy"], ["2026", "Graduation year"]].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-xl font-semibold tracking-tight text-ink-100 sm:text-2xl">{value}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-700 sm:text-[10px]">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20, rotate: 2 }} animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }} transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.15 }} className="hero-portrait-stage relative mx-auto w-full max-w-md">
          <motion.div animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="absolute inset-[4%] rounded-full border border-dashed border-signal-cyan/20" />
          <motion.div animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute inset-[14%] rounded-full border border-signal-cyan/15" />

          <div className="gradient-border glass relative mx-10 overflow-hidden rounded-[2.25rem] p-2 sm:mx-14">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.9rem] bg-base-800">
              <Image src={personal.profileImage} alt={personal.name} fill priority sizes="(max-width: 768px) 80vw, 480px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-transparent to-signal-cyan/5" />
              <div className="scanline absolute left-0 top-1/3 h-px w-full" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-base-950/55 px-3 py-2.5 backdrop-blur-md">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300">SHADIA / DEV</span>
                <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan shadow-[0_0_12px_var(--acid)]" />
              </div>
            </div>
          </div>

          <motion.div animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="glass absolute -left-1 top-10 rounded-2xl px-4 py-3 shadow-glow sm:-left-2 sm:top-14">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-500">model accuracy</p>
            <p className="mt-1 font-display text-xl font-semibold text-signal-cyan">96.13%</p>
          </motion.div>

          <motion.div animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="glass absolute bottom-10 right-0 rounded-2xl px-4 py-3 shadow-glow-violet sm:-right-2 sm:bottom-14">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-500">global youth</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink-100">IOY 2026–27</p>
          </motion.div>

          <div className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.24em] text-ink-700 sm:flex"><FiMove /> Move through the work</div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/5 py-3 text-ink-700">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em]">
          {[...Array(2)].flatMap((_, i) => ["Software engineering", "Applied AI / ML", "Research-minded", "Open to collaboration"].map((item, j) => (
            <span key={`${i}-${j}`} className="flex items-center gap-8"><i className="h-1 w-1 rounded-full bg-signal-cyan" />{item}</span>
          )))}
        </div>
      </div>
    </section>
  );
}
