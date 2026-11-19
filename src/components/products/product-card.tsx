import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card group">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#25231f]">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="product-image object-cover" />
        {product.tag && <span className="absolute left-3 top-3 bg-[#d8b66a] px-2 py-1 text-[8px] uppercase tracking-wider text-black">{product.tag}</span>}
      </div>
      <div className="pt-4">
        <p className="text-[9px] tracking-[2px] text-[#a99b7d]">{product.categoryLabel.toUpperCase()}</p>
        <h3 className="mt-2 font-serif text-base sm:text-lg">{product.name}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm text-[#e1c37f]">{formatPrice(product.price)}</span>
          {product.compareAtPrice && <span className="text-xs text-[#81796d] line-through">{formatPrice(product.compareAtPrice)}</span>}
        </div>
      </div>
    </Link>
  );
}
