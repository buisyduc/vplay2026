import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ListItem from "@/components/home/ListItem";
import ListGames from "@/components/home/ListGame";
import Ecosystem from "@/components/home/Ecosystem";
import BannerMain from "@/components/home/BannerMain";
import ListNews from "@/components/home/ListNews";
import "./responsive.css";
import "./header_responsive.css";
// import FilterTabs from "@/componencts/home/FilterTabs";
// import GameGrid from "@/componencts/home/GameGrid";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="">
        <div className="container_home">
          <ListItem />
          <ListGames />
          <Ecosystem />
          <BannerMain />
          <ListNews />
      
        </div>
      </main>
      <Footer />
    </div>
  );
}
