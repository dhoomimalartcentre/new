"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { gallery, nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap header__inner">
          <Link href="/" className="brand">
            {gallery.name}
          </Link>

          <nav className="nav">
            {nav
              .filter((i) => i.href !== "/")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav__link${
                    isActive(item.href) ? " is-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <button
            className={`burger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <p className="small muted" style={{ marginTop: 32 }}>
          {gallery.address.join(", ")}
        </p>
      </div>

      <span className="coords">{gallery.coords}</span>
    </>
  );
}
