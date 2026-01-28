import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const countries = [
  { name: 'Malaysia', image: '/src/assets/malaysia.avif' },
  { name: 'Dubai', image: '/src/assets/dubai.avif' },
  { name: 'Thailand', image: '/src/assets/tailand.webp' },
  { name: 'Bali', image: '/src/assets/Bali.jpg' },
  { name: 'Maldives', image: '/src/assets/maidives.jpg' },
  { name: 'Phuket', image: '/src/assets/phuket.jpg' },
  { name: 'Azerbaijan', image: '/src/assets/Azerbaijan.webp' },
  { name: 'Egypt', image: '/src/assets/egypt.jpg' },
  { name: 'Singapore', image: '/src/assets/Singapore.jpg' },
  { name: 'Paris', image: '/src/assets/Paris.jpg' },
  { name: 'Switzerland', image: '/src/assets/Switzerland.jpg' }
]

const InternationalPackages = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return

    const container = scrollRef.current
    const scrollAmount = container.clientWidth * 0.8

    container.scrollTo({
      left:
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section
      id="international"
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      {/* Background World Map */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[1300px] opacity-5 pointer-events-none"
      />

      <h3 className="text-4xl font-bold text-center text-blue-700 mb-14">
        International Tour Packages
      </h3>

      <div className="relative max-w-8xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl text-blue-700 hover:bg-blue-600 hover:text-white transition"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl text-blue-700 hover:bg-blue-600 hover:text-white transition"
        >
          ›
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-scroll pb-6 pt-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {countries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06 }}
              className="min-w-[300px] h-[420px] rounded-2xl overflow-hidden relative snap-start"
            >
              <img
                src={item.image}
                alt={item.name}
                 loading="lazy"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-bold mb-4">
                  {item.name}
                </h4>
                <a
                  href={`https://wa.me/917304991052?text=More%20info%20about%20${item.name}%20tour%20package`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition"
                >
                  Get Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InternationalPackages
