import Image from "next/image";

export default function FullBleedImage({ src }: { src: string }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>
    </div>
  );
}
