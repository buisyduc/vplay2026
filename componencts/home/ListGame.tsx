import Image from "next/image";

const Listgames = [
  {
    id: 1,
    name: "MMO",
    image: "/images/Rectangle19.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem pulvinar id scelerisque erat auctor aliquam non id. Aliquam porta est proin neque id justo diam. Cras sit porttitor orci eget a dui."
  },
  {
    id: 2,
    name: "RPG",
    image: "/images/Rectangle20.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem pulvinar id scelerisque erat auctor aliquam non id. Aliquam porta est proin neque id justo diam. Cras sit porttitor orci eget a dui."
  },
  {
    id: 3,
    name: "HTML5",
    image: "/images/Rectangle21.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sem pulvinar id scelerisque erat auctor aliquam non id. Aliquam porta est proin neque id justo diam. Cras sit porttitor orci eget a dui."
  }
];

const ListGames = () => {
    return (
    <div className="grid grid-cols-3 gap-2 max-w-[1100px] mx-auto ">
        {Listgames.map((game) => (
        <div key={game.id} className="flex flex-col mt-6">
            <div className="relative w-full h-[300px] flex-shrink-0">
            <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            </div>

            <div className="bg-zinc-800 px-3 py-4">
            <h3 className="text-xl font-bold text-white">{game.name}</h3>
            <p className="text-gray-400 mt-2">{game.description}</p>
            </div>
        </div>
        ))}
    </div>
    );
};

export default ListGames;
