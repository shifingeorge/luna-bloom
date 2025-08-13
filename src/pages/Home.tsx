import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar />
      <Banner />
      <Products />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}