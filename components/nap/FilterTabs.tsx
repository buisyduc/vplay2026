"use client";
import { useState } from "react";

const tabs = ["Tất cả (20)", "MMO", "Game HOT", "Card Battle"];

export default function FilterTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="filter_tab w-full relative z-10 -mt-[140px] pb-6">
      <div className="duongdannap font-manrope text-[16px] font-Regular leading-[20px] tracking-normal text-[#FFFFFF]  ">
        <p>Trang chủ
          <svg className="" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.699219 8.69995L4.69922 4.69995L0.699219 0.699951" stroke="#D6D6D6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Nạp tiền</p>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-wrap gap-3 px-4 md:px-6 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-8 py-2.5 rounded text-sm font-medium transition-all ${active === index
                ? "bg-[#1E3A8A80] text-white border border-[#1E40AF] shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                : "bg-black/60 backdrop-blur-sm text-gray-300 border border-gray-600 hover:border-gray-400 hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}