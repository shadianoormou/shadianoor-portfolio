"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/profile";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 900 : 2700);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
          aria-label="Opening Shadia Noor Mou portfolio"
        >
          <motion.div className="intro-shell" initial={false}>
            <motion.div className="intro-panel intro-card-panel" initial={{ x: 0 }} exit={{ x: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}>
              <motion.div className="intro-profile-card" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}>
                <div className="intro-card-mark">SN</div>
                <div className="intro-profile-photo">
                  <Image src={personal.profileImage} alt={personal.name} fill priority sizes="180px" className="object-cover object-[center_14%]" />
                </div>
                <p className="intro-card-title">Portfolio</p>
                <p className="intro-card-role">Software Engineer · AI/ML &amp; Full-Stack Developer</p>
                <p className="intro-card-name">{personal.name}</p>
                <span className="intro-card-line" />
                <span className="intro-card-index">01 / 01</span>
              </motion.div>
            </motion.div>

            <motion.div className="intro-panel intro-welcome-panel" initial={{ x: 0 }} exit={{ x: "100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}>
              <motion.div className="intro-welcome-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                <span className="intro-welcome-kicker">Mst. Shadia Noor Mou</span>
                <h1>Welcome<br />to my<br /><span>portfolio.</span></h1>
                <div className="intro-enter-line"><span /> Building useful systems with intent</div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="intro-loader-bar" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduceMotion ? 0.6 : 2.25, delay: 0.2, ease: "easeInOut" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
