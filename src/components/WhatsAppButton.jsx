import React from 'react'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917304991052"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center group"
    >
      <span className="mb-2 px-4 py-1 rounded-full text-black text-sm font-semibold animate-pulse shadow-lg">
        Chat with us
      </span>

      <div className="bg-green-400 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-7 h-7"
           loading="lazy"
        />
      </div>
    </a>
  )
}

export default WhatsAppButton
