import Footer from "../../components/layout/Footer";
import PublicHeader from "../../components/layout/PublicHeader";
import Demo from "./Sections/Demo";
import Features from "./Sections/Features";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <PublicHeader />
      <div className="pt-24">
        <Hero />
        <Features />
        <Demo />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
