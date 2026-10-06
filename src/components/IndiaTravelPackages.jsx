import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { featuredIndiaDestinations } from "../data/indiaDestinations";

const IndiaTravelPackages = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="india-packages"
      aria-labelledby="india-packages-heading"
      className="relative overflow-hidden bg-gradient-to-t from-blue-200 to-white px-6 py-20 sm:py-28"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[150px] -top-[100px] h-[300px] w-[300px] rounded-full bg-blue-200/30 blur-3xl"
        animate={
          reduceMotion ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }
        }
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[150px] -right-[100px] h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-3xl"
        animate={
          reduceMotion ? undefined : { x: [0, -60, 0], y: [0, -40, 0] }
        }
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[25%] h-[200px] w-[200px] rounded-full bg-blue-300/25 blur-2xl"
        animate={reduceMotion ? undefined : { y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2
          id="india-packages-heading"
          className="mb-6 text-center text-4xl font-bold text-blue-700 md:text-5xl"
        >
          Travel Across India
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-blue-900 sm:mb-16">
          Explore destinations for your next India holiday. Share your dates,
          interests and budget with FlyBy to discuss suitable travel options.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredIndiaDestinations.map((destination, index) => (
            <motion.article
              key={destination.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={destination.homeImage || destination.image}
                alt={`${destination.name} destination`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
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
                  to={`/india/${destination.slug}`}
                  aria-label={`View ${destination.name} destination`}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  View Destination
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center sm:mt-20">
          <p className="mb-6 text-lg leading-7 text-blue-800">
            Looking for more destinations for your next trip?
          </p>

          <Link
            to="/india-packages"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            View All India Destinations
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndiaTravelPackages;