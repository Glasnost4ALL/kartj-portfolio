"use client";

import { useEffect, useRef, useState } from "react";
import ImageBlock from "./ImageBlock";
import AmbilightImage from "./AmbilightImage";
import { ProjectBlock } from "@/lib/projects";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDuration: "1200ms" }}
    >
      {children}
    </div>
  );
}

export default function SequenceRenderer({ blocks }: { blocks: ProjectBlock[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        orientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return lenis;
    };

    let lenis: any;
    initLenis().then((l) => {
      lenis = l;
    });

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      {blocks.map((block, i) => {
        if (block.type === "image" && block.src) {
          return (
            <FadeIn key={i} delay={i * 80}>
              <ImageBlock src={block.src} />
            </FadeIn>
          );
        }

        if (block.type === "full" && block.src) {
          return (
            <FadeIn key={i} delay={i * 60}>
              <AmbilightImage src={block.src} />
            </FadeIn>
          );
        }

        if (block.type === "text" && block.content) {
          return (
            <FadeIn key={i}>
              <div className="py-48 text-center text-sm tracking-wider text-gray-400">
                {block.content}
              </div>
            </FadeIn>
          );
        }

        return null;
      })}
    </div>
  );
}
