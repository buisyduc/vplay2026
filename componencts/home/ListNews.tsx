import Image from "next/image";
import Link from "next/link";
const ListNews = () => {
  return (
    <div className=" list-news gap-6 max-w-[1100px] mx-auto mt-8">
      <div className="text_news ">
        <p className="name_news text-white text-4xl font-bold mb-4">Tin tức & Sư kiện</p>
      </div>
      <div className="list_news_content ">
        <div className="item_news_one flex flex-col   w-full  ">
          <div className="img_item_news_one relative w-full aspect-video  overflow-hidden ">
            <Image
              src="/Images/Rectangle 26.png"
              alt="#"
              fill
              className="image_one object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="text_item_news_one ">
            <h4 className="inline-flex items-center gap-1 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
              KHUYẾN MÃI
            </h4>
            <p className="text-sm text-gray-300 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
              nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam
              sagittis.Lorem ipsum dolor sit amet consectetur. Tellus velit elit
              tellus nullam sed. Libero orci est mi aenean senectus ut aenean.
              Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
            </p>
          </div>
        </div>

        <div className="item-news-home  w-full ">
          <div className="item_news_two  ">
            <div className="img_item_news_two relative w-full aspect-video  overflow-hidden ">
              <Image
                src="/Images/Rectangle 26.png"
                alt="#"
                fill
                className="image_two object-cover  transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text_item_news_two">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
                nullam sed. Libero orci est mi aenean senectus ut aenean.
                Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
              </p>
            </div>
          </div>
          <div className="item_news_three  ">
            <div className="img_item_news_three relative w-full aspect-video  overflow-hidden ">
              <Image
                src="/Images/Rectangle 36.png"
                alt="#"
                fill
                className="image_three object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text_item_news_three">
              <h4 className="inline-flex items-center gap-1 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                KHUYẾN MÃI
              </h4>
              <p className="text-xs text-gray-300 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
                nullam sed. Libero orci est mi aenean senectus ut aenean.
                Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
              </p>
            </div>
          </div>

          <div className="item_news_four  ">
            <div className="img_item_news_four relative w-full aspect-video  overflow-hidden ">
              <Image
                src="/Images/Rectangle20.png"
                alt="#"
                fill
                className="image_four object-cover  transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text_item_news_four">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
                nullam sed. Libero orci est mi aenean senectus ut aenean.
                Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
              </p>
            </div>
          </div>

          <div className="item_news_five">
            <div className="img_item_news_five relative w-full aspect-video  overflow-hidden ">
              <Image
                src="/Images/Rectangle 37.png"
                alt="#"
                fill
                className="image_five object-cover  transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text_item_news_five">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur. Tellus velit elit tellus
                nullam sed. Libero orci est mi aenean senectus ut aenean.
                Condimentum viverra dui nibh est leo scelerisque. Quam sagittis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListNews;
