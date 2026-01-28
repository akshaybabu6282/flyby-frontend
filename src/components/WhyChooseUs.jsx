import React from 'react'
import { motion } from 'framer-motion'

const points = [
  {
    title: 'All-in-One Travel Partner',
    desc: 'From visas to tours, flights to forex, everything under one trusted roof'
  },
  {
    title: 'International Visa Expertise',
    desc: 'Strong experience in visit visas, stamping and documentation'
  },
  {
    title: '24/7 WhatsApp Assistance',
    desc: 'Dedicated travel consultants always available for quick support'
  },
  {
    title: 'Study Abroad Specialists',
    desc: 'Focused guidance for UK admissions and overseas education'
  },
  {
    title: 'Premium Yet Affordable',
    desc: 'Luxury travel planning without unnecessary extra costs'
  },
  {
    title: 'Experienced Team',
    desc: 'Years of industry experience handling thousands of travelers'
  }
]

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="relative py-32 px-6 bg-gradient-to-t from-white to-blue-200 overflow-hidden"
    >
      {/* Background graphic */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* Dotted flight path */}
      <svg
        className="absolute top-32 left-1/2 -translate-x-1/2 opacity-10"
        width="600"
        height="200"
        viewBox="0 0 600 200"
        fill="none"
      >
        <path
          d="M10 150 Q300 20 590 120"
          stroke="#2563eb"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
      </svg>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h3 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
          Why FlyBy Tour & Travels
        </h3>
        <p className="text-lg text-gray-600">
          More than a travel agency, we are your long-term travel partner
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition"
          >
            {/* Number badge */}
            <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
              {index + 1}
            </div>

            <h4 className="text-xl font-bold text-blue-800 mb-4">
              {item.title}
            </h4>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
