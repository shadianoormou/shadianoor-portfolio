"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { personal, socials, formspreeId } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate() {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please write a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    if (!formspreeId) {
      const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `${socials.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something"
          description="Have a role, project, or research idea in mind? I'd love to hear about it."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-signal-cyan">
                  <FiMail />
                </span>
                <div>
                  <p className="text-xs text-ink-700">Email</p>
                  <a href={socials.email} className="text-sm text-ink-100 hover:text-signal-cyan">
                    {personal.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-signal-cyan">
                  <FiPhone />
                </span>
                <div>
                  <p className="text-xs text-ink-700">Phone</p>
                  <a href={`tel:${personal.phone.replace(/\D/g, "")}`} className="text-sm text-ink-100 hover:text-signal-cyan">{personal.phone}</a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-signal-cyan">
                  <FiMapPin />
                </span>
                <div>
                  <p className="text-xs text-ink-700">Location</p>
                  <p className="text-sm text-ink-100">{personal.location}</p>
                </div>
              </div>
            </div>

            <a
              href={socials.email}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signal-blue to-signal-violet px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              <FiMail /> Email me directly
            </a>

            <div className="flex items-center gap-3 pt-2">
              <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-ink-300 hover:text-ink-100">
                <FaGithub size={18} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-ink-300 hover:text-ink-100">
                <FaLinkedin size={18} />
              </a>
              <a href={socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-ink-300 hover:text-ink-100">
                <SiLeetcode size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            noValidate
            className="gradient-border glass rounded-2xl p-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-ink-500">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-signal-blue/60"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-ink-500">
                  Email
                </label>
                <input
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-signal-blue/60"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-xs text-ink-500">
                Subject (optional)
              </label>
              <input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-signal-blue/60"
                placeholder="What's this about?"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-xs text-ink-500">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-signal-blue/60"
                placeholder="Tell me a bit about the role, project, or idea..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signal-blue to-signal-violet px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {status === "loading" ? (
                "Sending..."
              ) : (
                <>
                <FiSend /> {formspreeId ? "Send Message" : "Open Email Draft"}
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                <FiCheckCircle /> Your email draft is ready. Send it from your email app to complete the message.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
                <FiAlertCircle /> Something went wrong. Please email me directly at {personal.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
