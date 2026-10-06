import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { indiaDestinations } from "../data/indiaDestinations";
import SEO from "../components/SEO";

const IndiaPackagesPage = () => {
  const reduceMotion = useReducedMotion();

  const whatsappUrl =
    "https://wa.me/917304991052?text=" +
    encodeURIComponent(
      "Hi FlyBy, I would like to enquire about an India trip.\n\n" +
      "Destination:\n" +
      "Travel dates:\n" +
      "Departure location:\n" +
      "Number of travellers:\n" +
      "Approximate budget:"
    );

  return (
    <>
      <SEO
        title="India Tour Packages from Wayanad | FlyBy Tours & Travels"
        description="Explore India tour packages from FlyBy Tours & Travels in Mananthavady, Wayanad. Plan family holidays, honeymoon trips, cultural journeys, spiritual travel and customised India tours."
        path="/india-packages"
      />
      <Navbar />

      <main>
        {/* Page introduction */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-6 pb-14 pt-32 sm:pb-20 sm:pt-36">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <Link
              to="/#india-packages"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              Back to Homepage
            </Link>

            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Explore with FlyBy
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
                India Tour Packages
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Find a destination for your next holiday. Explore the
                individual pages, then share your dates, preferences and
                budget with our team to discuss suitable travel options.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Itineraries, prices and inclusions are confirmed in your
                individual travel proposal.
              </p>
            </div>
          </div>
        </section>

        {/* All India destinations */}
        <section
          aria-labelledby="india-destinations-heading"
          className="bg-white px-6 pb-20 sm:pb-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2
                id="india-destinations-heading"
                className="text-2xl font-bold text-slate-900"
              >
                Choose Your Destination
              </h2>

              <p className="text-sm text-slate-500">
                {indiaDestinations.length} destinations to explore
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {indiaDestinations.map((destination) => (
                <motion.article
                  key={destination.slug}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 24 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                  }}
                  className="group relative h-[420px] overflow-hidden rounded-2xl bg-slate-900 shadow-lg"
                >
                  <img
                    src={destination.image}
                    alt={`${destination.name} destination`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"
                  />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold">
                      {destination.cardTitle || destination.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/90">
                      {destination.tagline}
                    </p>

                    <Link
                      to={`/india/${destination.slug}`}
                      aria-label={`View ${destination.name} destination`}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      View Destination
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Custom trip enquiry */}
        <section className="bg-blue-50 px-6 py-14 sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
                Have another destination in mind?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Tell us where you would like to go, who is travelling
                and your preferred dates. Our team can discuss whether
                suitable arrangements are available for your request.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Discuss Your India Trip
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IndiaPackagesPage;