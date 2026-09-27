"use client";

import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { projects, socials } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="Real, shipped work — research, full-stack, and competitive programming."
        />

        <div className="mt-6 flex justify-center">
          <a
            href={socials.linkedinProjects}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-ink-300 transition-colors hover:border-signal-cyan/50 hover:text-ink-100"
          >
            <FaLinkedin className="text-signal-cyan" />
            View LinkedIn project records
            <FiArrowUpRight />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
