
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { categories } from "@/lib/products";

const heroImages = [
  {
    src: "/images/banners/watch-background.png",
    alt: "Premium luxury watch collection",
  },
  {
    src: "/images/banners/perfume-background.png",
    alt: "Luxury perfume collection",
  },
  {
    src: "/images/banners/juwelary-background.png",
    alt: "Elegant jewelry collection",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#11100e] md:min-h-[680px]"
      aria-label="Featured Zoot Times collections"
    >
      {/* Background carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              active === index
                ? "z-[1] opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${image.src}")`,
              }}
            />
          </div>
        ))}

        {/* Dark overlays */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#11100e]/95 via-[#11100e]/70 to-[#11100e]/15" />

        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#11100e]/70 via-transparent to-[#11100e]/20" />
      </div>

      {/* Hero content */}
      <div className="container-main relative z-10 w-full py-24 md:py-28">
        <div className="max-w-[680px]">
          <p className="section-label mb-7">
            THE ART OF THE COZY LIFESTYLE
          </p>

          <h1 className="font-serif text-5xl leading-[1.1] text-[#f8f4ec] sm:text-7xl lg:text-[86px]">
            Elegance in
            <br />
            Every <span className="italic gold-text">Detail.</span>
          </h1>

          <p className="mt-7 max-w-[460px] text-sm leading-8 text-[#e0d9cd] md:text-base">
            Discover timeless watches, captivating fragrances and
            modern jewelry curated for your everyday lifestyle.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="gold-button group flex items-center gap-2"
            >
              EXPLORE COLLECTION
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link href="/about" className="outline-button">
              OUR STORY
            </Link>
          </div>

          {/* Category links */}
          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/shop/${category.slug}`}
                className="border border-white/25 bg-black/25 px-4 py-3 text-[10px] tracking-[1.5px] text-white backdrop-blur-sm transition hover:border-[#d8b66a] hover:text-[#e1c37f]"
              >
                <span className="mr-2 text-[#d8b66a]">
                  0{index + 1}
                </span>
                {category.shortName.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Manual indicators */}
      <div className="absolute bottom-7 right-6 z-20 flex gap-2 sm:right-10">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={active === index}
            className={`h-1.5 rounded-sm transition-all duration-300 ${
              active === index
                ? "w-10 bg-[#d8b66a]"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
