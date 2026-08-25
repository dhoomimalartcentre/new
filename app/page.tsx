import Image from "next/image";
import Link from "next/link";
import { artists, awards, exhibitions, fairs, gallery, works } from "@/lib/content";
import { Address, R } from "@/components/ui";

/* ------------------------------------------------------------------ bits */

function Ulink({
  href,
  children,
  plain = false,
}: {
  href: string;
  children: React.ReactNode;
  plain?: boolean;
}) {
  return (
    <Link href={href} className={`ulink${plain ? " ulink--plain" : ""}`}>
      {children}
      <span className="arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

function ListHead({
  title,
  href,
  linkLabel,
  grey = false,
}: {
  title: React.ReactNode;
  href: string;
  linkLabel: string;
  grey?: boolean;
}) {
  return (
    <div className="lhead">
      <R>
        <h2 className={`h2${grey ? " h-grey" : ""}`}>{title}</h2>
      </R>
      <R delay={90} className="lhead__link">
        <Ulink href={href}>{linkLabel}</Ulink>
      </R>
    </div>
  );
}

/* ------------------------------------------------------------------ page */

export default function Home() {
  const featured = exhibitions.filter((e) => e.status !== "Upcoming").slice(0, 2);

  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="hero">
        <div className="wrap">
          <div className="col">
            <R className="hero__head">
              <h1 className="display">The finest gallery in London centre</h1>
            </R>

            <div className="hero__foot">
              <R delay={100}>
                <p className="lead">{gallery.intro}</p>
              </R>
              <R delay={160}>
                <Address />
              </R>
            </div>

            <hr className="rule" style={{ marginTop: "clamp(16px,1.6vw,26px)" }} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- highlighted exhibitions */}
      <section className="section">
        <div className="wrap">
          <div className="col">
            <div className="exsec">
              <R className="exsec__aside">
                <h2 className="h2">
                  Highlighted
                  <br />
                  Exhibitions
                </h2>
                <Ulink plain href="/exhibitions">
                  View all exhibitions
                </Ulink>
              </R>

              <div>
                {featured.map((e, i) => (
                  <article key={e.slug} className="exhibit">
                    <p className="exhibit__status">{e.status}</p>
                    <Link href="/exhibitions" className="frame frame--hover r-16-9">
                      <Image
                        src={e.image}
                        alt={e.title}
                        width={1600}
                        height={900}
                        priority={i === 0}
                        sizes="(max-width: 860px) 100vw, 56vw"
                      />
                    </Link>

                    <div className="exhibit__bar">
                      <div className="avatars">
                        {artists.slice(i * 2, i * 2 + 2).map((a) => (
                          <Image
                            key={a.slug}
                            src={a.image}
                            alt={a.name}
                            width={84}
                            height={84}
                          />
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
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- artists */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="col">
            <ListHead
              grey
              title={
                <>
                  Artists we
                  <br />
                  represent
                </>
              }
              href="/artists"
              linkLabel="View all"
            />

            <div className="artists">
              {artists.slice(0, 3).map((a, i) => (
                <R key={a.slug} delay={i * 100} as="article" className="acard">
                  <Link href="/artists" className="frame frame--hover r-1-1">
                    <Image
                      src={a.image}
                      alt={a.name}
                      width={1000}
                      height={1250}
                      sizes="(max-width: 860px) 50vw, 28vw"
                    />
                  </Link>
                  <div className="acard__row">
                    <div>
                      <p className="acard__name">{a.name}</p>
                      <p className="acard__place">{a.country}</p>
                    </div>
                    <Link href="/artists" className="plus" aria-label={a.name}>
                      +
                    </Link>
                  </div>
                  <hr className="rule" />
                </R>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- art fairs */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="col">
            <ListHead
              grey
              title={
                <>
                  Latest
                  <br />
                  Art Fairs
                </>
              }
              href="/art-fairs"
              linkLabel="View all"
            />

            <div className="fairs2">
              {fairs.slice(0, 2).map((f, i) => (
                <R key={f.name} delay={i * 100} as="article" className="fcard">
                  <Link href="/art-fairs" className="frame frame--hover r-3-2">
                    <Image
                      src={f.image}
                      alt={f.name}
                      width={1400}
                      height={1000}
                      sizes="(max-width: 860px) 100vw, 41vw"
                    />
                  </Link>
                  <div className="fcard__row">
                    <div>
                      <p className="fcard__name">{f.name}</p>
                      <p className="fcard__meta">
                        {f.date} • {f.city}, {f.country}
                      </p>
                    </div>
                    <Link href="/art-fairs" className="pill">
                      + Read more
                    </Link>
                  </div>
                  <p className="fcard__desc">{f.blurb}</p>
                  <hr className="rule" />
                </R>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- awards */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="col awards">
            <R>
              <h2 className="h2">
                <span className="h-grey">Awards &amp;</span>
                <br />
                Accolades
              </h2>
              <p className="awards__sub">Won by the gallery and its artists</p>
            </R>

            <div>
              {awards.map((a, i) => (
                <R key={a.title} delay={i * 60} className="arow">
                  <span className="arow__t">{a.title}</span>
                  <span className="arow__s">
                    – {a.body}, {a.year}
                  </span>
                </R>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
