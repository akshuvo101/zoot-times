"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products } from "@/lib/products";

export type CartLine = {
  productId: string;
  quantity: number;
};

type CartContextType = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  isReady: boolean;
  toast: string;
  addItem: (productId: string, quantity?: number) => boolean;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "zoot-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          const validLines = parsed.filter(
            (line): line is CartLine =>
              typeof line?.productId === "string" &&
              Number.isInteger(line?.quantity) &&
              line.quantity > 0 &&
              products.some((product) => product.id === line.productId)
          );

          setLines(validLines);
        }
      }
    } catch {
      setLines([]);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    }
  }, [lines, isReady]);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2500);
  }, []);

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      const product = products.find((item) => item.id === productId);

      if (!product || product.stock < 1 || quantity < 1) {
        showToast("Sorry, this product is unavailable.");
        return false;
      }

      setLines((current) => {
        const existing = current.find(
          (line) => line.productId === productId
        );

        if (existing) {
          return current.map((line) =>
            line.productId === productId
              ? {
                  ...line,
                  quantity: Math.min(
                    line.quantity + quantity,
                    product.stock
                  ),
                }
              : line
          );
        }

        return [
          ...current,
          {
            productId,
            quantity: Math.min(quantity, product.stock),
          },
        ];
      });

      showToast("Product added to cart successfully!");
      return true;
    },
    [showToast]
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      const product = products.find((item) => item.id === productId);

      if (!product) return;

      if (quantity < 1) {
        setLines((current) =>
          current.filter((line) => line.productId !== productId)
        );
        return;
      }

      setLines((current) =>
        current.map((line) =>
          line.productId === productId
            ? {
                ...line,
                quantity: Math.min(quantity, product.stock),
              }
            : line
        )
      );
    },
    []
  );

  const removeItem = useCallback((productId: string) => {
    setLines((current) =>
      current.filter((line) => line.productId !== productId)
    );
  }, []);

  const clearCart = useCallback(() => {
    setLines([]);
  }, []);

  const itemCount = useMemo(
    () => lines.reduce((total, line) => total + line.quantity, 0),
    [lines]
  );

  const subtotal = useMemo(
    () =>
      lines.reduce((total, line) => {
        const product = products.find(
          (item) => item.id === line.productId
        );

        return total + (product?.price ?? 0) * line.quantity;
      }, 0),
    [lines]
  );

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotal,
      isReady,
      toast,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [
      lines,
      itemCount,
      subtotal,
      isReady,
      toast,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-5 top-24 z-[100] flex items-center gap-3 border border-[#d8b66a]/30 bg-[#1b1916] px-5 py-4 text-sm text-[#ead6a5] shadow-2xl"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d8b66a] text-xs font-bold text-black">
            ✓
          </span>
          {toast}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}