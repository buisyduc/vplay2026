import Image from "next/image";
import Link from "next/link";
const ListNews = () => {
  return (
    <div className=" gap-6 max-w-[1100px] mx-auto  md:flex-row items-center mt-8 ">
      <div className="flex gap-6">
        <div className="flex flex-col gap-3 w-[55%]">
          <div className="relative w-full aspect-video rounded-[24px] overflow-hidden shadow-lg">
            <Image
              src="/Images/Rectangle 26.png"
              alt="#"
              fill
              className="object-cover rounded-[24px] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="border border-blue-500 rounded-xl p-4">
            <h4 className="inline-flex items-center gap-1 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded mb-2">
              KHUYẾN MÃI
            </h4>
            <p className="text-sm text-gray-300 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
              nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam
              sagittis.Lorem ipsum dolor sit amet consectetur. Tellus velit elit
              tellus nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-[45%]">
          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-video rounded-[16px] overflow-hidden shadow-lg">
              <Image
                src="/Images/Rectangle 26.png"
                alt="#"
                fill
                className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
              TIN TỨC
            </h4>
            <p className="text-xs text-gray-300 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
              nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-video rounded-[16px] overflow-hidden shadow-lg">
              <Image
                src="/Images/Rectangle 26.png"
                alt="#"
                fill
                className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="inline-flex items-center gap-1 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded w-fit">
              KHUYẾN MÃI
            </h4>
            <p className="text-xs text-gray-300 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
              nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-video rounded-[16px] overflow-hidden shadow-lg">
              <Image
                src="/Images/Rectangle 26.png"
                alt="#"
                fill
                className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
              TIN TỨC
            </h4>
            <p className="text-xs text-gray-300 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
              nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-video rounded-[16px] overflow-hidden shadow-lg">
              <Image
                src="/Images/Rectangle 26.png"
                alt="#"
                width={20}
                height={50}
                className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
              TIN TỨC
            </h4>
            <p className="text-xs text-gray-300 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
              nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListNews;
