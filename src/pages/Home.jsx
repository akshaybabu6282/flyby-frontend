import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import InternationalPackages from '../components/InternationalPackages'
import React from 'react'
import WhyChooseUs from '../components/WhyChooseUs'
import StudyAbroadUK from '../components/StudyAbroadUK'
import Navbar from '../components/Navbar'
import IndiaTravelPackages from '../components/IndiaTravelPackages'
import FAQ from '../components/FAQ'



const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <InternationalPackages />
            <IndiaTravelPackages />
            <About />
            <WhyChooseUs />
            <StudyAbroadUK />
            <FAQ />
            <Contact />
            <Footer />
            
        </>
    )
}


export default Home