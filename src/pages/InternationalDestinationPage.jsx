import React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  MessageCircle,
  Phone,
  Users,
  Wallet,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFoundPage from "./NotFoundPage";
import {
  getInternationalDestination,
  internationalDestinations,
} from "../data/internationalDestinations";

const planningDetails = [
  {
    icon: CalendarDays,
    title: "Your travel dates",
    description:
      "Share your preferred departure date, return date and whether your dates are flexible.",
  },
  {
    icon: Users,
    title: "Who is travelling",
    description:
      "Tell us the number of adults and children, including children’s ages, so we can discuss suitable options.",
  },
  {
    icon: Wallet,
    title: "Your budget",
    description:
      "Let us know your approximate budget and accommodation preferences to help guide the proposal.",
  },
];

const InternationalDestinationPage = () => {
  const { slug } = useParams();
  const destination = getInternationalDestination(slug);

  if (!destination) {
    return <NotFoundPage />;
  }

  const seoTitle = `${destination.name} Tour Packages from Wayanad`;

  const seoDescription = `Plan a ${destination.name} holiday with FlyBy Tours & Travels in Mananthavady, Wayanad. Discuss flights, visas, accommodation, travel dates and customised international tour options.`;

  const seoImage = `https://www.flybytoursandtravels.in${destination.image
    }`;

  const enquiryMessage = encodeURIComponent(
    `Hi FlyBy, I am interested in a ${destination.name} holiday.\n\n` +
    "Preferred travel dates:\n" +
    "Number of adults:\n" +
    "Number of children and their ages:\n" +
    "Departure city:\n" +
    "Approximate budget:\n" +
    "Preferred trip duration:\n\n" +
    "Please share suitable travel options and booking details."
  );

  const whatsappUrl = `https://wa.me/917304991052?text=${enquiryMessage}`;

  const otherDestinations = internationalDestinations
    .filter((item) => item.slug !== destination.slug)
    .slice(0, 3);

  const faqs = [
    {
      question: `How do I enquire about a ${destination.name} holiday?`,
      answer:
        "Contact FlyBy through WhatsApp or phone with your travel dates, departure city, number of travellers and approximate budget. Our team will discuss your requirements and the available options.",
    },
    {
      question: "Is there a fixed itinerary on this page?",
      answer:
        "No. This page introduces the destination and helps you start an enquiry. Request a written proposal for the day-by-day itinerary, travel arrangements and booking conditions applicable to your trip.",
    },
    {
      question: "Are flights, hotels and activities included?",
      answer:
        "Inclusions depend on the proposal you choose. Before paying, check the written quotation for flights, accommodation, transfers, meals, activities and any items charged separately.",
    },
    {
      question: "Can I request changes to the proposed trip?",
      answer:
        "You can share your preferences with our team. Changes depend on availability, supplier conditions and any difference in cost. Confirm the revised details before booking.",
    },
    {
      question: "What should I check about passports and visas?",
      answer:
        "Entry requirements depend on your nationality, passport, travel dates and route. Check the current official requirements before booking. Our team can discuss documentation guidance, but visa issuance and entry decisions remain with the relevant authorities.",
    },
    {
      question: "Where can I find cancellation and refund details?",
      answer:
        "Read our Cancellation & Refund Policy and request the specific supplier conditions for your booking. Applicable charges and refund eligibility depend on the services booked and when the cancellation is requested.",
    },
  ];

  return (
    <>

      <SEO
        title={`${seoTitle} | FlyBy Tours & Travels`}
        description={seoDescription}
        path={`/international/${destination.slug}`}
        image={seoImage}
      />
      
      <Navbar />

      <main>
        {/* Destination hero */}
        <section className="relative isolate overflow-hidden bg-slate-950 pb-16 pt-32 sm:pb-20 sm:pt-36">
          <img
            src={destination.image}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 text-sm text-white/70"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>

                <li>
                  <Link
                    to="/#international"
                    className="hover:text-white"
                  >
                    International Trips
                  </Link>
                </li>

                <li aria-hidden="true">
                  <ChevronRight size={14} />
                </li>

                <li aria-current="page" className="text-white">
                  {destination.name}
                </li>
              </ol>
            </nav>

            <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  International Holidays with FlyBy
                </p>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Plan Your {destination.name} Holiday
                </h1>

                <p className="mt-5 text-xl leading-8 text-white/90 sm:text-2xl">
                  {destination.tagline}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  Start with your travel preferences. Speak with our team in
                  Mananthavady, Wayanad, to discuss a proposal for your trip.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Enquire About {destination.name}
                </a>
              </div>

              <aside className="rounded-2xl border border-white/20 bg-slate-950/60 p-6 backdrop-blur-sm sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                  Before You Book
                </p>

                <h2 className="mt-3 text-xl font-semibold text-white">
                  Know exactly what you are choosing.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Request a written itinerary, quotation, inclusions,
                  exclusions and cancellation conditions before confirming
                  your booking.
                </p>

                <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-6 text-slate-400">
                  This is a destination enquiry page, not a fixed-price
                  package or a confirmed itinerary.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Start Planning
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Your {destination.name} trip starts here.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {destination.intro}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                You do not need to have every detail decided. Tell us what
                matters most to you, whether that is a relaxed pace, family
                time, a special occasion or exploring somewhere new.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                Discuss Your Travel Preferences
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>

            <img
              src={destination.image}
              alt={`${destination.name} destination`}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </section>

        {/* Enquiry information */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Help us understand your holiday.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                A few details will help us discuss relevant travel options
                with you.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {planningDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Also mention your departure city, preferred trip duration and
              any accessibility or dietary requirements. Do not send passport
              scans or sensitive documents with your initial enquiry.
            </p>
          </div>
        </section>

        {/* Booking checklist */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Clear Booking Details
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Review the proposal before confirming.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                The final arrangements should be set out in your written
                proposal. Use this checklist when reviewing your
                {` ${destination.name} `}trip.
              </p>

              <Link
                to="/cancellation-and-refund-policy"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                Read Cancellation &amp; Refund Policy
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <ul className="space-y-3">
              {[
                "Travel dates and the day-by-day itinerary",
                "Flight details and baggage allowance, if included",
                "Hotel names, room types and meal arrangements",
                "Transfers, activities and any additional charges",
                "Passport, visa and transit requirements",
                "Payment schedule and cancellation conditions",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 p-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700"
                  >
                    {index + 1}
                  </span>

                  <span className="text-sm leading-7 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Frequently asked questions */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {destination.name} Travel Enquiries
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Answers to common questions before you start planning.
            </p>

            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white"
                >
                  <summary className="cursor-pointer rounded-xl px-5 py-5 text-base font-semibold leading-6 text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600">
                    {faq.question}
                  </summary>

                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other destination links */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Considering another destination?
              </h2>

              <Link
                to="/#international"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                Explore All Destinations
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {otherDestinations.map((item) => (
                <Link
                  key={item.slug}
                  to={`/international/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} destination`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />

                  <div className="flex items-center justify-between gap-3 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h3>

                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="text-blue-700 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final enquiry */}
        <section className="bg-blue-950 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Let’s discuss your {destination.name} holiday.
                </h2>

                <p className="mt-4 text-base leading-7 text-blue-100">
                  Share your ideas with FlyBy. We will help you understand
                  the proposed options before you choose your next step.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-950 hover:bg-blue-50"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp Enquiry
                </a>

                <a
                  href="tel:+917304991052"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Phone size={17} aria-hidden="true" />
                  Call FlyBy
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default InternationalDestinationPage;