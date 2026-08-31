"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = Array.from({ length: 4 });

function MarqueeGroup() {
  return (
    <div className="logo-marquee-group" aria-hidden="true">
      {items.map((_, index) => (
        <span className="logo-marquee-item" key={index}>
          <strong>АБИЗЯНА</strong>
          <Image src="/logo.png" alt="" width={397} height={89} sizes="220px" />
        </span>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "120px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`logo-marquee${isVisible ? " is-running" : ""}`}
      ref={rootRef}
      aria-label="Абизяна"
    >
      <div className="logo-marquee-track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
