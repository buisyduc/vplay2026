
import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import Banner from "@/componencts/home/Banner";
import ListItem from "@/componencts/home/ListItem";
import ListGames from "@/componencts/home/ListGame";
import Ecosystem from "@/componencts/home/Ecosystem";
import BannerMain from "@/componencts/home/BannerMain";
import ListNews from "@/componencts/home/ListNews";
import ShowNews from "@/componencts/home/ShowNews";
// import FilterTabs from "@/componencts/home/FilterTabs";
// import GameGrid from "@/componencts/home/GameGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Banner />
        <ListItem />
        <ListGames />
        <Ecosystem />
        <BannerMain />
        <ListNews />
        <ShowNews />
      </main>

      <Footer />
    </div>
  );
}
