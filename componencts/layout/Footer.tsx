// components/layout/Footer.tsx
import Image from "next/image";
import NewsletterBanner from "../layout/NewsletterBanner";

export default function Footer() {
  return (
    <footer
      className="
      w-full
      bg-[url('/Images/T002.png')]
      bg-cover
      bg-top
      bg-no-repeat
   
    "
    >
      <NewsletterBanner />

      <div className="max-w-screen-xl mx-auto flex flex-col items-center  text-center ">
        <div className="flex items-center gap-4">
          <Image
            src="/Images/logo-Vplay-AmBan2 3.png"
            alt="VPlay Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <span className="text-gray-400 text-xl font-light">x</span>
          <Image
            src="/Images/ON Live Logo_Âm bản đơn sắc@2x (1) 1.png"
            alt="ON Live Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-1.5 text-gray-300 text-xs leading-relaxed max-w-3xl">
          <p>Hotline: 19008056666 - Email: hotro@vplay.vn</p>
          <p>Địa chỉ: Số 9, ngõ 84 Ngọc Khánh, Q.Ba Đình, Hà Nội</p>
          <p>Chịu trách nhiệm nội dung: Ông Trần Hoàng Minh</p>
          <p>
            Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số
            54/GP-BTTTT, do Bộ Thông tin và Truyền thông cấp ngày 12/7/2022.
          </p>
          <p>
            Giấy chứng nhận cung cấp dịch vụ trò chơi điện tử trên mạng số
            91/GP-BTTTT do Cục Phát thanh, truyền hình và thông tin điện tử cấp
            ngày 12/7/2022.
          </p>
          <p>
            • GCN đăng ký kết nối để cung cấp dịch vụ nội dung thông tin trên
            mạng viễn thông, số 135/GCNX-CVT ngày 02/7/2025 có giá trị đến hết
            ngày 02/07/2030 (của Tổng công ty Viễn thông MobiFone).
          </p>
        </div>

        {/* Điều khoản */}
        <div className="mt-4">
          <a
            href="#"
            className="text-gray-400 text-xs hover:text-white transition-colors"
          >
            Điều khoản dịch vụ
          </a>
        </div>
      </div>
    </footer>
  );
}
