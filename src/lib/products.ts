export type CategorySlug = "watches" | "perfumes" | "jewelry";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  categoryLabel: string;
  description: string;
  fullDescription: string;
  price: number;
  compareAtPrice?: number;
  tag?: "Featured" | "Best Seller" | "New";
  image: string;
  images: [string, string, string];
  stock: number;
};

const image = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const products: Product[] = [
  {
    id: "watch-001",
    slug: "classic-timepiece",
    name: "Classic Timepiece",
    category: "watches",
    categoryLabel: "Watches",
    description: "A versatile everyday timepiece with a clean, timeless profile.",
    fullDescription: "A considered finishing touch for everyday looks and special occasions. This sample listing is for demonstration; please confirm product specifications, materials, availability and final price with Zoot Times before ordering.",
    price: 2490,
    compareAtPrice: 2990,
    tag: "Best Seller",
    image: image("photo-1523275335684-37898b6baf30", 1000),
    images: [
      image("photo-1523275335684-37898b6baf30"),
      image("photo-1524805444758-089113d48a6d"),
      image("photo-1524592094714-0f0654e20314")
    ],
    stock: 12
  },
  {
    id: "perfume-001",
    slug: "signature-essence",
    name: "Signature Essence",
    category: "perfumes",
    categoryLabel: "Perfumes",
    description: "A fragrance selection for everyday moments and thoughtful gifting.",
    fullDescription: "A versatile fragrance concept to accompany your daily routine or a thoughtful gift. This sample listing is for demonstration; please confirm volume, fragrance notes, origin, availability and final price with Zoot Times before ordering.",
    price: 1850,
    tag: "Featured",
    image: image("photo-1594035910387-fea47794261f", 1000),
    images: [
      image("photo-1594035910387-fea47794261f"),
      image("photo-1541643600914-78b084683601"),
      image("photo-1592945403244-b3fbafd7f539")
    ],
    stock: 8
  },
  {
    id: "jewelry-001",
    slug: "golden-elegance",
    name: "Golden Elegance",
    category: "jewelry",
    categoryLabel: "Modern Jewelry",
    description: "A modern accessory selected to complement your personal style.",
    fullDescription: "A refined accessory concept that adds a considered detail to everyday style. This sample listing is for demonstration; please confirm materials, care instructions, availability and final price with Zoot Times before ordering.",
    price: 1290,
    tag: "New",
    image: image("photo-1611652022419-a9419f74343d", 1000),
    images: [
      image("photo-1611652022419-a9419f74343d"),
      image("photo-1617038220319-276d3cfab638"),
      image("photo-1630019852942-f89202989a59")
    ],
    stock: 15
  },
  {
    id: "watch-002",
    slug: "minimalist-watch",
    name: "Minimalist Watch",
    category: "watches",
    categoryLabel: "Watches",
    description: "A minimalist watch concept for a refined everyday look.",
    fullDescription: "A pared-back timepiece concept designed to sit comfortably alongside a range of personal styles. This sample listing is for demonstration; please confirm product specifications, materials, availability and final price with Zoot Times before ordering.",
    price: 2150,
    tag: "Featured",
    image: image("photo-1524805444758-089113d48a6d", 1000),
    images: [
      image("photo-1524805444758-089113d48a6d"),
      image("photo-1523275335684-37898b6baf30"),
      image("photo-1533139502658-0198f920d8e8")
    ],
    stock: 5
  },
  {
    id: "perfume-002",
    slug: "amber-noir",
    name: "Amber Noir",
    category: "perfumes",
    categoryLabel: "Perfumes",
    description: "A warm, expressive fragrance concept for day-to-evening wear.",
    fullDescription: "An atmospheric fragrance concept imagined for a personal collection and considered gifting. This sample listing is for demonstration; please confirm volume, fragrance notes, origin, availability and final price with Zoot Times before ordering.",
    price: 2190,
    tag: "Best Seller",
    image: image("photo-1541643600914-78b084683601", 1000),
    images: [
      image("photo-1541643600914-78b084683601"),
      image("photo-1594035910387-fea47794261f"),
      image("photo-1592945403244-b3fbafd7f539")
    ],
    stock: 7
  },
  {
    id: "jewelry-002",
    slug: "sculpted-hoops",
    name: "Sculpted Hoops",
    category: "jewelry",
    categoryLabel: "Modern Jewelry",
    description: "A sculptural jewelry silhouette with a quietly polished feel.",
    fullDescription: "A modern jewelry concept with a distinctive shape that works for everyday styling or a more dressed-up look. This sample listing is for demonstration; please confirm materials, care instructions, availability and final price with Zoot Times before ordering.",
    price: 1590,
    tag: "Featured",
    image: image("photo-1617038220319-276d3cfab638", 1000),
    images: [
      image("photo-1617038220319-276d3cfab638"),
      image("photo-1611652022419-a9419f74343d"),
      image("photo-1630019852942-f89202989a59")
    ],
    stock: 10
  },
  {
    id: "watch-003",
    slug: "midnight-chronograph",
    name: "Midnight Chronograph",
    category: "watches",
    categoryLabel: "Watches",
    description: "A confident dark-dial watch concept with a versatile profile.",
    fullDescription: "A bold, dark-dial timepiece concept for those who prefer a more defined accessory. This sample listing is for demonstration; please confirm product specifications, materials, availability and final price with Zoot Times before ordering.",
    price: 3290,
    tag: "New",
    image: image("photo-1533139502658-0198f920d8e8", 1000),
    images: [
      image("photo-1533139502658-0198f920d8e8"),
      image("photo-1524592094714-0f0654e20314"),
      image("photo-1523275335684-37898b6baf30")
    ],
    stock: 6
  },
  {
    id: "perfume-003",
    slug: "botanical-mist",
    name: "Botanical Mist",
    category: "perfumes",
    categoryLabel: "Perfumes",
    description: "A light fragrance concept inspired by fresh, botanical notes.",
    fullDescription: "A fresh fragrance concept for those drawn to a lighter, botanical character. This sample listing is for demonstration; please confirm volume, fragrance notes, origin, availability and final price with Zoot Times before ordering.",
    price: 1690,
    tag: "New",
    image: image("photo-1592945403244-b3fbafd7f539", 1000),
    images: [
      image("photo-1592945403244-b3fbafd7f539"),
      image("photo-1594035910387-fea47794261f"),
      image("photo-1541643600914-78b084683601")
    ],
    stock: 11
  },
  {
    id: "jewelry-003",
    slug: "modern-pendant",
    name: "Modern Pendant",
    category: "jewelry",
    categoryLabel: "Modern Jewelry",
    description: "A clean pendant design concept for effortless layering.",
    fullDescription: "A simple pendant concept designed to complement layered looks or stand on its own. This sample listing is for demonstration; please confirm materials, chain length, care instructions, availability and final price with Zoot Times before ordering.",
    price: 1890,
    tag: "Best Seller",
    image: image("photo-1630019852942-f89202989a59", 1000),
    images: [
      image("photo-1630019852942-f89202989a59"),
      image("photo-1611652022419-a9419f74343d"),
      image("photo-1617038220319-276d3cfab638")
    ],
    stock: 9
  }
];

export const categories = [
  { slug: "watches", name: "Timeless Watches", shortName: "Watches", subtitle: "Make every second count.", image: image("photo-1523170335258-f5ed11844a49", 1600) },
  { slug: "perfumes", name: "Signature Fragrances", shortName: "Perfumes", subtitle: "A scent that defines you.", image: image("photo-1541643600914-78b084683601", 1000) },
  { slug: "jewelry", name: "Modern Jewelry", shortName: "Jewelry", subtitle: "Details that make a difference.", image: image("photo-1611652022419-a9419f74343d", 1000) }
] as const;
