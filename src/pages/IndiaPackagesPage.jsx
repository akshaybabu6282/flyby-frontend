import React, { useState } from "react"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

const packages = [
  {
    name: "Kerala Backwaters",
    category: "Family",
    image: "/assets/kerala.webp",
  },
  {
    name: "Goa Beach Holiday",
    category: "Honeymoon",
    image: "/assets/goa.png",
  },
  {
    name: "Kashmir Paradise",
    category: "Honeymoon",
    image: "/assets/Manali.jpg",
  },
  {
    name: "Rajasthan Heritage Tour",
    category: "Cultural",
    image: "/assets/Rajasthan.jpeg",
  },
  {
    name: "Varanasi Spiritual Trip",
    category: "Spiritual",
    image: "/assets/Varanasi.webp",
  },
  {
    name: "Mumbai",
    category: "Family",
    image: "/assets/mumbai.avif",
  },
    {
    name: "bangalore ",
    category: "Fun and Entertainment",
    image: "/assets/bangalore.jpg",
  },
   {
    name: "Delhi & Agra ",
    category: "Historical",
    image: "/assets/delhi_agra.webp",
  },
  {
    name: "hyderabad",
    category: "Honeymoon",
    image: "/assets/hyderabad.webp",
  },
    {
    name: "kodaikanal",
    image: "/assets/kodaikanal.jpg",
  },
   {
    name: "Ooty",
    image: "/assets/Ooty.jpg",
  },
  {
    name: "Mysore",
    image: "/assets/Mysore.webp",
  },
]

const categories = ["All", "Family", "Honeymoon", "Adventure", "Cultural", "Spiritual"]

const IndiaPackagesPage = () => {
  const [active, setActive] = useState("All")
  const navigate = useNavigate()

  const filtered = active === "All" ? packages : packages.filter((p) => p.category === active)

  return (
    <>
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
        {/* Background Graphics */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-amber-200/30 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-150px] w-[400px] h-[400px] rounded-full bg-amber-400/20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[30%] right-[10%] w-[200px] h-[200px] rounded-full bg-amber-300/25 blur-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <div className="mb-10 text-left">
            <button
              onClick={() => navigate(-1)}
              className="inline-block px-6 py-2 rounded-full bg-amber-700 text-white font-medium hover:bg-amber-800 transition"
            >
              ← Back
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-6">
            India Tour Packages
          </h1>

          <p className="text-center text-lg text-amber-800 max-w-3xl mx-auto mb-14">
            Discover India with curated travel experiences tailored for families,
            couples, groups, and spiritual travelers.
          </p>

          {/* Filters */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  active === cat
                    ? "bg-amber-700 text-white shadow-lg"
                    : "bg-white text-amber-700 border border-amber-300 hover:bg-amber-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div> */}

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                   loading="lazy"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block mb-2 text-sm bg-amber-600 px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">{item.name}</h3>

                  <a
                    href={`https://wa.me/917304991052?text=I%20want%20details%20about%20${item.name}`}
                    className="inline-block bg-white text-amber-800 px-6 py-2 rounded-full font-semibold hover:bg-amber-100 transition shadow-md"
                  >
                    Get Package Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default IndiaPackagesPage
