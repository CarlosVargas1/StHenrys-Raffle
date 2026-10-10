import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RaffleSelector from "@/components/RaffleSelector";
import SpursRaffle from "@/components/SpursRaffle";
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
        <SpursRaffle />
        <PursesRaffle />
        <About />
      </main>
      <Footer />
    </>
  );
}
