import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
      <div className="flex items-center justify-between px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl">
        
        {/* Logo */}
        <img onClick={() => scrollTo('home')} src="/assets/flyby-removebg-preview.png"  loading="lazy" className='h-13 cursor-pointer bg-gray-200 rounded-xl' alt="" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-black font-medium">
          <li onClick={() => scrollTo('home')} className="cursor-pointer hover:text-blue-600 transition">Home</li>
          <li onClick={() => scrollTo('services')} className="cursor-pointer hover:text-blue-600 transition">Services</li>
          <li onClick={() => scrollTo('international')} className="cursor-pointer hover:text-blue-600 transition">Packages</li>
          <li onClick={() => scrollTo('study')} className="cursor-pointer hover:text-blue-600 transition">Study Abroad</li>
          <li onClick={() => scrollTo('contact')} className="cursor-pointer hover:text-blue-600 transition">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-3 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl p-6 md:hidden">
          <ul className="flex flex-col gap-4 text-blue-900 font-medium">
            <li onClick={() => scrollTo('home')}>Home</li>
            <li onClick={() => scrollTo('services')}>Services</li>
            <li onClick={() => scrollTo('international')}>Packages</li>
            <li onClick={() => scrollTo('study')}>Study Abroad</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
