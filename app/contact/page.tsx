import type { Metadata } from "next";
import { contacts } from "@/lib/content";
import { R } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact — Dhoomimal Art Centre",
  description:
    "Drop us a line — we'll get back to you as soon as possible. A-8, Connaught Place, Inner Circle, New Delhi 110001.",
};

export default function ContactPage() {
  return (
    <div className="wrap contactpage">
      <div className="contactpage__grid">
        <R className="contactpage__left">
          <h1>
            Drop us
            <br />
            a line
          </h1>
          <p className="contactpage__note">
            We&rsquo;ll get back to you as soon as possible
          </p>
        </R>

        <div>
          {contacts.map((c, i) => (
            <R key={c.dept} delay={i * 70} className="crow">
              <p className="crow__dept">{c.dept}</p>
              <a className="crow__mail" href={`mailto:${c.email}`}>
                {c.email}
              </a>
            </R>
          ))}
        </div>
      </div>
    </div>
  );
}
