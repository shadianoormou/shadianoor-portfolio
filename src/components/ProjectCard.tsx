"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Badge from "./Badge";
import type { Project } from "@/data/profile";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
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
        const repoResponse = await fetch(`https://api.github.com/repos/${project.githubRepo}`, {
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!repoResponse.ok) return;

        const repo = await repoResponse.json();
        let fileCount: number | null = null;

        if (project.title === "LeetCode Solutions Repository") {
          const treeResponse = await fetch(
            `https://api.github.com/repos/${project.githubRepo}/git/trees/${repo.default_branch}?recursive=1`,
            { headers: { Accept: "application/vnd.github+json" } }
          );
          if (treeResponse.ok) {
            const tree = await treeResponse.json();
            fileCount = Array.isArray(tree.tree)
              ? tree.tree.filter(
                  (item: { type?: string; path?: string }) =>
                    item.type === "blob" &&
                    Boolean(item.path) &&
                    /\.(py|js|ts|java|cpp|c|cs)$/i.test(item.path as string)
                ).length
              : null;
          }
        }

        if (!cancelled) {
          setGithubSnapshot({
            description: repo.description ?? null,
            updatedAt: repo.pushed_at ?? repo.updated_at,
            fileCount,
          });
        }
      } catch {
        // The static project copy remains visible if GitHub rate-limits the browser.
      }
    }

    syncFromGitHub();
    return () => {
      cancelled = true;
    };
  }, [project.githubRepo, project.title]);

  const description = githubSnapshot?.description || project.description;
  const stat =
    project.title === "LeetCode Solutions Repository" && githubSnapshot?.fileCount
      ? { value: String(githubSnapshot.fileCount), label: "Solution files · live from GitHub" }
      : project.stat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="gradient-border glass glass-hover group relative flex h-full flex-col rounded-2xl p-7"
    >
      {project.image && (
        <div className="relative -mx-7 -mt-7 mb-6 h-44 overflow-hidden rounded-t-2xl border-b border-white/10">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 360px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent" />
        </div>
      )}

      {stat && (
        <div className="absolute right-6 top-6 hidden text-right sm:block">
          <p className="font-display text-2xl font-semibold text-gradient">
            {stat.value}
          </p>
          <p className="max-w-[9rem] text-[11px] leading-tight text-ink-500">
            {stat.label}
          </p>
        </div>
      )}

      <h3 className="max-w-[80%] font-display text-xl font-semibold text-ink-100">
        {project.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-500">
        {description}
      </p>

      <ul className="mt-5 space-y-2">
        {project.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-ink-300">
            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-signal-cyan" />
            {f}
          </li>
        ))}
      </ul>

      {project.liveNote && (
        <p className="mt-5 font-mono text-xs italic text-ink-500">
          {project.liveNote}
        </p>
      )}

      {project.githubRepo && githubSnapshot && (
        <p className="mt-4 text-xs text-ink-700">
          GitHub sync active · updated {new Date(githubSnapshot.updatedAt).toLocaleDateString("en-GB")}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-ink-100 ring-1 ring-white/10 transition-colors hover:bg-white/10"
        >
          <FiGithub /> View Code
          <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink-300 ring-1 ring-white/10 transition-colors hover:text-ink-100"
          >
            Live site <FiArrowUpRight />
          </a>
        )}
        {project.linkedin && (
          <a
            href={project.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink-300 ring-1 ring-white/10 transition-colors hover:text-ink-100"
          >
            <FaLinkedin /> LinkedIn <FiArrowUpRight />
          </a>
        )}
        {project.leetcode && (
          <a
            href={project.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink-300 ring-1 ring-white/10 transition-colors hover:text-ink-100"
          >
            <SiLeetcode /> LeetCode Profile
          </a>
        )}
      </div>
    </motion.div>
  );
}
