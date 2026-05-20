"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const languages = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "Tiếng Anh", flag: "🇬🇧" },
  { code: "zh", label: "Tiếng Trung", flag: "🇨🇳" },
  { code: "th", label: "Tiếng Thái", flag: "🇹🇭" },
];

const menuItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Trò chơi", href: "/game" },
  { label: "Nạp", href: "/nap" },
  { label: "Tin tức", href: "/news" },
  { label: "Hỗ trợ", href: "/hotro" },
];

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState("vi");
  const [activeMenu, setActiveMenu] = useState("Trang chủ");
  const [sidebarOpen, setSidebarOpen] = useState(false); // ← state sidebar

  const selected = languages.find((l) => l.code === active);

  return (
    <>
      {/* ── HEADER ── */}
      <header className=" w-full bg-white border-b border-gray-200">
        <div className="header max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          
          {/* TRÁI: Hamburger + Logo + Language */}
          <div className="flex items-center gap-3">
            
            {/* Hamburger icon — chỉ hiện trên tablet/mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded hover:bg-gray-100 transition"
              aria-label="Mở menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#777171"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6"  y2="6"  />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>

            <Image
              src="/Images/Logo/logo-Vplay-Primary 1.svg"
              alt="VPlay Logo"
              width={120}
              height={40}
            />

            <span className="text-gray-400">|</span>

            {/* Language selector */}
            <div className="relative flex items-center text-sm text-gray-600">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-xl">{selected?.flag}</span>
                <span className="text-sm">{selected?.label}</span>
              </button>

              {langOpen && (
                <div className="absolute top-10 left-0 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setActive(lang.code); setLangOpen(false); }}
                      className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100"
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* GIỮA: Menu ngang — chỉ hiện trên desktop */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveMenu(item.label)}
                    className={`text-sm ${
                      activeMenu === item.label
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
          <button className="dangnhap bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2 rounded">
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
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
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
                    setActiveMenu(item.label);
                    setSidebarOpen(false); // đóng sidebar sau khi chọn
                  }}
                  className={`
                    flex items-center px-6 py-3 text-sm transition
                    ${activeMenu === item.label
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