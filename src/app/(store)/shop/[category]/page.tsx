import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/products/product-card";
import { products, categories } from "@/lib/products";

type Props = { params: Promise<{ category: string }> };
export function generateStaticParams() { return categories.map(category => ({ category: category.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const item = categories.find(c => c.slug === category);
  return { title: item?.name ?? "Category", description: item ? `${item.subtitle} Shop ${item.shortName.toLowerCase()} at Zoot Times.` : undefined };
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const selected = categories.find(c => c.slug === category);
  if (!selected) notFound();
  const items = products.filter(p => p.category === category);
  return <main className="container-main min-h-screen py-14 md:py-16">
    <p className="section-label">CURATED COLLECTION</p><h1 className="mt-4 font-serif text-5xl md:text-6xl">{selected.name}</h1>
    <p className="mt-4 text-sm text-[#a49d90]">{selected.subtitle}</p>
    <nav aria-label="Shop categories" className="mt-8 flex flex-wrap gap-2"><Link href="/shop" className="category-chip">All products</Link>{categories.map(c=><Link key={c.slug} href={`/shop/${c.slug}`} aria-current={c.slug === category ? "page" : undefined} className={`category-chip ${c.slug === category ? "category-chip-active" : ""}`}>{c.shortName}</Link>)}</nav>
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>
    {items.length === 0 && <p className="mt-12 text-sm text-[#a49d90]">Products will appear here once added by the store admin.</p>}
  </main>;
}
