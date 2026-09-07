import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitions } from "@/lib/content";
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

export default async function ExhibitionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const i = exhibitions.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();

  const e = exhibitions[i];
  const next = exhibitions[(i + 1) % exhibitions.length];
  const paragraphs = e.body?.length ? e.body : [e.excerpt];

  return (
    <>
      {/* ------------------------------------------------------------ head */}
      <header className="wrap exdetail__head">
        <R>
          <Link href="/exhibitions" className="backlink">
            <span aria-hidden>←</span> All exhibitions
          </Link>
        </R>

        <div className="exdetail__grid">
          <R delay={60}>
            <p className="exdetail__status">{e.status}</p>
            <h1>{e.title}</h1>
          </R>

          <R delay={120} className="exdetail__facts">
            <dl>
              <div>
                <dt>Dates</dt>
                <dd>{e.dates}</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>{e.venue}</dd>
              </div>
              {e.curator && (
                <div>
                  <dt>Curated by</dt>
                  <dd>{e.curator}</dd>
                </div>
              )}
            </dl>
          </R>
        </div>
      </header>

      {/* ----------------------------------------------------------- image */}
      <R className="wrap exdetail__hero">
        <div className="frame r-16-9">
          <Image
            src={e.image}
            alt={e.title}
            width={1800}
            height={1012}
            priority
            sizes="100vw"
          />
        </div>
      </R>

      {/* ------------------------------------------------------------ text */}
      <section className="wrap exdetail__body">
        <div className="col">
          <R>
            <div className="exdetail__prose">
              {paragraphs.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          </R>

          {e.artistsShown?.length ? (
            <R delay={80} className="exdetail__artists">
              <p className="eyebrow">Artists shown</p>
              <ul>
                {e.artistsShown.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </R>
          ) : null}
        </div>
      </section>

      {/* --------------------------------------------------------- gallery */}
      {e.photos.length > 0 && (
        <section className="wrap exdetail__gallery">
          <R>
            <p className="grouplabel">Installation views</p>
          </R>
          <div className="exdetail__shots">
            {e.photos.map((src, n) => (
              <R key={src} delay={(n % 2) * 90}>
                <div className="frame" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src={src}
                    alt={`${e.title} — installation view ${n + 1}`}
                    width={1400}
                    height={1050}
                    sizes="(max-width: 760px) 94vw, 47vw"
                  />
                </div>
              </R>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------ next */}
      <section className="wrap exdetail__next">
        <hr className="rule" />
        <R>
          <p className="eyebrow">Next exhibition</p>
          <Link href={`/exhibitions/${next.slug}`} className="exdetail__nextlink">
            {next.title}
            <span className="arrow" aria-hidden>
              →
            </span>
          </Link>
        </R>
      </section>

      <div className="wrap backhome">
        <Link href="/exhibitions" className="pill">
          ← Back to exhibitions
        </Link>
      </div>
    </>
  );
}
