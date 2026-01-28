import React from "react"
import { motion } from "framer-motion"

const indiaPackages = [
  {
    name: "Manali",
    image: "/src/assets/Manali.jpg",
  },
  {
    name: "Delhi & Agra",
    image: "/src/assets/delhi_agra.webp",
  },
  {
    name: "Rajasthan",
    image: "/src/assets/rajastan.cms",
  },
  {
    name: "Goa",
    image: "/src/assets/goa.png",
  },
]

const IndiaPackages = () => {
  return (
    <section
      id="india-packages"
      className="relative py-28 px-6 bg-gradient-to-t from-blue-200 to-white overflow-hidden"
    >
      {/* Animated background graphics */}
      <motion.div
        className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[25%] right-[10%] w-[200px] h-[200px] bg-blue-300/25 rounded-full blur-2xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-6">
          Travel Across India
        </h3>

        <p className="text-center text-lg text-blue-900 max-w-3xl mx-auto mb-16">
          Handpicked destinations and custom travel experiences across India.
          Family trips, honeymoons, group tours, and spiritual journeys.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {indiaPackages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={item.image}
                alt={item.name}
                 loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-bold mb-4 drop-shadow-lg">
                  {item.name}
                </h4>

                <a
                  href={`https://wa.me/917304991052?text=I%20want%20details%20about%20${item.name}%20travel%20package`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition shadow-md"
                >
                  Get Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.p
            className="text-blue-800 mb-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Looking for more destinations or a fully customized trip?
          </motion.p>

          <motion.a
            href="/india-packages"
            className="inline-block px-12 py-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            View All India Packages
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default IndiaPackages
