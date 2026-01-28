import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-blue-200 overflow-hidden"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
        className="absolute left-[-60px] bottom-20 w-72 opacity-10"
         loading="lazy"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-4xl font-bold text-blue-700 mb-6">
            About FlyBy
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            FlyBy is a complete travel management company built for
            travelers who value comfort, clarity, and confidence.
            From flight bookings to international visas and study
            abroad guidance, we manage everything so you travel
            stress free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-blue-50 p-10 rounded-2xl shadow-xl"
        >
          <h4 className="text-xl font-semibold text-blue-700 mb-4">
            Our Promise
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Trusted travel expertise</li>
            <li>✔ Transparent pricing</li>
            <li>✔ Dedicated WhatsApp support</li>
            <li>✔ Global partnerships</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
