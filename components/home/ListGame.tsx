import Image from "next/image";

const ListGames = () => {
  return (
    <div className="list_game_home">
      <div className="list-games">
        <h2 className="text-white font-bold  text-center text-4xl">
          Danh mục Game
        </h2>
        <div className="item_game_home">
          <div key="mmo" className="game_card  ">
            <div className="game_image relative w-full h-[300px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="#"
                fill
                className=" object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="game_text_item ">
              <h3 className="font-bold text-white">MMO</h3>
              <p className="text-gray-400">
               Lorem ipsum dolor sit amet consectetur. Proin eget urna aliquet aliquam amet fermentum nulla. Consectetur egestas.
              </p>
              <div className="xemthem_game  flex items-center ">
                XEM THÊM
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 6.75H12.9338"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.8418 0.75L12.9337 6.75001L6.8418 12.75"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div key="rpg" className="game_card ">
            <div className="game_image relative w-full h-[300px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="RPG"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="game_text_item  ">
              <h3 className="font-bold text-white">RPG</h3>
              <p className="text-gray-400">
               Lorem ipsum dolor sit amet consectetur. Proin eget urna aliquet aliquam amet fermentum nulla. Consectetur egestas.
              </p>
              <div className=" xemthem_game flex items-center ">
                XEM THÊM
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 6.75H12.9338"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.8418 0.75L12.9337 6.75001L6.8418 12.75"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div key="html5" className="game_card  ">
            <div className="game_image relative w-full h-[300px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="HTML5"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="game_text_item  ">
              <h3 className=" font-bold text-white">HTML5</h3>
              <p className="text-gray-400 ">
               Lorem ipsum dolor sit amet consectetur. Proin eget urna aliquet aliquam amet fermentum nulla. Consectetur egestas.
              </p>{" "}
              <div className="xemthem_game flex items-center">
                XEM THÊM
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 6.75H12.9338"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.8418 0.75L12.9337 6.75001L6.8418 12.75"
                    stroke="#0065FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGames;
