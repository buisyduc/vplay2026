import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import BannerMain from "@/componencts/home/BannerMain";
import News from "@/componencts/news/News";
import ListNews from "@/componencts/home/ListNews";
import './responsive.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col">
      <Header />

      <main>
        <div className="container_home  relative flex-1 flex flex-col">
        

          <div className="relative z-10 flex flex-col">
            <ListNews />
            <News />
            <BannerMain />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
