
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Minus, Plus, Zap } from "lucide-react";
import { useCart } from "@/context/cart-context";

export default function AddToCart({
  productId,
  stock,
  disabled,
}: {
  productId: string;
  stock: number;
  disabled?: boolean;
}) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();

  function handleAddToCart() {
    if (disabled || stock < 1) return;

    addItem(productId, quantity);
  }

  function handleBuyNow() {
    if (disabled || stock < 1) return;

    const success = addItem(productId, quantity);

    if (success) {
      router.push("/checkout");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div
          className="flex h-11 items-center border border-white/15"
          aria-label="Quantity"
        >
          <button
            type="button"
            disabled={disabled || quantity <= 1}
            onClick={() => setQuantity((value) => value - 1)}
            aria-label="Decrease quantity"
            className="px-3 text-[#c5beb1] disabled:opacity-40"
          >
            <Minus size={14} />
          </button>

          <span className="min-w-7 text-center text-sm" aria-live="polite">
            {quantity}
          </span>

          <button
            type="button"
            disabled={disabled || quantity >= stock}
            onClick={() =>
              setQuantity((value) => Math.min(value + 1, stock))
            }
            aria-label="Increase quantity"
            className="px-3 text-[#c5beb1] disabled:opacity-40"
          >
            <Plus size={14} />
          </button>
        </div>

        <button
          type="button"
          disabled={disabled}
          onClick={handleAddToCart}
          className="gold-button min-h-11 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShoppingBag size={16} />
          ADD TO CART
        </button>
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={handleBuyNow}
        className="outline-button min-h-11 w-full disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Zap size={16} />
        BUY NOW
      </button>
    </div>
  );
}
