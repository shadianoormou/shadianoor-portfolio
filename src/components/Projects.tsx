"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { projects, socials } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 xl:px-16">
        <div className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow mb-5"><span className="eyebrow-index mr-3">02 /</span> Selected work</p>
            <h2 className="display-quote max-w-3xl font-display font-semibold text-ink-100">Things I&apos;ve <span className="text-gradient">built.</span></h2>
          </div>
          <div className="max-w-sm lg:pb-1">
            <p className="text-sm leading-relaxed text-ink-500">Real, shipped work across product design, full-stack development, applied research, and competitive programming.</p>
            <a href={socials.linkedinProjects} target="_blank" rel="noreferrer" className="group mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-cyan">
              <FaLinkedin /> View LinkedIn project records <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {projects.map((project, i) => (
            <div key={project.title} className={i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5"}>
              <ProjectCard project={project} index={i} featured={i === 0} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
