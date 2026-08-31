"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * The two small photos beside "+ Read more" on an exhibition card.
 * Click one to open it full size; Esc or the backdrop closes it,
 * arrow keys move between photos.
 *
 * The overlay is rendered through a portal into <body>: the cards use a
 * CSS transform for their scroll-reveal, and a transformed ancestor makes
 * `position: fixed` resolve against the card instead of the viewport.
 */
export function PhotoStrip({
  photos,
  title,
}: {
  photos: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) =>
        i === null ? null : (i + d + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const overlay =
    open === null ? null : (
      <div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={`${title} — installation photograph`}
        onClick={close}
      >
        <button
          type="button"
          className="lightbox__close"
          onClick={close}
          aria-label="Close"
        >
          ✕
        </button>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              ←
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              →
            </button>
          </>
        )}

        <figure
          className="lightbox__figure"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={photos[open]}
            alt={`${title} — installation photograph`}
            width={1400}
            height={1000}
            sizes="90vw"
            priority
          />
          <figcaption>{title}</figcaption>
        </figure>
      </div>
    );

  return (
    <>
      <div className="avatars">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            className="avatars__btn"
            onClick={() => setOpen(i)}
            aria-label={`${title} — view photo ${i + 1} of ${photos.length}`}
          >
            <Image src={src} alt="" width={84} height={84} />
          </button>
        ))}
      </div>

      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
