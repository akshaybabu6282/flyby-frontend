import React from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-blue-300 to-white px-6 py-32 text-blue-950"
    >
      {/* Background effects */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-3xl" />

      {/* Flight path */}
      <svg
        className="absolute left-1/2 top-24 -translate-x-1/2 opacity-10"
        width="700"
        height="220"
        viewBox="0 0 700 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 160 Q350 10 690 140"
          stroke="#2563eb"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Contact FlyBy
          </p>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Let’s Talk Travel
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-900/75">
            Planning a trip, visa application, vehicle booking or study
            abroad journey? Connect with our team for clear assistance.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <motion.a
            href="tel:+917304991052"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl bg-blue-950 p-7 text-white shadow-xl transition hover:bg-blue-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-400/15 text-green-400">
              <Phone className="h-6 w-6 transition group-hover:scale-110" />
            </div>

            <h3 className="mt-6 text-xl font-bold">Call Us</h3>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Speak directly with our travel team.
            </p>

            <p className="mt-5 font-semibold text-white">
              +91 73049 91052
            </p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20would%20like%20help%20with%20my%20travel%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl bg-blue-950 p-7 text-white shadow-xl transition hover:bg-blue-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-400/15 text-green-400">
              <MessageCircle className="h-6 w-6 transition group-hover:scale-110" />
            </div>

            <h3 className="mt-6 text-xl font-bold">WhatsApp</h3>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Get quick assistance with your travel enquiry.
            </p>

            <p className="mt-5 font-semibold text-white">
              Start a conversation
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:flyby.mndy@gmail.com"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl bg-blue-950 p-7 text-white shadow-xl transition hover:bg-blue-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/15 text-sky-300">
              <Mail className="h-6 w-6 transition group-hover:scale-110" />
            </div>

            <h3 className="mt-6 text-xl font-bold">Email</h3>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Send detailed enquiries and documents by email.
            </p>

            <p className="mt-5 break-all font-semibold text-white">
              flyby.mndy@gmail.com
            </p>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://maps.app.goo.gl/ytDqseEiTHsSD8qA9"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="group rounded-3xl bg-blue-950 p-7 text-white shadow-xl transition hover:bg-blue-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-300/15 text-red-300">
              <MapPin className="h-6 w-6 transition group-hover:scale-110" />
            </div>

            <h3 className="mt-6 text-xl font-bold">Visit Us</h3>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Visit the FlyBy office for personal assistance.
            </p>

            <p className="mt-5 font-semibold text-white">
              Mananthavady, Wayanad
            </p>
          </motion.a>
        </div>

        {/* Office hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-7 rounded-3xl border border-blue-200 bg-white/80 p-7 shadow-xl backdrop-blur sm:grid-cols-[auto_1fr] sm:items-center sm:p-9"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white">
            <Clock3 className="h-8 w-8" />
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Office working hours
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Plan your visit to FlyBy
              </h3>
            </div>

            <div className="grid gap-2 text-slate-700 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="font-bold text-slate-950">
                  Monday to Saturday
                </p>

                <p className="mt-1">10:00 AM to 7:00 PM</p>
              </div>

              <div>
                <p className="font-bold text-slate-950">Sunday</p>

                <p className="mt-1 text-red-600">Closed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;