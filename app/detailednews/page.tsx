
import Header from "@/componencts/layout/Header";
import Footer from "@/componencts/layout/Footer";
import DetailedNews from "@/componencts/detailednews/DetailedNews";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <DetailedNews />
      </main>

      <Footer />
    </div>
  );
}
