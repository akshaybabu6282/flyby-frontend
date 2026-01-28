import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqData = [
  {
    question: "How do I book an international tour package?",
    answer: "You can book by contacting us via WhatsApp or phone. Our team will guide you through the process and provide all details including itineraries and pricing."
  },
  {
    question: "Do you offer customized travel plans within India?",
    answer: "Yes! We offer tailor-made travel plans across India for families, honeymooners, groups, and solo travelers according to your preferences and budget."
  },
  {
    question: "Can you assist with visa applications?",
    answer: "Absolutely. Our experts provide step-by-step guidance for study abroad visas, visit visas, and work visas, ensuring a smooth application process."
  },
  {
    question: "What is your cancellation or refund policy?",
    answer: "Refund policies depend on the type of package and the timing of cancellation. Please contact us for specific details related to your booking."
  },
  {
    question: "Do you provide travel insurance?",
    answer: "We can guide you in purchasing travel insurance but it is optional. We recommend it for international trips to ensure a safe journey."
  }
]

const floatingVariants = {
  float1: {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      transition: { repeat: Infinity, duration: 10, ease: "easeInOut" }
    }
  },
  float2: {
    animate: {
      y: [0, 15, 0],
      x: [0, -10, 10, 0],
      transition: { repeat: Infinity, duration: 12, ease: "easeInOut" }
    }
  },
  float3: {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, -5, 0],
      transition: { repeat: Infinity, duration: 8, ease: "easeInOut" }
    }
  }
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-white to-blue-300 overflow-hidden">
      
      {/* Animated floating background graphics */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"
        {...floatingVariants.float1.animate}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-56 h-56 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"
        {...floatingVariants.float2.animate}
      />
      <motion.div
        className="absolute top-1/2 left-3/4 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl pointer-events-none"
        {...floatingVariants.float3.animate}
      />

      <div className="relative max-w-6xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-6">
          Frequently Asked Questions
        </h3>
        <p className="text-center text-lg text-blue-700 max-w-3xl mx-auto mb-16">
          Answers to common questions about FlyBy Tours, packages, bookings, and travel guidance.
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg md:text-xl font-semibold text-blue-900">
                  {item.question}
                </h4>
                <span className="text-blue-600 font-bold text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-blue-800 text-base md:text-lg overflow-hidden"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
