import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Services } from "../components/Services";
import { PromBanner } from "../components/PromBanner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { PromoCard } from "../components/threepromcards";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar />
      <Banner />
      <Products />
      <PromBanner />
      <About />
      <PromoCard />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}