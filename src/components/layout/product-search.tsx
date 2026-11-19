"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { categories, products } from "@/lib/products";

export default function ProductSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? products.filter((product) =>
        [
          product.name,
          product.categoryLabel,
          product.category,
          product.description,
          product.fullDescription,
          product.tag ?? ""
        ].some((value) => value.toLowerCase().includes(normalizedQuery))
      ).slice(0, 4)
    : [];

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (!value) return;
    setOpen(false);
    router.push(`/shop?q=${encodeURIComponent(value)}`);
  }

  return <>
    <button
      type="button"
      aria-label="Search products"
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={() => setOpen(true)}
      className="inline-flex h-10 w-10 items-center justify-center text-[#d8b66a] transition hover:text-white"
    >
      <Search size={20} strokeWidth={1.7}/>
    </button>
    {open && <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-black/70 p-4 pt-20 backdrop-blur-sm sm:pt-28"
      onClick={() => setOpen(false)}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Search the Zoot Times collection"
        className="mx-auto max-w-2xl border border-white/10 bg-[#171512] p-5 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="section-label">FIND YOUR NEXT FAVOURITE</p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl">Search the collection</h2>
          </div>
          <button type="button" aria-label="Close search" onClick={() => setOpen(false)} className="p-2 text-[#a49d90] transition hover:text-white">
            <X size={21}/>
          </button>
        </div>
        <form onSubmit={submit} role="search" className="mt-6 flex border border-white/15 bg-white/[0.04] focus-within:border-[#d8b66a]">
          <label htmlFor="site-product-search" className="sr-only">Search products by name or keyword</label>
          <input
            id="site-product-search"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “classic watch” or “fragrance”"
            className="h-12 min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-[#777064]"
            type="search"
          />
          <button type="submit" aria-label="Show search results" className="px-4 text-[#d8b66a] transition hover:text-white">
            <Search size={19}/>
          </button>
        </form>

        <div className="mt-7">
          <p className="mb-3 text-[10px] tracking-[2px] text-[#969084]">{normalizedQuery ? "MATCHING PRODUCTS" : "SHOP BY CATEGORY"}</p>
          {normalizedQuery ? results.length > 0
            ? <div className="divide-y divide-white/10">
                {results.map((product) => <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-4 py-3 transition hover:text-[#e1c37f]"
                >
                  <span><span className="block font-serif text-lg">{product.name}</span><span className="mt-1 block text-[10px] tracking-wider text-[#969084]">{product.categoryLabel} · {product.tag ?? "Collection"}</span></span>
                  <ArrowUpRight size={17} className="shrink-0 text-[#d8b66a]"/>
                </Link>)}
              </div>
            : <p className="py-3 text-sm text-[#a49d90]">No matches yet. Try another name or keyword.</p>
            : <div className="flex flex-wrap gap-2">
                {categories.map((category) => <Link
                  key={category.slug}
                  href={`/shop/${category.slug}`}
                  onClick={() => setOpen(false)}
                  className="category-chip"
                >
                  {category.shortName}
                </Link>)}
              </div>}
        </div>
        {normalizedQuery && <button type="button" onClick={() => {
          setOpen(false);
          router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
        }} className="mt-5 text-xs tracking-wider text-[#d8b66a] transition hover:text-white">
          VIEW ALL RESULTS <ArrowUpRight size={14} className="ml-1 inline"/>
        </button>}
      </section>
    </div>}
  </>;
}
