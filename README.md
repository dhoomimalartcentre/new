# Heynar Mastow — gallery site

A Next.js (App Router) rebuild of the Heynar Mastow art-gallery layout: seven
pages, one shared design system, no CSS framework.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy

Zero-config on Vercel — push the folder to a repo and import it, or run
`npx vercel`. No environment variables are required.

## Structure

```
app/
  layout.tsx          root shell: fonts, header, footer, scroll-reveal
  globals.css         the entire design system (tokens + components)
  page.tsx            home
  artists/            artists index
  exhibitions/        current, upcoming, archive
  collection/         available works grid
  art-fairs/          fair calendar
  about/              gallery, services, awards, residency
  contact/            form + visitor info
components/
  Header.tsx          sticky nav + mobile menu + rotated coordinates
  Footer.tsx
  Reveal.tsx          IntersectionObserver scroll-in
  ContactForm.tsx     client-side form (no backend wired up)
  ui.tsx              IndexHead, PageHead, SecHead, ArrowLink, Marquee, CtaBand
lib/
  content.ts          ALL copy and data lives here
public/art/           placeholder imagery
```

## Editing content

Everything — nav, artists, exhibitions, works, fairs, awards, address — is in
`lib/content.ts`. Change it there and every page updates. No CMS is wired in;
the arrays are the source of truth.

## Design tokens

All colour, type and spacing values are CSS custom properties at the top of
`app/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#ffffff` | page background |
| `--ink` | `#111111` | headings and body text |
| `--ink-50` | `#757575` | secondary text |
| `--line` | `#dcdcdc` | hairline rules |
| `--dark` | `#111111` | dark bands, footer |
| `--grey` | `#a1a1a1` | greyed section headings |
| `--sans` | Inter | headings, body, UI |
| `--serif` | Instrument Serif | the wordmark only |
| `--pad` | `clamp(20px, 2.4vw, 40px)` | page edge padding |
| `--gutter` | `clamp(0px, 17vw, 300px)` | reserved right margin (`.col`) |

`.col` is the layout rule that gives the site its character: content stops
short of the right edge, leaving a gutter for the rotated coordinates. Drop
`.col` from a wrapper to make that block full-bleed (the large gallery images
do this).

Fonts load from Google Fonts via `<link>` in `app/layout.tsx`. Swap the two
font names there and in `--sans` / `--serif` to rebrand.

## Images and the hover effect

`public/art/` holds procedurally generated **colour** placeholder artwork,
gallery interiors and studio scenes — they carry the layout but are not real
photography.

The reference site stores colour photography and desaturates it in CSS, so a
photo greys out at rest and returns to full colour on hover. That is done in
`app/globals.css`:

```css
.frame img            { filter: grayscale(1); transition: filter .6s; }
.frame--hover:hover img { filter: grayscale(0); }
```

`.frame--hover` is on every image that links somewhere, so only interactive
images light up. Two deliberate exceptions:

- **Collection artworks** (`.ccard__img`) are `filter: none` — artwork is
  always shown in true colour, matching the reference.
- **About-page figures** use plain `.frame` with no `--hover`, so they stay
  desaturated.

Keep replacement files in **colour**. Do not pre-desaturate them — the CSS does
that, and a greyscale source file has no colour left to reveal on hover.

Note: `next/image` caches optimised variants in `.next/cache/images`. After
swapping images, delete that folder or the old versions keep being served.

## Page-head patterns

Two different heads, matching the reference:

- `IndexHead` (artists) — one big word left, four-line lede right, `↓` link
  under a short rule.
- About (`.aboutpage` / `.aboutcol`) — an inset column running roughly 9% to
  72% of the viewport. "About / Heynar" title, then intro left with a
  right-aligned "Come visit us" address, credited figures (`.capt`), a grey
  section heading, two text columns, and a two-part action block (`.actions`)
  with `+ See Route` / `+ Contact Us` and `+ Apply Now` / `+ Learn More`.
- Contact (`.contactpage`) — an indented "Drop us / a line" title with a one-line
  note on the left, and a list of department rows (`.crow`) on the right: name
  plus an underlined mailto, each over a full-strength rule. No form, no image.
- Art fairs (`.fairpage`) — a two-column layout with a left rail holding the
  "Art / fairs" title and three `↓` jump buttons, and a right column holding
  the note, the Current / Past / Upcoming groups, and a left-aligned
  `← Back to home`. Fair cards (`.fcard2`) are one per row: 16:9 image, then
  title and `+ Read more` on one line, `date • city, country` beneath, a
  right-aligned blurb and a rule. No artist thumbnails here.
- `.exhead` (exhibitions, collection) — a two-line "Our …" title on the left.
  Exhibitions puts a small note under the title and stacked black-square `↓`
  jump buttons (`.jump`) on the right; collection puts the note plus a single
  `↓` link in the right column (`.exhead__note--right`).

Every page head differs in the reference — do not assume a shared pattern.

## IndexHead detail

`IndexHead` lives in `components/ui.tsx`: one large word on
the left (`.mega`, or `.mega--long` for words over 8 characters), a four-line
lede on the right capped at `18ch`, and a `↓` link under a short rule. Pass
`word`, `lede` and `linkLabel`; the link jumps to `#all` unless you override
`linkHref`.

Exhibition cards (`.excard`) are a two-up grid grouped by status —
Current / Past / Upcoming — each with a 16:9 image, an artist-thumbnail +
`+ Read more` bar, title, `year • venue`, a right-aligned description and a
rule. A `← Back to home` pill closes the page.

The collection grid (`.cgrid` / `.ccard`) is deliberately `align-items: end`
and the images keep their natural aspect ratio rather than a fixed one, so
rows bottom-align and the caption bars line up while image heights vary — this
is how the reference behaves. `works[]` carries explicit `w` / `h` per piece to
keep `next/image` from reserving the wrong space.

The artists index also has a full-bleed scrolling band of artist names
(`.names`) and a full-width 3-column grid (`.agrid`) that deliberately drops
`.col` so it runs edge to edge.

## Not included

- The contact page is email-only, like the reference — there is no form and so
  no backend to wire up
- No artist / exhibition / work detail pages — `+ Read more` and `+` buttons
  link back to their index
- The about page's two body columns repeat the same copy, exactly as the
  reference template does
- No CMS
