import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#0d0c0b] py-12">
    <div className="container-main grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div><Link href="/" className="font-serif text-2xl tracking-[3px] text-[#e1c37f]">ZOOT TIMES</Link>
        <p className="mt-4 max-w-xs text-xs leading-7 text-[#969084]">The art of the cozy lifestyle. Timeless watches, signature fragrances and modern jewelry for everyday expression.</p>
        <Link href="/about" className="mt-5 inline-block text-xs text-[#d8b66a] hover:text-white">Discover our story →</Link>
      </div>
      <div><h3 className="text-xs tracking-[2px] text-[#d8b66a]">EXPLORE</h3><div className="mt-5 flex flex-col gap-3 text-xs text-[#aaa397]">
        <Link href="/shop">Shop all</Link><Link href="/shop/watches">Watches</Link><Link href="/shop/perfumes">Perfumes</Link><Link href="/shop/jewelry">Jewelry</Link><Link href="/about">About Zoot Times</Link>
      </div></div>
      <div><h3 className="text-xs tracking-[2px] text-[#d8b66a]">CUSTOMER CARE</h3><div className="mt-5 flex flex-col gap-3 text-xs text-[#aaa397]">
        <Link href="/contact">Contact us</Link><Link href="/cart">Shopping bag</Link><Link href="/checkout">Checkout</Link>
      </div></div>
      <div><h3 className="text-xs tracking-[2px] text-[#d8b66a]">GET IN TOUCH</h3><div className="mt-5 flex flex-col gap-3 text-xs text-[#aaa397]">
        <a href="tel:01632855398">01632-855398</a><a href="mailto:zoottimes@gmail.com">zoottimes@gmail.com</a><a href="https://wa.me/8801600774044" target="_blank" rel="noreferrer">WhatsApp support</a><p>Road-04, Block-D, Mirpur, Dhaka, Bangladesh</p>
      </div><div className="mt-5 flex gap-4 text-[#d8b66a]">
        <a href="https://www.instagram.com/zoot.times/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19}/></a>
        <a href="https://www.facebook.com/profile.php?id=61572175062134" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={19}/></a>
        <a href="https://wa.me/8801600774044" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={19}/></a>
      </div></div>
    </div>
    <div className="container-main mt-12 border-t border-white/10 pt-6 text-center"><p className="text-[10px] tracking-wider text-[#777064]">© {new Date().getFullYear()} Zoot Times. All rights reserved.</p></div>
  </footer>;
}
