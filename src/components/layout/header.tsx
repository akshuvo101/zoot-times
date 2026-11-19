
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import ProductSearch from "@/components/layout/product-search";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11100e]/95 backdrop-blur-xl">
      <div className="container-main">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <button
            className="text-[#d8b66a] xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <Link
            href="/"
            className="shrink-0 text-center"
            aria-label="Zoot Times home"
          >
            <span className="block font-serif text-xl font-semibold tracking-[4px] text-[#e3c47e] sm:text-2xl">
              ZOOT TIMES
            </span>
            <span className="mt-1 hidden text-[8px] tracking-[3px] text-[#a49d90] sm:block">
              THE ART OF THE COZY LIFESTYLE
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#d0c9bc] transition hover:text-[#d8b66a]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-[#d8b66a] sm:gap-4">
            <ProductSearch />

            <Link
              href="/cart"
              aria-label={`Shopping cart, ${itemCount} items`}
              className="relative flex h-10 w-10 items-center justify-center transition hover:text-[#ead6a5]"
            >
              <ShoppingBag size={21} strokeWidth={1.7} />

              {itemCount > 0 && (
                <span
                  aria-label={`${itemCount} items in cart`}
                  className="absolute -right-1 -top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-full border-2 border-[#11100e] bg-red-600 px-1 text-[10px] font-bold leading-none text-white"
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-4 border-t border-white/10 py-5 xl:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#e3c47e]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
