import Image from "next/image";
import Link from "next/link";
const ListItems = [
  { id: 1, thumbnail: "/Images/Frame123.jpg", code: "Nạp" },
  { id: 2, thumbnail: "/Images/Frame24.png", code: "ESPORTS" },
  { id: 3, thumbnail: "/Images/Frame22.png", code: "GAME H5" },
  { id: 4, thumbnail: "/Images/Frame23.png", code: "MINIGAME" },
];

const Ecosystem = () => {
  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left: Text block */}
        <div className="md:w-[320px] shrink-0 text-white">
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Khám phá <br /> Hệ sinh thái
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Elementum risus leo tortor enim.
            A sed sit nisi ornare lectus tristique diam bibendum imperdiet. Lectus
            purus ornare elit purus. Enim sit blandit id cras massa.
          </p>
          <Link href="/ecosystem">
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 px-5 py-2 text-sm font-semibold rounded">
              XEM TẤT CẢ
            </button>
          </Link>
          
        </div>

        {/* Right: Cards */}
        <div className="flex flex-1 gap-3 overflow-x-auto">
          {ListItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden min-w-[150px] flex-1 aspect-[3/4] cursor-pointer group"
            >
              <Image
                src={item.thumbnail}
                alt={item.code}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Label + arrow */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-sm font-bold tracking-wide">{item.code}</span>
                <span className="text-lg font-bold">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ecosystem;