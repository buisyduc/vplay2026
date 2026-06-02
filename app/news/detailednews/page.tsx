import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import DetailedNews from "@/componencts/detailednews/DetailedNews";
import './responsive.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <div className="container_home relative flex-1 flex flex-col">
          

          <div className="relative z-10 flex flex-col">
            <DetailedNews />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
