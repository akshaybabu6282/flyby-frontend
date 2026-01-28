import React from "react"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-[#020617] text-blue-100 px-6 pt-20 pb-10 overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            FlyBy
          </h4>
          <p className="text-blue-200 leading-relaxed">
            Premium travel solutions for flights, visas, tours,
            and overseas education with expert guidance.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/flyby.travels?igsh=enFoNzFtMG9teTkw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <Instagram className="w-6 h-6"/>
            </a>
            <a href="https://www.facebook.com/share/1FH7oVVtus/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook className="w-6 h-6"/>
            </a>
           {/*  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin className="w-6 h-6"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
              <Twitter className="w-6 h-6"/>
            </a> */}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-blue-200">
            <li>Flight Tickets</li>
            <li>Visit & Work Visas</li>
            <li>International Tours</li>
            <li>Study Abroad (UK)</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>
          <p className="text-blue-200 mb-2">
            WhatsApp: +91 73049 91052
          </p>
          <p className="text-blue-200">
            Mananthavady, Wayanad, Kerala, India
          </p>
        </div>
      </div>

      {/* divider */}
      <div className="relative max-w-6xl mx-auto mt-14 mb-6 h-px bg-white/10"></div>

      {/* bottom text */}
      <p className="relative text-center text-sm text-blue-300">
        © 2026 FlyBy Tour & Travels. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
