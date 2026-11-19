import Link from "next/link";

export default function CheckoutPage() {
  return <main className="container-main min-h-[65vh] py-20">
    <p className="section-label">SECURE CHECKOUT</p>
    <h1 className="mt-4 font-serif text-5xl">Checkout</h1>
    <div className="mt-10 max-w-2xl border border-[#d8b66a]/20 bg-[#1b1916] p-7">
      <p className="text-sm leading-7 text-[#c5beb1]">Checkout is not connected to a live order backend yet. Customer details, stock reservation, COD order creation and online payment verification will be implemented after the Supabase schema and merchant gateway credentials are configured.</p>
      <Link href="/cart" className="outline-button mt-6">RETURN TO CART</Link>
    </div>
  </main>;
}
