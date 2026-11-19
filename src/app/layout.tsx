import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Zoot Times | Premium Lifestyle", template: "%s | Zoot Times" },
  description: "Discover wrist watches, perfumes and modern jewelry at Zoot Times in Mirpur, Dhaka.",
  applicationName: "Zoot Times",
  keywords: ["Zoot Times", "wrist watches", "perfumes", "fragrances", "modern jewelry", "Mirpur", "Dhaka"],
  openGraph: { title: "Zoot Times | The Art of the Cozy Lifestyle", description: "Explore watches, fragrances and modern jewelry.", siteName: "Zoot Times", type: "website" },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
