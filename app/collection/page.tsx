import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { artists, works } from "@/lib/content";
import { R } from "@/components/ui";

export const metadata: Metadata = {
  title: "Collection — Dhoomimal Art Centre",
  description:
    "Below is our entire collection of curated pieces, signed by artists not necessarily represented by our gallery.",
};

// Some collection works are by artists who don't have their own page.
// Fall back to the work's own image rather than an unrelated artist's.
const avatar = (slug: string, fallback: string) =>
  artists.find((a) => a.slug === slug)?.image ?? fallback;

export default function CollectionPage() {
  return (
    <>
      {/* ------------------------------------------------------------ head */}
      <header className="wrap exhead">
        <div className="exhead__grid">
          <R>
            <h1>
              Our
              <br />
              collection
            </h1>
          </R>

          <R delay={90}>
            <p className="exhead__note exhead__note--right">
              Below is our entire collection of curated pieces, signed by artists
              not necessarily represented by our gallery
            </p>
            <Link href="#all" className="downlink">
              <span className="arrow" aria-hidden>
                ↓
              </span>
              View all artwork
            </Link>
          </R>
        </div>
        <hr className="rule" />
      </header>

      {/* ------------------------------------------------------------ grid */}
      <section
        id="all"
        className="section--tight"
        style={{ paddingTop: "clamp(28px,3vw,48px)" }}
      >
        <div className="wrap">
          <div className="cgrid">
            {works.map((w, i) => (
              <R key={w.title} delay={(i % 2) * 90} as="article" className="ccard">
                <Link href="/collection" className="ccard__img">
                  <Image
                    src={w.image}
                    alt={`${w.title} by ${w.artist}`}
                    width={w.w}
                    height={w.h}
                    priority={i < 2}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </Link>

                <div className="ccap">
                  <div className="ccap__left">
                    <Image
                      className="ccap__thumb"
                      src={avatar(w.artistSlug, w.image)}
                      alt={w.artist}
                      width={68}
                      height={68}
                    />
                    <div style={{ minWidth: 0 }}>
                      <p className="ccap__title">{w.title}</p>
                      <p className="ccap__artist">{w.artist}</p>
                    </div>
                  </div>
                  <Link
                    href="/collection"
                    className="plus"
                    aria-label={`More about ${w.title}`}
                  >
                    +
                  </Link>
                </div>
                <hr className="rule" />
              </R>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap backhome">
        <Link href="/" className="pill">
          ← Back to home
        </Link>
      </div>
    </>
  );
}
