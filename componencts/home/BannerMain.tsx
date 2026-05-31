import Image from "next/image";

const BannerMain = () => {
  return (
    <div className="bannerMain w-full mt-8 mb-25">
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

      <div className="text_bannermain py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <p className="text_dai text-gray-300 text-sm max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Quisque suspendisse interdum.
        </p>
        <p className="text_ngan text-gray-300 text-sm max-w-xl">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button>
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default BannerMain;
