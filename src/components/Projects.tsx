"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projects, socials } from "@/data/profile";

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
      </div>
    </section>
  );
}
