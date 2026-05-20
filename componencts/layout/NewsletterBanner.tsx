export default function NewsletterBanner() {
  return (
    <div className="newsletter-banner w-full max-w-[1000px] mx-auto px-4 md:px-6 relative z-20 -mt-32 mb-10">
      <div
        className="w-full rounded-[8px] p-10 flex flex-col items-center text-center gap-4"
        style={{
          background: "rgba(52, 39, 245, 0.37)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        <h2 className="text-white text-4xl font-bold">Đăng ký nhận bản tin</h2>
        <p className="text-blue-100 text-sm max-w-4xl leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur. Vel vivamus adipiscing in pretium molestie tellus. Donec eget ipsum felis elementum quis hac tristique. Laoreet sagittis viverra dui tristique velit pharetra. At molestie ac massa viverra nascetur.
        </p>

        <div className="from_footer_center w-full max-w-3xl bg-white rounded-lg px-2 py-1">
          <div className="from_footer w-180">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 min-w-0 px-3 py-2  text-gray-700 bg-transparent outline-none"
            />
            <input
              type="tel"
              placeholder="Số điện thoại của bạn"
              className="flex-1 min-w-0 px-3 py-2  text-gray-700 bg-transparent outline-none"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold px-6 py-2 rounded-lg whitespace-nowrap transition-colors">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>
  );
}