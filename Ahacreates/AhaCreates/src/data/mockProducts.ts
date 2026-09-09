export type Category = "Earrings" | "Necklaces" | "Rings" | "Bracelets";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  materials: string;
  dimensions: string;
  care: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Golden Hour Hoops",
    price: 1850,
    description:
      "Lightweight hammered hoops with a warm brushed finish. Designed for all-day wear — from morning coffee to evening gatherings.",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    materials: "Gold-plated brass, hypoallergenic posts",
    dimensions: "Diameter: 2.5 cm",
    care: "Keep dry. Store in the provided pouch. Wipe gently with a soft cloth.",
  },
  {
    id: "2",
    title: "Pearl Drop Studs",
    price: 1450,
    description:
      "Delicate freshwater pearl studs on sterling silver posts. A quiet statement for everyday elegance.",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1588444837495-c5d1b9c4f9b7?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a9a7575a49?w=800&q=80",
    ],
    materials: "Freshwater pearls, sterling silver",
    dimensions: "Pearl size: 6 mm",
    care: "Avoid perfumes and lotions. Store separately to prevent scratching.",
  },
  {
    id: "3",
    title: "Crescent Threader Earrings",
    price: 2100,
    description:
      "Thread-through crescent shapes that catch the light with every movement. Handmade in small batches.",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1611652022418-a9417f743002?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    ],
    materials: "Gold vermeil, 14k gold fill chain",
    dimensions: "Length: 5 cm",
    care: "Remove before swimming. Polish with a jewellery cloth occasionally.",
  },
  {
    id: "4",
    title: "Layered Chain Necklace",
    price: 2650,
    description:
      "Two delicate chains at varying lengths, finished with a tiny hand-formed charm. Perfect for layering or wearing solo.",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    materials: "Gold-filled chain, brass charm",
    dimensions: "16\" and 18\" adjustable",
    care: "Store flat or hanging. Avoid contact with water and chemicals.",
  },
  {
    id: "5",
    title: "Solstice Pendant",
    price: 3200,
    description:
      "A sun-inspired pendant on a fine cable chain. Each piece is individually shaped, so no two are exactly alike.",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
    materials: "Gold vermeil pendant, gold-filled chain",
    dimensions: "Pendant: 1.5 cm, Chain: 18\"",
    care: "Wipe after wear. Keep in anti-tarnish pouch provided.",
  },
  {
    id: "6",
    title: "Beaded Choker",
    price: 1950,
    description:
      "Hand-strung natural stone beads with a warm, earthy palette. Sits comfortably at the collarbone.",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022418-a9417f743002?w=800&q=80",
    ],
    materials: "Natural agate beads, gold-plated clasp",
    dimensions: "Length: 15\" with 2\" extender",
    care: "Avoid prolonged sun exposure. Restring every 1–2 years with heavy wear.",
  },
  {
    id: "7",
    title: "Twist Band Ring",
    price: 1750,
    description:
      "A gently twisted band that symbolises connection and continuity. Comfortable enough for daily wear.",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247fe67db627?w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    ],
    materials: "Gold-plated brass",
    dimensions: "Available in sizes 5–9",
    care: "Remove when washing hands. Store in ring box to maintain shape.",
  },
  {
    id: "8",
    title: "Open Stacking Ring",
    price: 1350,
    description:
      "Minimal open ring designed to stack beautifully with others. Hand-formed for a soft, organic silhouette.",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247fe67db627?w=800&q=80",
    ],
    materials: "Sterling silver with gold wash",
    dimensions: "Adjustable, fits sizes 5–8",
    care: "Polish with a silver cloth. Avoid harsh chemicals.",
  },
  {
    id: "9",
    title: "Woven Cuff Bracelet",
    price: 2450,
    description:
      "A hand-woven cuff with subtle texture and a soft gold finish. Slides on easily and stays secure.",
    category: "Bracelets",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    materials: "Gold-plated brass wire",
    dimensions: "Opening: 6 cm, adjustable",
    care: "Gently reshape if bent. Keep dry and store flat.",
  },
  {
    id: "10",
    title: "Charm Chain Bracelet",
    price: 1650,
    description:
      "Fine chain bracelet with three tiny hand-cast charms — a star, a moon, and a heart.",
    category: "Bracelets",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a9a7575a49?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c5d1b9c4f9b7?w=800&q=80",
    ],
    materials: "Gold-filled chain, brass charms",
    dimensions: "6.5\" with 1\" extender",
    care: "Clasp closed when not wearing. Avoid pulling on charms.",
  },
  {
    id: "11",
    title: "Minimal Signet Ring",
    price: 2200,
    description:
      "A modern take on the classic signet — smooth, understated, and engraved with a tiny sun motif.",
    category: "Rings",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247fe67db627?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    materials: "Gold vermeil over sterling silver",
    dimensions: "Available in sizes 5–9",
    care: "Remove before exercise. Store in provided ring box.",
  },
  {
    id: "12",
    title: "Dainty Bar Necklace",
    price: 1850,
    description:
      "A slim horizontal bar on a whisper-thin chain. Personalise with initial engraving on request.",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    ],
    materials: "Gold-filled bar and chain",
    dimensions: "Bar: 2 cm, Chain: 16\"–18\" adjustable",
    care: "Keep chain untangled. Wipe bar gently after wear.",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(
  productId: string,
  category: Category,
  limit = 4,
): Product[] {
  return products
    .filter((p) => p.id !== productId && p.category === category)
    .slice(0, limit);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export const categories: Category[] = [
  "Earrings",
  "Necklaces",
  "Rings",
  "Bracelets",
];

export const collectionCards = [
  {
    title: "Earrings",
    slug: "Earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    description: "Lightweight pieces for every day",
  },
  {
    title: "Necklaces",
    slug: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    description: "Layered chains and pendants",
  },
  {
    title: "Rings & Bracelets",
    slug: "Rings",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    description: "Stackable rings and woven cuffs",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  "https://images.unsplash.com/photo-1611652022418-a9417f743002?w=400&q=80",
  "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80",
  "https://images.unsplash.com/photo-1617038260897-41a9a7575a49?w=400&q=80",
  "https://images.unsplash.com/photo-1588444837495-c5d1b9c4f9b7?w=400&q=80",
];
