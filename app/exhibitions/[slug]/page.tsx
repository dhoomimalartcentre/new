import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitions, type Shot } from "@/lib/content";
import { R } from "@/components/ui";

type Params = { slug: string };

export function generateStaticParams() {
  return exhibitions.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = exhibitions.find((x) => x.slug === slug);
  if (!e) return { title: "Exhibition — Dhoomimal Art Centre" };
  return {
    title: `${e.title} — Dhoomimal Art Centre`,
    description: e.excerpt,
    openGraph: {
      title: `${e.title} — Dhoomimal Art Centre`,
      description: e.excerpt,
      images: [{ url: e.image }],
    },
  };
}

function Shots({ shots, cols }: { shots: Shot[]; cols: 2 | 3 }) {
  return (
    <div className={`xshots xshots--${cols}`}>
      {shots.map((im, k) => (
        <R key={im.src + k} delay={(k % 2) * 80}>
          <figure>
            <div className="frame frame--hover" style={{ aspectRatio: "4 / 3" }}>
              <Image
                src={im.src}
                alt={im.caption}
                width={1400}
                height={1050}
                sizes={cols === 3 ? "(max-width:760px) 94vw, 31vw" : "(max-width:760px) 94vw, 47vw"}
              />
            </div>
            <figcaption className="capt">{im.caption}</figcaption>
          </figure>
        </R>
      ))}
    </div>
  );
}

export default async function ExhibitionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const i = exhibitions.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();

  const e = exhibitions[i];

  const sections =
    e.sections?.length
      ? e.sections
      : [{ heading: "About this exhibition", body: e.body ?? [e.excerpt] }];

  const others = exhibitions.filter((x) => x.slug !== e.slug).slice(0, 2);

  return (
    <>
      {/* ------------------------------------------------------------ head */}
      <header className="wrap xhead">
        <div className="xhead__grid">
          <R className="xhead__left">
            <h1 className="xhead__title">{e.title}</h1>
            <p className="xhead__year">{e.year}</p>

            {e.curator && (
              <div className="xcurator">
                <p className="eyebrow">Curator</p>
                <p className="xcurator__name">{e.curator}</p>
              </div>
            )}

            <p className="xhead__meta">
              {e.dates}
              <br />
              {e.venue}
            </p>
          </R>

          <R delay={90} className="xhead__figwrap">
            <figure>
              <div className="frame frame--hover r-16-9">
                <Image
                  src={e.image}
                  alt={e.title}
                  width={1800}
                  height={1012}
                  priority
                  sizes="(max-width: 900px) 94vw, 56vw"
                />
              </div>
              <figcaption className="capt">
                {e.featuredCaption ?? `${e.title} • ${e.year}`}
              </figcaption>
            </figure>
          </R>
        </div>
      </header>

      {/* ------------------------------------------------------ lead images */}
      {e.leadImages?.length ? (
        <section className="wrap xlead">
          <Shots shots={e.leadImages} cols={2} />
          {e.leadNote && (
            <R delay={80}>
              <p className="xnote">{e.leadNote}</p>
            </R>
          )}
        </section>
      ) : null}

      {/* -------------------------------------------------------- sections */}
      {sections.map((sec, n) => (
        <section key={sec.heading} className="wrap xsec">
          <R>
            <h2 className="xsec__h">{sec.heading}</h2>
          </R>

          <R delay={70}>
            <div className="xsec__cols">
              {sec.body.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          </R>

          {sec.images?.length ? (
            <Shots shots={sec.images} cols={sec.images.length >= 3 ? 3 : 2} />
          ) : null}

          {sec.note && (
            <R delay={80}>
              <p className="xnote">{sec.note}</p>
            </R>
          )}

          {n === sections.length - 1 && e.artistsShown?.length ? (
            <R delay={80} className="xlist">
              <p className="eyebrow">Artists shown</p>
              <ul>
                {e.artistsShown.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </R>
          ) : null}
        </section>
      ))}

      {/* --------------------------------------------------------- related */}
      <section className="wrap xmore">
        <R className="xmore__head">
          <h2>
            Explore other
            <br />
            exhibitions
          </h2>
          <Link href="/exhibitions" className="link">
            View all our exhibitions
            <span className="arrow" aria-hidden>
              →
            </span>
          </Link>
        </R>

        {others.map((o, n) => (
          <R key={o.slug} as="article" delay={(n % 2) * 90} className="xmore__card">
            <Link
              href={`/exhibitions/${o.slug}`}
              className="frame frame--hover r-16-9 xmore__img"
            >
              <Image
                src={o.image}
                alt={o.title}
                width={1600}
                height={900}
                sizes="(max-width: 860px) 100vw, 72vw"
              />
            </Link>

            <div className="xmore__bar">
              <Link href={`/exhibitions/${o.slug}`} className="pill">
                + Read more
              </Link>
            </div>

            <h3>{o.title}</h3>
            <p className="exhibit__meta">
              {o.year} • {o.venue}
            </p>
            <p className="exhibit__desc">{o.excerpt}</p>
            <hr className="rule" />
          </R>
        ))}
      </section>

      <div className="wrap backhome">
        <Link href="/exhibitions" className="pill">
          ← Back to exhibitions
        </Link>
      </div>
    </>
  );
}
