import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import BannerMain from "@/components/home/BannerMain";
import Game from "@/components/game/Game";
import './responsive.css';

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col">
      <Header />

      <main>
        <div className=" container_home relative flex-1 flex flex-col">
          <div className="relative z-10 flex flex-col">
            <Game />
            <BannerMain />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
