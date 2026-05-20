import Image from "next/image";

const ListGames = () => {
  return (
    <div className="list-games  max-w-[1100px] mx-auto">
      <p className="text-white col-span-3 text-center text-4xl">
        Danh mục Game
      </p>

      <div key="mmo" className="game_card flex flex-col mt-6 ">
        <div className="game_item relative w-full h-[300px] flex-shrink-0">
           <Image
              src="/Images/Rectangle 26.png"
              alt="#"
              fill
              className="image_one object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        <div className="bg-zinc-800 px-3 py-4">
          <h3 className="text-xl font-bold text-white">MMO</h3>
          <p className="text-gray-400 mt-2">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Sem pulvinar id scelerisque
            erat auctor aliquam non id. Aliquam porta est proin neque id justo
            diam. Cras sit porttitor orci eget a dui.
          </p>
          <div className="flex text-sm text-blue-400 items-center gap-1 mt-2">
            XEM THÊM
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5055f9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div key="rpg" className="game_card flex flex-col mt-6">
        <div className="game_item relative w-full h-[300px] flex-shrink-0">
          <Image
              src="/Images/Rectangle 26.png"
              alt="#"
              fill
              className="image_one object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        <div className="bg-zinc-800 px-3 py-4">
          <h3 className="text-xl font-bold text-white">RPG</h3>
          <p className="text-gray-400 mt-2">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Sem pulvinar id scelerisque
            erat auctor aliquam non id. Aliquam porta est proin neque id justo
            diam. Cras sit porttitor orci eget a dui.
          </p>
          <div className="flex text-sm text-blue-400 items-center gap-1 mt-2">
            XEM THÊM
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5055f9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div key="html5" className="game_card flex flex-col mt-6">
        <div className="game_item relative w-full h-[300px] flex-shrink-0">
          <Image
              src="/Images/Rectangle 26.png"
              alt="#"
              fill
              className="image_one object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>

        <div className="bg-zinc-800 px-3 py-4">
          <h3 className="text-xl font-bold text-white">HTML5</h3>
          <p className="text-gray-400 mt-2">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Sem pulvinar id scelerisque
            erat auctor aliquam non id. Aliquam porta est proin neque id justo
            diam. Cras sit porttitor orci eget a dui.
          </p>{" "}
          <div className="flex text-sm text-blue-400 items-center gap-1 mt-2">
            XEM THÊM
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5055f9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGames;
