import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  CircleHelp,
  MessageCircle,
} from "lucide-react";

const faqItems = [
  {
    question: "How do I book a tour package with FlyBy?",
    answer:
      "Contact our team through WhatsApp, phone, email or by visiting the office. Share your destination, preferred dates, number of travellers, budget and travel preferences. We will help you review suitable package options and guide you through the booking process.",
  },
  {
    question: "Can FlyBy create a customised travel package?",
    answer:
      "Yes. Tour packages can be planned according to your destination, travel dates, group size, preferred accommodation, sightseeing interests and budget. Package availability and pricing will depend on the selected services and travel period.",
  },
  {
    question: "What documents are required for a visit visa?",
    answer:
      "The required documents vary according to the destination country, purpose of travel and the applicant’s profile. Our team will provide the relevant checklist after reviewing your travel requirement. Visa approval is always subject to the rules and decision of the concerned embassy or immigration authority.",
  },
  {
    question: "Does FlyBy guarantee visa approval?",
    answer:
      "No travel agency can guarantee visa approval. FlyBy assists with document preparation, application guidance and submission requirements. The final decision is made only by the concerned embassy, consulate or immigration authority.",
  },
  {
    question: "Can I book only a flight ticket or hotel?",
    answer:
      "Yes. You can contact FlyBy for individual services such as flight-ticket booking, hotel and resort booking, visa assistance, document attestation, passport guidance or transportation arrangements.",
  },
  {
    question: "How early should I book a taxi or tempo traveller?",
    answer:
      "We recommend booking as early as possible, especially for weekends, holidays, airport transfers, weddings and group journeys. Vehicle availability depends on the travel date, route, passenger count and type of vehicle required.",
  },
  {
    question: "Do you arrange airport pickup and drop services?",
    answer:
      "Yes. FlyBy can assist with scheduled airport pickup and drop arrangements. Share the airport, pickup or drop location, flight timing, passenger count and luggage details so that a suitable vehicle can be arranged.",
  },
  {
    question: "Can I book a vehicle for an outstation or group trip?",
    answer:
      "Yes. Taxi, cab, tempo traveller and bus arrangements are available for local travel, outstation journeys, sightseeing, family holidays, pilgrimages, events and group tours. Vehicle availability and pricing depend on the route and travel requirements.",
  },
  {
    question: "What details are required to get a vehicle quote?",
    answer:
      "Please share the pickup point, destination, travel date, pickup time, return date if applicable, passenger count, luggage information and preferred vehicle type. These details help us check suitable vehicle options.",
  },
  {
    question: "What is the cancellation and refund policy?",
    answer:
      "Cancellation and refund conditions depend on the airline, hotel, tour operator, visa service, transportation provider or other supplier involved in the booking. Applicable cancellation charges and refund eligibility will be explained according to the selected service. Processing or service charges may be non-refundable.",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "Travel-insurance assistance may be available depending on the destination and travel requirement. Contact our team to confirm availability, coverage options and applicable terms before making the booking.",
  },
  {
    question: "What are FlyBy’s office working hours?",
    answer:
      "The FlyBy office is open Monday to Saturday from 10:00 AM to 7:00 PM. The office is closed on Sunday. You can contact the team through WhatsApp, phone or email for travel enquiries.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-50 px-6 py-24"
    >
      {/* Background effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
            <CircleHelp className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Helpful information
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Answers to common questions about bookings, visas, tour packages,
            vehicle services and travel assistance.
          </p>
        </motion.div>

        {/* Questions */}
        <div className="mt-14 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.25),
                }}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? "border-blue-300 shadow-lg shadow-blue-900/5"
                    : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                >
                  <span className="text-lg font-bold leading-7 text-slate-950">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "rotate-180 bg-blue-700 text-white"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-slate-100 px-6 pb-7 pt-5 sm:px-7">
                        <p className="leading-8 text-slate-600">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* WhatsApp help */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-blue-950 px-7 py-8 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-bold">
              Still have a question?
            </h3>

            <p className="mt-2 text-blue-200">
              Contact the FlyBy team and share your travel requirement.
            </p>
          </div>

          <a
            href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20have%20a%20question%20about%20your%20travel%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;