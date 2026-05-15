import Image from "next/image";

const BannerMain = () => {
  return (
    <div className="w-full mt-8">
      <section className="relative w-full h-[280px] md:h-[360px] overflow-hidden">
        <Image
          src="/Images/Banner/Rectangle 23.png"
          alt="VPlay Hero Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      <div className=" py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <p className="text-gray-300 text-sm max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Quisque suspendisse interdum.
        </p>
        <button className="shrink-0 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 px-5 py-2 text-sm font-semibold rounded">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default BannerMain;