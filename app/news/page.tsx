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
          <div
            className="absolute inset-0 bg-[#0b0f19] bg-[url('/Images/bg/bgbackground.png')] bg-cover bg-center pointer-events-none z-0"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 250px, black calc(100% - 100px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 250px, black calc(100% - 100px), transparent 100%)"
            }}
          />

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
