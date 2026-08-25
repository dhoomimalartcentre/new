import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { artists, exhibitions, type Exhibition } from "@/lib/content";
import { R } from "@/components/ui";

export const metadata: Metadata = {
  title: "Exhibitions — Heynar Mastow",
  description:
    "These are the exhibitions that we've had the pleasure to host or will in the near future.",
};

const groups: { id: string; label: string; status: Exhibition["status"] }[] = [
  { id: "current", label: "Current", status: "Current" },
  { id: "past", label: "Past", status: "Past" },
  { id: "upcoming", label: "Upcoming", status: "Upcoming" },
];

function Card({ e, i }: { e: Exhibition; i: number }) {
  return (
    <R delay={(i % 2) * 90} as="article" className="excard">
      <Link href="/exhibitions" className="frame frame--hover r-16-9">
        <Image
          src={e.image}
          alt={e.title}
          width={1600}
          height={900}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </Link>

      <div className="exhibit__bar">
        <div className="avatars">
          {artists.slice(i * 2, i * 2 + 2).map((a) => (
            <Image key={a.slug} src={a.image} alt={a.name} width={84} height={84} />
          ))}
        </div>
        <Link href="/exhibitions" className="pill">
          + Read more
        </Link>
      </div>

      <h3>{e.title}</h3>
      <p className="exhibit__meta">
        {e.year} • {e.venue}
      </p>
      <p className="exhibit__desc">{e.excerpt}</p>
      <hr className="rule" />
    </R>
  );
}

export default function ExhibitionsPage() {
  return (
    <>
      {/* ------------------------------------------------------------ head */}
      <header className="wrap exhead">
        <div className="exhead__grid">
          <R>
            <h1>
              Our
              <br />
              exhibitions
            </h1>
            <p className="exhead__note">
              These are the exhibitions that we&rsquo;ve had the pleasure to
              host or will in the near future
            </p>
          </R>

          <R delay={90} className="jumps">
            <Link href="#current" className="jump">
              <span className="jump__ico" aria-hidden>
                ↓
              </span>
              Current Exhibitions
            </Link>
            <Link href="#past" className="jump">
              <span className="jump__ico" aria-hidden>
                ↓
              </span>
              Past Exhibitions
            </Link>
          </R>
        </div>
        <hr className="rule" />
      </header>

      {/* ---------------------------------------------------------- groups */}
      {groups.map(({ id, label, status }) => {
        const items = exhibitions.filter((e) => e.status === status);
        if (!items.length) return null;
        return (
          <section key={id} id={id} className="section--tight">
            <div className="wrap">
              <R>
                <p className="grouplabel">{label}</p>
              </R>
              <div className="excards">
                {items.map((e, i) => (
                  <Card key={e.slug} e={e} i={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="wrap backhome">
        <Link href="/" className="pill">
          ← Back to home
        </Link>
      </div>
    </>
  );
}
