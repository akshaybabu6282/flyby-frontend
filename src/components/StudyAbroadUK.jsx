import React from 'react'
import { motion } from 'framer-motion'

const StudyAbroadUK = () => {
  return (
    <section
      id="study"
      className="relative py-36 px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
    >
      {/* Background abstract shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* Floating education icons */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
        className="absolute top-32 left-20 w-20 opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        className="absolute bottom-32 right-24 w-24 opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Study Abroad in the United Kingdom
          </h3>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Build your global future with expert UK education guidance from
            application to visa approval
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold mb-6">
              Complete UK Study Support
            </h4>

            <ul className="space-y-4 text-blue-100 text-lg">
              <li>✔ University and course selection</li>
              <li>✔ Application and offer letter assistance</li>
              <li>✔ Student visa documentation and guidance</li>
              <li>✔ IELTS and eligibility counselling</li>
              <li>✔ Pre-departure and post-arrival support</li>
            </ul>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
          >
            <h5 className="text-2xl font-bold mb-4">
              Why Choose FlyBy for UK Studies
            </h5>

            <p className="text-blue-100 mb-8 leading-relaxed">
              Our experienced education consultants help students choose the
              right universities, prepare strong applications, and smoothly
              complete the visa process with confidence.
            </p>

            <a
              href="https://wa.me/917304991052"
              className="inline-block bg-white text-blue-800 px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
            >
              Talk to a Study Advisor
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StudyAbroadUK
