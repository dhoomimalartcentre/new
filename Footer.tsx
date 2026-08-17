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
    { label: "News", href: "/about" },
    { label: "Videos", href: "/about" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Residency", href: "/about#residency" },
  ],
  [
    { label: "Insta", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "YouTube", href: "#" },
  ],
];

export default function Footer() {
  return (
    <footer className="lfooter">
      <div className="wrap">
        <div className="col lfooter__grid">
          <div>
            <p className="lfooter__word">Finest gallery in London centre</p>
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
          hm <span aria-hidden />
        </p>
      </div>
    </footer>
  );
}
