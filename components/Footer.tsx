import Link from "next/link";
import { gallery } from "@/lib/content";

const cols = [
  [
    { label: "Home", href: "/" },
    { label: "Artists", href: "/artists" },
    { label: "Exhibitions", href: "/exhibitions" },
    { label: "Collection", href: "/collection" },
    { label: "Art Fairs", href: "/art-fairs" },
  ],
  [
    { label: "Art Blog", href: "/about" },
    { label: "Image Gallery", href: "/about" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Collector's Corner", href: "/about#residency" },
  ],
  [
    { label: "Instagram", href: "https://www.instagram.com/dhoomimalartcentre" },
    { label: "X (Twitter)", href: "https://twitter.com/dhoomimal" },
    { label: "Facebook", href: "https://www.facebook.com/dhoomimalonline" },
  ],
];

export default function Footer() {
  return (
    <footer className="lfooter">
      <div className="wrap">
        <div className="col lfooter__grid">
          <div>
            <p className="lfooter__word">India&rsquo;s first gallery of modern art</p>
            <p className="lfooter__addr">
              {gallery.address.map((l) => (
                <span key={l}>
                  {l}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="lfooter__cols">
            {cols.map((col, i) => (
              <ul key={i}>
                {col.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <p className="lfooter__mark">
          dac <span aria-hidden />
        </p>
      </div>
    </footer>
  );
}
