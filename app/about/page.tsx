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

const CAP_SHOW = "Variable Registers, Shridharani Gallery • 2026";
const CAP_ARCHIVE = "From the Dhoomimal archive";

const bodyColA = (
  <>
    <p>
      Understanding art can be a journey, and our knowledgeable staff is here to
      guide you through it. Whether you are a seasoned collector or a first-time
      buyer, we offer expert advice on art investment, care, and display. Our
      team is passionate about art and is eager to share insights about the
      artists, their techniques, and the stories behind each piece.
    </p>
  </>
);

const bodyColB = (
  <>
    <p>
      Beyond our physical gallery, Dhoomimal Art Centre also embraces the
      digital era. We provide an online platform where art lovers can explore
      and purchase artwork from the comfort of their homes. This digital
      extension allows us to reach a global audience, connecting artists and
      collectors worldwide.
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
                alt="Installation view, Variable Registers"
                width={1700}
                height={1020}
                priority
                sizes="(max-width: 900px) 94vw, 62vw"
              />
            </div>
            <figcaption className="capt">{CAP_SHOW}</figcaption>
          </figure>
        </R>

        <div className="aboutduo">
          {[
            { src: "/art/about-a.jpg", w: 1240, h: 1240, alt: "Installation view, Variable Registers", cap: CAP_SHOW },
            { src: "/art/about-b.jpg", w: 740, h: 740, alt: "Dhoomimal Art Centre, archive photograph", cap: CAP_ARCHIVE },
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
                <figcaption className="capt">{im.cap}</figcaption>
              </figure>
            </R>
          ))}
        </div>

        <R className="aboutpara">
          <p>
            At Dhoomimal Art Centre, we pride ourselves on our diverse
            collection, which includes an impressive selection of oil
            paintings, watercolours, drawings, and sculptures. Each piece in
            our gallery is carefully curated, showcasing the work of both
            historic masters and emerging talents in Indian art. This eclectic
            mix not only reflects our commitment to artistic excellence but
            also offers our clients a world of artistic expressions to choose
            from.
          </p>
        </R>

        {/* --------------------------------------------------------- body */}
        <R>
          <h2 className="abouth2">India's first gallery of modern art</h2>
        </R>

        <div className="aboutcols">
          <R>{bodyColA}</R>
          <R delay={90}>{bodyColB}</R>
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
