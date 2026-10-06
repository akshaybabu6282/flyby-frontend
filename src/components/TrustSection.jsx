import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Headphones,
  MapPin,
  MessagesSquare,
  Route,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  {
    title: "Located in Mananthavady",
    description:
      "A local travel team you can contact directly for assistance with your journey.",
    icon: MapPin,
  },
  {
    title: "Personal Travel Assistance",
    description:
      "Get guidance based on your destination, travel dates, budget and individual requirements.",
    icon: Headphones,
  },
  {
    title: "Clear Communication",
    description:
      "We explain the booking process, required documents and important travel details clearly.",
    icon: MessagesSquare,
  },
  {
    title: "Complete Travel Support",
    description:
      "Flights, visas, accommodation, tour packages, education guidance and vehicle arrangements in one place.",
    icon: Route,
  },
  {
    title: "Document Guidance",
    description:
      "Careful assistance with visa, passport, attestation and travel-document requirements.",
    icon: BadgeCheck,
  },
  {
    title: "Support You Can Reach",
    description:
      "Connect with our team through phone, WhatsApp, email or by visiting our office.",
    icon: ShieldCheck,
  },
];

const TrustSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      {/* Background decorations */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
            <ShieldCheck className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Travel with confidence
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            Why Travellers Trust FlyBy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Travel planning becomes easier when you have a team that listens,
            explains the process clearly and remains available when you need
            assistance.
          </p>
        </motion.div>

        {/* Trust cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {point.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {point.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-between gap-7 rounded-3xl bg-blue-950 px-8 py-10 text-center text-white sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Have a travel question?
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Speak directly with the FlyBy team
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              Share your destination, travel date or service requirement and
              receive clear guidance on the next steps.
            </p>
          </div>

          <a
            href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20would%20like%20help%20with%20my%20travel%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-7 py-3.5 font-bold text-blue-900 transition hover:bg-blue-50"
          >
            Talk to Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;