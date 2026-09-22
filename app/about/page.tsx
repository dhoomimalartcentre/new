import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/lib/content";
import { R } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — Dhoomimal Art Centre",
  description:
    "Dhoomimal Art Centre, established 1936 in Connaught Place, New Delhi — India's oldest gallery of modern and contemporary Indian art.",
};

const CREDIT = "Dhoomimal Art Centre Archive";

const bodyColumnA = (
  <>
    <p>
      Mahender Jain, fondly known as Miki in the art world, took to the
      passion of his father and tried to create a global platform for
      Indian Contemporary art by carrying exhibitions in different parts
      of the world in the sixties besides India — working with eminent
      artists like Shanti Dave, M F Husain and Tyeb Mehta, joined by his
      wife Sushma.
    </p>
    <p>
      He discovered many artists from all parts of India and exhibited
      their works. Mahender also encouraged galleries like Cymroza Art
      Gallery, Mumbai (1974) and Chitrakoot Gallery, Calcutta (1987) on
      their onset. He passed away untimely in 1987, and Sushma continued
      running the show with the same vision, devotion and passion.
    </p>
  </>
);

const bodyColumnB = (
  <>
    <p>
      Mohit Jain, son of Mahender &amp; Sushma and the third generation,
      joined in 1991 and took over in 1996, with Sushma standing beside
      him. He gave the Gallery a modern look, and with a second
      renovation in 2007 added two floors — the Centre now runs over a
      much larger space than what it began on.
    </p>
    <p>
      He has curated many shows remembered well after the date they
      happened, among them The Millennium Mask, Half a Foot Square,
      Kites — A Celebration of Freedom, and Portrait of an Artist. He
      continues running the Gallery with the same dedication and passion
      as his elders.
    </p>
  </>
);

export default function AboutPage() {
  return (
    <div className="wrap aboutpage">
      <div className="aboutcol">
        {/* -------------------------------------------------------- head */}
        <R>
          <h1>
            About
            <br />
            Dhoomimal
          </h1>
        </R>

        <div className="aboutmeta">
          <R delay={80}>
            <p className="aboutmeta__intro">{gallery.intro}</p>
          </R>
          <R delay={140}>
            <div className="aboutmeta__visit">
              <span className="eyebrow">Come visit us</span>
              {gallery.address.map((l) => (
                <span key={l}>
                  {l}
                  <br />
                </span>
              ))}
            </div>
          </R>
        </div>

        {/* ------------------------------------------------------- figures */}
        <R className="aboutfig">
          <figure style={{ margin: 0 }}>
            <div className="frame" style={{ aspectRatio: "1700 / 1020" }}>
              <Image
                src="/art/about-wide.jpg"
                alt="The Main Pavilion"
                width={1700}
                height={1020}
                priority
                sizes="(max-width: 900px) 94vw, 62vw"
              />
            </div>
            <figcaption className="capt">{CREDIT}</figcaption>
          </figure>
        </R>

        <div className="aboutduo">
          {[
            { src: "/art/about-a.jpg", w: 1240, h: 1215, alt: "The lower gallery" },
            { src: "/art/about-b.jpg", w: 1280, h: 1215, alt: "Installation view" },
          ].map((im, i) => (
            <R key={im.src} delay={i * 90}>
              <figure style={{ margin: 0 }}>
                <div className="frame" style={{ aspectRatio: `${im.w} / ${im.h}` }}>
                  <Image
                    src={im.src}
                    alt={im.alt}
                    width={im.w}
                    height={im.h}
                    sizes="(max-width: 620px) 94vw, 31vw"
                  />
                </div>
                <figcaption className="capt">{CREDIT}</figcaption>
              </figure>
            </R>
          ))}
        </div>

        <R className="aboutpara">
          <p>
            Ram Babu, a Sunday painter himself known as one of the
            Kagazis, ran a stationery business popular with the
            government and diplomatic circles when he founded Dhoomimal
            Dharam Das Gallery in Connaught Place in 1936. It was his
            passion for art and artists that shaped the gallery into an
            institution which stood by young artists, giving them a
            place to show their work — a man of rare independence of
            mind.
          </p>
        </R>

        {/* --------------------------------------------------------- body */}
        <R>
          <h2 className="abouth2">India's first gallery of modern art</h2>
        </R>

        <div className="aboutcols">
          <R>{bodyColumnA}</R>
          <R delay={90}>{bodyColumnB}</R>
        </div>

        {/* -------------------------------------------------------- visit */}
        <div className="visit">
          <R>
            <div className="frame" style={{ aspectRatio: "1040 / 1290" }}>
              <Image
                src="/art/about-tall.jpg"
                alt="The gallery stair"
                width={1040}
                height={1290}
                sizes="(max-width: 620px) 94vw, 31vw"
              />
            </div>
          </R>

          <R delay={90}>
            <div className="actions">
              <hr className="rule" />
              <h3>Come visit us</h3>
              <div className="actions__row">
                <a
                  className="btn2 btn2--solid"
                  href="https://maps.google.com/?q=A-8+Connaught+Place+New+Delhi+110001"
                  target="_blank"
                  rel="noreferrer"
                >
                  + See Route
                </a>
                <Link className="btn2" href="/contact">
                  + Contact Us
                </Link>
              </div>
            </div>

            <div className="actions" id="residency">
              <hr className="rule" />
              <h3>
                Explore our
                <br />
                Collector&rsquo;s Corner
              </h3>
              <div className="actions__row">
                <Link className="btn2 btn2--solid" href="/contact">
                  + Get In Touch
                </Link>
                <Link className="btn2" href="/collection">
                  + View Collection
                </Link>
              </div>
            </div>
          </R>
        </div>
      </div>
    </div>
  );
}
