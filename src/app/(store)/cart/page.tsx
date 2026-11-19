
"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const {
    lines,
    isReady,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();

  const items = lines
    .map((line) => ({
      ...line,
      product: products.find((p) => p.id === line.productId),
    }))
    .filter((line) => line.product);

  return (
    <main className="container-main min-h-screen py-16">
      <p className="section-label">YOUR SELECTION</p>

      <h1 className="mt-4 font-serif text-5xl">
        Shopping <span className="italic gold-text">Bag</span>
      </h1>

      {!isReady ? (
        <p className="mt-10 text-sm text-[#a49d90]">
          Loading cart…
        </p>
      ) : items.length === 0 ? (
        <div className="mt-12 border border-white/10 p-10 text-center">
          <p className="text-[#a49d90]">
            Your shopping bag is empty.
          </p>

          <Link href="/shop" className="gold-button mt-6">
            EXPLORE PRODUCTS
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="space-y-5">
            {items.map(({ product, quantity }) => (
              <div
                key={product!.id}
                className="flex gap-5 border-b border-white/10 pb-5"
              >
                <Link
                  href={`/product/${product!.slug}`}
                  className="relative h-28 w-24 shrink-0 overflow-hidden bg-[#25231f]"
                >
                  <Image
                    src={product!.image}
                    alt={product!.name}
                    fill
                    sizes="96px"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </Link>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] tracking-widest text-[#a99b7d]">
                    {product!.categoryLabel.toUpperCase()}
                  </p>

                  <Link href={`/product/${product!.slug}`}>
                    <h2 className="mt-2 font-serif text-lg transition hover:text-[#d8b66a]">
                      {product!.name}
                    </h2>
                  </Link>

                  <p className="mt-2 text-sm gold-text">
                    {formatPrice(product!.price)}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(product!.id, quantity - 1)
                      }
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                      className="text-[#c5beb1] transition hover:text-[#d8b66a] disabled:opacity-30"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="min-w-5 text-center text-xs">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(product!.id, quantity + 1)
                      }
                      disabled={quantity >= product!.stock}
                      aria-label="Increase quantity"
                      className="text-[#c5beb1] transition hover:text-[#d8b66a] disabled:opacity-30"
                    >
                      <Plus size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => removeItem(product!.id)}
                      className="ml-3 text-[#a49d90] transition hover:text-red-500"
                      aria-label={`Remove ${product!.name}`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-[#81796d]">
                    Item total: {formatPrice(product!.price * quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit border border-white/10 p-6">
            <h2 className="font-serif text-2xl">
              Order summary
            </h2>

            <div className="mt-6 flex justify-between text-sm">
              <span className="text-[#a49d90]">
                Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
              </span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <p className="mt-3 text-xs leading-6 text-[#81796d]">
              Delivery charges and payment options will be calculated
              during the production checkout flow.
            </p>

            <div className="mt-6 flex justify-between border-t border-white/10 pt-5">
              <span>Total</span>
              <span className="gold-text">
                {formatPrice(subtotal)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="gold-button mt-7 w-full"
            >
              PROCEED TO CHECKOUT
            </Link>

            <Link
              href="/shop"
              className="mt-5 block text-center text-xs text-[#a49d90] transition hover:text-[#d8b66a]"
            >
              CONTINUE SHOPPING
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
