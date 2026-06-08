"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Game = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerScroll = () => {
      if (scrollRef.current && window.innerWidth <= 991.98) {
        const container = scrollRef.current;
        container.scrollLeft =
          (container.scrollWidth - container.clientWidth) / 2;
      }
    };

    centerScroll();

    window.addEventListener("resize", centerScroll);
    return () => window.removeEventListener("resize", centerScroll);
  }, []);

  return (
    <div className="list_games_menu w-full ">
      <div className="game_menu">
        <h1 className="text-4xl">Mới phát hành & Sắp ra mắt</h1>
        <div className="game_list_top" ref={scrollRef}>
          <div className="game1 relative overflow-hidden rounded-lg bg-[#050816] p-6 gap-[4px]">
            <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
              Card Battle
            </p>
            <div className="relative w-full aspect-[16/10] mt-2 mt-[12px] mb-[12px]">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
              <div className="new-release-badge absolute bottom-[-7px] right-[-7px] w-[38%] h-auto rounded-br-lg">
                <img alt="" src="/images/new-release.webp"></img>
              </div>
            </div>

            <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className="game1 relative overflow-hidden rounded-lg bg-[#050816] p-6 gap-[4px]">
            <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
              Card Battle
            </p>
            <div className="relative w-full aspect-[16/10] mt-2 mt-[12px] mb-[12px]">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
              <div className="new-release-badge absolute bottom-[-7px] right-[-7px] w-[38%] h-auto rounded-br-lg">
                <img alt="" src="/images/new-release.webp"></img>
              </div>
            </div>

            <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className="game1 relative overflow-hidden rounded-lg bg-[#050816] p-6 gap-[4px]">
            <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
              Card Battle
            </p>
            <div className="relative w-full aspect-[16/10] mt-2 mt-[12px] mb-[12px]">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
              <div className="new-release-badge absolute bottom-[-7px] right-[-7px] w-[38%] h-auto rounded-br-lg">
                <img alt="" src="/images/new-release.webp"></img>
              </div>
            </div>

            <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
         
        </div>
        <div className="menu_game items-center justify-between  relative ">
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
          <div className="search_game  flex   ">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="search_game_input bg-black/40 border border-gray-400 text-white text-sm placeholder-gray-500 px-4 py-2 pr-10 rounded-full focus:outline-none focus:border-gray-400 "
            />
            <div className="icon_search absolute right-3 top-2.5">
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
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-6">
             <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
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
            
             <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-6">
             <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
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
            
             <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-6">
             <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
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
            
             <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-6">
             <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
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
            
             <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-6">
             <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
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
            
             <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          <div className=" overflow-hidden rounded-lg bg-[#050816] p-6">
             <p className="font-manrope font-semibold text-[18px] leading-[24px]  mb-[4px]">
              Quần Anh Phong Hoa Lục
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded-[4px] w-fit">
              MOMO
            </p>
            <p className="inline-flex items-center gap-1 bg-[#3A3A3A] text-[#D6D6D6] text-[12px] font-manrope font-semibold px-[8px] py-[4px] rounded w-fit ml-2">
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
            
             <div className="game1 grid grid-cols-2 mt-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-[#3A3A3A]  hover:bg-[#3a4060]  rounded-[4px] text-[#FFFFFF] text-[12px] py-[16px] px-[8px] font-manrope font-semibold    transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71416 1.87974L2.09416 5.57974C1.57416 5.99307 1.24083 6.8664 1.35416 7.51974L2.24083 12.8264C2.40083 13.7731 3.30749 14.5397 4.26749 14.5397H11.7342C12.6875 14.5397 13.6008 13.7664 13.7608 12.8264L14.6475 7.51974C14.7542 6.8664 14.4208 5.99307 13.9075 5.57974L9.28749 1.8864C8.57416 1.31307 7.42083 1.31307 6.71416 1.87974Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TRANG CHỦ
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-[#0065FF] hover:bg-blue-500 text-[#FFFFFF]  text-[12px]  rounded-[4px] font-manrope font-semibold py-[16px] px-[8px] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.6665V9.6665"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 8.3335L8 10.3335L10 8.3335"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                TẢI XUỐNG
              </button>
            </div>
          </div>
          
        </div>

        <div className="xemthem_game_container flex justify-center ">
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold px-2 py-1  transition-colors">
            XEM THÊM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
