import Image from "next/image";

export default function ProductGallery({ images, name }: { images: [string, string, string]; name: string }) {
  return <div className="relative aspect-square max-h-[520px] overflow-hidden bg-[#f0ece4] md:aspect-[1.08/1]">
    <Image
      src={images[0]}
      alt={name}
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-contain p-8 sm:p-12"
    />
  </div>;
}
