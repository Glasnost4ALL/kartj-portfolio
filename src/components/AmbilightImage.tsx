"use client";

import { useState } from "react";
import Image from "next/image";

export default function AmbilightImage({ src }: { src: string }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden cursor-pointer transition-transform duration-200 ${
        clicked ? "scale-[0.98]" : "hover:scale-[1.005]"
      }`}
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200);
      }}
    >
      {/* Ambilight background — flou intense de l'image */}
      <div className="absolute inset-0 scale-[2] blur-[150px] opacity-50 pointer-events-none select-none z-0">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Image nette au premier plan */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-10">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={95}
        />
      </div>
    </div>
  );
}
