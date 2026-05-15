import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import HeroBanner from "@/componencts/nap/HeroBanner";
import FilterTabs from "@/componencts/nap/FilterTabs";
import GameGrid from "@/componencts/nap/GameGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroBanner />
        <FilterTabs />
        <GameGrid />
      </main>
      
      <Footer />
    </div>
  );
}
