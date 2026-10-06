import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { internationalDestinations } from "../data/internationalDestinations";

const InternationalPackages = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="international"
      aria-labelledby="international-heading"
      className="relative overflow-hidden bg-white px-6 py-20 sm:py-28"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute left-1/2 top-24 w-[1300px] max-w-none -translate-x-1/2 opacity-5"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <h2
            id="international-heading"
            className="text-3xl font-bold text-blue-700 sm:text-4xl"
          >
            International Tour Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore our destinations and speak with FlyBy about travel
            options for your dates, interests and budget.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll destinations left"
            aria-controls="international-destination-list"
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-700 shadow-xl transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:flex"
          >
            <ArrowLeft size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll destinations right"
            aria-controls="international-destination-list"
            className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-700 shadow-xl transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:flex"
          >
            <ArrowRight size={22} aria-hidden="true" />
          </button>

          <ul
            id="international-destination-list"
            ref={scrollRef}
            aria-label="International destinations"
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-6 pt-4 sm:gap-8"
          >
            {internationalDestinations.map((destination) => (
              <motion.li
                key={destination.slug}
                whileHover={{ y: -6 }}
                className="relative h-[420px] w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl"
              >
                <img
                  src={destination.image}
                  alt={`${destination.name} destination`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="mb-3 text-2xl font-bold">
                    {destination.name}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-white/90">
                    {destination.tagline}
                  </p>

                  <Link
                    to={`/international/${destination.slug}`}
                    aria-label={`View ${destination.name} destination`}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    View Destination
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500 md:hidden">
          Swipe to explore more destinations.
        </p>
      </div>
    </section>
  );
};

export default InternationalPackages;