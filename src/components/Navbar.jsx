import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    setOpen(false);

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(`/#${sectionId}`);
  };

  const goHome = () => {
    setOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[92%] max-w-7xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/70 px-5 py-3 shadow-xl backdrop-blur-xl sm:px-7">
        {/* Logo */}
        <button
          type="button"
          onClick={goHome}
          className="shrink-0"
          aria-label="Go to homepage"
        >
          <img
            src="/assets/flyby-removebg-preview.png"
            alt="FlyBy Tours and Travels"
            className="h-12 w-auto rounded-xl bg-slate-100 object-contain"
          />
        </button>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-900 lg:flex">
          <li>
            <button
              type="button"
              onClick={goHome}
              className="transition hover:text-blue-700"
            >
              Home
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("services")}
              className="transition hover:text-blue-700"
            >
              Services
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("taxi-services")}
              className="transition hover:text-blue-700"
            >
              Taxi Services
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("international")}
              className="transition hover:text-blue-700"
            >
              Packages
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("study")}
              className="transition hover:text-blue-700"
            >
              Study Abroad
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="transition hover:text-blue-700"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Desktop WhatsApp button */}
        <a
          href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 lg:inline-flex"
        >
          Enquire Now
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/40 bg-white/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 font-semibold text-slate-900">
            <li>
              <button
                type="button"
                onClick={goHome}
                className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-blue-50 hover:text-blue-700"
              >
                Home
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("services")}
                className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-blue-50 hover:text-blue-700"
              >
                Services
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("taxi-services")}
                className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-blue-50 hover:text-blue-700"
              >
                Taxi Services
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("international")}
                className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-blue-50 hover:text-blue-700"
              >
                Packages
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("study")}
                className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-blue-50 hover:text-blue-700"
              >
                Study Abroad
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-blue-50 hover:text-blue-700"
              >
                Contact
              </button>
            </li>
          </ul>

          <a
            href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full justify-center rounded-full bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Enquire on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;