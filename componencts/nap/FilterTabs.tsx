"use client";
import { useState } from "react";

const tabs = ["Tất cả (20)", "MMO", "Game HOT", "Card Battle"];

export default function FilterTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full relative z-10 -mt-[140px] pb-6">
      <div className="max-w-[1000px] mx-auto flex gap-3 px-4 md:px-6 overflow-x-auto pb-1 scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-8 py-2.5 rounded text-sm font-medium transition-all ${
              active === index
                ? "bg-blue-600 text-white border border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
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