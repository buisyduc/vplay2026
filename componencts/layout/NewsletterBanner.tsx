export default function NewsletterBanner() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-[120px] w-full max-w-[1000px] px-4 md:px-6 z-20">
      <div 
        className="w-full rounded-[24px] p-10 flex flex-col items-center text-center gap-4 shadow-2xl"
        style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" }}
      >
        <h2 className="text-white text-3xl font-bold">
          Đăng ký nhận bản tin
        </h2>
        <p className="text-blue-100 text-sm max-w-2xl leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur. Vel vivamus adipiscing in pretium molestie tellus. 
          Donec eget ipsum felis elementum quis hac tristique. Laoreet sagittis viverra dui tristique 
          velit pharetra. At molestie ac massa viverra nascetur.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-3xl">
          <input
            type="email"
            placeholder="Email của bạn"
            className="flex-1 w-full px-5 py-3 rounded-lg text-sm text-gray-700 bg-white outline-none shadow-inner"
          />
          <input
            type="tel"
            placeholder="Số điện thoại của bạn"
            className="flex-1 w-full px-5 py-3 rounded-lg text-sm text-gray-700 bg-white outline-none shadow-inner"
          />
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold px-10 py-3 rounded-lg whitespace-nowrap shadow-md transition-colors">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>
  );
}