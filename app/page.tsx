"use client";

import { useEffect, useRef } from "react";
import Closing from "@/components/closing";
import Demo from "@/components/demo";
import Differentiator from "@/components/differentiator";
import HowItWorks from "@/components/how-it-works";
import Opening from "@/components/opening";
import ProblemSolution from "@/components/problem-solution";
import Value from "@/components/value";

const SECTION_COUNT = 7;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling.current || Math.abs(event.deltaY) < 2) return;

      const current = Math.round(container.scrollTop / container.clientHeight);
      const direction = event.deltaY > 0 ? 1 : -1;
      const next = Math.max(
        0,
        Math.min(current + direction, SECTION_COUNT - 1),
      );
      const target = container.children[next];

      if (!target) return;

      isScrolling.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      window.setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main
      ref={containerRef}
      className="scroll-container"
      aria-label="Presentation outline"
    >
      <Opening />
      <ProblemSolution />
      <HowItWorks />
      <Demo />
      <Value />
      <Differentiator />
      <Closing />
    </main>
  );
}
