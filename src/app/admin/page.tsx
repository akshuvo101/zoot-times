import Link from "next/link";

export default function AdminPreviewPage() {
  return <main className="container-main min-h-screen py-20">
    <p className="section-label">STORE MANAGEMENT</p>
    <h1 className="mt-4 font-serif text-5xl">Admin <span className="italic gold-text">Dashboard</span></h1>
    <div className="mt-10 max-w-2xl border border-[#d8b66a]/20 bg-[#1b1916] p-7">
      <p className="text-sm leading-7 text-[#c5beb1]">This route is a development placeholder, not a secured admin panel. Admin authentication, role-based authorization, product CRUD and order management must be implemented with Supabase before this page is exposed in production.</p>
      <Link href="/" className="outline-button mt-6">BACK TO STORE</Link>
    </div>
  </main>;
}
