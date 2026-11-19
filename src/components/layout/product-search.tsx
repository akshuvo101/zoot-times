
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  X,
  ArrowUpRight,
  Watch,
  Gem,
  Droplets,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { categories } from "@/lib/products";

function getCategoryIcon(slug: string) {
  if (slug.includes("watch")) return Watch;
  if (slug.includes("perfume")) return Droplets;
  if (slug.includes("jewel")) return Gem;
  return Sparkles;
}

export default function ProductSearch() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      {/* Discovery Trigger */}
      <button
        type="button"
        aria-label="Explore collections"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="group relative inline-flex h-10 w-10 items-center justify-center text-[#d8b66a] transition duration-300 hover:text-white"
      >
        <Search
          size={21}
          strokeWidth={1.6}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d8b66a] transition-all duration-300 group-hover:w-5" />
      </button>

      {/* Portal: Render outside Header stacking context */}
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] grid place-items-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-5"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeMenu();
              }
            }}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-label="Explore Zoot Times collections"
              className="relative my-auto max-h-[calc(100dvh-24px)] w-full max-w-3xl overflow-y-auto overscroll-contain border border-[#d8b66a]/25 bg-[#15130f] shadow-[0_25px_100px_rgba(0,0,0,0.75)] sm:max-h-[calc(100dvh-40px)]"
            >
              {/* Decorative top line */}
              <div className="sticky top-0 z-10 h-[2px] w-full bg-gradient-to-r from-transparent via-[#d8b66a] to-transparent" />

              <div className="p-5 sm:p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-[#d8b66a]" />
                      <p className="text-[9px] font-medium tracking-[3px] text-[#d8b66a]">
                        THE ZOOT TIMES EXPERIENCE
                      </p>
                    </div>

                    <h2 className="mt-3 font-serif text-3xl text-[#eee5d5] sm:text-4xl">
                      Discover Your{" "}
                      <span className="italic text-[#d8b66a]">Style</span>
                    </h2>

                    <p className="mt-2 max-w-md text-xs leading-6 text-[#a49d90] sm:text-sm">
                      Explore our curated collections and find something
                      extraordinary.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close collections"
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-[#a49d90] transition duration-300 hover:border-[#d8b66a]/50 hover:bg-[#d8b66a]/10 hover:text-[#e3c47e]"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* All Products */}
                <Link
                  href="/shop"
                  onClick={closeMenu}
                  className="group mt-6 flex items-center justify-between gap-4 border border-[#d8b66a]/30 bg-gradient-to-r from-[#d8b66a]/10 to-transparent p-4 transition duration-300 hover:border-[#d8b66a]/70 hover:from-[#d8b66a]/15 sm:mt-7 sm:p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#d8b66a]/30 bg-[#d8b66a]/10 text-[#e3c47e] sm:h-12 sm:w-12">
                      <LayoutGrid size={22} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="font-serif text-xl text-[#eee5d5] sm:text-2xl">
                        All Products
                      </p>
                      <p className="mt-1 text-[9px] tracking-wider text-[#a49d90]">
                        EXPLORE THE COMPLETE COLLECTION
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="shrink-0 text-[#d8b66a] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                {/* Categories */}
                <div className="mt-6 sm:mt-7">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[10px] tracking-[2.5px] text-[#a49d90]">
                      EXPLORE BY CATEGORY
                    </p>
                    <span className="ml-4 h-px flex-1 bg-white/10" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {categories.map((category) => {
                      const Icon = getCategoryIcon(category.slug);

                      return (
                        <Link
                          key={category.slug}
                          href={`/shop/${category.slug}`}
                          onClick={closeMenu}
                          className="group flex min-h-[115px] flex-col justify-between border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#d8b66a]/50 hover:bg-[#d8b66a]/[0.07] sm:min-h-[130px] sm:p-5"
                        >
                          <div className="flex items-start justify-between">
                            <Icon
                              size={24}
                              strokeWidth={1.4}
                              className="text-[#d8b66a] transition-transform duration-300 group-hover:scale-110"
                            />

                            <ArrowUpRight
                              size={15}
                              className="text-[#746d60] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8b66a]"
                            />
                          </div>

                          <div>
                            <h3 className="font-serif text-lg text-[#e8dfd0] transition group-hover:text-[#e3c47e] sm:text-xl">
                              {category.shortName}
                            </h3>

                            <p className="mt-1 text-[9px] tracking-[1.5px] text-[#81796d]">
                              EXPLORE COLLECTION
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 sm:mt-7 sm:flex-row">
                  <p className="text-center text-[9px] tracking-[2px] text-[#81796d]">
                    THE ART OF THE COZY LIFESTYLE
                  </p>

                  <span className="text-[9px] tracking-[2px] text-[#d8b66a]/70">
                    ZOOT TIMES
                  </span>
                </div>
              </div>
            </section>
          </div>,
          document.body
        )}
    </>
  );
}
