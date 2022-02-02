import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Navbar from "./Components/Navbar";
import scrollreveal from "scrollreveal";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Products from "./Components/Products";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
