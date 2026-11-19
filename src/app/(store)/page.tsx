import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, MessageCircle, Search } from "lucide-react";
import { categories, products } from "@/lib/products";
import ProductCard from "@/components/products/product-card";
import HeroCarousel from "@/components/layout/hero-carousel";

const productShelves = [
  { tag: "Featured", eyebrow: "HANDPICKED FOR YOU", title: "Featured", accent: "Collection", description: "A considered edit across watches, fragrances and jewelry.", background: true },
  { tag: "Best Seller", eyebrow: "FAVOURITES FROM THE COLLECTION", title: "Best", accent: "Sellers", description: "Explore pieces highlighted in our sample collection.", background: false },
  { tag: "New", eyebrow: "JUST ADDED TO THE EDIT", title: "New", accent: "Arrivals", description: "Discover the latest additions to our demo catalog.", background: true }
] as const;

const questions = [
  { question: "Are the products, prices and stock live?", answer: "No. This is a sample catalog to demonstrate the storefront. Product specifications, availability and final prices need to be confirmed with Zoot Times." },
  { question: "Can I place and pay for an order online?", answer: "The cart is a local demo feature. Checkout, live order processing and online payments are not connected yet." },
  { question: "How can I ask about a product?", answer: "Use the Contact page to reach the Zoot Times team and confirm the latest product information." }
];

export default function HomePage() {
  return <main>
    <HeroCarousel/>

    <section className="container-main py-16 md:py-20" aria-labelledby="category-heading">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div><p className="section-label mb-3">FIND YOUR FAVOURITE</p><h2 id="category-heading" className="font-serif text-3xl md:text-4xl">Shop by <span className="italic gold-text">Category</span></h2></div>
        <Link href="/shop" className="flex items-center gap-2 text-[10px] tracking-wider text-[#d8b66a]">ALL COLLECTIONS <ArrowUpRight size={15}/></Link>
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-5">
        {categories.map((category, index) => <Link href={`/shop/${category.slug}`} key={category.slug} className="group relative h-32 overflow-hidden bg-[#25231f] sm:h-44 md:h-56">
          <Image src={category.image} alt={category.name} fill sizes="(max-width: 768px) 33vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10"/>
          <div className="absolute inset-x-2 bottom-3 text-center sm:bottom-5"><span className="hidden text-[9px] tracking-[2px] text-[#e1c37f] sm:block">0{index + 1} / COLLECTION</span><h3 className="font-serif text-sm sm:mt-2 sm:text-2xl">{category.shortName}</h3><span className="mt-1 hidden items-center justify-center gap-1 text-[9px] tracking-widest text-[#e1c37f] sm:inline-flex">EXPLORE <ArrowRight size={12}/></span></div>
        </Link>)}
      </div>
    </section>

    {productShelves.map((shelf) => <section key={shelf.tag} className={`${shelf.background ? "bg-[#191714]" : ""} py-14 md:py-18`}>
      <div className="container-main">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div><p className="section-label mb-3">{shelf.eyebrow}</p><h2 className="font-serif text-3xl md:text-4xl">{shelf.title} <span className="italic gold-text">{shelf.accent}</span></h2><p className="mt-3 text-sm text-[#969084]">{shelf.description}</p></div>
          <Link href="/shop" className="inline-flex items-center gap-2 text-[10px] tracking-wider text-[#d8b66a]">SHOP ALL <ArrowUpRight size={15}/></Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {products.filter((product) => product.tag === shelf.tag).map((product) => <ProductCard key={product.id} product={product}/>)}
        </div>
      </div>
    </section>)}

    <section className="container-main grid grid-cols-1 items-center gap-9 py-16 md:grid-cols-2 md:gap-16 md:py-20">
      <div className="relative h-[300px] overflow-hidden bg-[#25231f] md:h-[420px]">
        <Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1100&q=85" alt="Lifestyle fashion editorial" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/>
      </div>
      <div><p className="section-label mb-5">OUR PHILOSOPHY</p><h2 className="font-serif text-4xl leading-tight md:text-6xl">More Than<br/>Just <span className="italic gold-text">Style.</span></h2><p className="mt-6 text-sm leading-8 text-[#a49d90]">At Zoot Times, we believe the little details make life extraordinary. From timeless timepieces to captivating fragrances and modern jewelry, every selection is about expressing your individuality.</p><Link href="/about" className="gold-button mt-8">DISCOVER OUR STORY <ArrowRight size={16}/></Link></div>
    </section>

    <section className="border-y border-white/10 bg-[#191714] py-14 md:py-16">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center"><p className="section-label">A THOUGHTFUL WAY TO DISCOVER</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">Your style, <span className="italic gold-text">your pace.</span></h2><p className="mt-3 text-sm leading-7 text-[#969084]">Browse the sample collection, explore the details, and contact the team to confirm product information before making a decision.</p></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {[{ icon: Search, title: "Explore by interest", text: "Browse a focused range of watches, fragrances and jewelry." }, { icon: BookOpen, title: "See the details", text: "Product pages bring descriptions, sample prices and imagery together." }, { icon: MessageCircle, title: "Ask before you decide", text: "Contact Zoot Times to confirm the latest product information." }].map((benefit) => <article key={benefit.title} className="border border-white/10 p-6">
            <benefit.icon size={22} strokeWidth={1.5} className="text-[#d8b66a]"/><h3 className="mt-4 font-serif text-xl">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-[#969084]">{benefit.text}</p>
          </article>)}
        </div>
        <div className="mt-7 text-center"><Link href="/contact" className="outline-button">CONTACT ZOOT TIMES <ArrowRight size={15}/></Link></div>
      </div>
    </section>

    <section className="container-main py-14 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-7 text-center"><p className="section-label">GOOD TO KNOW</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">Frequently asked <span className="italic gold-text">questions.</span></h2></div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {questions.map((item) => <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg marker:hidden">{item.question}<span aria-hidden="true" className="text-xl text-[#d8b66a] transition group-open:rotate-45">+</span></summary>
            <p className="max-w-2xl pt-3 text-sm leading-7 text-[#969084]">{item.answer}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-[#191714] py-14 text-center md:py-16">
      <div className="container-main"><p className="section-label">STAY CONNECTED</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">Follow the <span className="italic gold-text">Zoot Lifestyle</span></h2><p className="mt-3 text-sm text-[#969084]">Explore updates on our social channels or get in touch with the team.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><a href="https://www.instagram.com/zoot.times/" target="_blank" rel="noreferrer" className="outline-button">INSTAGRAM <ArrowUpRight size={14}/></a><a href="https://www.facebook.com/profile.php?id=61572175062134" target="_blank" rel="noreferrer" className="outline-button">FACEBOOK <ArrowUpRight size={14}/></a><Link href="/contact" className="gold-button">CONTACT US <ArrowRight size={15}/></Link></div></div>
    </section>
  </main>;
}
