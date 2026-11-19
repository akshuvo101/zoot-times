import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import AddToCart from "@/components/products/add-to-cart";
import ProductCard from "@/components/products/product-card";
import ProductGallery from "@/components/products/product-gallery";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  return { title: product?.name ?? "Product", description: product?.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  const recommendations = products.filter(item => item.category === product.category && item.id !== product.id).slice(0, 3);

  return <main className="container-main py-7 md:py-10">
    <Link href={`/shop/${product.category}`} className="mb-5 inline-flex items-center gap-2 text-xs tracking-wider text-[#bdb5a7] transition hover:text-[#d8b66a]"><ArrowLeft size={15}/> BACK TO {product.categoryLabel.toUpperCase()}</Link>
    <div className="grid items-start gap-7 md:grid-cols-2 md:gap-12">
      <ProductGallery images={product.images} name={product.name}/>
      <div className="py-1 md:py-3">
        <p className="section-label">{product.categoryLabel}</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{product.name}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-3"><span className="text-2xl gold-text">{formatPrice(product.price)}</span>{product.compareAtPrice && <span className="text-sm text-[#81796d] line-through">{formatPrice(product.compareAtPrice)}</span>}{product.tag && <span className="border border-[#d8b66a]/30 px-2 py-1 text-[9px] uppercase tracking-wider text-[#d8b66a]">{product.tag}</span>}</div>
        <p className="mt-5 max-w-lg text-sm leading-7 text-[#a49d90]">{product.fullDescription}</p>
        <p className="mt-4 inline-flex items-center gap-2 text-xs text-[#b6ad9d]"><CheckCircle2 size={15} className="text-[#d8b66a]"/>{product.stock > 0 ? "Sample availability (confirm with store)" : "Currently unavailable"}</p>
        <div className="mt-5"><AddToCart productId={product.id} stock={product.stock} disabled={product.stock < 1}/></div>
        <div className="mt-6 border-t border-white/10 pt-4 text-xs leading-6 text-[#81796d]">Sample catalog only. Product specifications, stock and final prices need confirmation; live order processing and online payments are not enabled.</div>
      </div>
    </div>
    <section className="mt-14 border-t border-white/10 pt-10 md:mt-16">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="section-label">YOU MAY ALSO LIKE</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">Related <span className="italic gold-text">products</span></h2></div><Link href={`/shop/${product.category}`} className="inline-flex items-center gap-2 text-xs text-[#d8b66a]">VIEW CATEGORY <ArrowRight size={15}/></Link></div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">{recommendations.map(item => <ProductCard key={item.id} product={item}/>)}</div>
    </section>
  </main>;
}
