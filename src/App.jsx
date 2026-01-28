import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero.jsx";
import AboutSection from "./Components/AboutSection/About.jsx";
import QualitySection from "./Components/QualitySection/Quality.jsx";
import ProductSection from "./Components/ProductSection/Product.jsx";
import ContactSection from "./Components/ContactSection/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
       <Hero />
       <AboutSection />
       <QualitySection />
       <ProductSection />
       <ContactSection />
       <Footer />
    </>
  );
}

export default App;

