import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-36 px-6 bg-gradient-to-b from-blue-300 to-white text-blue-900 overflow-hidden"
    >
      {/* background graphics */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* flight dotted path */}
      <svg
        className="absolute top-24 left-1/2 -translate-x-1/2 opacity-10"
        width="700"
        height="220"
        viewBox="0 0 700 220"
        fill="none"
      >
        <path
          d="M10 160 Q350 10 690 140"
          stroke="#2563eb"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Let’s Talk Travel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-blue-800 max-w-3xl mx-auto mb-20 text-lg"
        >
          Planning a trip, visa, or study abroad journey? Connect with FlyBy
          and get expert guidance without confusion or delays.
        </motion.p>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          
          {/* Phone */}
          <motion.a
            href="tel:+917304991052"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group bg-blue-900 p-7 rounded-3xl shadow-xl hover:bg-blue-800 transition"
          >
            <Phone className="w-9 h-9 text-green-400 mb-5 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg mb-2 text-white">
              Call Us
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Speak directly with our travel consultants
            </p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/917304991052"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-blue-900 p-7 rounded-3xl shadow-xl hover:bg-blue-800 transition"
          >
            <MessageCircle className="w-9 h-9 text-green-400 mb-5 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg mb-2 text-white">
              WhatsApp
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Fast support and instant responses
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:flyby.mndy@gmail.com"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group bg-blue-900 p-7 rounded-3xl shadow-xl hover:bg-blue-800 transition"
          >
            <Mail className="w-9 h-9 text-sky-200 mb-5 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg mb-2 text-white">
              Email
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Detailed queries and documentation
            </p>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://maps.app.goo.gl/ytDqseEiTHsSD8qA9"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="group bg-blue-900 p-7 rounded-3xl shadow-xl hover:bg-blue-800 transition"
          >
            <MapPin className="w-9 h-9 text-red-300 mb-5 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg mb-2 text-white">
              Visit Us
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Mananthavady, Wayanad
            </p>
          </motion.a>

        </div>
      </div>
    </section>
  )
}

export default Contact
