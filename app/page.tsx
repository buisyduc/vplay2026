import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import Banner from "@/componencts/home/Banner";
import ListItem from "@/componencts/home/ListItem";
import ListGames from "@/componencts/home/ListGame";
import Ecosystem from "@/componencts/home/Ecosystem";
import BannerMain from "@/componencts/home/BannerMain";
import ListNews from "@/componencts/home/ListNews";
import ShowNews from "@/componencts/home/ShowNews";
import './responsive.css';
// import FilterTabs from "@/componencts/home/FilterTabs";
// import GameGrid from "@/componencts/home/GameGrid";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <main>
        <Banner />
        <ListItem />
        
        <div className="relative w-full flex flex-col">

          <div
            className="absolute inset-0 bg-[#0b0f19] bg-[url('/Images/bg2.png')] bg-cover bg-center pointer-events-none z-0"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 250px, black calc(100% - 100px), transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 250px, black calc(100% - 100px), transparent 100%)"
            }}
          />

          <div className="relative z-10 flex flex-col">
            <ListGames />
            <Ecosystem />
            <BannerMain />
            <ListNews />
            <ShowNews />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}