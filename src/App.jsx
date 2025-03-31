import HeadNav from "./components/HeadNav";
import Hero from "./components/Hero";
import DataBox from "./components/DataBox";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Map from "./components/Map";
import FeaturedIn from "./components/FeaturedIn";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
// import aos library
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // set aos:scroll page animation library configs
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <header>
        <HeadNav />
      </header>

      <main>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Hero />
          <DataBox />
        </div>
        <div data-aos="fade-right">
          <Cards />
        </div>
        <div data-aos="fade-left">
          <Features />
        </div>
        <div data-aos="fade-right">
          <Map />
        </div>
        <div data-aos="zoom-in">
          <FeaturedIn />
        </div>
        <div className="mb-75" data-aos="fade-left">
          <Testimonials />
        </div>
      </main>
      <div className="relative" data-aos="fade-down">
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
