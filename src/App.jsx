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

function App() {
  return (
    <div>
      <header>
        <HeadNav />
      </header>
      <main>
        <Hero />
        <DataBox />
        <Features />
        <Cards />
        <Map />
        <FeaturedIn />
        <div className="mb-75">
          <Testimonials />
        </div>
      </main>
      <div className="relative">
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
