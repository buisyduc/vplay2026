"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Game = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerScroll = () => {
      if (scrollRef.current && window.innerWidth <= 991.98) {
        const container = scrollRef.current;
        container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
      }
    };

    // Cuộn ra giữa ngay khi load
    centerScroll();

    // Lắng nghe sự kiện resize để giữ ở giữa khi xoay màn hình/co giãn
    window.addEventListener("resize", centerScroll);
    return () => window.removeEventListener("resize", centerScroll);
  }, []);

  return (
    <div className="list_games_menu w-full p px-6">
      <div className="game_menu">
        <h1 className="text-4xl">Mới phát hành & Sắp ra mắt</h1>
        <div className="game_list_top" ref={scrollRef}>
          <div className="game1 relative overflow-hidden rounded-lg bg-[#050816] p-4">

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
            <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className="game1 relative overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className="game1 relative overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
        </div>
        <div className="menu_game items-center justify-between  px-2">
          {/* Filter buttons */}
          <div className="menu_game_item flex flex-wrap gap-2 pb-1 ">
            <button className="text-white text-xs px-4 py-2 rounded border border-blue-500 bg-blue-600/30 hover:bg-blue-600/50">
              Tất cả (20)
            </button>
            <button className="text-gray-300 text-xs px-4 py-2 rounded border  border-blue-500 bg-black/40 hover:border-gray-400 hover:text-white">
              MMO (10)
            </button>
            <button className="text-gray-300 text-xs px-4 py-2 rounded border border-blue-500  bg-black/40 hover:border-gray-400 hover:text-white">
              RPG (10)
            </button>
            <button className="text-gray-300 text-xs px-4 py-2 rounded border  border-blue-500 bg-black/40 hover:border-gray-400 hover:text-white">
              HTML 5
            </button>
          </div>

          {/* Search */}
          <div className="search_game  flex  relative ">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="search_game_input bg-black/40 border border-gray-400 text-white text-sm placeholder-gray-500 px-4 py-2 pr-10 rounded-full focus:outline-none focus:border-gray-400 "
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
        <div className="list-games_item">
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-4">
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
              <button className="flex items-center justify-center gap-1.5 bg-[#2e3448]  hover:bg-[#3a4060]  rounded-sm text-white text-xs font-semibold py-2.5 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbfafa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>

                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-sm font-semibold py-2.5 transition-colors">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
        </div>


        <div className="xemthem_game flex justify-center ">
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold px-2 py-1  transition-colors">
            XEM THÊM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
