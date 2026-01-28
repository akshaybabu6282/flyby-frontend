import "./App.css"
import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import IndiaPackagesPage from "./pages/IndiaPackagesPage"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india-packages" element={<IndiaPackagesPage />} />
      </Routes>

      <WhatsAppButton />
    </>
  )
}

export default App
