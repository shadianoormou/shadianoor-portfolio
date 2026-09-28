"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Badge from "./Badge";
import type { Project } from "@/data/profile";

export default function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const [githubSnapshot, setGithubSnapshot] = useState<{
    description: string | null;
    updatedAt: string;
    fileCount: number | null;
  } | null>(null);

  useEffect(() => {
    if (!project.githubRepo) return;
    let cancelled = false;

    async function syncFromGitHub() {
      try {
        const repoResponse = await fetch(`https://api.github.com/repos/${project.githubRepo}`, { headers: { Accept: "application/vnd.github+json" } });
        if (!repoResponse.ok) return;
        const repo = await repoResponse.json();
        let fileCount: number | null = null;

        if (project.title === "LeetCode Solutions Repository") {
          const treeResponse = await fetch(`https://api.github.com/repos/${project.githubRepo}/git/trees/${repo.default_branch}?recursive=1`, { headers: { Accept: "application/vnd.github+json" } });
          if (treeResponse.ok) {
            const tree = await treeResponse.json();
            fileCount = Array.isArray(tree.tree) ? tree.tree.filter((item: { type?: string; path?: string }) => item.type === "blob" && Boolean(item.path) && /\.(py|js|ts|java|cpp|c|cs)$/i.test(item.path as string)).length : null;
          }
        }

        if (!cancelled) setGithubSnapshot({ description: repo.description ?? null, updatedAt: repo.pushed_at ?? repo.updated_at, fileCount });
      } catch {
        // Static project content remains visible if GitHub rate-limits the browser.
      }
    }

    syncFromGitHub();
    return () => { cancelled = true; };
  }, [project.githubRepo, project.title]);

  const description = githubSnapshot?.description || project.description;
  const stat = project.title === "LeetCode Solutions Repository" && githubSnapshot?.fileCount
    ? { value: String(githubSnapshot.fileCount), label: "solution files · live from GitHub" }
    : project.stat;

  return (
    <article className="project-row group relative grid grid-cols-1 gap-8 py-9 md:grid-cols-[4rem_1fr] md:gap-10 lg:grid-cols-[5rem_1fr_25rem] lg:gap-14">
      <div className="flex items-start justify-between md:block">
        <span className="font-mono text-sm text-signal-violet">0{index + 1}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-700 md:mt-3 md:block">{featured ? "Featured build" : "Build log"}</span>
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((tech) => <Badge key={tech}>{tech}</Badge>)}
        </div>
        <h3 className="mt-5 max-w-3xl font-display text-2xl font-semibold tracking-[-0.04em] text-ink-100 transition-colors group-hover:text-signal-cyan sm:text-3xl">{project.title}</h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-400">{description}</p>
        <ul className="mt-6 grid max-w-3xl gap-x-7 gap-y-2 sm:grid-cols-2">
          {project.features.map((feature) => <li key={feature} className="flex gap-2 text-sm leading-relaxed text-ink-500"><span className="mt-2 h-1 w-1 flex-none rounded-full bg-signal-cyan" />{feature}</li>)}
        </ul>
        {githubSnapshot && <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-700">GitHub sync active · updated {new Date(githubSnapshot.updatedAt).toLocaleDateString("en-GB")}</p>}
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-ink-100 transition-colors hover:text-signal-cyan"><FiGithub /> View code <FiArrowUpRight /></a>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-100">Live site <FiArrowUpRight /></a>}
          {project.linkedin && <a href={project.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-100"><FaLinkedin /> LinkedIn <FiArrowUpRight /></a>}
          {project.leetcode && <a href={project.leetcode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-100"><SiLeetcode /> LeetCode</a>}
        </div>
      </div>

      <div className="relative self-start lg:pt-1">
        {project.image ? (
          <div className="project-media relative aspect-[16/10] overflow-hidden border border-white/10 bg-base-900">
            <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-950/75 via-transparent to-signal-blue/10" />
            {stat && <div className="absolute bottom-3 left-3 border-l border-signal-cyan pl-3"><p className="font-display text-xl font-semibold text-white">{stat.value}</p><p className="max-w-[12rem] text-[11px] leading-tight text-ink-300">{stat.label}</p></div>}
          </div>
        ) : (
          <div className="project-metric flex min-h-44 flex-col justify-between border border-signal-violet/25 bg-gradient-to-br from-signal-blue/[0.08] to-signal-violet/[0.12] p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-violet">Engineering result</span>
            {stat && <div><p className="font-display text-4xl font-semibold tracking-[-0.06em] text-gradient">{stat.value}</p><p className="mt-1 max-w-[15rem] text-xs leading-relaxed text-ink-400">{stat.label}</p></div>}
          </div>
        )}
        {project.liveNote && <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-700">{project.liveNote}</p>}
      </div>
    </article>
  );
}
