import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import HeroBanner from "@/componencts/nap/HeroBanner";
import FilterTabs from "@/componencts/nap/FilterTabs";
import GameGrid from "@/componencts/nap/GameGrid";
import BannerMain from "@/componencts/home/BannerMain";
import './responsive.css';

export default function Home() {
  return (
    <div className=" min-h-screen bg-[#0b0f19] flex flex-col bg-[url(/Images/bg/Frame1000002268.png)]">
      <Header />
      <main className=" container_home flex-1 flex flex-col">
        <HeroBanner />
        <FilterTabs />
        <GameGrid />
        <BannerMain />

      </main>
      
      <Footer />
    </div>
  );
}
