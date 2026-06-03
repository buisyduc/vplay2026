export default function NewsletterBanner() {
  return (
    <div className="newsletter-banner w-full max-w-[1000px] mx-auto px-4 md:px-6 relative z-20 -mt-32 mb-10">
      <div
        className="w-full rounded-[8px] p-6 md:p-10 flex flex-col items-center text-center gap-4"
        style={{
    
          background: "url(/Images/bg/form-bg.webp) no-repeat",
          backdropFilter: "blur(16px)",
          backgroundSize: "cover",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold"
            style={{
              fontSize: "42px",
              fontFamily: "Manrope",
              fontWeight: 800,
              lineHeight: "50px",
              letterSpacing: "0%",
              color: "#fafaf9",
              fontStyle: "ExtraBold",
            
          }}  
        >Đăng ký nhận bản tin</h2>
        <p className="text-blue-100 text-sm max-w-4xl leading-relaxed mb-4"
             style={{
              fontSize: "16px",
              fontFamily: "Manrope",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0%",
              color: "#fafaf9",
              fontStyle: "ExtraBold",
            
          }}  
        >
          Lorem ipsum dolor sit amet consectetur. Vel vivamus adipiscing in
          pretium molestie tellus. Donec eget ipsum felis elementum quis hac
          tristique. Laoreet sagittis viverra dui tristique velit pharetra. At
          molestie ac massa viverra nascetur.
        </p>

        <div className="w-full max-w-3xl bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2 items-center">
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:flex-1">
            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full sm:flex-1 px-3 py-2 text-gray-700 outline-none bg-[#F0F0F0] rounded-[4px]"
            />
            <input
              type="tel"
              placeholder="Số điện thoại của bạn"
              className="w-full sm:flex-1 px-3 py-2 text-gray-700 outline-none bg-[#F0F0F0] rounded-[4px]"
            />
          </div>

          <button className="w-full sm:w-auto  bg-blue-500 hover:bg-blue-400 text-white text-sm font-bold px-6 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                style={{
              fontSize: "16px",
              fontFamily: "Manrope",
              fontWeight: 800,
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "#fafaf9",
              fontStyle: "ExtraBold",
            
          }}  
          >
            ĐĂNG KÝ
          </button>
        </div>

      </div>
    </div>
  );
}