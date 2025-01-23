import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Offerings from "./sections/Offerings.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Offerings />
      <Faq />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
