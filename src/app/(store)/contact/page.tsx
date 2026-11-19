import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Clock3, Instagram, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Zoot Times",
  description: "Contact Zoot Times in Mirpur, Dhaka for watches, perfumes, jewelry and order enquiries."
};

export default function ContactPage() {
  return <main className="container-main min-h-[70vh] py-16 md:py-24">
    <div className="max-w-2xl"><p className="section-label">WE WOULD LOVE TO HEAR FROM YOU</p>
      <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Let's talk about <span className="italic gold-text">your style.</span></h1>
      <p className="mt-6 text-sm leading-8 text-[#a49d90]">Questions about a product, an order or a gift? Reach out to the Zoot Times team using any of the contact options below.</p>
    </div>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a className="contact-tile" href="tel:01632855398"><Phone className="text-[#d8b66a]"/><h2 className="mt-5 font-serif text-xl">Call us</h2><p className="mt-2 text-sm text-[#a49d90]">01632-855398</p></a>
      <a className="contact-tile" href="mailto:zoottimes@gmail.com"><Mail className="text-[#d8b66a]"/><h2 className="mt-5 font-serif text-xl">Email</h2><p className="mt-2 break-all text-sm text-[#a49d90]">zoottimes@gmail.com</p></a>
      <a className="contact-tile" href="https://wa.me/8801600774044" target="_blank" rel="noreferrer"><MessageCircle className="text-[#d8b66a]"/><h2 className="mt-5 font-serif text-xl">WhatsApp</h2><p className="mt-2 text-sm text-[#a49d90]">+880 1600-774044</p></a>
      <div className="contact-tile"><MapPin className="text-[#d8b66a]"/><h2 className="mt-5 font-serif text-xl">Visit / service area</h2><p className="mt-2 text-sm leading-6 text-[#a49d90]">Road-04, Block-D, Mirpur, Dhaka, Bangladesh</p></div>
    </div>
    <section className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
      <div><div className="flex items-center gap-3"><Clock3 className="text-[#d8b66a]"/><h2 className="font-serif text-2xl">Customer support</h2></div><p className="mt-4 text-sm leading-7 text-[#a49d90]">For the latest availability, delivery information and product details, please contact us directly. Our team can help confirm the information before you place an order.</p></div>
      <div><h2 className="font-serif text-2xl">Follow Zoot Times</h2><p className="mt-4 text-sm text-[#a49d90]">See new arrivals and updates on our social channels.</p><div className="mt-5 flex flex-wrap gap-5 text-sm text-[#d8b66a]"><a className="inline-flex items-center gap-2" href="https://www.instagram.com/zoot.times/" target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a><a className="inline-flex items-center gap-2" href="https://www.facebook.com/profile.php?id=61572175062134" target="_blank" rel="noreferrer"><Facebook size={17}/> Facebook</a></div></div>
    </section>
  </main>;
}
