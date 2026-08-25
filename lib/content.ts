export const gallery = {
  name: "heynar mastow",
  tagline: "fine art • meticulously curated",
  coords: "40.7128° N, 74.0060° W",
  address: ["47 Mortimer Street", "Fitzrovia – London", "W1T 3TE"],
  email: "hello@heynarmastow.com",
  phone: "+44 20 7946 0812",
  hours: [
    ["Tuesday – Friday", "10:00 – 18:00"],
    ["Saturday", "11:00 – 17:00"],
    ["Sunday & Monday", "By appointment"],
  ],
  intro:
    "Heynar Mastow offers a unique selection of artwork for the art connoisseur. Our experienced staff provides a variety of services to assist you in selecting the art that best suits your individual style and personal taste. With an expansive collection of oil paintings, watercolors, drawings, and sculptures, Heynar Mastow has something to satisfy everyone.",
};

export const contacts: { dept: string; email: string }[] = [
  { dept: "Marketing", email: "janie@heynar-mastow.co.uk" },
  { dept: "Partnerships", email: "hank@heynar-mastow.co.uk" },
  { dept: "Exhibitions", email: "stacey@heynar-mastow.co.uk" },
  { dept: "Curatorship", email: "fran@heynar-mastow.co.uk" },
  { dept: "Residency", email: "thomas@heynar-mastow.co.uk" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Artists", href: "/artists" },
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Collection", href: "/collection" },
  { label: "Art Fairs", href: "/art-fairs" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  Gallery: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Residency", href: "/about#residency" },
  ],
  Programme: [
    { label: "Artists", href: "/artists" },
    { label: "Exhibitions", href: "/exhibitions" },
    { label: "Collection", href: "/collection" },
    { label: "Art Fairs", href: "/art-fairs" },
  ],
  Journal: [
    { label: "News", href: "/about" },
    { label: "Videos", href: "/about" },
    { label: "Instagram", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export type Exhibition = {
  slug: string;
  title: string;
  status: "Current" | "Upcoming" | "Past";
  year: string;
  venue: string;
  dates: string;
  excerpt: string;
  image: string;
};

export const exhibitions: Exhibition[] = [
  {
    slug: "echoes-and-forms",
    title: "Echoes and Forms: Nordic and Renaissance Dialogues",
    status: "Current",
    year: "2024",
    venue: "Main Pavillion",
    dates: "12 Mar — 28 Jul 2024",
    excerpt:
      "Echoes of Form: Sculpture Meets Renaissance is an innovative exhibition that juxtaposes Marata J\u00fcrkoba's minimalist sculptures with Elena Rossi's Renaissance-inspired paintings. This exhibit examines how the simplicity of form and complexity of detail coexist and enhance each other, offering viewers a diverse visual experience that spans from the tactile textures of sculpted stone to the intricate brushwork of oil paintings.",
    image: "/art/exhibition-1.jpg",
  },
  {
    slug: "confluence",
    title: "Confluence: Nature and Structure",
    status: "Past",
    year: "2023",
    venue: "Westingham Gallery",
    dates: "04 Sep — 19 Dec 2023",
    excerpt:
      "\u201cConfluence: Nature and Structure\u201d is a thought-provoking exhibition that brings together the contrasting yet complementary artistic styles of Vanessa Marandi and Zakaria Al-Shammari. Vanessa's vibrant explorations of Brazilian landscapes juxtapose Zakaria's structured depictions of Middle Eastern architecture, creating a dialogue between fluid natural forms and rigid urban elements. This exhibit invites viewers to explore the dynamic interactions between organic growth and human-made environments.",
    image: "/art/exhibition-2.jpg",
  },
  {
    slug: "vibrant-diaspora",
    title: "Vibrant Diaspora: The Colors of Our Roots",
    status: "Upcoming",
    year: "2025",
    venue: "London Gallery",
    dates: "14 Feb — 30 May 2025",
    excerpt:
      "\u201cVibrant Diaspora: The Colors of Our Roots\u201d is a celebration of Noah Berger's unique ability to capture the spirit and energy of the African diaspora. This exhibition brings together a series of his most powerful works, each painting telling a story of heritage, struggle, and beauty. The showcased pieces traverse various mediums, from acrylics to mixed media, inviting viewers to explore the rich tapestry of diaspora experiences and their impact on contemporary art.",
    image: "/art/work-6.jpg",
  },
  {
    slug: "quiet-materials",
    title: "Quiet Materials",
    status: "Upcoming",
    year: "2024",
    venue: "Lower Gallery",
    dates: "09 Sep — 14 Dec 2024",
    excerpt:
      "Seven artists working in linen, ash, clay and pigment, on the discipline of leaving a surface almost untouched.",
    image: "/art/work-3.jpg",
  },
  {
    slug: "the-long-afternoon",
    title: "The Long Afternoon",
    status: "Current",
    year: "2024",
    venue: "Westingham Gallery",
    dates: "05 Apr — 15 Sep 2024",
    excerpt:
      "A survey of light in domestic interiors drawn from four decades of the gallery's own holdings. Watercolours and small oils are hung low and close together, in the order they were acquired, so that the room reads as a record of one collector's attention rather than a thesis about a movement.",
    image: "/art/work-7.jpg",
  },
  {
    slug: "after-the-archive",
    title: "After the Archive",
    status: "Past",
    year: "2022",
    venue: "Westingham Gallery",
    dates: "22 Oct 2022 — 29 Jan 2023",
    excerpt:
      "Works on paper recovered from the estate of a private collector, shown publicly for the first time.",
    image: "/art/work-11.jpg",
  },
  {
    slug: "salt-and-stone",
    title: "Salt and Stone",
    status: "Past",
    year: "2022",
    venue: "Main Pavilion",
    dates: "05 Mar — 24 Jul 2022",
    excerpt:
      "Coastal geology as subject and as material, in painting, cast bronze and photographic print.",
    image: "/art/work-5.jpg",
  },
];

export type Artist = {
  slug: string;
  name: string;
  city: string;
  country: string;
  discipline: string;
  born: string;
  bio: string;
  image: string;
};

export const artists: Artist[] = [
  {
    slug: "vanessa-marandi",
    name: "Vanessa Marandi",
    city: "Maringá",
    country: "Brazil",
    discipline: "Painting",
    born: "b. 1984",
    bio: "Marandi paints the interior of the Paraná landscape from memory, building surfaces in thin oil glazes until the horizon becomes uncertain.",
    image: "/art/artist-1.jpg",
  },
  {
    slug: "marata-jurkoba",
    name: "Marata Jürkoba",
    city: "Sigtuna",
    country: "Sweden",
    discipline: "Sculpture",
    born: "b. 1971",
    bio: "Working in ash, plaster and unpolished steel, Jürkoba reduces domestic objects to their least descriptive form.",
    image: "/art/artist-2.jpg",
  },
  {
    slug: "noah-berger",
    name: "Noah Berger",
    city: "Cape Town",
    country: "South Africa",
    discipline: "Photography",
    born: "b. 1990",
    bio: "Berger photographs the built edges of the city at the hour when artificial and natural light are indistinguishable.",
    image: "/art/artist-3.jpg",
  },
  {
    slug: "zakaria-al-shammari",
    name: "Zakaria Al-Shammari",
    city: "Amman",
    country: "Jordan",
    discipline: "Drawing",
    born: "b. 1978",
    bio: "Al-Shammari's graphite studies of vernacular architecture are drawn at one-to-one scale over periods of months.",
    image: "/art/artist-4.jpg",
  },
  {
    slug: "elena-rossi",
    name: "Elena Rossi",
    city: "Florence",
    country: "Italy",
    discipline: "Painting",
    born: "b. 1965",
    bio: "Trained in Renaissance technique and working entirely in egg tempera, Rossi paints contemporary sitters in historical light.",
    image: "/art/artist-5.jpg",
  },
  {
    slug: "olivia-nkosi",
    name: "Olivia Nkosi",
    city: "Lagos",
    country: "Nigeria",
    discipline: "Textile",
    born: "b. 1993",
    bio: "Nkosi weaves and over-dyes large-format hangings that record the pattern languages of markets she has worked in.",
    image: "/art/artist-6.jpg",
  },
];

export type Work = {
  title: string;
  artist: string;
  artistSlug: string;
  year: string;
  medium: string;
  size: string;
  price: string;
  image: string;
  w: number;
  h: number;
};

export const works: Work[] = [
  { title: "Echoes of Maring\u00e1", artist: "Vanessa Marandi", artistSlug: "vanessa-marandi", year: "2024", medium: "Oil on linen", size: "140 \u00d7 110 cm", price: "\u00a318,400", image: "/art/work-1.jpg", w: 1200, h: 1180 },
  { title: "Shadows in the Snow", artist: "Marata J\u00fcrkoba", artistSlug: "marata-jurkoba", year: "2023", medium: "Ash and plaster", size: "62 \u00d7 40 \u00d7 38 cm", price: "\u00a39,200", image: "/art/work-2.jpg", w: 1200, h: 1000 },
  { title: "Whispers of the North", artist: "Marata J\u00fcrkoba", artistSlug: "marata-jurkoba", year: "2024", medium: "Cast bronze", size: "90 \u00d7 62 \u00d7 48 cm", price: "Price on request", image: "/art/work-3.jpg", w: 1100, h: 1240 },
  { title: "A Metal Symphony", artist: "Elena Rossi", artistSlug: "elena-rossi", year: "2022", medium: "Patinated bronze", size: "120 \u00d7 84 \u00d7 60 cm", price: "\u00a311,600", image: "/art/work-4.jpg", w: 1200, h: 940 },
  { title: "Pulse of the Diaspora", artist: "Noah Berger", artistSlug: "noah-berger", year: "2023", medium: "Mixed media assemblage", size: "180 \u00d7 150 cm", price: "\u00a322,000", image: "/art/work-5.jpg", w: 1150, h: 1150 },
  { title: "Urban Reflections", artist: "Vanessa Marandi", artistSlug: "vanessa-marandi", year: "2024", medium: "Oil and collage on canvas", size: "260 \u00d7 180 cm", price: "\u00a313,900", image: "/art/work-6.jpg", w: 1200, h: 1080 },
  { title: "Shadows and Dust", artist: "Olivia Nkosi", artistSlug: "olivia-nkosi", year: "2022", medium: "Charcoal on paper", size: "200 \u00d7 300 cm", price: "\u00a326,500", image: "/art/work-7.jpg", w: 1200, h: 900 },
  { title: "Heartbeat of Lagos", artist: "Olivia Nkosi", artistSlug: "olivia-nkosi", year: "2024", medium: "Watercolour on paper", size: "110 \u00d7 150 cm", price: "\u00a37,400", image: "/art/work-8.jpg", w: 1120, h: 1200 },
  { title: "Rhythms of Cape Town", artist: "Noah Berger", artistSlug: "noah-berger", year: "2023", medium: "Archival pigment print", size: "90 \u00d7 120 cm", price: "\u00a34,800", image: "/art/work-9.jpg", w: 1200, h: 1020 },
  { title: "Veils of Time", artist: "Zakaria Al-Shammari", artistSlug: "zakaria-al-shammari", year: "2024", medium: "Ink and graphite on paper", size: "150 \u00d7 200 cm", price: "\u00a316,800", image: "/art/work-10.jpg", w: 1080, h: 1220 },
  { title: "Layers of History", artist: "Zakaria Al-Shammari", artistSlug: "zakaria-al-shammari", year: "2022", medium: "Carved lime wood", size: "160 \u00d7 240 \u00d7 22 cm", price: "Price on request", image: "/art/work-11.jpg", w: 1200, h: 960 },
  { title: "Renaissance Revisited", artist: "Elena Rossi", artistSlug: "elena-rossi", year: "2021", medium: "Egg tempera on panel", size: "80 \u00d7 60 cm", price: "\u00a316,800", image: "/art/work-12.jpg", w: 1160, h: 1160 },
];

export type Fair = {
  name: string;
  status: "Current" | "Past" | "Upcoming";
  date: string;
  city: string;
  country: string;
  blurb: string;
  image: string;
};

export const fairs: Fair[] = [
  {
    name: "Nouvelle Art Paris",
    status: "Current",
    date: "Feb 2023",
    city: "Paris",
    country: "France",
    blurb:
      "Held annually in Paris, France, Nouvelle Art Paris is a premier event in the global art calendar, celebrated for its innovative and diverse exhibitions. Drawing top galleries, collectors, and curators from around the world, this fair showcases cutting-edge contemporary art and groundbreaking works by emerging and established artists alike.",
    image: "/art/fair-1.jpg",
  },
  {
    name: "Art Basel Suisse",
    status: "Current",
    date: "Jan 2024",
    city: "Basel",
    country: "Switzerland",
    blurb:
      "Held annually in Basel, Switzerland, Miami Beach, and Hong Kong, Art Basel is widely considered the most prestigious art fair in the world, attracting top galleries, collectors, and curators.",
    image: "/art/fair-2.jpg",
  },
  {
    name: "NYC Contemporary Art Summit",
    status: "Past",
    date: "Nov 2023",
    city: "New York",
    country: "USA",
    blurb:
      "The NYC Contemporary Art Summit invites art enthusiasts and professionals to immerse themselves in a vibrant two-day event showcasing the forefront of modern creativity in New York City.",
    image: "/art/fair-3.jpg",
  },
  {
    name: "Frieze Art Fair",
    status: "Upcoming",
    date: "Dec 2023",
    city: "London",
    country: "UK",
    blurb:
      "Established in London in 2003, Frieze Art Fair has since expanded to New York and Los Angeles. It is known for showcasing a mix of established and emerging artists, and its cutting-edge programming.",
    image: "/art/fair-4.jpg",
  },
];

export const awards = [
  { title: "Outstanding Contribution to Local Culture", body: "London Art Awards", year: "2021" },
  { title: "Gallery of the Decade", body: "Art Collector's Digest", year: "2022" },
  { title: "Innovator of the Year", body: "International Art Critics Association", year: "2021" },
  { title: "Top 10 Must-Visit Galleries", body: "Global Art Review", year: "2023" },
  { title: "Best Contemporary Art Gallery in London", body: "Art World Magazine", year: "2022" },
];
