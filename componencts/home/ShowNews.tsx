import Link from "next/link";
const ShowNews = () => {
  return (
     <Link href="/news" >
        <div className="flex justify-center mt-6 ">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3  transition-colors">
          XEM THÊM
        </button>
      </div>
      </Link>
  );
};

export default ShowNews;