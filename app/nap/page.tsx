import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/nap/HeroBanner";
import FilterTabs from "@/components/nap/FilterTabs";
import GameGrid from "@/components/nap/GameGrid";
import BannerMain from "@/components/home/BannerMain";
import './responsive.css';

export default function Home() {
  return (
    <div className=" min-h-screen bg-[#0b0f19] flex flex-col ">
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
