import Image from "next/image";
import Link from "next/link";

const ListItems = [
  { id: 1, thumbnail: "/Images/Frame123.jpg", code: "Nạp" },
  { id: 2, thumbnail: "/Images/Frame24.png", code: "ESPORTS" },
  { id: 3, thumbnail: "/Images/Frame22.png", code: "GAME H5" },
  { id: 4, thumbnail: "/Images/Frame23.png", code: "MINIGAME" }
];

const Ecosystem = () => {
  return (
    <div className="list-ecosystem w-full ">
      <div className="ecosystem-inner ">
        <div className="ecosystem-text shrink-0 text-white w-full md:w-auto">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-center md:text-left">
            Khám phá <br className="br " /> Hệ sinh thái
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-xs text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Elementum risus leo tortor
            enim. A sed sit nisi ornare lectus tristique diam bibendum
            imperdiet. Lectus purus ornare elit purus. Enim sit blandit id cras
            massa
          </p>
          <div className="button flex justify-center md:justify-start">
            <Link href="/ecosystem">
              <button className="text-white bg-blue-700 hover:bg-blue-600 transition-all duration-300 px-5 py-2 text-xs font-semibold rounded-xs">
                XEM TẤT CẢ
              </button>
            </Link>
          </div>
        </div>


        <div className="game-item-ecostystemf grid grid-cols-4 ">
          {ListItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden  flex-1 aspect-[3/4] cursor-pointer group"
            >
              <Image
                src={item.thumbnail}
                alt={item.code}
                fill
                className="object-cover group-hover: transition-transform duration-300  "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-blue-600/75 to-transparent transition-all duration-400 ease-in-out group-hover:h-20 z-10" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-sm font-bold tracking-wide mb-8">
                  {item.code}
                </span>
                <span className="text-lg font-bold mt-4">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9.19336H17.6377"
                      stroke="#AFAFAF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.31836 1L17.6372 9.19335L9.31836 17.3867"
                      stroke="#AFAFAF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="button_game">
          <Link href="/ecosystem">
              XEM TẤT CẢ
          </Link>
      </div>
    </div>
  );
};

export default Ecosystem;
