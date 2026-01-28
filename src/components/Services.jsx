import React from 'react'
import { motion } from 'framer-motion'

const services = [
    {
        title: 'AIR TICKETS',
        image:
            '/src/assets/air_ticket.jpg'
    },
    {
        title: 'VISIT VISA',
        image:
            '/src/assets/visit_visa.avif'
    },
    {
        title: 'VISA STAMPING (SAUDI & KUWAIT)',
        image:
            '/src/assets/visa_stamping.webp'
    },
    {
        title: 'HOTEL & RESORT BOOKING',
        image:
            '/src/assets/hotels&resorts.jpeg'
    },
    {
        title: 'TOUR PACKAGES',
        image:
            '/src/assets/tour_packages.jpeg'
    },
    {
        title: 'STUDY ABROAD (UK)',
        image:
            '/src/assets/study_abroad.jpg'
    },
    {
        title: 'ATTESTATION',
        image:
            '/src/assets/ATTESTATION.jpg'
    },
    {
        title: 'UMRAH PACKAGE',
        image:
            '/src/assets/umrah.png'
    },
    {
        title: 'PASSPORT SERVICE',
        image:
            '/src/assets/PASSPORT SERVICE.jpg'
    }
]

const Services = () => {
    return (
        <section id="services" className="relative py-24 px-6 bg-gradient-to-b from-blue-300 to-white overflow-hidden">
            {/* Floating plane */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/34/34627.png"
                className="absolute top-20 right-[-80px] w-64 opacity-10 rotate-[-15deg]"
            />

            {/* Glow */}
            <div className="absolute -top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto">
                <h3 className="text-4xl font-bold text-center text-blue-700 mb-16">
                    Our Services
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group rounded-2xl overflow-hidden shadow-lg bg-white"
                        >
                            <div className="relative h-56">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                     loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <h4 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                                    {item.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
