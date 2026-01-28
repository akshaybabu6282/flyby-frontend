import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-blue-500 to-blue-300"
    >
      {/* Navbar */}
      <Navbar />

      {/* Clouds */}
      <motion.img
        src="https://pngimg.com/uploads/cloud/cloud_PNG16.png"
        className="absolute top-24 left-0 w-72 opacity-30"
        animate={{ x: [0, 300, 0] }}
        transition={{ duration: 40, repeat: Infinity }}
      />

      <motion.img
        src="https://pngimg.com/uploads/cloud/cloud_PNG16.png"
        className="absolute top-48 right-0 w-96 opacity-20"
        animate={{ x: [0, -400, 0] }}
        transition={{ duration: 50, repeat: Infinity }}
      />

      {/* Flying Plane */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/7893/7893979.png"
        className="absolute top-1/3 left-[-120px] w-28 opacity-90"
        animate={{ x: '120vw', y: [-20, 20, -20] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Fly Beyond Borders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-blue-100 mb-10"
        >
          Premium travel, visa, international tours and overseas education
          services from trusted experts
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.08 }}
          href="https://wa.me/917304991052"
          className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold shadow-2xl"
        >
          Chat with us
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
