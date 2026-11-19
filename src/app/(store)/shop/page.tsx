import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { products, categories } from "@/lib/products";

export const metadata: Metadata = { title: "Shop all products", description: "Shop watches, perfumes and modern jewelry from Zoot Times." };
type Props = { searchParams: Promise<{ q?: string }> };

export default async function ShopPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const filtered = query ? products.filter(p => [p.name, p.categoryLabel, p.category, p.description, p.fullDescription, p.tag ?? ""].some(value => value.toLowerCase().includes(query))) : products;
  return <main className="container-main min-h-screen py-14 md:py-16">
    <p className="section-label">THE ZOOT TIMES COLLECTION</p>
    <h1 className="mt-4 font-serif text-5xl">Shop <span className="italic gold-text">All</span></h1>
    <p className="mt-4 text-sm text-[#a49d90]">Explore our curated watches, fragrances and modern jewelry.</p>
    <nav aria-label="Shop categories" className="mt-8 flex flex-wrap gap-2">
      <Link href="/shop" className="category-chip">All products</Link>
      {categories.map(category => <Link key={category.slug} href={`/shop/${category.slug}`} className="category-chip">{category.shortName}</Link>)}
    </nav>
    {query && <p className="mt-8 text-sm text-[#a49d90]">Search results for <strong className="text-[#e8dfcf]">“{q}”</strong> · {filtered.length} found <Link href="/shop" className="ml-2 text-[#d8b66a]">Clear search</Link></p>}
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">{filtered.map(p => <ProductCard key={p.id} product={p}/>)}</div>
    {filtered.length === 0 && <div className="mt-12 border border-white/10 p-10 text-center"><p className="font-serif text-2xl">No products found</p><p className="mt-3 text-sm text-[#969084]">Try another product name or category.</p><Link href="/shop" className="gold-button mt-6">VIEW ALL PRODUCTS</Link></div>}
    <p className="mt-10 text-xs text-[#81796d]">Demo catalogue: replace sample products, prices, stock and images with verified Zoot Times inventory before launch.</p>
  </main>;
}
