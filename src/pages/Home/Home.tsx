import Footer from "../../components/layout/Footer";
import PublicHeader from "../../components/layout/PublicHeader";
import Demo from "./Sections/Demo";
import Features from "./Sections/Features";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <PublicHeader onOptionSelect={scrollToSection} />
      <div className="pt-24">
        <Hero />
        <section id="features">
          {" "}
          <Features />
        </section>
        <section id="demo">
          {" "}
          <Demo />
        </section>
        <section id="pricing">
          <Pricing />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
