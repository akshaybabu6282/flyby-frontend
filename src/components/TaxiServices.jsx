import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bus,
  Car,
  MapPin,
  Plane,
  Users,
} from "lucide-react";

const vehicleServices = [
  {
    title: "Taxi & Cab",
    description:
      "Comfortable cars for local travel, business trips, family journeys and outstation travel.",
    icon: Car,
  },
  {
    title: "Airport Transfer",
    description:
      "Convenient airport pickup and drop services based on your luggage and group size.",
    icon: Plane,
  },
  {
    title: "Tempo Traveller",
    description:
      "Spacious tempo travellers for family trips, group tours, functions and sightseeing journeys.",
    icon: Users,
  },
  {
    title: "Bus Service",
    description:
      "Bus arrangements for large groups, tours, events, pilgrimages and long-distance travel.",
    icon: Bus,
  },
];

const TaxiServices = () => {
  return (
    <section
      id="taxi-services"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background image */}
      <img
        src="/assets/bangalore.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      {/* Dark background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/95 to-slate-950/85" />

      {/* Background effects */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Travel comfortably with FlyBy
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Taxi & Vehicle Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Cabs, airport transfers, tempo travellers and buses for local,
            outstation, family and group journeys.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200">
              <MapPin className="h-4 w-4" />
              Local and Outstation Travel
            </div>

            <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
              The right vehicle for every journey
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              From individual taxi bookings to vehicles for large groups,
              FlyBy arranges reliable transportation based on your route,
              passenger count and travel needs.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Book cabs, airport transfers, tempo travellers and buses for
              local journeys, outstation trips, sightseeing, family travel,
              functions and group tours.
            </p>

            <Link
              to="/taxi-services"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore Vehicle Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Vehicle service cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {vehicleServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/15"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{service.title}</h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom enquiry line */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold">
              Planning a local or outstation journey?
            </h3>

            <p className="mt-2 text-slate-300">
              Tell us your route, date and passenger count to find a suitable
              vehicle.
            </p>
          </div>

          <a
            href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20would%20like%20to%20enquire%20about%20taxi%20and%20vehicle%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TaxiServices;