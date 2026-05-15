"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const languages = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'Tiếng Anh',    flag: '🇬🇧' },
  { code: 'zh', label: 'Tiếng Trung',        flag: '🇨🇳' },
  { code: 'th', label: 'Tiếng Thái',    flag: '🇹🇭' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('vi');
  const [activeMenu, setActiveMenu] = useState('Trang chủ');

  const selected = languages.find(l => l.code === active);

  
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/Images/Logo/logo-Vplay-Primary 1.svg"
            alt="VPlay Logo"
            width={120}
            height={40}
          />
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <button onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
              <span className="text-xl">{selected?.flag}</span>
              
              <span className="text-sm">{selected?.label}</span>
            </button>
            {open && (
              <div className="absolute top-14  bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setActive(lang.code);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>

      
        <nav>
          <ul className="flex items-center gap-8">
            <Link href="/">
            <li>
              <a
                href="#"
                className={`text-sm ${
                  activeMenu === 'Trang chủ'
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              
              >
                Trang chủ
              </a>
            </li>
            </Link>
            <Link href="/game">
                <li>
                    <a
                      className={`text-sm ${
                        activeMenu === 'Trò chơi'
                          ? 'text-blue-600 font-bold'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                     
                    >
                      Trò chơi
                    </a>
                
                </li>
            </Link>
            <Link href="/nap">
            <li>
              <a
                href="#"
                className={`text-sm ${
                  activeMenu === 'Nạp'
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              
              >
                Nạp
              </a>
            </li>
            </Link>
            <li>
              <a
                href="#"
                className={`text-sm ${
                  activeMenu === 'Tin tức'
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                
              >
                Tin tức
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-sm ${
                  activeMenu === 'Hỗ trợ'
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              
              >
                Hỗ trợ
              </a>
            </li>
          </ul>
        </nav>

        {/* PHẢI: Nút đăng nhập */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2 rounded">
          ĐĂNG NHẬP
        </button>

      </div>
    </header>
  );
};

export default Header;