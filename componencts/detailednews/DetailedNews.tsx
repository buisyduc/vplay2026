import Image from "next/image";
const DetailedNews = () => {
  return (
    <div className="w-full py-12 px-6 max-w-[1100px] mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ">
          <p className="text-xs text-gray-400">
            Tin tức / Chính tức khai mở Server mới
          </p>
          <h2 className="text-3xl font-black">
            Lorem ipsum dolor sit amet consectetur. Malesuada bibendum laoreet
            non sed quis integer. Malesuada scelerisque varius.
          </h2>
          <p className="text-sm text-gray-300 mt-8">
            Lorem ipsum dolor sit amet consectetur. Erat integer pretium mollis
            cursus elementum enim morbi pellentesque. Vitae id elementum in arcu
            ac. Penatibus nec vulputate nec in est sit id. Lectus mauris a nunc
            odio. Molestie magna volutpat id neque sapien. Est et hac eros
            habitasse mi elementum nibh. Id nulla pharetra magna pharetra sed
            magnis cursus. Nibh gravida nisi orci nibh vel quam donec cursus. In
            lorem in sed sit justo. Eu vitae morbi massa in tellus tempor. Neque
            egestas ut risus tellus amet quam tristique. Tempor aliquam urna
            pellentesque in scelerisque augue. Id faucibus praesent euismod
            donec felis ut platea.
          </p>
          <Image
            src="/Images/Rectangle 92.png"
            alt="News Image"
            width={800}
            height={400}
            className="object-cover rounded mt-8"
          />
          <p className="text-sm text-gray-300  flex justify-center">
            Erat integer pretium mollis cursus elementum enim morbi pellentesque
          </p>
          <p className="text-sm text-gray-300 mt-8">
            Lorem ipsum dolor sit amet consectetur. Erat integer pretium mollis
            cursus elementum enim morbi pellentesque. Vitae id elementum in arcu
            ac. Penatibus nec vulputate nec in est sit id. Lectus mauris a nunc
            odio. Molestie magna volutpat id neque sapien. Est et hac eros
            habitasse mi elementum nibh. Id nulla pharetra magna pharetra sed
            magnis cursus. Nibh gravida nisi orci nibh vel quam donec cursus. In
            lorem in sed sit justo. Eu vitae morbi massa in tellus tempor. Neque
            egestas ut risus tellus amet quam tristique. Tempor aliquam urna
            pellentesque in scelerisque augue. Id faucibus praesent euismod
            donec felis ut platea.
          </p>
          <Image
            src="/Images/Rectangle 92.png"
            alt="News Image"
            width={800}
            height={400}
            className="object-cover rounded mt-8"
          />
          <p className="text-sm text-gray-300  flex justify-center">
            Erat integer pretium mollis cursus elementum enim morbi pellentesque
          </p>
          <Image
            src="/Images/Rectangle 92.png"
            alt="News Image"
            width={800}
            height={400}
            className="object-cover rounded mt-8"
          />
          <p className="text-sm text-gray-300  flex justify-center">
            Erat integer pretium mollis cursus elementum enim morbi pellentesque
          </p>
          <p className="text-sm text-gray-300 mt-8">
            Lorem ipsum dolor sit amet consectetur. Ut ultrices faucibus leo
            vitae odio laoreet enim. Amet mauris amet nunc nibh magna sed sed
            adipiscing. Cras convallis mattis eu facilisis. Dui aliquet at
            molestie lacus. Ultrices fringilla nisl mi integer auctor. Laoreet
            convallis vulputate at sit auctor diam eget ultricies. Venenatis
            faucibus ac turpis accumsan convallis risus non. Rhoncus egestas
            urna in dignissim laoreet massa est cras ultricies. Sed laoreet
            purus at luctus aliquet morbi. Tortor ultrices non mauris tortor
            pharetra faucibus sapien morbi urna. In nullam elit tellus sed
            placerat. Mus lorem consectetur neque odio commodo. Sed libero
            lectus sed lorem libero dictum. Hendrerit dignissim pretium at
            condimentum. Venenatis aenean ac aenean aliquam. Tristique ac
            condimentum neque feugiat eleifend diam non. In auctor feugiat a
            elementum in risus. Viverra vulputate nec at eu mattis diam
            scelerisque. At eu massa quam faucibus. Nisl auctor aliquet donec
            malesuada donec feugiat sapien eu. Augue ipsum varius curabitur
            neque consectetur ultrices turpis ullamcorper amet. Vulputate amet
            ante scelerisque etiam lectus porttitor fermentum consequat. Mauris
            scelerisque posuere convallis vulputate at volutpat proin. Faucibus
            laoreet auctor nisi tempus. Elementum quis morbi cras suscipit.
            Ullamcorper pellentesque feugiat morbi lorem. Adipiscing laoreet
            viverra eu gravida varius in ultrices. Leo eu sed pharetra velit
            leo. Nisl tristique sit sit sed risus eu rhoncus quam. Egestas
            viverra nunc id nulla vitae malesuada aliquam quis ornare. Tincidunt
            magna arcu in et quis non ut nunc ultricies.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Image
                src="/Images/Rectangle21.png"
                alt="News Image"
                width={800}
                height={400}
                className="object-cover rounded mt-8"
              />
              <p className="text-sm text-gray-300  flex justify-center">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div>
              <Image
                src="/Images/Rectangle21.png"
                alt="News Image"
                width={800}
                height={400}
                className="object-cover rounded mt-8"
              />
              <p className="text-sm text-gray-300  flex justify-center">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="...">
          <h3 className="text-xl font-bold mb-4">Tin mới nhất</h3>
          <div className="flex gap-3 bg-gray-800 rounded-lg p-4 mb-4 items-start">
            {/* Ảnh cố định bên trái */}
            <div className="relative w-[100px] h-[80px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Text bên phải */}
            <div className="flex flex-col gap-1">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Eget id risus lacus id
                enim viverra.
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-gray-800 rounded-lg p-4 mb-4 items-start">
            {/* Ảnh cố định bên trái */}
            <div className="relative w-[100px] h-[80px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Text bên phải */}
            <div className="flex flex-col gap-1">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Eget id risus lacus id
                enim viverra.
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-gray-800 rounded-lg p-4 mb-4 items-start">
            {/* Ảnh cố định bên trái */}
            <div className="relative w-[100px] h-[80px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Text bên phải */}
            <div className="flex flex-col gap-1">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Eget id risus lacus id
                enim viverra.
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-gray-800 rounded-lg p-4 mb-4 items-start">
            {/* Ảnh cố định bên trái */}
            <div className="relative w-[100px] h-[80px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Text bên phải */}
            <div className="flex flex-col gap-1">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Eget id risus lacus id
                enim viverra.
              </p>
            </div>
          </div>
          <div className="flex gap-3 bg-gray-800 rounded-lg p-4 mb-4 items-start">
            {/* Ảnh cố định bên trái */}
            <div className="relative w-[100px] h-[80px] flex-shrink-0">
              <Image
                src="/Images/Rectangle 26.png"
                alt="Game 1"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* Text bên phải */}
            <div className="flex flex-col gap-1">
              <h4 className="inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit">
                TIN TỨC
              </h4>
              <p className="text-xs text-gray-300 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur. Eget id risus lacus id
                enim viverra.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default DetailedNews;
