import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fairs, type Fair } from "@/lib/content";
import { R } from "@/components/ui";

export const metadata: Metadata = {
  title: "Art Fairs — Heynar Mastow",
  description:
    "These are the art fairs we will have the pleasure to be part of in the upcoming future, or have been part of at some point in time.",
};

const groups: { id: string; label: string; status: Fair["status"] }[] = [
  { id: "current", label: "Current", status: "Current" },
  { id: "past", label: "Past", status: "Past" },
  { id: "upcoming", label: "Upcoming", status: "Upcoming" },
];

const jumps = [
  { href: "#current", label: "Current Fairs" },
  { href: "#past", label: "Past Fairs" },
  { href: "#upcoming", label: "Upcoming Fairs" },
];

export default function ArtFairsPage() {
  return (
    <>
      <div className="wrap fairpage">
        <div className="fairpage__grid">
          {/* ------------------------------------------------------- rail */}
          <aside className="fairpage__aside">
            <R>
              <h1>
                Art
                <br />
                fairs
              </h1>
            </R>
            <R delay={90} className="jumps">
              {jumps.map((j) => (
                <Link key={j.href} href={j.href} className="jump">
                  <span className="jump__ico" aria-hidden>
                    ↓
                  </span>
                  {j.label}
                </Link>
              ))}
            </R>
          </aside>

          {/* ------------------------------------------------------- main */}
          <div>
            <R>
              <p className="fairhead__note">
                These are the art fairs we will have the pleasure to be part of
                in the upcoming future, or have been part of at some point in
                time
              </p>
            </R>

            {groups.map(({ id, label, status }) => {
              const items = fairs.filter((f) => f.status === status);
              if (!items.length) return null;
              return (
                <section key={id} id={id} className="fgroup">
                  <R>
                    <p className="grouplabel">{label}</p>
                  </R>

                  {items.map((f, i) => (
                    <R key={f.name} delay={i * 80} as="article" className="fcard2">
                      <Link href="/art-fairs" className="frame frame--hover r-16-9">
                        <Image
                          src={f.image}
                          alt={f.name}
                          width={1600}
                          height={860}
                          priority={id === "current" && i === 0}
                          sizes="(max-width: 860px) 100vw, 62vw"
                        />
                      </Link>

                      <div className="fcard2__row">
                        <p className="fcard2__name">{f.name}</p>
                        <Link href="/art-fairs" className="pill">
                          + Read more
                        </Link>
                      </div>
                      <p className="fcard2__meta">
                        {f.date} • {f.city}, {f.country}
                      </p>
                      <p className="fcard2__desc">{f.blurb}</p>
                      <hr className="rule" />
                    </R>
                  ))}
                </section>
              );
            })}

            <div className="backhome backhome--left">
              <Link href="/" className="pill">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
