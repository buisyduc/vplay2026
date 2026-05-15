import Image from "next/image";
const News = () => {
  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className=" items-center justify-between mt-8 px-2">
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
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="bg-black/40 border border-gray-600 text-white text-sm placeholder-gray-500 px-4 py-2 pr-10 rounded-full focus:outline-none focus:border-gray-400 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-55 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle 92.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs mt-6">07/07/2025</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-55 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle21.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs mt-6">07/07/2025</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-55 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle19.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs mt-6">07/07/2025</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-55 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle 93.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs mt-6">07/07/2025</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-55 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle21.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs mt-6">07/07/2025</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="relative w-full h-55 rounded overflow-hidden">
            <Image
              src="/Images/Rectangle94.png"
              alt="Game 1"
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur. Diam nisi tristique ac
              erat quam egestas.
            </h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Scelerisque egestas
              feugiat massa risus erat. Libero dignissim convallis egestas odio
              eget sit viverra sed sagittis. Amet leo eget vivamus amet tortor
              at felis neque. Accumsan ultricies neque mauris enim facilisis in.
            </p>
            <p className="text-gray-500 text-xs mt-6">07/07/2025</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {/* Prev */}
          <button className="text-gray-400 hover:text-white px-2 py-1 text-sm">
            &lt;
          </button>

          {/* Pages */}
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 text-sm font-semibold rounded ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "bg-[#1a1f2e] text-gray-300 border border-gray-600 hover:border-gray-400 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button className="text-gray-400 hover:text-white px-2 py-1 text-sm">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
