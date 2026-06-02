"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { useState, useEffect, useRef } from "react";

interface ListItem {
  id: number;
  thumbnail: string;
}

interface ListBannerItem {
  id: number;
  alt: string;
  thumbnail: string;
}

const ListItems: ListItem[] = [
  { id: 1, thumbnail: "/Images/iconbanner/appicon-20260507-072221.png" },
  { id: 2, thumbnail: "/Images/iconbanner/quy-mon-quan-20260330-024523.png" },
  {
    id: 3,
    thumbnail: "/Images/iconbanner/t026-iconapp512-20260414-021558.png"
  },
  { id: 4, thumbnail: "/Images/iconbanner/iconapp512-1-20260528-070412.png" },
  {
    id: 5,
    thumbnail: "/Images/iconbanner/t027-2-iconapp512-20260422-023512.png"
  },
  {
    id: 6,
    thumbnail: "/Images/iconbanner/thao-tung-tam-quoc-20260327-090323.png"
  },
  { id: 7, thumbnail: "/Images/iconbanner/thoikhong-20260330-024750.png" },
  { id: 8, thumbnail: "/Images/iconbanner/512-bo-vien-20260328-043547.png" }
];

const ListBanner: ListBannerItem[] = [
  {
    id: 1,
    alt: "Chiến Samkok - Hốc Ngàn Vé Quay",
    thumbnail: "/Images/Banner/1-1920x805-20260328-043558.png"
  },
  {
    id: 2,
    alt: "Một chạm đổi tướng - Tốc chiến định giang sơn",
    thumbnail: "/Images/Banner/r05-1920x805-20260327-103334.png"
  },
  {
    id: 3,
    alt: "Game Kinh Dị Giữa Lòng Đô Thị",
    thumbnail: "/Images/Banner/r15-1920x805-20260330-024541.png"
  },
  {
    id: 4,
    alt: "Minh Chủ Võ Lâm - Tuyệt Đỉnh Kim Dung",
    thumbnail: "/Images/Banner/t30-1920x805-20260507-072240.png"
  },
  {
    id: 5,
    alt: "Nhập Vai Chấn Động - Thỏa Mộng Game Mơ",
    thumbnail: "/Images/Banner/bannerhome.png"
  },
  {
    id: 6,
    alt: "Nhập Vai Chấn Động - Thỏa Mộng Game Mơ",
    thumbnail: "/Images/Banner/t22-1920x805-20260330-024818.png"
  },
  {
    id: 7,
    alt: "Nhập Vai Chấn Động - Thỏa Mộng Game Mơ",
    thumbnail: "/Images/Banner/1-1920x805-1-20260327-130434.jpg"
  },
  {
    id: 8,
    alt: "Nhập Vai Chấn Động - Thỏa Mộng Game Mơ",
    thumbnail: "/Images/Banner/pc-1920x805-2-20260327-104042.jpg"
  }
];

const Slider: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const mainSwiperRef = useRef<SwiperType | null>(null);
  const thumbSwiperRef = useRef<SwiperType | null>(null);

  const slidesKey = ListItems.map((s) => s.id).join(",");

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="slider" style={{ width: "100vw", height: "100vh" }}>
        <div
          className="slider-wrapper"
          style={{ background: "#0B0C10", width: "100%", height: "100%" }}
        />
      </div>
    );
  }

  return (
    <div
      className="slider"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <style jsx global>{`
        /* 1. KHU VỰC NÚT ĐIỀU HƯỚNG GỐC */
        .main-slider .swiper-button-next,
        .main-slider .swiper-button-prev {
          width: 44px !important;
          height: 44px !important;
          background-color: rgba(255, 255, 255, 0.18) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-radius: 50% !important;

          /* Triệt tiêu màu xanh cốt lõi từ thư viện Swiper */
          color: transparent !important;

          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.3s ease,
            visibility 0.3s ease,
            background-color 0.2s ease,
            transform 0.2s ease !important;
          z-index: 15 !important;

          margin-top: 0 !important;
          top: calc(50% - 22px) !important;
        }

        /* 2. HOVER BANNER -> HIỆN NÚT TRẮNG */
        .main-slider:hover .swiper-button-next,
        .main-slider:hover .swiper-button-prev {
          opacity: 1;
          visibility: visible;
        }

        /* 3. HOVER VÀO NÚT -> PHÓNG TO (SCALE) KHÔNG NHẢY VỊ TRÍ */
        .main-slider .swiper-button-next:hover,
        .main-slider .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.32) !important;
          transform: scale(1.15) !important;
        }

        /* 4. ĐÈ XOÁ HOÀN TOÀN ICON MÀU XANH (FONT-GỐC) CỦA SWIPER MÀ BẠN ĐANG BỊ */
        .main-slider .swiper-button-next::after,
        .main-slider .swiper-button-prev::after {
          display: none !important;
          content: "" !important;
          opacity: 0 !important;
          color: transparent !important;
        }

        /* 5. TỰ DỰNG LẠI MŨI TÊN MẢNH MÀU TRẮNG THEO ĐÚNG HÌNH THIẾT KẾ */
        .main-slider .swiper-button-next::before,
        .main-slider .swiper-button-prev::before {
          content: "" !important;
          display: block;
          width: 11px;
          height: 11px;
          border-top: 2px solid #ffffff !important;
          border-right: 2px solid #ffffff !important;
          position: absolute;
          top: 50%;
          left: 50%;
        }

        /* Căn chỉnh tâm trục chuẩn khít cho hai hướng */
        .main-slider .swiper-button-next::before {
          transform: translate(-65%, -50%) rotate(45deg) !important;
        }

        .main-slider .swiper-button-prev::before {
          transform: translate(-35%, -50%) rotate(-135deg) !important;
        }

        /* Vị trí lề hai bên */
        .main-slider .swiper-button-next {
          right: 32px !important;
        }
        .main-slider .swiper-button-prev {
          left: 32px !important;
        }

        /* Khi hết slide */
        .main-slider .swiper-button-disabled {
          opacity: 0.25 !important;
          pointer-events: none !important;
        }
      `}</style>

      <div
        className="slider-wrapper"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {/* 1. MAIN SWIPER (BANNER LỚN FULL MÀN HÌNH) */}
        <Swiper
          key={`main-${slidesKey}`}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay, EffectFade, Controller]}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          initialSlide={0}
          className="main-slider"
          style={{ width: "100%", height: "100%" }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            if (
              thumbSwiperRef.current &&
              thumbSwiperRef.current.realIndex !== swiper.realIndex
            ) {
              thumbSwiperRef.current.slideToLoop(swiper.realIndex, 420);
            }
          }}
        >
          {ListBanner.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="slider-slide"
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <div
                  className="slider-background"
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="slider-bg-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top"
                    }}
                  />
                </div>

                <div
                  className="slider-gradient-bottom"
                  style={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    bottom: "-20px",
                    height: "54%",
                    opacity: 1,
                    zIndex: 1,
                    background:
                      "linear-gradient(0deg, #0b0c10 15.36%, rgba(11, 12, 16, .948131) 23.43%, rgba(11, 12, 16, .895542) 27.56%, rgba(11, 12, 16, .9) 32.18%, rgba(11, 12, 16, .6) 64.81%, rgba(11, 12, 16, 0) 81.25%)"
                  }}
                />

                {/* Content Text & Button */}
                <div
                  className="slider-content"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "800px",
                    padding: "0 20px"
                  }}
                >
                  <div className="slider-text" style={{ marginBottom: "20px" }}>
                    <h2
                      style={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        textShadow: "0 2px 10px rgba(0,0,0,0.8)"
                      }}
                    >
                      {item.alt}
                    </h2>
                  </div>
                  <div className="actions d-flex gap-3 justify-content-center">
                    <button
                      className="btn btn-primary"
                      style={{
                        padding: "10px 30px",
                        fontWeight: "bold",
                        background: "#0065FF",
                        borderRadius: "4px",
                        border: "1px solid #0065FF"
                      }}
                    >
                      XEM THÊM
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 2. THUMBNAIL SWIPER */}
        <div
          className="slider-sub"
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            maxWidth: "600px",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <Swiper
            key={`thumb-${slidesKey}`}
            modules={[Controller]}
            onSwiper={(swiper) => {
              thumbSwiperRef.current = swiper;
            }}
            allowTouchMove={false}
            noSwiping={true}
            slidesPerView={5}
            spaceBetween={16}
            centeredSlides={true}
            loop={true}
            slideToClickedSlide={true}
            speed={300}
            className="slider-thumb"
            style={{
              overflowX: "hidden",
              overflowY: "visible",
              padding: "15px 0"
            }}
            onSlideChange={(swiper) => {
              if (
                mainSwiperRef.current &&
                mainSwiperRef.current.realIndex !== swiper.realIndex
              ) {
                mainSwiperRef.current.slideToLoop(swiper.realIndex, 300);
              }
            }}
          >
            {ListItems.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "visible"
                }}
              >
                {({ isActive }) => (
                  <div
                    id="thumb-item"
                    className={`thumb-item ${isActive ? "active" : ""}`}
                    style={{
                      width: "100px",

                      borderRadius: "16px",
                      overflow: "hidden",
                      isolation: "isolate",
                      transition:
                        "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease",
                      border: isActive
                        ? "3px solid #ffffff"
                        : "2px solid rgba(255, 255, 255, 0.25)",
                      transform: isActive ? "scale(1.25)" : "scale(1)",
                      zIndex: isActive ? 10 : 1
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={`Thumbnail ${item.id}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "scale(1.05)",
                        filter: isActive
                          ? "brightness(1)"
                          : "brightness(0.55) grayscale(10%)",
                        transition: "filter 0.3s ease, transform 0.3s ease"
                      }}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
