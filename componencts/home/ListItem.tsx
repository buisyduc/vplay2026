"use client";
import Image from "next/image";
const ListItems = [
  { id: 1,  thumbnail: "/Images/Rectangle6.png" },
  { id: 2,  thumbnail: "/Images/Rectangle16.png" },
  { id: 3,  thumbnail: "/Images/Rectangle15.png" },
  { id: 4,  thumbnail: "/Images/Rectangle14.png" },
  { id: 5,  thumbnail: "/Images/Rectangle17.png" },
  { id: 6,  thumbnail: "/Images/Rectangle18.png" },
  { id: 7,  thumbnail: "/Images/Rectangle6.png" },
];
const Listitem = () => {
  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="max-w-2xl text-white">
          Lorem ipsum dolor sit amet consectetur. Interdum sed proin varius sed
          sapien hendrerit vel dictumst arcu. Odio neque nisl scelerisque egestas
          vel libero nulla sed eleifend.
        </p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          XEM THÊM
        </button>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6">
        {ListItems.map((item) => (
          
          <div key={item.id} className="relative w-[90px] h-[90px]">
            <Image
              src={item.thumbnail}
              alt={`List Item ${item.id}`} 
              fill
              className="object-cover rounded-[24px] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listitem;