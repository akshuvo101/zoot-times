import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Watch } from "lucide-react";

export const metadata: Metadata = {
  title: "About Zoot Times",
  description: "Discover the story and philosophy behind Zoot Times — watches, fragrances and modern jewelry."
};

export default function AboutPage() {
  return <main>
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="container-main grid min-h-[440px] items-center gap-10 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
        <div><p className="section-label">OUR STORY · ZOOT TIMES</p>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.1] sm:text-6xl md:text-7xl">The Art of the <span className="italic gold-text">Cozy Lifestyle.</span></h1>
          <p className="mt-7 max-w-xl text-sm leading-8 text-[#aaa397]">We bring together wrist watches, perfumes and modern jewelry in one considered destination. Zoot Times is about the little details that help make everyday moments feel personal.</p>
          <Link href="/shop" className="gold-button mt-9">EXPLORE THE COLLECTION</Link>
        </div>
        <div className="relative min-h-[300px] overflow-hidden md:h-[420px]"><Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=85" alt="Lifestyle fashion editorial" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover"/></div>
      </div>
    </section>
    <section className="container-main py-20">
      <div className="mx-auto max-w-3xl text-center"><p className="section-label">WHAT WE BELIEVE</p><h2 className="mt-4 font-serif text-4xl md:text-5xl">Everyday pieces, <span className="italic gold-text">considered.</span></h2>
        <p className="mt-6 text-sm leading-8 text-[#a49d90]">Personal style is built through thoughtful choices. Our collections bring together accessories and fragrances for gifting, daily wear and the moments worth remembering. We aim to make browsing and connecting with our team simple and welcoming.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {[{icon:Watch,title:"Timeless watches",desc:"Explore timepieces that bring a considered finishing touch to your look."},{icon:Sparkles,title:"Signature fragrances",desc:"Discover scents for daily routines, special occasions and thoughtful gifts."},{icon:Heart,title:"Modern jewelry",desc:"Find the small details that add personality to your everyday style."}].map(item=><article key={item.title} className="border border-white/10 bg-[#191714] p-7"><item.icon className="text-[#d8b66a]" size={25}/><h3 className="mt-5 font-serif text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#969084]">{item.desc}</p></article>)}
      </div>
    </section>
    <section className="bg-[#191714] py-16 text-center"><div className="container-main"><p className="section-label">LET'S CONNECT</p><h2 className="mt-4 font-serif text-3xl md:text-4xl">Need a little <span className="italic gold-text">help?</span></h2><p className="mt-4 text-sm text-[#969084]">Our team is happy to help with product and order questions.</p><Link href="/contact" className="outline-button mt-7">CONTACT OUR TEAM</Link></div></section>
  </main>;
}
