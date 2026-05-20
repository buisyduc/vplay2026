"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const ListItems = [
  { id: 1, thumbnail: "/Images/Rectangle6.png" },
  { id: 2, thumbnail: "/Images/Rectangle16.png" },
  { id: 3, thumbnail: "/Images/Rectangle15.png" },
  { id: 4, thumbnail: "/Images/Rectangle14.png" },
  { id: 5, thumbnail: "/Images/Rectangle17.png" },
  { id: 6, thumbnail: "/Images/Rectangle18.png" },
  { id: 7, thumbnail: "/Images/Rectangle6.png" },
];

const N = ListItems.length;
const CENTER_SLOT = Math.floor(N / 2); // index 3
const DRAG_THRESHOLD = 50;

// Kích thước + độ mờ từng slot (ngoài → giữa → ngoài)
const SLOT_SIZES = [
  { w: 70,  h: 70,  opacity: 0.55 },
  { w: 70,  h: 70,  opacity: 0.55 },
  { w: 70,  h: 70,  opacity: 0.55 },
  { w: 90, h: 90, opacity: 1    }, // center
   { w: 70,  h: 70,  opacity: 0.55 },
  { w: 70,  h: 70,  opacity: 0.55 },
  { w: 70,  h: 70,  opacity: 0.55 },


];

export default function Listitem() {
  const [centerImg, setCenterImg] = useState(CENTER_SLOT);
  const [slideDir, setSlideDir] = useState<1 | -1>(1);
  const [animKey, setAnimKey] = useState(0);
  const [busy, setBusy] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const lastDelta = useRef(0);

  function imgIdxForSlot(slotI: number) {
    return ((centerImg + slotI - CENTER_SLOT) % N + N) % N;
  }

  function shiftTo(newCenter: number, dir: 1 | -1) {
    if (busy) return;
    setBusy(true);
    setCenterImg(((newCenter % N) + N) % N);
    setSlideDir(dir);
    setAnimKey((k) => k + 1);
    setTimeout(() => setBusy(false), 400);
  }

  function shiftBy(delta: number) {
    shiftTo(centerImg - delta, delta > 0 ? 1 : -1);
  }

  function onDragStart(x: number) {
    dragStartX.current = x;
    lastDelta.current = 0;
  }

  function onDragEnd(x: number) {
    if (dragStartX.current === null) return;
    const dx = x - dragStartX.current;
    lastDelta.current = dx;
    if (Math.abs(dx) > DRAG_THRESHOLD) {
      shiftBy(dx > 0 ? 1 : -1);
    }
    dragStartX.current = null;
  }

  function handleSlotClick(slotI: number) {
    if (Math.abs(lastDelta.current) > 6) return;
    if (slotI === CENTER_SLOT) return;
    shiftTo(imgIdxForSlot(slotI), slotI < CENTER_SLOT ? -1 : 1);
  }

  const animClass =
    slideDir > 0 ? "slide-in-right" : "slide-in-left";

  return (
    <div className="relative -mt-60 justify-center items-end pb-20">
      {/* Text + Button */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="max-w-xl text-white/100 dark:text-sky-400/25 text-xs text-center">
          Lorem ipsum dolor sit amet consectetur. Interdum sed proin varius sed
          sapien hendrerit vel dictumst arcu. Odio neque nisl scelerisque
          egestas vel libero nulla sed eleifend.
        </p>
        <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded text-sm">
          XEM THÊM
        </button>
      </div>

      {/* Carousel row */}
      <div
        className="mt-8 flex items-center justify-center gap-3 select-none cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseUp={(e) => onDragEnd(e.clientX)}
        onMouseLeave={() => { dragStartX.current = null; }}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
      >
        {Array.from({ length: N }).map((_, slotI) => {
          const isCenter = slotI === CENTER_SLOT;
          const imgIdx = imgIdxForSlot(slotI);
          const item = ListItems[imgIdx];
          const size = SLOT_SIZES[slotI];

          return (
            <div
              key={slotI}
              onClick={() => handleSlotClick(slotI)}
              className={[
                "relative flex-shrink-0 rounded-[20px] overflow-hidden",
                "transition-all duration-300",
                isCenter
                  ? "ring-4 ring-yellow-400 shadow-[0_0_28px_rgba(250,180,0,0.5)] z-10"
                  : "cursor-pointer hover:opacity-100 hover:scale-105",
              ].join(" ")}
              style={{ width: size.w, height: size.h, opacity: size.opacity }}
            >
              <Image
                key={`${animKey}-${slotI}`}
                src={item.thumbnail}
                alt={`Item ${item.id}`}
                fill
                className={`object-cover ${animClass}`}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        :global(.slide-in-right) {
          animation: slideInRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        :global(.slide-in-left) {
          animation: slideInLeft 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </div>
  );
}