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
  getIndiaDestination,
  indiaDestinations,
} from "../data/indiaDestinations";

const planningDetails = [
  {
    icon: CalendarDays,
    title: "Dates and duration",
    description:
      "Share your preferred travel dates, number of days and whether your schedule is flexible.",
  },
  {
    icon: Users,
    title: "Your travel group",
    description:
      "Tell us the number of adults and children, including children’s ages and any specific travel needs.",
  },
  {
    icon: Wallet,
    title: "Budget and preferences",
    description:
      "Mention your approximate budget, accommodation expectations and the experiences you are interested in.",
  },
];

const bookingChecklist = [
  "Travel dates, route and day-by-day itinerary",
  "Transport details, pickup points and journey arrangements",
  "Hotel names, room types and check-in arrangements",
  "Meals, sightseeing and activities included in the quotation",
  "Entry tickets and other costs charged separately",
  "Payment schedule and cancellation conditions",
];

const IndiaDestinationPage = () => {
  const { slug } = useParams();
  const destination = getIndiaDestination(slug);

  if (!destination) {
    return <NotFoundPage />;
  }

  const seoTitle = `${destination.name} Tour Packages from Wayanad`;

  const seoDescription = `Plan a ${destination.name} trip with FlyBy Tours & Travels in Mananthavady, Wayanad. Discuss travel dates, transport, accommodation, sightseeing and customised India holiday options.`;

  const seoImage = `https://www.flybytoursandtravels.in${destination.image
    }`;

  const enquiryMessage = encodeURIComponent(
    `Hi FlyBy, I am interested in a ${destination.name} trip.\n\n` +
    "Preferred travel dates:\n" +
    "Trip duration:\n" +
    "Departure city or pickup location:\n" +
    "Number of adults:\n" +
    "Number of children and their ages:\n" +
    "Approximate budget:\n" +
    "Accommodation preferences:\n\n" +
    "Please share suitable travel options and booking details."
  );

  const whatsappUrl = `https://wa.me/917304991052?text=${enquiryMessage}`;

  const otherDestinations = indiaDestinations
    .filter((item) => item.slug !== destination.slug)
    .slice(0, 3);

  const faqs = [
    {
      question: `How do I enquire about a ${destination.name} trip?`,
      answer:
        "Contact FlyBy through WhatsApp or phone. Share your dates, departure location, trip duration, number of travellers and budget so our team can discuss relevant options.",
    },
    {
      question: "Does this page include a fixed itinerary?",
      answer:
        "No. This is a destination enquiry page. Request a written proposal with the day-by-day itinerary, travel arrangements, inclusions and conditions for your particular trip.",
    },
    {
      question: "Are transport, accommodation and meals included?",
      answer:
        "These depend on the proposal you choose. Check your written quotation for transport, hotels, room types, meals, sightseeing and any additional charges before paying.",
    },
    {
      question: "Can I request a trip for my family or a group?",
      answer:
        "Yes, you can share a family or group enquiry. Mention the group size, children’s ages, room requirements and any accessibility needs. Proposed arrangements depend on availability and your requirements.",
    },
    {
      question: "Can I enquire about a taxi or a larger vehicle?",
      answer:
        "Yes. Tell our team your pickup location, dates, route and number of passengers. Vehicle availability, capacity, luggage space and charges should be confirmed before booking.",
    },
    {
      question: "Can I change or cancel a confirmed booking?",
      answer:
        "Changes and cancellations are subject to the conditions of your booking and the relevant suppliers. Review our Cancellation & Refund Policy and the specific terms provided with your quotation.",
    },
  ];

  return (
    <>
      <SEO
        title={`${seoTitle} | FlyBy Tours & Travels`}
        description={seoDescription}
        path={`/india/${destination.slug}`}
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
                    to="/india-packages"
                    className="hover:text-white"
                  >
                    India Trips
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
                  Travel Across India with FlyBy
                </p>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Plan Your {destination.name} Trip
                </h1>

                <p className="mt-5 text-xl leading-8 text-white/90 sm:text-2xl">
                  {destination.tagline}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  Share your holiday ideas with our team in Mananthavady,
                  Wayanad. Discuss travel options before choosing your
                  arrangements.
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
                  Plan with Clear Details
                </p>

                <h2 className="mt-3 text-xl font-semibold text-white">
                  Your trip, your preferences.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Request a written proposal covering your route,
                  accommodation, transport, inclusions and booking
                  conditions.
                </p>

                <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-6 text-slate-400">
                  This page does not advertise a fixed-price package or
                  confirmed itinerary.
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
                Start Your Enquiry
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Let’s discuss your {destination.name} getaway.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {destination.intro}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Tell us how you prefer to travel and what matters most to
                your group. Your departure location, daily travel pace and
                accommodation preferences can help shape the proposed trip.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                Share Your Travel Plans
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

        {/* Planning information */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                A few details help us get started.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Share these details when enquiring about your trip.
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
              Mention any accessibility, dietary or room requirements
              relevant to your trip. You do not need to send identity
              documents with your initial enquiry.
            </p>
          </div>
        </section>

        {/* Booking checklist */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Before You Confirm
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Check what your proposal includes.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Review the written details of your {destination.name} trip
                before paying. Confirm anything that is important to you,
                including services that may carry a separate charge.
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
              {bookingChecklist.map((item, index) => (
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

        {/* Vehicle enquiry */}
        <section className="bg-blue-50 py-12 sm:py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900">
                Looking for a vehicle arrangement?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explore FlyBy’s taxi and vehicle services. Share your route,
                dates, passenger count and luggage requirements to enquire
                about suitable options.
              </p>
            </div>

            <Link
              to="/taxi-services"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Explore Vehicle Services
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {destination.name} Trip Enquiries
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Common questions before you start planning.
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

        {/* More destinations */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Explore more India destinations.
              </h2>

              <Link
                to="/india-packages"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
              >
                View All India Destinations
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {otherDestinations.map((item) => (
                <Link
                  key={item.slug}
                  to={`/india/${item.slug}`}
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
                  Ready to discuss your {destination.name} trip?
                </h2>

                <p className="mt-4 text-base leading-7 text-blue-100">
                  Start with an enquiry. Review the proposed travel details
                  before deciding on your booking.
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

export default IndiaDestinationPage;