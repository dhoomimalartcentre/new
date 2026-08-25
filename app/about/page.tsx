import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/lib/content";
import { R } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — Heynar Mastow",
  description:
    "Heynar Mastow offers a unique selection of artwork for the art connoisseur, in Fitzrovia, London.",
};

const CREDIT = "2012 • Amaro Tzaia";

const bodyColumn = (
  <>
    <p>
      Understanding art can be a journey, and our knowledgeable staff is here to
      guide you through it. Whether you are a seasoned collector or a first-time
      buyer, we offer expert advice on art investment, care, and display. Our
      team is passionate about art and is eager to share insights about the
      artists, their techniques, and the stories behind each piece.
    </p>
    <p>
      Beyond our physical gallery, Heynar Mastow also embraces the digital era.
      We provide an online platform where art lovers can explore and purchase
      artwork from the comfort of their homes. This digital extension allows us
      to reach a global audience, connecting artists and collectors worldwide.
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
            Heynar
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
            At Heynar Mastow, we pride ourselves on our diverse collection, which
            includes an impressive selection of oil paintings, watercolors,
            drawings, and sculptures. Each piece in our gallery is carefully
            curated, showcasing the work of both renowned masters and emerging
            talents in the art world. This eclectic mix not only reflects our
            commitment to artistic excellence but also offers our clients a world
            of artistic expressions to choose from.
          </p>
        </R>

        {/* --------------------------------------------------------- body */}
        <R>
          <h2 className="abouth2">The finest gallery in London centre</h2>
        </R>

        <div className="aboutcols">
          <R>{bodyColumn}</R>
          <R delay={90}>{bodyColumn}</R>
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
                  href="https://maps.google.com/?q=47+Mortimer+Street+London+W1T+3TE"
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
                Apply to join our
                <br />
                Residency Program
              </h3>
              <div className="actions__row">
                <Link className="btn2 btn2--solid" href="/contact">
                  + Apply Now
                </Link>
                <Link className="btn2" href="/contact">
                  + Learn More
                </Link>
              </div>
            </div>
          </R>
        </div>
      </div>
    </div>
  );
}
