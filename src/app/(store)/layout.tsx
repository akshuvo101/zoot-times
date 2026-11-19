import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/context/cart-context";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
    </CartProvider>
  );
}