import Image from "next/image";
import Link from "next/link";
const News = () => {
  return (
    <div className="news_container_list w-full py-12 px-8 ">
      <div className="max-w-[1000px] mx-auto">
        <div className=" items-center justify-between ">
          {/* Filter buttons */}
          <div className=" menu_news flex gap-2">
            <button className=" text-white text-xs px-4 py-2 rounded border border-blue-500 bg-blue-600/30 hover:bg-blue-600/50">
              Tất cả (20)
            </button>
            <button className="text-gray-300 text-xs px-4 py-2 rounded border border-gray-600 bg-black/40 hover:border-gray-400 hover:text-white">
              MMO (10)
            </button>
            <button className="text-gray-300 text-xs px-4 py-2 rounded border border-gray-600 bg-black/40 hover:border-gray-400 hover:text-white">
              RPG (10)
            </button>
            <button className="text-gray-300 text-xs px-4 py-2 rounded border border-gray-600 bg-black/40 hover:border-gray-400 hover:text-white">
              HTML 5
            </button>
          </div>

          {/* Search */}
          <div className="search_new  flex  relative ">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="search_news_input bg-black/40 border border-gray-400 text-white text-sm placeholder-gray-500 px-4 py-2 pr-10 rounded-full focus:outline-none focus:border-gray-400 "
            />
            <div className="absolute right-3 top-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
        </div>
        <Link href="/news/detailednews">
          <div className=" item_new_container  grid grid-cols-2 gap-2 mt-4">
            <div className="relative w-full h-56 rounded overflow-hidden">
              <Image
                src="/Images/Rectangle 92.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="text_news_conten ">
              <h2 className="text-white text-xl font-semibold mb-2  lg: font-manrope text-[22px] font-SemiBold leading-[30px] tracking-normal ">
                Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
                erat quam egestas.
              </h2>
              <p className="text-sm text-[#D6D6D6] lg: font-manrope text-[16p x] font-Regular leading-[22px] tracking-normal">
                Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
                feugiat massa risus erat. Libero dignissim convallis egestas
                odio eget sit viverra sed sagittis. Amet leo eget vivamus amet
                tortor at felis neque. Accumsan ultricies neque mauris enim
                facilisis in.
              </p>
              <p className="text-gray-500 text-xs lg: font-manrope text-[14 x] font-Regular leading-[20px] ">
                07/07/2025
              </p>
            </div>
          </div>
        </Link>
        <div className=" item_new_container  grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-56 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle21.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="text_news_conten ">
            <h2 className="text-white text-xl font-semibold mb-2  lg: font-manrope text-[22px] font-SemiBold leading-[30px] tracking-normal ">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-[#D6D6D6] lg: font-manrope text-[16p x] font-Regular leading-[22px] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs lg: font-manrope text-[14 x] font-Regular leading-[20px] ">
              07/07/2025
            </p>
          </div>
        </div>
        <div></div>
        <div className=" item_new_container  grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-56 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle19.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="text_news_conten ">
            <h2 className="text-white text-xl font-semibold mb-2  lg: font-manrope text-[22px] font-SemiBold leading-[30px] tracking-normal ">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-[#D6D6D6] lg: font-manrope text-[16p x] font-Regular leading-[22px] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs lg: font-manrope text-[14 x] font-Regular leading-[20px] ">
              07/07/2025
            </p>
          </div>
        </div>
        <div className=" item_new_container  grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-56 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle 93.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="text_news_conten ">
            <h2 className="text-white text-xl font-semibold mb-2  lg: font-manrope text-[22px] font-SemiBold leading-[30px] tracking-normal ">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-[#D6D6D6] lg: font-manrope text-[16p x] font-Regular leading-[22px] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs lg: font-manrope text-[14 x] font-Regular leading-[20px] ">
              07/07/2025
            </p>
          </div>
        </div>
        <div className=" item_new_container  grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-56 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle21.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="text_news_conten ">
            <h2 className="text-white text-xl font-semibold mb-2  lg: font-manrope text-[22px] font-SemiBold leading-[30px] tracking-normal ">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-[#D6D6D6] lg: font-manrope text-[16p x] font-Regular leading-[22px] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs lg: font-manrope text-[14 x] font-Regular leading-[20px] ">
              07/07/2025
            </p>
          </div>
        </div>
        <div className=" item_new_container  grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-56 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle94.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="text_news_conten ">
            <h2 className="text-white text-xl font-semibold mb-2  lg: font-manrope text-[22px] font-SemiBold leading-[30px] tracking-normal ">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-[#D6D6D6] lg: font-manrope text-[16p x] font-Regular leading-[22px] tracking-normal">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs lg: font-manrope text-[14 x] font-Regular leading-[20px] ">
              07/07/2025
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {/* Prev */}
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.31885 17.3867L1.00001 9.19337L9.31885 1.00003"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {/* Pages */}
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 text-sm font-semibold rounded ${
                page === 1 ? "bg-blue-600 text-white" : " "
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9.31884 9.19335L1 17.3867"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default News;
