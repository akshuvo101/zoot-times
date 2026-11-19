import type { MetadataRoute } from "next";
import { products, categories } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const fixed = ["", "/shop", "/about", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
  const categoryUrls = categories.map((c) => ({ url: `${base}/shop/${c.slug}`, lastModified: new Date() }));
  const productUrls = products.map((p) => ({ url: `${base}/product/${p.slug}`, lastModified: new Date() }));
  return [...fixed, ...categoryUrls, ...productUrls];
}
