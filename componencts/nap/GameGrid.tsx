"use client";
import Image from "next/image";

const games = [
  { id: 1, name: "Nạp OnG", thumbnail: "/Images/image 2.png" },
  { id: 2, name: "Thao Túng Tam Quốc", thumbnail: "/Images/image 2 (1).png" },
  { id: 3, name: "Quân Anh Phong Hoa Lục", thumbnail: "/Images/image 2 (2).png" },
  { id: 4, name: "Thời Không Chi Mộng", thumbnail: "/Images/image 2 (3).png" },
  { id: 5, name: "Huyền Ảnh Võ Lâm", thumbnail: "/Images/image 2 (4).png" },
  { id: 6, name: "Yêu Hồ 9D", thumbnail: "/Images/image 2 (5).png" },
  { id: 7, name: "Thần Ma Loạn Vũ", thumbnail: "/Images/image 2 (6).png" },
  { id: 8, name: "Mukbang Tam Quốc", thumbnail: "/Images/image 2 (7).png" },
  { id: 9, name: "Lục Tung Tam Quốc", thumbnail: "/Images/image 2 (8).png" },
  { id: 10, name: "Đấu Thần Tuyệt Thế", thumbnail: "/Images/image 2 (9).png" },
  { id: 11, name: "Thao Túng Tam Quốc", thumbnail: "/Images/image 2 (10).png" },
  { id: 12, name: "Quân Anh Phong Hoa Lục", thumbnail: "/Images/image 2 (1).png" },
  { id: 13, name: "Thời Không Chi Mộng", thumbnail: "/Images/image 2 (2).png" },
  { id: 14, name: "Huyền Ảnh Võ Lâm", thumbnail: "/Images/image 2 (3).png" },
];

const GameGrid = () => {
  return (
    <section className="relative w-full pb-32 pt-1">
      <div 
        className="absolute inset-0 bg-[#0b0f19] bg-[url('/Images/bg2.png')] bg-cover bg-center pointer-events-none z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 250px, black calc(100% - 250px), transparent 100%)', 
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 250px, black calc(100% - 250px), transparent 100%)' 
        }}
      ></div>

      <div className="relative max-w-[1000px] mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-10">
          {games.map((game) => (
            <div key={game.id} className="flex flex-col items-center gap-3 cursor-pointer group">
              {/* Thumbnail */}
              <div className="relative w-full aspect-square rounded-[24px] overflow-visible shadow-lg">
                <Image
                  src={game.thumbnail}
                  alt={game.name}
                  fill
                  className="object-cover rounded-[24px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <p className="text-white/90 text-sm text-center font-medium mt-1 group-hover:text-white transition-colors">
                {game.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameGrid;