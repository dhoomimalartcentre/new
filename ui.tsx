import Link from "next/link";
import type { ReactNode } from "react";
import { gallery } from "@/lib/content";

/* ---------------------------------------------------------------- Reveal box */

export function R({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  return (
    <Tag
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------- Arrow link */

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="link">
      {children}
      <span className="arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

/* ---------------------------------------------------------------- Address */

export function Address() {
  return (
    <p className="label hero__addr">
      {gallery.address.map((l) => (
        <span key={l}>
          {l}
          <br />
        </span>
      ))}
    </p>
  );
}

/* ---------------------------------------------------------------- Index head */

export function IndexHead({
  word,
  lede,
  linkHref = "#all",
  linkLabel,
}: {
  word: string;
  lede: string;
  linkHref?: string;
  linkLabel: string;
}) {
  const long = word.replace(/\s/g, "").length > 8;
  return (
    <header className="wrap apagehead">
      <div className="col apagehead__grid">
        <R>
          <h1 className={`mega${long ? " mega--long" : ""}`}>{word}</h1>
        </R>
        <R delay={90}>
          <p className="apagehead__lede">{lede}</p>
          <Link href={linkHref} className="downlink">
            <span className="arrow" aria-hidden>
              ↓
            </span>
            {linkLabel}
          </Link>
        </R>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- Page head */

export function PageHead({
  title,
  intro,
  aside,
}: {
  title: string;
  intro?: string;
  aside?: ReactNode;
}) {
  return (
    <header className="wrap pagehead">
      <div className="col">
        <R className="pagehead__head">
          <h1>{title}</h1>
        </R>

        <div className="pagehead__foot">
          {intro ? (
            <R delay={90}>
              <p className="lead">{intro}</p>
            </R>
          ) : (
            <span />
          )}
          <R delay={150}>{aside ?? <Address />}</R>
        </div>

        <hr className="rule" style={{ marginTop: "clamp(16px,1.6vw,26px)" }} />
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- Section head */

export function SecHead({
  title,
  aside,
  action,
}: {
  title: ReactNode;
  aside?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="sec-head">
      <div className="sec-head__row">
        <R>
          <h2 className="h2">{title}</h2>
        </R>
        {aside && (
          <R delay={90} className="sec-head__aside">
            {aside}
          </R>
        )}
      </div>
      {action && (
        <R delay={140} className="sec-head__action">
          {action}
        </R>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- Marquee */

export function Marquee() {
  return (
    <div className="marquee" aria-label={gallery.tagline}>
      <div className="marquee__track" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>
            fine art <em>•</em> meticulously curated <em>•</em>{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- CTA band */

export function CtaBand({
  title,
  body,
  primary,
  secondary,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  dark?: boolean;
}) {
  return (
    <section className={`section${dark ? " band-dark" : ""}`}>
      <div className="wrap">
        <div className="col cta">
          <R>
            <h2 className="h2">{title}</h2>
          </R>
          <R delay={90}>
            <p className="lead">{body}</p>
          </R>
          <R delay={150}>
            <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
              <ArrowLink href={primary.href}>{primary.label}</ArrowLink>
              {secondary && (
                <ArrowLink href={secondary.href}>{secondary.label}</ArrowLink>
              )}
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}
