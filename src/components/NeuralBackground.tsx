"use client";

import { useEffect, useRef } from "react";

// Signature element: a quiet, ambient node graph that behaves like a
// neural network mid-forward-pass — a nod to CNN/BiLSTM work and graph
// traversal in competitive programming. Nodes drift, edges pulse faintly
// when "activated", never distracting from the foreground content.
export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      layer: number;
      pulse: number;
    };

    let nodes: Node[] = [];
    const LAYERS = 4;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    function buildNodes() {
      nodes = [];
      const perLayer = width < 640 ? 5 : 7;
      for (let l = 0; l < LAYERS; l++) {
        for (let i = 0; i < perLayer; i++) {
          const spread = height / (perLayer + 1);
          nodes.push({
            x: (width / (LAYERS + 1)) * (l + 1) + (Math.random() - 0.5) * 30,
            y: spread * (i + 1) + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 0.12,
            vy: (Math.random() - 0.5) * 0.12,
            layer: l,
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    let raf = 0;
    function tick() {
      ctx!.clearRect(0, 0, width, height);

      // draw edges between adjacent layers only (feed-forward look)
      for (const a of nodes) {
        for (const b of nodes) {
          if (b.layer !== a.layer + 1) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = width / (LAYERS + 1) + 140;
          if (dist < maxDist) {
            const activation = (Math.sin(a.pulse) + 1) / 2;
            const alpha = 0.03 + activation * 0.05 * (1 - dist / maxDist);
            ctx!.strokeStyle = `rgba(120, 140, 255, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // draw nodes
      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += 0.01;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const radius = 1.6 + glow * 1.4;
        const gradient = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 5);
        gradient.addColorStop(0, `rgba(160, 170, 255, ${0.25 + glow * 0.3})`);
        gradient.addColorStop(1, "rgba(160, 170, 255, 0)");
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, radius * 5, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = `rgba(220, 224, 255, ${0.5 + glow * 0.4})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
