import Image from "next/image";

const Game = () => {
  return (
    <div className=" max-w-[1100px] mx-auto items-center mt-8">
      <h1 className="text-4xl">Mới phát hành & Sắp ra mắt</h1>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 px-2">
        {/* Filter buttons */}
        <div className="flex gap-2">
          <button className="text-white text-xs px-4 py-2 rounded border border-blue-500 bg-blue-600/30 hover:bg-blue-600/50">
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
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="bg-black/40 border border-gray-600 text-white text-sm placeholder-gray-500 px-4 py-2 pr-10 rounded-full focus:outline-none focus:border-gray-400 w-64"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <p>Quần Anh Phong Hoa Lục</p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit">
            MOMO
          </p>
          <p className="inline-flex items-center gap-1 bg-gray-500 text-white text-xs  px-2 py-1 rounded w-fit ml-2">
            Card Battle
          </p>
          <div className="relative w-full aspect-[16/10] mt-2">
            <Image
              src="/Images/Rectangle 26.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex justify-end -mt-8">
            <div className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 text-center leading-tight [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]">
              NEW
              <br />
              RELEASE
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-[#2e3448] hover:bg-[#3a4060] text-white text-xs font-semibold py-2.5 transition-colors">
              TRANG CHỦ
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2.5 transition-colors">
              TẢI XUỐNG
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 ">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3  transition-colors">
          XEM THÊM
        </button>
      </div>
    </div>
  );
};

export default Game;
