import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TaxiServices from "../components/TaxiServices";
import InternationalPackages from "../components/InternationalPackages";
import IndiaTravelPackages from "../components/IndiaTravelPackages";
import About from "../components/About";
import TrustSection from "../components/TrustSection";
import WhyChooseUs from "../components/WhyChooseUs";
import StudyAbroadUK from "../components/StudyAbroadUK";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <TaxiServices />

        <InternationalPackages />

        <IndiaTravelPackages />

        <About />

        <TrustSection />

        <WhyChooseUs />

        <StudyAbroadUK />

        <GoogleReviews />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;