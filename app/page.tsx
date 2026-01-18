import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToWork from "./components/HowToWork";
import TemplatePage from "./components/Templates";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        <Hero />
        <Features />
        <HowToWork />
        <TemplatePage />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
