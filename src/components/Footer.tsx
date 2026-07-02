import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socials } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-ink-700">
          © 2026 Shadia Noor Mou. Built with Next.js, Tailwind CSS, and passion for software engineering.
        </p>
        <div className="flex items-center gap-4">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-ink-100">
            <FaGithub size={17} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-ink-100">
            <FaLinkedin size={17} />
          </a>
          <a href={socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="text-ink-500 hover:text-ink-100">
            <SiLeetcode size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
