"use client";
import Image from "next/image";
import { useState } from "react";

const HeroBanner = () => {
  const [loaded, setLoaded] = useState(false);


  return (
    <section className="heroBanner relative w-full h-[480px] md:h-[560px] ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/Banner/T027_Banner 1.png"
          alt="VPlay Hero Banner"
          fill
          priority
          className="object-cover object-center"
          onLoad={() => setLoaded(true)}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent" />
      </div>

    </section>
  );
}
export default HeroBanner;