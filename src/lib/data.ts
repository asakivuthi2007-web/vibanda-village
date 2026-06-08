// ───────────────────────────────────────────────────────────────────────────
//  BRAND IDENTITY — to reskin this template for a new client, edit this object
//  (name, contact, links, SEO) and the BRAND PALETTE block in globals.css.
//  Everything else (layout, components, animations) stays the same.
// ───────────────────────────────────────────────────────────────────────────
export const site = {
  name: "Vibanda Village",
  legalName: "Vibanda Village Restaurant & Bar",
  tagline: "Nairobi's Home of Fire, Music & Good Company",
  // Used to split the wordmark — the accent word is highlighted in the brand accent colour.
  accentWord: "Village",
  url: "https://vibandavillage.com",
  locale: "en_KE",
  ogImage: "/images/hero.webp",
  description:
    "Vibanda Village is Nairobi's open-air home of fire-grilled nyama choma, cold Tusker, cocktails, and live music. Gather in the garden on Third Ngong Avenue.",
  keywords: [
    "Vibanda Village",
    "Nairobi restaurant",
    "nyama choma Nairobi",
    "VBAR",
    "bar and grill Nairobi",
    "live music Nairobi",
    "Third Ngong Avenue",
  ],
  phone: "+254 714 826537",
  phoneHref: "tel:+254714826537",
  email: "hello@vibandavillage.com",
  address: ["Third Ngong Avenue", "Nairobi, Kenya"],
  hours: [
    { days: "Monday – Thursday", time: "11:00 AM – 11:00 PM" },
    { days: "Friday – Saturday", time: "11:00 AM – Late" },
    { days: "Sunday", time: "11:00 AM – 11:00 PM" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Dishes", href: "#dishes" },
  { label: "Vibe", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

export const heroContent = {
  eyebrow: "Third Ngong Ave · Nairobi",
  title: ["This is where", "the village", "gathers"],
  subtitle:
    "Vibanda Village is Nairobi's open-air home of fire-grilled nyama choma, cold Tusker, and live music under the stars — a garden where strangers become regulars and every night feels like a celebration.",
  primaryCta: { label: "Reserve a Table", href: "#reservation" },
  secondaryCta: { label: "Explore the Menu", href: "#menu" },
};

export const aboutContent = {
  eyebrow: "Our Story",
  title: "Where strangers become regulars",
  paragraphs: [
    "Vibanda Village began with a simple idea — a place in the heart of Nairobi where good food, cold drinks, and good company come together under one open sky. Our grills stay hot from midday into the night, turning out the nyama choma, kuku choma, and ugali that keep our regulars coming back.",
    "More than a restaurant, we're a gathering place. Tusker flows at the VBAR, live bands and karaoke fill the garden, and the woven-basket lights glow over tables of friends, families, and first-timers who never stay strangers for long.",
  ],
  signatureName: "The Vibanda Family",
  signatureRole: "Cooks, Hosts & Regulars",
  stats: [
    { value: "4.3", label: "Google Rating" },
    { value: "530+", label: "Guest Reviews" },
    { value: "7", label: "Nights a Week" },
  ],
  image: { src: "/images/about.webp", alt: "Open-air garden seating at Vibanda Village glowing under woven-basket lights" },
};

export const signatureDishes = [
  {
    name: "The Vibanda Smash Burger",
    description: "Double-stacked beef patties, melted cheese, and crisp golden fries — our take on the classic, done right.",
    image: { src: "/images/signature-1.webp", alt: "A double smash burger with melted cheese served with a side of golden fries" },
  },
  {
    name: "Crispy Fried Chicken",
    description: "Golden, hand-breaded chicken fried to order — shatteringly crisp outside, juicy within.",
    image: { src: "/images/signature-2.webp", alt: "Golden hand-breaded crispy fried chicken served hot on a plate" },
  },
  {
    name: "The Classic Mojito",
    description: "Fresh mint, lime, and white rum over crushed ice — the cooler that defines a night at the VBAR.",
    image: { src: "/images/signature-3.webp", alt: "A classic mojito cocktail with fresh mint and lime in a tall glass" },
  },
  {
    name: "Mango & Pistachio Ice Cream",
    description: "Cool scoops of ripe mango and pistachio finished with toasted nuts — the sweetest way to end the night.",
    image: { src: "/images/signature-4.webp", alt: "A bowl of mango and pistachio ice cream topped with toasted nuts" },
  },
];

export const experienceFeatures = [
  {
    title: "The VBAR",
    description:
      "Our buzzing bar where cold Tusker, signature cocktails, and happy-hour energy carry the night long after the sun goes down.",
    image: { src: "/images/experience-1.webp", alt: "The warmly lit VBAR with bottles lined up under moody amber lighting" },
  },
  {
    title: "The Garden",
    description:
      "Communal tables under woven-basket lights and open sky — the heart of the village, where the grill smokes and the conversation never stops.",
    image: { src: "/images/experience-2.webp", alt: "The open-air Vibanda Village garden with communal seating beneath the night sky" },
  },
  {
    title: "Live Music & Karaoke",
    description:
      "From live bands to Wednesday-night karaoke, the stage stays warm all week — come for the food, stay for the show.",
    image: { src: "/images/experience-3.webp", alt: "The garden stage area at Vibanda Village set up for a live music night" },
  },
];

// Compact "what we offer" strip — practical info at a glance.
export const offerings = [
  { icon: "Flame", title: "Open-Fire Grill", detail: "Nyama choma & kuku choma, charred over coals" },
  { icon: "Music", title: "Live Music", detail: "Live bands & Wednesday karaoke nights" },
  { icon: "Bike", title: "Delivery", detail: "To your door across Nairobi via Glovo" },
  { icon: "PartyPopper", title: "Private Events", detail: "Celebrations & functions in the garden" },
];

export const menuCategories = [
  {
    id: "grill",
    label: "From the Grill",
    items: [
      { name: "Nyama Choma", detail: "Flame-grilled goat, served with kachumbari and ugali" },
      { name: "Kuku Choma", detail: "Marinated grilled chicken, charred over open coals" },
      { name: "Grilled Tilapia", detail: "Whole fish grilled with lemon, garlic, and herbs" },
      { name: "Pork Ribs", detail: "Slow-grilled ribs glazed in our house sauce" },
    ],
  },
  {
    id: "bites",
    label: "Bites & Burgers",
    items: [
      { name: "The Vibanda Smash Burger", detail: "Double beef, melted cheese, golden fries" },
      { name: "Crispy Fried Chicken", detail: "Hand-breaded and fried to order" },
      { name: "Loaded Fries", detail: "Crisp fries piled high with cheese and spice" },
      { name: "Beef Mishkaki", detail: "Tender beef skewers grilled on the spot" },
    ],
  },
  {
    id: "drinks",
    label: "Cocktails & Drinks",
    items: [
      { name: "Classic Mojito", detail: "Fresh mint, lime, and white rum over ice" },
      { name: "Sunset Spritz", detail: "Bright citrus and orange, served tall" },
      { name: "Cold Tusker", detail: "Kenya's favourite lager, served ice cold" },
      { name: "Strawberry Milkshake", detail: "Thick, creamy, and topped to order" },
    ],
  },
  {
    id: "sweet",
    label: "Something Sweet",
    items: [
      { name: "Mango & Pistachio Ice Cream", detail: "Ripe mango, pistachio, and toasted nuts" },
      { name: "Strawberry Swirl Sundae", detail: "Vanilla and strawberry, layered cold" },
      { name: "Chocolate Lava Cake", detail: "Warm molten centre, served with ice cream" },
    ],
  },
];

export const galleryImages = [
  { src: "/images/gallery-1.webp", alt: "A bowl of vanilla and strawberry ice cream served at Vibanda Village", span: "tall" },
  { src: "/images/gallery-2.webp", alt: "A bright sunset cocktail garnished with orange at the VBAR", span: "wide" },
  { src: "/images/gallery-3.webp", alt: "A loaded brioche burger with bacon and a side of fries on a white plate", span: "tall" },
  { src: "/images/gallery-4.webp", alt: "A thick strawberry milkshake served tall and cold", span: "wide" },
  { src: "/images/gallery-5.webp", alt: "The warmly lit VBAR interior with bottles and moody amber lighting", span: "tall" },
  { src: "/images/gallery-6.webp", alt: "Golden crispy fried chicken served hot and fresh", span: "wide" },
];

export const testimonials = [
  {
    quote:
      "The nyama choma here is the real deal — smoky, tender, and the garden setting under those basket lights makes every plate taste better. My go-to spot in Nairobi.",
    name: "Wanjiru K.",
    role: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "Came for the food, stayed for the music. Live band one night, karaoke the next — Vibanda knows how to turn a dinner into a whole evening.",
    name: "Brian O.",
    role: "Guest",
    rating: 5,
  },
  {
    quote:
      "Cold Tusker, great cocktails, and a crowd that feels like family by the end of the night. The VBAR is exactly the kind of place this city needed.",
    name: "Aisha M.",
    role: "Returning Guest",
    rating: 4,
  },
  {
    quote:
      "Big open space, brilliant setup, and food worth the wait. We hosted a private night here and the team made the whole thing effortless.",
    name: "Daniel M.",
    role: "Guest",
    rating: 5,
  },
];

export const reservationContent = {
  eyebrow: "Reservations",
  title: "Book your table",
  description:
    "Whether it's nyama choma with friends or a private celebration in the garden, reserve your spot and we'll have a table waiting. For large groups and events, reach our team directly.",
  partySizes: ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests", "7+ Guests"],
  times: ["12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"],
  image: { src: "/images/reservation.webp", alt: "The garden at Vibanda Village set for an evening of guests and live music" },
};

export const footerContent = {
  blurb:
    "An open-air home of fire-grilled food, cold drinks, and live music in the heart of Nairobi — where every night feels like a celebration.",
  newsletterLabel: "Join our list for happy-hour nights, live music line-ups, and events at Vibanda Village.",
};
