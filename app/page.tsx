"use client";

import { useEffect, useRef } from "react";
import Opening from "@/components/opening";
import Problem1 from "@/components/problem1";
import Problem2 from "@/components/problem2";
import Solution from "@/components/solution";
import Workflow from "@/components/workflow";
import Demo from "@/components/demo";
import Differentiator from "@/components/differentiator";
import Value from "@/components/value";
import Closing from "@/components/closing";

const SECTION_COUNT = 9;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      // Find the section being scrolled
      const eventTarget = event.target as HTMLElement;
      const section = eventTarget.closest(".section");

      // Check if section has scrollable content
      if (section && section.classList.contains("scrollable")) {
        const hasScroll = section.scrollHeight > section.clientHeight;

        if (hasScroll) {
          const isAtTop = section.scrollTop <= 1;
          const isAtBottom =
            section.scrollTop + section.clientHeight >=
            section.scrollHeight - 1;

          // Allow scrolling within the section if not at boundaries
          if (
            (event.deltaY < 0 && !isAtTop) ||
            (event.deltaY > 0 && !isAtBottom)
          ) {
            return;
          }
        }
      }

      const viewportHeight = container.clientHeight;
      const sectionElement = section as HTMLElement | null;
      if (
        sectionElement &&
        !sectionElement.classList.contains("scrollable") &&
        sectionElement.offsetHeight > viewportHeight
      ) {
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        const isAtTop = container.scrollTop <= sectionTop + 1;
        const isAtBottom =
          container.scrollTop + viewportHeight >= sectionBottom - 1;

        // Oversized slides need to scroll naturally before changing slides.
        if (
          (event.deltaY < 0 && !isAtTop) ||
          (event.deltaY > 0 && !isAtBottom)
        ) {
          container.style.scrollSnapType = "none";
          return;
        }
      }

      event.preventDefault();

      if (isScrolling.current || Math.abs(event.deltaY) < 2) return;

      // Get all sections
      const sections = Array.from(container.querySelectorAll(".section"));
      const scrollTop = container.scrollTop;

      // Find current section index
      let currentIndex = 0;
      sections.forEach((sec, idx) => {
        const rect = sec.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (Math.abs(rect.top - containerRect.top) < viewportHeight / 2) {
          currentIndex = idx;
        }
      });

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(
        0,
        Math.min(currentIndex + direction, sections.length - 1),
      );

      if (nextIndex === currentIndex) return;

      const targetSection = sections[nextIndex] as HTMLElement;
      const targetPosition = targetSection.offsetTop;
      const start = scrollTop;
      const duration = 800;
      let startTime: number | null = null;

      isScrolling.current = true;
      container.style.scrollSnapType = "none";

      const animate = (time: number) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / duration, 1);
        const easedProgress =
          progress < 0.5
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
      <Problem1 />
      <Problem2 />
      <Solution />
      <Workflow />
      <Demo />
      <Differentiator />
      <Value />
      <Closing />
    </main>
  );
}
