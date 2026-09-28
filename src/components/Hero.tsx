"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import NeuralBackground from "./NeuralBackground";
import { personal, socials } from "@/data/profile";

const socialLinks = [
  { href: socials.github, icon: FaGithub, label: "GitHub" },
  { href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: socials.leetcode, icon: SiLeetcode, label: "LeetCode" },
];

const focusAreas = [
  ["01", "Full-stack product systems"],
  ["02", "Applied AI / ML"],
  ["03", "Research-minded engineering"],
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-aurora" />
      <div className="grid-overlay absolute inset-0" />
      <NeuralBackground />
      <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-signal-violet/10 blur-[150px]" />
      <div className="absolute left-[-18rem] top-[38%] h-[28rem] w-[28rem] rounded-full bg-signal-blue/10 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-10 flex items-center justify-between border-y border-white/10 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-700">
          <span><i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-signal-cyan shadow-[0_0_12px_rgba(127,229,255,.8)]" /> Available for meaningful work</span>
          <span className="hidden sm:block">{personal.location} / 2026</span>
        </div>

        <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
            <p className="section-eyebrow mb-7"><span className="eyebrow-index mr-3">01 /</span> Software engineer</p>
            <h1 className="hero-title max-w-5xl font-display font-semibold text-ink-100">
              Building software that <span className="text-gradient">earns trust.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">{personal.intro}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-signal-cyan px-6 py-3.5 text-sm font-semibold text-base-950 shadow-glow transition-transform hover:-translate-y-1">
                See selected work <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={personal.resumeUrl} download className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-ink-100 transition-colors hover:border-signal-cyan/50 hover:bg-white/[0.08]">
                <FiDownload /> Download CV
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-5">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="group inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-signal-cyan">
                  <Icon size={17} /> <span>{label}</span>
                </a>
              ))}
              <a href="#contact" className="group ml-auto inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-signal-cyan">Start a conversation <FiArrowDown className="transition-transform group-hover:translate-y-1" /></a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/10">
              {[['3.78', 'B.Sc. CGPA'], ['96.13%', 'Model accuracy'], ['2026', 'Graduation year']].map(([value, label], index) => (
                <div key={label} className={`py-5 ${index > 0 ? 'border-l border-white/10 pl-4 sm:pl-6' : ''}`}>
                  <p className="font-display text-xl font-semibold tracking-tight text-ink-100 sm:text-2xl">{value}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-700 sm:text-[10px]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="engineering-console relative">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-700">
              <span>Engineering snapshot</span>
              <span className="text-signal-cyan">SN / 001</span>
            </div>
            <div className="grid grid-cols-[10rem_1fr] gap-5 p-5 sm:grid-cols-[16rem_1fr] sm:gap-8 sm:p-8">
              <div className="hero-profile-frame relative aspect-[3/4] overflow-hidden border border-signal-blue/30 bg-base-900">
                <Image src={personal.profileImage} alt={personal.name} fill priority sizes="320px" className="object-cover object-[center_14%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-signal-cyan/10" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300"><span>SHADIA / DEV</span><span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" /></div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal-cyan">Current focus</p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink-100 sm:text-3xl">From useful idea to dependable software.</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">End-to-end ownership, clean interfaces, and enough curiosity to ask better technical questions.</p>
              </div>
            </div>
            <div className="border-t border-white/10">
              {focusAreas.map(([number, label]) => (
                <div key={number} className="flex items-center justify-between border-b border-white/10 px-5 py-4 last:border-0 sm:px-7">
                  <span className="font-mono text-[10px] text-signal-violet">{number}</span>
                  <span className="font-mono text-xs text-ink-300">{label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-3 hidden bg-base-950 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-signal-blue ring-1 ring-signal-blue/30 sm:block">Open to collaboration</div>
          </motion.aside>
        </div>

        <div className="mt-16 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-700">
          <span className="h-px w-12 bg-signal-cyan/60" /> Scroll to explore the work
        </div>
      </div>
    </section>
  );
}
