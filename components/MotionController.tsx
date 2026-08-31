"use client";

import { useEffect } from "react";

export default function MotionController() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const photos = Array.from(
      document.querySelectorAll<HTMLElement>("[data-photo-reveal]"),
    );
    let revealObserver: IntersectionObserver | undefined;

    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      document.documentElement.classList.add("photo-motion-ready");
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-photo-visible");
            revealObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.22, rootMargin: "0px 0px -8%" },
      );
      photos.forEach((photo) => revealObserver?.observe(photo));
    }

    const canTilt = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;

    const cards = canTilt
      ? Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"))
      : [];

    const cleanups = cards.map((card) => {
      const handleMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
        card.style.setProperty("--light-x", `${((x + 0.5) * 100).toFixed(0)}%`);
        card.style.setProperty("--light-y", `${((y + 0.5) * 100).toFixed(0)}%`);
      };

      const reset = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      };

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", reset);
      return () => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", reset);
      };
    });

    return () => {
      revealObserver?.disconnect();
      document.documentElement.classList.remove("photo-motion-ready");
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
