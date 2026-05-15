import Image from "next/image";

const Ecosystem = () => {
  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs text-gray-400">Trang chủ / Hệ sinh thái</p>
        <h2 className="text-3xl font-bold text-white mb-6 mt-6">
          Khám phá Hệ sinh thái
        </h2>
        <p className="text-gray-300 mb-8">
          Lorem ipsum dolor sit amet consectetur. Elementum risus leo tortor
          enim. A sed sit nisi ornare lectus tristique diam bibendum imperdiet.
          Lectus purus ornare elit purus. Enim sit blandit id cras massa.
        </p>

        
        <div className="flex gap-4">

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame123.jpg"
              alt="NAP"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">NAP</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame24.png"
              alt="ESPORTS"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">ESPORTS</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame22.png"
              alt="GAME H5"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">GAME H5</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame23.png"
              alt="MINIGAME"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">MINIGAME</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>

        </div>
        <div className="flex gap-4 mt-6">

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame123.jpg"
              alt="NAP"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">NAP</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame24.png"
              alt="ESPORTS"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">ESPORTS</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame22.png"
              alt="GAME H5"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">GAME H5</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>

          <div className="relative flex-1 aspect-[3/4] rounded-[16px] overflow-hidden shadow-lg cursor-pointer group">
            <Image
              src="/Images/Frame23.png"
              alt="MINIGAME"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-sm font-bold tracking-wide">MINIGAME</span>
              <span className="text-lg font-bold">→</span>
            </div>
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

export default Ecosystem;