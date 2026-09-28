"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <motion.div
        className="absolute left-0 top-0 h-px origin-left bg-signal-cyan shadow-[0_0_14px_rgba(201,255,90,.8)]"
        style={{ scaleX: progress, width: "100%" }}
      />
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 sm:px-10 xl:px-16">
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-signal-cyan font-mono text-xs font-bold text-base-950 transition-transform group-hover:rotate-6">SN</span>
          <span>Shadia<span className="text-gradient">.dev</span></span>
        </a>

        <nav
          className={cn(
            "hidden items-center gap-1 border border-white/10 bg-base-950/70 px-3 py-2 backdrop-blur-xl lg:flex",
            "shadow-[0_10px_40px_rgba(0,0,0,.24)]"
          )}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3 py-1.5 text-[13px] transition-colors",
                active === item.href
                  ? "text-ink-100"
                  : "text-ink-500 hover:text-ink-100"
              )}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-0 bottom-0 h-px bg-signal-cyan"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-signal-cyan/30 bg-signal-cyan/10 px-4 py-2 text-sm font-medium text-signal-cyan transition-colors hover:bg-signal-cyan hover:text-base-950 lg:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-5 bg-ink-100 transition-transform",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-ink-100 transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-ink-100 transition-transform",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-6 mt-3 rounded-md p-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-sm",
                  active === item.href
                    ? "bg-white/10 text-ink-100"
                    : "text-ink-500"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
