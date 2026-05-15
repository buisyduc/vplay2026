"use client";
import Image from "next/image";

const HeroBanner = () => {


  return (
    <section className="relative w-full h-[480px] md:h-[560px]">
      <div className="absolute inset-0">
        <Image
          src="/Images/Banner/bannerhome.png"
          alt="VPlay Hero Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent" />
      </div>

      <div className="absolute top-4 right-1/2 translate-x-1/2">
        <Image
          src="/Images/Logo/logo1.png"
          alt="Logo"
          width={180}
          height={100}
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}
export default HeroBanner;