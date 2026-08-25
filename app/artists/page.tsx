import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { artists } from "@/lib/content";
import { IndexHead, R } from "@/components/ui";

export const metadata: Metadata = {
  title: "Artists — Heynar Mastow",
  description:
    "We are proud to represent incredibly special artists from all over the globe.",
};

export default function ArtistsPage() {
  const names = [...artists.slice(-1), ...artists];

  return (
    <>
      <IndexHead
        word="Artists"
        lede="We are proud to represent incredibly special artists from all over the globe"
        linkLabel="View all artists"
      />

      {/* -------------------------------------------------- name band */}
      <div className="names" aria-hidden>
        <div className="names__track">
          {Array.from({ length: 3 }).map((_, k) => (
            <span key={k}>
              {names.map((a) => a.name).join(" ")}
              {" "}
            </span>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------- grid (full bleed) */}
      <section
        id="all"
        className="section"
        style={{ paddingTop: "clamp(12px,1.4vw,22px)" }}
      >
        <div className="wrap">
          <div className="agrid">
            {artists.map((a, i) => (
              <R key={a.slug} delay={(i % 3) * 90} as="article" className="pcard">
                <Link href="/artists" className="frame frame--hover r-1-1">
                  <Image
                    src={a.image}
                    alt={a.name}
                    width={1000}
                    height={1250}
                    priority={i < 3}
                    sizes="(max-width: 860px) 50vw, 33vw"
                  />
                </Link>
                <div className="pcard__row">
                  <div>
                    <p className="pcard__name">{a.name}</p>
                    <p className="pcard__place">
                      {a.city} • {a.country}
                    </p>
                  </div>
                  <Link
                    href="/artists"
                    className="plus plus--lg"
                    aria-label={`More about ${a.name}`}
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
    </>
  );
}
