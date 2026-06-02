import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import Banner from "@/componencts/home/Banner";
import ListItem from "@/componencts/home/ListItem";
import ListGames from "@/componencts/home/ListGame";
import Ecosystem from "@/componencts/home/Ecosystem";
import BannerMain from "@/componencts/home/BannerMain";
import ListNews from "@/componencts/home/ListNews";
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
