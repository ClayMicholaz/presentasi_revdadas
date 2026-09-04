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
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset scroll position of sections when navigating
    const resetSectionScroll = () => {
      const sections = container.querySelectorAll('.section');
      const currentIndex = Math.round(container.scrollTop / container.clientHeight);
      sections.forEach((section, index) => {
        if (index !== currentIndex && section instanceof HTMLElement) {
          section.scrollTop = 0;
        }
      });
    };

    const handleWheel = (event: WheelEvent) => {
      // Find the section being scrolled
      const eventTarget = event.target as HTMLElement;
      const section = eventTarget.closest('.section');
      
      if (section) {
        const hasScroll = section.scrollHeight > section.clientHeight;
        
        if (hasScroll) {
          // Check if we're at the boundaries of the section scroll with tolerance
          const isAtTop = section.scrollTop <= 1;
          const isAtBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1;
          
          // Only prevent default and snap to next section if at boundaries
          if ((event.deltaY < 0 && !isAtTop) || (event.deltaY > 0 && !isAtBottom)) {
            // Allow normal scrolling within the section
            return;
          }
        }
      }

      event.preventDefault();

      if (isScrolling.current || Math.abs(event.deltaY) < 2) return;

      const current = Math.round(container.scrollTop / container.clientHeight);
      const direction = event.deltaY > 0 ? 1 : -1;
      const next = Math.max(
        0,
        Math.min(current + direction, SECTION_COUNT - 1),
      );
      
      // Don't animate if we're staying on the same section
      if (next === current) return;
      
      const start = container.scrollTop;
      const targetPosition = next * container.clientHeight;
      const duration = 800; // Slower, more consistent transition
      let startTime: number | null = null;

      isScrolling.current = true;
      container.style.scrollSnapType = "none";

      const animate = (time: number) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / duration, 1);
        
        // Smoother easing function for professional slide deck feel
        const easedProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        container.scrollTop = start + (targetPosition - start) * easedProgress;

        if (progress < 1) {
          animationFrame.current = window.requestAnimationFrame(animate);
        } else {
          container.scrollTop = targetPosition;
          container.style.scrollSnapType = "";
          animationFrame.current = null;
          isScrolling.current = false;
          resetSectionScroll();
        }
      };

      animationFrame.current = window.requestAnimationFrame(animate);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
      container.style.scrollSnapType = "";
    };
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
