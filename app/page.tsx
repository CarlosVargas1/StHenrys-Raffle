import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RaffleSelector from "@/components/RaffleSelector";
import DrawingInfo from "@/components/DrawingInfo";
import SpursRaffle from "@/components/SpursRaffle";
import SportsRaffle from "@/components/SportsRaffle";
import PursesRaffle from "@/components/PursesRaffle";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <RaffleSelector />
        <DrawingInfo />
        <SpursRaffle />
        <SportsRaffle />
        <PursesRaffle />
        <About />
      </main>
      <Footer />
    </>
  );
}
