import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BannerMain from "@/components/home/BannerMain";
import News from "@/components/news/News";
import ListNews from "@/components/home/ListNews";
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
