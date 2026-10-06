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
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="FlyBy Tours & Travels | Travel, Visa and Tour Services in Wayanad"
        description="FlyBy Tours & Travels in Mananthavady, Wayanad provides flight bookings, visa services, international and India tour packages, hotel bookings, taxi services and UK study abroad guidance."
        path="/"
      />
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