"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `.is-in` to every `.reveal` element as it scrolls into view.
 * Mounted once in the root layout.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight * 0.92) {
        n.classList.add("is-in");
      } else {
        io.observe(n);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
