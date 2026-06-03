"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  {
    code: "vi",
    thumbnail: "/Images/Languages/Rectangle 4021.svg",
    label: "Việt Nam",
    flag: "🇻🇳"
  },
  {
    code: "en",
    thumbnail: "/Images/Languages/Rectangle4020.svg",
    label: "Tiếng Anh",
    flag: "🇬🇧"
  },
  {
    code: "zh",
    thumbnail: "/Images/Languages/Rectangle 4022.svg",
    label: "Trung Quốc",
    flag: "🇨🇳"
  },
  {
    code: "th",
    thumbnail: "/Images/Languages/Rectangle4023.svg",
    label: "Thái Lan",
    flag: "🇹🇭"
  }
];
const menuItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Trò chơi", href: "/game" },
  { label: "Nạp", href: "/nap" },
  { label: "Tin tức", href: "/news" },
  { label: "Hỗ trợ", href: "/hotro" }
];

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState("vi");
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false); // ← state sidebar

  const selected = languages.find((l) => l.code === active);

  return (
    <>
      {/* ── HEADER ── */}
      <header className=" w-full bg-white border-b border-gray-200">
        <div className="header max-w-screen-xl mx-auto  h-14 flex items-center justify-between gap-2">
          {/* TRÁI: Hamburger + Logo + Language */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Hamburger icon — chỉ hiện trên tablet/mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded hover:bg-gray-100 transition"
              aria-label="Mở menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#777171"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
      
            <Image
              src="/Images/Logo/logo-Vplay-Primary 1.svg"
              alt="VPlay Logo"
              width={90}
              height={30}
              className="w-[80px] sm:w-[120px]"

            />

            <span className="text-gray-400">|</span>

            {/* Language selector */}
            <div className="relative flex items-center text-sm text-gray-600">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center rounded-md hover:bg-gray-100"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 18.9582C5.05866 18.9582 1.04199 14.9415 1.04199 9.99984C1.04199 5.05817 5.05866 1.0415 10.0003 1.0415C14.942 1.0415 18.9587 5.05817 18.9587 9.99984C18.9587 14.9415 14.942 18.9582 10.0003 18.9582ZM10.0003 2.2915C5.75033 2.2915 2.29199 5.74984 2.29199 9.99984C2.29199 14.2498 5.75033 17.7082 10.0003 17.7082C14.2503 17.7082 17.7087 14.2498 17.7087 9.99984C17.7087 5.74984 14.2503 2.2915 10.0003 2.2915Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M7.5002 18.125H6.66686C6.3252 18.125 6.04186 17.8417 6.04186 17.5C6.04186 17.1583 6.30853 16.8833 6.6502 16.875C5.34186 12.4083 5.34186 7.59167 6.6502 3.125C6.30853 3.11667 6.04186 2.84167 6.04186 2.5C6.04186 2.15833 6.3252 1.875 6.66686 1.875H7.5002C7.7002 1.875 7.89186 1.975 8.00853 2.13333C8.1252 2.3 8.15853 2.50833 8.09186 2.7C6.5252 7.40833 6.5252 12.5917 8.09186 17.3083C8.15853 17.5 8.1252 17.7083 8.00853 17.875C7.89186 18.025 7.7002 18.125 7.5002 18.125Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M12.5 18.1247C12.4333 18.1247 12.3667 18.1164 12.3 18.0914C11.975 17.9831 11.7917 17.6247 11.9083 17.2997C13.475 12.5914 13.475 7.40808 11.9083 2.69141C11.8 2.36641 11.975 2.00808 12.3 1.89974C12.6333 1.79141 12.9833 1.96641 13.0917 2.29141C14.75 7.25808 14.75 12.7247 13.0917 17.6831C13.0083 17.9581 12.7583 18.1247 12.5 18.1247Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M10 14.3335C7.675 14.3335 5.35833 14.0085 3.125 13.3502C3.11667 13.6835 2.84167 13.9585 2.5 13.9585C2.15833 13.9585 1.875 13.6752 1.875 13.3335V12.5002C1.875 12.3002 1.975 12.1085 2.13333 11.9918C2.3 11.8752 2.50833 11.8418 2.7 11.9085C7.40833 13.4752 12.6 13.4752 17.3083 11.9085C17.5 11.8418 17.7083 11.8752 17.875 11.9918C18.0417 12.1085 18.1333 12.3002 18.1333 12.5002V13.3335C18.1333 13.6752 17.85 13.9585 17.5083 13.9585C17.1667 13.9585 16.8917 13.6918 16.8833 13.3502C14.6417 14.0085 12.325 14.3335 10 14.3335Z"
                    fill="#3A3A3A"
                  />
                  <path
                    d="M17.5001 8.12497C17.4335 8.12497 17.3668 8.11663 17.3001 8.09163C12.5918 6.52497 7.40015 6.52497 2.69181 8.09163C2.35848 8.19997 2.00848 8.02497 1.90015 7.69997C1.80015 7.36663 1.97515 7.01663 2.30015 6.9083C7.26681 5.24997 12.7335 5.24997 17.6918 6.9083C18.0168 7.01663 18.2001 7.37497 18.0835 7.69997C18.0085 7.9583 17.7585 8.12497 17.5001 8.12497Z"
                    fill="#3A3A3A"
                  />
                </svg>

                <span className="text-sm">{selected?.flag}</span>
              </button>

              {langOpen && (
                <div className="languages_header absolute top-14 left-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 ">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setActive(lang.code);
                        setLangOpen(false);
                      }}
                      className="flex items-center gap-4 px-4 py-3 w-full hover:bg-gray-100"
                    >
                      <Image
                        src={lang.thumbnail}
                        width={24}
                        height={24}
                        alt="Picture of the author"
                      />
                      <span className="text-sm gap-4">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-sm ${pathname === item.href
                        ? "text-blue-600 font-bold"
                        : "text-gray-700 hover:text-blue-600"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* PHẢI: Đăng nhập */}
          <button className="dangnhap bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 sm:px-6 py-2 rounded whitespace-nowrap flex-shrink-0">
            ĐĂNG NHẬP
          </button>
        </div>
      </header>

      {/* ── SIDEBAR OVERLAY (nền mờ) ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)} // click ngoài để đóng
        />
      )}

      {/* ── SIDEBAR PANEL ── */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-xl
          transform transition-transform duration-300 ease-in-out lg:hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header sidebar */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-gray-200">
          <Image
            src="/Images/Logo/logo-Vplay-Primary 1.svg"
            alt="VPlay Logo"
            width={100}
            height={32}
          />
          {/* Nút đóng X */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition"
            aria-label="Đóng menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Menu items trong sidebar */}
        <nav className="py-4">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setSidebarOpen(false); // đóng sidebar sau khi chọn
                  }}
                  className={`
                    flex items-center px-6 py-3 text-sm transition
                    ${pathname === item.href
                      ? "text-blue-600 font-bold bg-blue-50 border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 border-l-4 border-transparent"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Đăng nhập trong sidebar */}
        <div className="px-6 pt-4 border-t border-gray-100">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2 rounded">
            ĐĂNG NHẬP
          </button>
        </div>
      </aside>
    </>
  );
};

export default Header;