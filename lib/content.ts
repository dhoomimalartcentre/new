export const gallery = {
  name: "dhoomimal art centre",
  tagline: "india's first modern art gallery • est. 1936",
  coords: "28.6329° N, 77.2195° E",
  address: ["A-8, Connaught Place", "Inner Circle, New Delhi", "110001"],
  email: "info@dhoomimalartcentre.com",
  phone: "+91 11 4151 6172",
  hours: [
    ["Monday – Saturday", "11:00 – 19:00"],
    ["Sunday & Holidays", "Closed"],
  ],
  intro:
    "Founded in 1936 by Ram Babu as Dhoomimal Dharam Das Gallery in Connaught Place, Dhoomimal Art Centre is India's first private gallery of modern art. Across three generations it has stood beside artists from Sailoz Mookherjea and B.C. Sanyal to M.F. Husain and Tyeb Mehta, and today, under Mohit Jain, continues to champion contemporary Indian painting and sculpture from the same address it began on.",
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
  /** Two extra shots from the same show, used beside "+ Read more". */
  photos: string[];
};

// NOTE: titles, dates & venues below are real Dhoomimal Art Centre shows.
// IMAGES: exhibition-1 / -5 and the ex1-* thumbs are real install photographs
// of "Variable Registers" at the Shridharani Gallery. exhibition-3 and -4 use
// works from the gallery archive as stand-ins — swap in real install shots of
// those two shows when you have them.
export const exhibitions: Exhibition[] = [
  {
    slug: "variable-registers",
    title: "Variable Registers",
    status: "Past",
    year: "2026",
    venue: "Shridharani Gallery, Triveni Kala Sangam",
    dates: "3 Aug \u2014 9 Aug 2026",
    excerpt:
      "Printmaking in Modern India, 1930s to 1980s \u2014 a survey of five decades of Indian printmaking drawn from the Dhoomimal collection, with etchings, woodcuts, lithographs and serigraphs by Somnath Hore, Akbar Padamsee, Laxma Gaud, Jyoti Bhatt, Haren Das and others. Curated by Prima Kurien.",
    image: "/art/exhibition-1.jpg",
    photos: ["/art/ex1-a.jpg", "/art/ex1-b.jpg"],
  },
  {
    slug: "echoes-of-the-unseen",
    title: "Echoes of the Unseen",
    status: "Past",
    year: "2026",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "10 Jun \u2014 30 Jun 2026",
    excerpt:
      "A group show exploring what sits beneath the visible surface of a work \u2014 memory, gesture and material \u2014 staged across the Centre's Connaught Place galleries.",
    image: "/art/exhibition-2.jpg",
    photos: ["/art/ex2-a.jpg", "/art/ex2-b.jpg"],
  },
  {
    slug: "diverse-horizons",
    title: "Diverse Horizons",
    status: "Past",
    year: "2026",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "23 Feb \u2014 11 Mar 2026",
    excerpt:
      "A survey exhibition bringing together painters and sculptors from across Dhoomimal's roster, reflecting the range of practice the Centre has supported since 1936.",
    image: "/art/exhibition-3.jpg",
    photos: ["/art/ex3-a.jpg", "/art/ex3-b.jpg"],
  },
  {
    slug: "young-artists-voices",
    title: "Young Artists' Voices",
    status: "Past",
    year: "2025",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "10 April 2025",
    excerpt:
      "A showcase dedicated to emerging Indian artists, continuing the Centre's founding commitment to giving young practitioners their first public platform.",
    image: "/art/exhibition-4.jpg",
    photos: ["/art/ex4-a.jpg", "/art/ex4-b.jpg"],
  },
  {
    slug: "next-show-tbc",
    title: "Next exhibition — details to follow",
    status: "Upcoming",
    year: "2026",
    venue: "A-8, Connaught Place, Inner Circle, New Delhi",
    dates: "Dates to be announced",
    excerpt:
      "Placeholder — replace with the Centre's next confirmed show and dates before publishing.",
    image: "/art/exhibition-5.jpg",
    photos: ["/art/ex5-a.jpg", "/art/ex5-b.jpg"],
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

// IMAGES: each artist card shows one of that artist's prints from the
// gallery's own "Variable Registers" scans, not a portrait photograph.
// Swap in real portraits when you have them.
//
// The six contemporary artists this page previously listed are kept below,
// commented out — restore them (and supply images) whenever you want:
//   sunil-das, pradiptaa-chakraborty, shahid-parvez,
//   shalini-prakash, tanushree-chakraborty, pankaj-kumar-singh
export const artists: Artist[] = [
  {
    slug: "somnath-hore",
    name: "Somnath Hore",
    city: "Santiniketan",
    country: "India",
    discipline: "Printmaking, Sculpture",
    born: "1921\u20132006",
    bio: "One of the defining printmakers of modern India. Hore developed his pulp-print technique to record scarcity and violence \u2014 the Bengal famine, Tebhaga, Vietnam \u2014 in the long series he called Wounds. He taught for many years at Kala Bhavana, Santiniketan.",
    image: "/art/artist-1.jpg",
  },
  {
    slug: "laxma-goud",
    name: "Laxma Goud",
    city: "Hyderabad",
    country: "India",
    discipline: "Printmaking, Drawing",
    born: "b. 1940",
    bio: "Trained in Hyderabad and at Baroda under K.G. Subramanyan, Goud built a body of etchings, aquatints and drawings around the villages and figures of rural Telangana \u2014 pastoral, erotic and precisely drawn.",
    image: "/art/artist-2.jpg",
  },
  {
    slug: "akbar-padamsee",
    name: "Akbar Padamsee",
    city: "Mumbai",
    country: "India",
    discipline: "Painting, Printmaking",
    born: "1928\u20132020",
    bio: "A member of the circle around the Progressive Artists' Group, Padamsee worked across oil, watercolour, printmaking, photography and film. He is best known for the Metascapes and for a long sequence of heads and nudes.",
    image: "/art/artist-3.jpg",
  },
  {
    slug: "jehangir-sabavala",
    name: "Jehangir Sabavala",
    city: "Mumbai",
    country: "India",
    discipline: "Painting",
    born: "1922\u20132011",
    bio: "Trained in Bombay, London and Paris, Sabavala arrived at a cubist-derived landscape language of faceted light and receding planes, held to over five decades with unusual consistency.",
    image: "/art/artist-4.jpg",
  },
  {
    slug: "manu-parekh",
    name: "Manu Parekh",
    city: "New Delhi",
    country: "India",
    discipline: "Painting, Drawing",
    born: "b. 1939",
    bio: "Parekh's work moves between charged, near-abstract figuration and the long-running Banaras series, in which the ghats and the river become a subject he has returned to for decades.",
    image: "/art/artist-5.jpg",
  },
  {
    slug: "gr-santosh",
    name: "G.R. Santosh",
    city: "Srinagar / New Delhi",
    country: "India",
    discipline: "Painting, Printmaking",
    born: "1929\u20131997",
    bio: "A central figure in Neo-Tantric painting, Santosh drew on Kashmir Shaivism to build symmetrical compositions of yantra-like forms, fusing the figure with diagrammatic sacred geometry.",
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

// COLLECTION: every work below is a real print from the gallery's own
// "Variable Registers" scans. Only files whose filename carries the artist's
// name are used, so nothing here is mis-attributed. Titles, dates, media,
// sizes and prices still need to come from the gallery's records \u2014 they are
// shown as "Untitled" / "Print on paper" / "on request" until you fill them in.
export const works: Work[] = [
  { title: "Untitled", artist: "Bhupen Khakhar", artistSlug: "bhupen-khakhar", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-1.jpg", w: 1400, h: 1112 },
  { title: "Untitled", artist: "B.C. Sanyal", artistSlug: "bc-sanyal", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-2.jpg", w: 1400, h: 1050 },
  { title: "Untitled", artist: "Amitava Das", artistSlug: "amitava-das", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-3.jpg", w: 1400, h: 1043 },
  { title: "Untitled", artist: "Dinkar Kaushik", artistSlug: "dinkar-kaushik", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-4.jpg", w: 1400, h: 996 },
  { title: "Untitled", artist: "Mona Rai", artistSlug: "mona-rai", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-5.jpg", w: 1400, h: 1037 },
  { title: "Untitled", artist: "Rini Dhumal", artistSlug: "rini-dhumal", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-6.jpg", w: 1400, h: 1714 },
  { title: "Untitled", artist: "Shanti Dave", artistSlug: "shanti-dave", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-7.jpg", w: 1156, h: 867 },
  { title: "Untitled", artist: "Gulammohammed Sheikh", artistSlug: "gm-sheikh", year: "\u2014", medium: "Print on paper", size: "13 \u00d7 13 in", price: "Price on request", image: "/art/work-8.jpg", w: 1400, h: 1456 },
  { title: "Untitled", artist: "Ved Nayar", artistSlug: "ved-nayar", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-9.jpg", w: 1400, h: 1830 },
  { title: "Untitled", artist: "Jagmohan", artistSlug: "jagmohan", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-10.jpg", w: 1400, h: 1818 },
  { title: "Untitled", artist: "Laxma Goud", artistSlug: "laxma-goud", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-11.jpg", w: 1367, h: 2474 },
  { title: "Untitled", artist: "Laxma Goud", artistSlug: "laxma-goud", year: "\u2014", medium: "Print on paper", size: "Size on request", price: "Price on request", image: "/art/work-12.jpg", w: 1167, h: 1524 },
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

// India Art Fair is a confirmed, recurring participation (Dhoomimal has
// held a booth there since at least 2010). The remaining entries are
// placeholders — add the fairs the gallery actually attends.
export const fairs: Fair[] = [
  {
    name: "India Art Fair",
    status: "Current",
    date: "February (annual)",
    city: "New Delhi",
    country: "India",
    blurb:
      "India's leading platform for modern and contemporary South Asian art. Dhoomimal has held a booth at the fair since 2010, presenting works from its historic collection alongside its current roster of artists.",
    image: "/art/fair-1.jpg",
  },
  {
    name: "Fair name — to confirm",
    status: "Upcoming",
    date: "Date to be announced",
    city: "City",
    country: "Country",
    blurb: "Placeholder — replace with the gallery's next confirmed fair.",
    image: "/art/fair-2.jpg",
  },
];

// The "Gallery Profile" narrative, in the gallery's own words from
// dhoomimalartcentre.com/about-us. Photograph: Mahender and Sushma Jain.
export const profile = {
  eyebrow: "Gallery profile",
  lead:
    "Mahender Jain, fondly known as Miki in the art world, took to the passion of his father and tried to create a global platform for Indian contemporary art, carrying exhibitions to different parts of the world in the sixties besides India.",
  paragraphs: [
    "Working with eminent artists like Shanti Dave, M.F. Husain, Tyeb Mehta and B. Prabha, to name a few, and joined in the work by his wife Sushma.",
    "He discovered many artists from all parts of India and exhibited their works. The large number of rather important expositions that Mahender put up may well be deemed landmarks on the Delhi art scene.",
    "Theirs were the days when art or artists hardly had a \u2018film star\u2019 status. The works of the same, once less known artists are now almost household words.",
    "Mahender also encouraged galleries like Cymroza Art Gallery, Mumbai, 1974; Chitrakoot Gallery, Calcutta, 1987; and House of B. Prabha & B. Vithal, New Delhi, 1987, on their onset. Mahender Jain passed away untimely in 1987, and Sushma continued running the show with the same vision, devotion and passion.",
  ],
  image: "/art/profile-miki.jpg",
  caption: "Mahender and Sushma Jain",
};

export type Milestone = {
  id: string;
  year: string;
  heading: string;
  caption: string;
  image: string;
};

// The gallery's own history, as published on dhoomimalartcentre.com/about-us.
// Captions are the gallery's, lightly regularised for spelling and spacing.
//
// IMAGES: each entry expects /art/history-NN.jpg. Any that are missing simply
// render as an empty frame with the caption beneath — drop the period
// photographs into public/art/ under these exact names as you find them.
export const milestones: Milestone[] = [
  {
    id: "01",
    year: "1936",
    heading: "The Beginning",
    caption:
      "Ram Babu, a Sunday painter himself known as Kagazis, ran a stationery business, very popular with the government and diplomatic circles, and founded Dhoomimal Dharam Das Gallery in Connaught Place. It was his passion for art and artists which shaped the gallery into an institution that stood by young artists in exposing their work. He was a man of rare independence of mind.",
    image: "/art/history-01.jpg",
  },
  {
    id: "02",
    year: "1960",
    heading: "Early Years",
    caption:
      "Mr Mahender Jain with Mr Rajiv Gandhi and Mrs Indira Gandhi.",
    image: "/art/history-02.jpg",
  },
  {
    id: "03",
    year: "1962",
    heading: "Early Years",
    caption:
      "Mahender Jain at JFK Airport with the mural executed by Shanti Dave.",
    image: "/art/history-03.jpg",
  },
  {
    id: "04",
    year: "1964",
    heading: "Early Years",
    caption:
      "Mr Mahender Jain with Dr Zakir Husain, then President of India, at the New York gallery holding the M.F. Husain exhibition.",
    image: "/art/history-04.jpg",
  },
  {
    id: "05",
    year: "1967",
    heading: "Early Years",
    caption:
      "An exhibition mounted by Mahender and Sushma at the Hilton Hotel, USA.",
    image: "/art/history-05.jpg",
  },
  {
    id: "06",
    year: "1971",
    heading: "Early Years",
    caption:
      "Mahender Jain with Dr Karan Singh.",
    image: "/art/history-06.jpg",
  },
  {
    id: "07",
    year: "1972",
    heading: "Early Years",
    caption:
      "The gallery space.",
    image: "/art/history-07.jpg",
  },
  {
    id: "08",
    year: "1972",
    heading: "Early Years",
    caption:
      "Mrs Sonia Gandhi, M. Sivanesan and Mrs Indira Gandhi at the gallery.",
    image: "/art/history-08.jpg",
  },
  {
    id: "09",
    year: "1985",
    heading: "Early Years",
    caption:
      "Mahender at restoration.",
    image: "/art/history-09.jpg",
  },
  {
    id: "10",
    year: "1985",
    heading: "Early Years",
    caption:
      "Mr Mahender with Mr M.F. Husain at the solo exhibition of Mr Pirajee Sagara.",
    image: "/art/history-10.jpg",
  },
  {
    id: "11",
    year: "1986",
    heading: "Early Years",
    caption:
      "Mr G.R. Santosh and Mr Mahender Jain (behind), Mr Surya Prakash and Mr P.N. Mago (front) at Dhoomimal.",
    image: "/art/history-11.jpg",
  },
  {
    id: "12",
    year: "1987",
    heading: "Early Years",
    caption:
      "Mahender Jain with Mr Farooq Abdullah at Dhoomimal Art Centre.",
    image: "/art/history-12.jpg",
  },
  {
    id: "13",
    year: "1990",
    heading: "Early Years",
    caption:
      "Mr Masunori Fukuoka, Anshu, Mrs Sushma Jain and Mohit.",
    image: "/art/history-13.jpg",
  },
  {
    id: "14",
    year: "1997",
    heading: "Early Years",
    caption:
      "Mr B.C. Sanyal at the tenth anniversary show remembering Mahender Jain, in conversation with Mohit Jain.",
    image: "/art/history-14.jpg",
  },
  {
    id: "15",
    year: "2004",
    heading: "Early Years",
    caption:
      "Mrs Maneka Gandhi with Jiten Hazarika at the Centre.",
    image: "/art/history-15.jpg",
  },
  {
    id: "16",
    year: "2010",
    heading: "Early Years",
    caption:
      "India Art Fair display at the Dhoomimal Art Centre booth.",
    image: "/art/history-16.jpg",
  },
  {
    id: "17",
    year: "2011",
    heading: "Early Years",
    caption:
      "A tribute to M.F. Husain — a walk from the Centre to the Sahmat office at Rafi Marg.",
    image: "/art/history-17.jpg",
  },
  {
    id: "18",
    year: "2011",
    heading: "Early Years",
    caption:
      "“Memoirs of an Era”, homage to Sushma Jain.",
    image: "/art/history-18.jpg",
  },
  {
    id: "19",
    year: "2017",
    heading: "Early Years",
    caption:
      "Remembering Sailoz Mookherjea on the twentieth anniversary of Mr Mahender Jain. In frame, students of Sailoz: Mr Nand Katyal, Mr Suraj Ghai, Mr Om Prakash, Mr Paramjeet Singh, Mrs Arpita Singh and Mr Rajesh Mehra.",
    image: "/art/history-19.jpg",
  },
  {
    id: "20",
    year: "2019",
    heading: "Early Years",
    caption:
      "Shashi Tharoor inaugurating the solo exhibition by Pradiptaa Chakraborty.",
    image: "/art/history-20.jpg",
  },
];

export const awards = [
  { title: "India's Oldest Art Gallery", body: "Established 1936, Connaught Place, New Delhi", year: "1936" },
  { title: "India's First Gallery of Modern Art", body: "Dhoomimal Art Centre", year: "1936" },
  { title: "90 Years of Promoting Contemporary Indian Art", body: "Dhoomimal Art Centre", year: "2026" },
];
