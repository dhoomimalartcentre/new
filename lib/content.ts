export const gallery = {
  name: "dhoomimal art centre",
  tagline: "india's first gallery of modern art • est. 1936",
  coords: "28.6329° N, 77.2195° E",
  address: ["A-8, Connaught Place", "Inner Circle, New Delhi", "110001"],
  email: "info@dhoomimalartcentre.com",
  phone: "+91 11 4151 6172",
  hours: [
    ["Daily", "11:00 – 19:00"],
    ["Sunday & Holidays", "Closed"],
  ],
  // Source: dhoomimalartcentre.com homepage "Our History" block.
  intro:
    "Established in pre-independent India by Ram Babu, Dhoomimal was supported by stalwarts of the time — B.C. Sanyal, Jaya Appaswamy, Jamini Roy, Sailoz Mookherjea and Nand Lal Bose among others — to be followed by generations after them. As the third generation, Mohit Jain, Director DAC, recalls how the art scenario of the time was a passion engendering investment at altogether different levels, instead of being beleaguered by solely economic concerns.",
};

export const contacts: { dept: string; email: string }[] = [
  { dept: "General Enquiries", email: "info@dhoomimalartcentre.com" },
  { dept: "Exhibitions", email: "info@dhoomimalartcentre.com" },
  { dept: "Collector's Corner", email: "info@dhoomimalartcentre.com" },
  { dept: "Press & Media", email: "info@dhoomimalartcentre.com" },
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
    { label: "Collector's Corner", href: "/about#residency" },
  ],
  Programme: [
    { label: "Artists", href: "/artists" },
    { label: "Exhibitions", href: "/exhibitions" },
    { label: "Collection", href: "/collection" },
    { label: "Art Fairs", href: "/art-fairs" },
  ],
  Journal: [
    { label: "Art Blog", href: "/about" },
    { label: "Image Gallery", href: "/about" },
    { label: "Instagram", href: "https://www.instagram.com/dhoomimalartcentre" },
    { label: "X (Twitter)", href: "https://twitter.com/dhoomimal" },
    { label: "Facebook", href: "https://www.facebook.com/dhoomimalonline" },
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

// Source: dhoomimalartcentre.com/exhibitions (current + past listings),
// with descriptions pulled from each show's own page where available.
// Placeholder art (public/art/*) stands in for the gallery's real
// exhibition photography until real files are dropped in.
export const exhibitions: Exhibition[] = [
  {
    slug: "before-you-see-the-scar",
    title: "Before You See The Scar",
    status: "Current",
    year: "2026",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "14 Sep — 23 Sep 2026",
    excerpt:
      "A solo photography exhibition by Monica Dhaka, opening with a panel discussion moderated by Michelin-star chef and artist Suvir Saran. Daily 5:00–8:00 pm.",
    image: "/art/exhibition-1.jpg",
  },
  {
    slug: "variable-registers",
    title: "Variable Registers",
    status: "Current",
    year: "2026",
    venue: "Shridharani Gallery, Triveni Kala Sangam",
    dates: "3 Aug — 9 Aug 2026",
    excerpt:
      "Printmaking in Modern India, 1930s to 1980s — curated by Prima Kurien. A survey of prints by modern masters including Akbar Padamsee, M.F. Husain, S.H. Raza, Krishen Khanna, Sailoz Mookherjea and Sakti Burman.",
    image: "/art/exhibition-2.jpg",
  },
  {
    slug: "echoes-of-the-unseen",
    title: "Echoes of the Unseen",
    status: "Past",
    year: "2026",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "10 Jun — 30 Jun 2026",
    excerpt:
      "A group show of abstract artists, from modern masters to contemporary practitioners, exploring abstraction as a space of freedom — inviting viewers to observe, feel and engage beyond what is visible.",
    image: "/art/work-3.jpg",
  },
  {
    slug: "diverse-horizons",
    title: "Diverse Horizons",
    status: "Past",
    year: "2026",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "23 Feb — 11 Mar 2026",
    excerpt:
      "A survey exhibition bringing together painters and sculptors from across Dhoomimal's roster, reflecting the range of practice the Centre has supported since 1936.",
    image: "/art/work-7.jpg",
  },
  {
    slug: "art-mumbai-2025",
    title: "Art Mumbai 2025 Edition",
    status: "Past",
    year: "2025",
    venue: "Mumbai",
    dates: "13 Nov — 16 Nov 2025",
    excerpt:
      "Dhoomimal's booth at the 2025 edition of Art Mumbai, presenting works from the gallery's historic collection alongside its contemporary roster.",
    image: "/art/fair-1.jpg",
  },
  {
    slug: "urban-insignia",
    title: "Urban Insignia",
    status: "Past",
    year: "2025",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "8 Aug — 13 Aug 2025",
    excerpt:
      "A group exhibition responding to the visual language of the city — its signage, structures and rhythms — through contemporary painting and mixed media.",
    image: "/art/work-6.jpg",
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

// Source: dhoomimalartcentre.com/artists — full represented-artist
// roster (35 names) with disciplines as listed on the real site.
// Extended bios (Sunil Das, Pradiptaa Chakraborty, Shahid Parvez) are
// drawn from the gallery's own Collector's Corner / Art Blog copy;
// the rest carry a brief discipline-only bio pending fuller notes.
export const artists: Artist[] = [
  {
    slug: "sunil-das",
    name: "Sunil Das",
    city: "Kolkata",
    country: "India",
    discipline: "Painter",
    born: "—",
    bio: "One of India's important post-modernist painters, Sunil Das rose to prominence with his drawings of bulls and horses between 1950 and 1962, after a period in Spain on a French art scholarship with the École Nationale Supérieure where he grew fascinated by bullfights. His paintings express not only the physical attributes of his subjects but their associative ones too.",
    image: "/art/artist-1.jpg",
  },
  {
    slug: "pradiptaa-chakraborty",
    name: "Pradiptaa Chakraborty",
    city: "New Delhi",
    country: "India",
    discipline: "Painter",
    born: "—",
    bio: "A narrative painter whose work re-invents myth, legend and story into contemporary compositions. Her solo exhibition at Dhoomimal was inaugurated by Shashi Tharoor in 2019.",
    image: "/art/artist-2.jpg",
  },
  {
    slug: "shahid-parvez",
    name: "Shahid Parvez",
    city: "Udaipur",
    country: "India",
    discipline: "Conceptual Artist, Painter",
    born: "b. 1970",
    bio: "Udaipur-born Parvez brings a deliberately child-like approach to art creation, with his stress on expression over technical polish — a spontaneous, unschooled directness of gesture.",
    image: "/art/artist-3.jpg",
  },
  {
    slug: "shalini-prakash",
    name: "Shalini Prakash",
    city: "New Delhi",
    country: "India",
    discipline: "Painter, Sculptor",
    born: "—",
    bio: "Works across painting and sculpture, part of Dhoomimal's ongoing roster of contemporary Indian artists.",
    image: "/art/artist-4.jpg",
  },
  {
    slug: "tanushree-chakraborty",
    name: "Tanushree Chakraborty",
    city: "New Delhi",
    country: "India",
    discipline: "Painter",
    born: "—",
    bio: "A contemporary painter represented at Dhoomimal.",
    image: "/art/artist-5.jpg",
  },
  {
    slug: "pankaj-kumar-singh",
    name: "Pankaj Kumar Singh",
    city: "New Delhi",
    country: "India",
    discipline: "Painter",
    born: "—",
    bio: "A contemporary painter represented at Dhoomimal, exhibited both individually and in recent group shows at the Centre.",
    image: "/art/artist-6.jpg",
  },
  { slug: "abbas-batliwala", name: "Abbas Batliwala", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-1.jpg" },
  { slug: "akash-choyal", name: "Akash Choyal", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-2.jpg" },
  { slug: "akmal-husain", name: "Akmal Husain", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-3.jpg" },
  { slug: "anand-prakash", name: "Anand Prakash", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-4.jpg" },
  { slug: "arup-das", name: "Arup Das", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-5.jpg" },
  { slug: "b-vithal", name: "B. Vithal", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre; Mahender Jain helped establish the House of B. Prabha & B. Vithal, New Delhi, in 1987.", image: "/art/artist-6.jpg" },
  { slug: "balasaheb-nathu-chaudhari", name: "Balasaheb Nathu Chaudhari", city: "India", country: "India", discipline: "Painter, Sculptor", born: "—", bio: "A painter and sculptor represented by Dhoomimal Art Centre.", image: "/art/artist-1.jpg" },
  { slug: "balkrishna-patel", name: "Balkrishna Patel", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-2.jpg" },
  { slug: "bhawana-choudhary-chandra", name: "Bhawana Choudhary Chandra", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-3.jpg" },
  { slug: "bimal-dasgupta", name: "Bimal Dasgupta", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-4.jpg" },
  { slug: "br-bodade", name: "BR Bodade", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-5.jpg" },
  { slug: "bratin-khan", name: "Bratin Khan", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-6.jpg" },
  { slug: "c-prakash", name: "C. Prakash", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-1.jpg" },
  { slug: "gopal-s-adivrekar", name: "Gopal S Adivrekar", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-2.jpg" },
  { slug: "k-s-kulkarni", name: "K. S. Kulkarni", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-3.jpg" },
  { slug: "kalicharan-gupta", name: "Kalicharan Gupta", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-4.jpg" },
  { slug: "kartick-chandra-pyne", name: "Kartick Chandra Pyne", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-5.jpg" },
  { slug: "m-sivanesan", name: "M Sivanesan", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-6.jpg" },
  { slug: "manoj-dutta", name: "Manoj Dutta", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-1.jpg" },
  { slug: "n-s-rana", name: "N S Rana", city: "India", country: "India", discipline: "Sculptor", born: "—", bio: "A sculptor represented by Dhoomimal Art Centre.", image: "/art/artist-2.jpg" },
  { slug: "pn-choyal", name: "PN Choyal", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-3.jpg" },
  { slug: "prafulla-mohanti", name: "Prafulla Mohanti", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre; his solo show \u2018Shunya\u2019 was held at the Centre in 2014.", image: "/art/artist-4.jpg" },
  { slug: "r-b-bhaskaran", name: "R B Bhaskaran", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-5.jpg" },
  { slug: "rakesh-kumar-gupta", name: "Rakesh Kumar Gupta", city: "India", country: "India", discipline: "Painter, Sculptor", born: "—", bio: "A painter and sculptor represented by Dhoomimal Art Centre.", image: "/art/artist-6.jpg" },
  { slug: "ratnadeep-gopal-adivrekar", name: "Ratnadeep Gopal Adivrekar", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-1.jpg" },
  { slug: "sr-bhushan", name: "S.R. Bhushan", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre, with oils and watercolours held in the Collector's Corner.", image: "/art/artist-2.jpg" },
  { slug: "santosh-verma", name: "Santosh Verma", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-3.jpg" },
  { slug: "shabir-hussain", name: "Shabir Hussain", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-4.jpg" },
  { slug: "shail-choyal", name: "Shail Choyal", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-5.jpg" },
  { slug: "sharad-kale", name: "Sharad Kale", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-6.jpg" },
  { slug: "sonal-varshneya", name: "Sonal Varshneya", city: "India", country: "India", discipline: "Painter", born: "—", bio: "A painter represented by Dhoomimal Art Centre.", image: "/art/artist-1.jpg" },
  { slug: "swapan-bhandary", name: "Swapan Bhandary", city: "India", country: "India", discipline: "Painter, Sculptor", born: "—", bio: "A painter and sculptor represented by Dhoomimal Art Centre.", image: "/art/artist-2.jpg" },
  { slug: "vandana-rakesh", name: "Vandana Rakesh", city: "India", country: "India", discipline: "Painter, Sculptor", born: "—", bio: "A painter and sculptor represented by Dhoomimal Art Centre.", image: "/art/artist-3.jpg" },
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

// Source: dhoomimalartcentre.com/collectors (Collector's Corner) and
// the homepage "Trending Artworks" strip. Titles, artists, years,
// mediums and inventory IDs are real; the real site itself lists every
// price as "Price on Request", so that is not a placeholder here.
export const works: Work[] = [
  { title: "Untitled", artist: "Shalini Prakash", artistSlug: "shalini-prakash", year: "—", medium: "Mixed media on canvas", size: "Size on request", price: "Price on request", image: "/art/work-1.jpg", w: 1200, h: 1180 },
  { title: "Untitled", artist: "Tanushree Chakraborty", artistSlug: "tanushree-chakraborty", year: "—", medium: "Mixed media on canvas", size: "Size on request", price: "Price on request", image: "/art/work-2.jpg", w: 1200, h: 1000 },
  { title: "Tillatauma", artist: "Pradiptaa Chakraborty", artistSlug: "pradiptaa-chakraborty", year: "—", medium: "Mixed media on canvas", size: "Size on request", price: "Price on request", image: "/art/work-3.jpg", w: 1100, h: 1240 },
  { title: "Untitled", artist: "Pankaj Kumar Singh", artistSlug: "pankaj-kumar-singh", year: "—", medium: "Mixed media on canvas", size: "Size on request", price: "Price on request", image: "/art/work-4.jpg", w: 1200, h: 940 },
  { title: "Untitled (ID: SRBH014)", artist: "S.R. Bhushan", artistSlug: "sr-bhushan", year: "—", medium: "Oil on canvas", size: "Size on request", price: "Price on request", image: "/art/work-5.jpg", w: 1150, h: 1150 },
  { title: "Untitled (ID: SRBH969)", artist: "S.R. Bhushan", artistSlug: "sr-bhushan", year: "—", medium: "Watercolour", size: "Size on request", price: "Price on request", image: "/art/work-6.jpg", w: 1200, h: 1080 },
  { title: "Cosmic Interpretations", artist: "Balkrishna Patel", artistSlug: "balkrishna-patel", year: "1987", medium: "Acrylic on canvas paper", size: "Size on request", price: "Price on request", image: "/art/work-7.jpg", w: 1200, h: 900 },
  { title: "Untitled (ID: BDGU006)", artist: "Bimal Dasgupta", artistSlug: "bimal-dasgupta", year: "1983", medium: "Oil on canvas", size: "Size on request", price: "Price on request", image: "/art/work-8.jpg", w: 1120, h: 1200 },
  { title: "Woman", artist: "K. S. Kulkarni", artistSlug: "k-s-kulkarni", year: "1994", medium: "Acrylic on board", size: "Size on request", price: "Price on request", image: "/art/work-9.jpg", w: 1200, h: 1020 },
  { title: "Couple", artist: "K. S. Kulkarni", artistSlug: "k-s-kulkarni", year: "1998", medium: "Acrylic on board", size: "Size on request", price: "Price on request", image: "/art/work-10.jpg", w: 1080, h: 1220 },
  { title: "Introspection", artist: "Sunil Das", artistSlug: "sunil-das", year: "1987", medium: "Mixed media on magazine paper", size: "Size on request", price: "Price on request", image: "/art/work-11.jpg", w: 1200, h: 960 },
  { title: "Untitled (ID: BDGU005)", artist: "Bimal Dasgupta", artistSlug: "bimal-dasgupta", year: "1983", medium: "Oil on canvas", size: "Size on request", price: "Price on request", image: "/art/work-12.jpg", w: 1160, h: 1160 },
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

// Source: real Dhoomimal fair participations, listed among the
// gallery's own past exhibitions (Art Mumbai, India Art Fair).
export const fairs: Fair[] = [
  {
    name: "Art Mumbai",
    status: "Past",
    date: "13 – 16 Nov 2025",
    city: "Mumbai",
    country: "India",
    blurb:
      "Dhoomimal's booth at the 2025 edition of Art Mumbai, presenting works from the gallery's historic collection alongside its current roster of artists.",
    image: "/art/fair-1.jpg",
  },
  {
    name: "India Art Fair",
    status: "Past",
    date: "28 – 31 Jan 2016",
    city: "New Delhi",
    country: "India",
    blurb:
      "India's leading platform for modern and contemporary South Asian art. Dhoomimal has held a booth at the fair since at least 2010, part of a recurring, near-annual presence through the 2013–2016 editions.",
    image: "/art/fair-2.jpg",
  },
  {
    name: "India Art Fair",
    status: "Past",
    date: "29 Jan – 1 Feb 2015",
    city: "New Delhi",
    country: "India",
    blurb:
      "Dhoomimal's booth at the 2015 edition of India Art Fair, New Delhi.",
    image: "/art/fair-1.jpg",
  },
  {
    name: "India Art Fair",
    status: "Past",
    date: "30 Jan – 2 Feb 2014",
    city: "New Delhi",
    country: "India",
    blurb:
      "Dhoomimal's booth at the 2014 edition of India Art Fair, New Delhi.",
    image: "/art/fair-2.jpg",
  },
  {
    name: "India Art Fair",
    status: "Past",
    date: "31 Jan – 3 Feb 2013",
    city: "New Delhi",
    country: "India",
    blurb:
      "Dhoomimal's booth at the 2013 edition of India Art Fair, New Delhi.",
    image: "/art/fair-1.jpg",
  },
];

// Source: dhoomimalartcentre.com/about-us "Our History" timeline —
// real, dated milestones from the gallery's own archive (not awards).
export const awards = [
  { title: "The Beginning", body: "Ram Babu founds Dhoomimal Dharam Das Gallery, Connaught Place", year: "1936" },
  { title: "M F Husain in New York", body: "Mahender Jain with Dr Zakir Hussain at the New York Husain show", year: "1964" },
  { title: "Second Renovation", body: "Two floors added; the Centre now runs over a much larger space", year: "2007" },
  { title: "India Art Fair Debut", body: "Dhoomimal Art Centre booth at India Art Fair", year: "2010" },
  { title: "Tharoor Inaugurates Chakraborty", body: "Shashi Tharoor opens Pradiptaa Chakraborty's solo show", year: "2019" },
  { title: "Ninety Years", body: "The Dhoomimal name continues promoting contemporary Indian art", year: "2026" },
];
