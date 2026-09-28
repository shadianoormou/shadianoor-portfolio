"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { gameProjects, projects, socials } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-14 grid grid-cols-1 gap-8 border-y border-white/10 py-7 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-16">
          <div>
            <p className="section-eyebrow mb-5"><span className="eyebrow-index mr-3">02 /</span> Selected work</p>
            <h2 className="display-quote max-w-4xl font-display font-semibold text-ink-100">Systems I&apos;ve <span className="text-gradient">shipped.</span></h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-ink-500">A short list of products, research systems, and developer practice—chosen to show how I think, build, and finish. Select any row to open the full case study.</p>
            <a href={socials.linkedinProjects} target="_blank" rel="noreferrer" className="group mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-cyan">
              <FaLinkedin /> LinkedIn project records <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.06 }}>
              <ProjectCard project={project} index={i} featured={i === 0} />
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-6">
            <div><p className="section-eyebrow mb-4"><span className="eyebrow-index mr-3">02.1 /</span> Games &amp; interactive systems</p><h3 className="font-display text-3xl font-semibold tracking-[-0.05em] text-ink-100 sm:text-5xl">Built for <span className="text-gradient">immersion.</span></h3></div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-500">A dedicated space for interactive, spatial, and game-adjacent work that sits outside the usual web stack.</p>
          </div>

          {gameProjects.map((game, i) => (
            <motion.article key={game.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.08 }} className="game-project grid overflow-hidden border border-signal-violet/30 bg-gradient-to-br from-signal-blue/[0.08] via-base-950/40 to-signal-violet/[0.12] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-72 overflow-hidden border-b border-white/10 lg:min-h-[30rem] lg:border-b-0 lg:border-r">
                <Image src={game.image} alt={`${game.title} recognition certificate`} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover object-center transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/90 via-transparent to-signal-violet/10" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-cyan">Recognition</p><p className="mt-2 font-display text-2xl font-semibold text-white">{game.recognition}</p></div><span className="border border-white/20 bg-base-950/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-300">{game.competition}</span></div>
              </div>
              <div className="flex flex-col justify-between p-7 sm:p-10">
                <div><div className="flex flex-wrap gap-2">{game.tech.map((tech) => <span key={tech} className="border border-signal-blue/25 bg-signal-blue/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-signal-cyan">{tech}</span>)}</div><p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-signal-violet">{game.team} · {game.role}</p><h4 className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-ink-100 sm:text-6xl">{game.title}</h4><p className="mt-4 font-mono text-sm uppercase tracking-[0.12em] text-ink-500">{game.subtitle}</p><p className="mt-7 max-w-xl text-base leading-relaxed text-ink-300">{game.description}</p><ul className="mt-7 space-y-3">{game.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-relaxed text-ink-400"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-signal-cyan" />{feature}</li>)}</ul></div>
                <a href={game.videoUrl} target="_blank" rel="noreferrer" className="group mt-10 inline-flex w-fit items-center gap-3 border border-signal-cyan/50 bg-signal-cyan px-5 py-3.5 text-sm font-semibold text-base-950 transition-transform hover:-translate-y-1"><FiPlay /> Watch project demo <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
