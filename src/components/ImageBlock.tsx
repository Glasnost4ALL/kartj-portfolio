import Image from "next/image";

export default function ImageBlock({ src }: { src: string }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Image
        src={src}
        alt=""
        width={1400}
        height={933}
        className="w-full h-auto object-cover"
        priority={false}
        sizes="(max-width: 768px) 100vw, 1400px"
        quality={90}
      />
    </div>
  );
}
