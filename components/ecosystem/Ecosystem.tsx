import Image from "next/image";
const ListItems = [
  { id: 1, thumbnail: "/Images/Frame123.jpg", code: "Nạp" },
  { id: 2, thumbnail: "/Images/Frame24.png", code: "ESPORTS" },
  { id: 3, thumbnail: "/Images/Frame22.png", code: "GAME H5" },
  { id: 4, thumbnail: "/Images/Frame23.png", code: "MINIGAME" },
  { id: 5, thumbnail: "/Images/Frame123.jpg", code: "Nạp" },
  { id: 6, thumbnail: "/Images/Frame24.png", code: "ESPORTS" },
  { id: 7, thumbnail: "/Images/Frame22.png", code: "GAME H5" },
  { id: 8, thumbnail: "/Images/Frame23.png", code: "MINIGAME" }
];

const Ecosystem = () => {
  return (
<div className="w-full  overflow-hidden box-border lg:mt-[64px] mb-[100px]   ">
  <div className="w-full max-w-[1100px] mx-auto overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b5b1b1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <p className="text-xs text-gray-400">Trang chủ </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b5b1b1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <p className="text-xs text-gray-400">Hệ sinh thái</p>
        </div>

        <h2 className="text-3xl font-bold text-white lg: font-manrope text-[42px] font-extrabold leading-[50px] tracking-normal mt-[35px] mb-[35px]">
          Khám phá Hệ sinh thái
        </h2>
        <p className="text-gray-30  text-sm  lg: font-manrope text-[16px] font-Regular leading-[22px] tracking-normal mb-[48px]">
          Lorem ipsum dolor sit amet consectetur. Elementum risus leo tortor
          enim. A sed sit nisi ornare lectus tristique diam bibendum imperdiet.
          Lectus purus ornare elit purus. Enim sit blandit id cras massa.
        </p>
        <div className="list_ecosystem_menu ">
          {ListItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden min-w-[150px] flex-1 aspect-[3/4] cursor-pointer group"
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
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.31836 1L17.6372 9.19335L9.31836 17.3867"
                      stroke="white"
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
      <div className="flex justify-center lg:mt-[48px] ">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-2 py-1 text-sm  transition-colors">
          XEM THÊM
        </button>
      </div>
    </div>
  );
};

export default Ecosystem;
