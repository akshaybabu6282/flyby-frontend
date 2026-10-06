import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bus,
  CalendarDays,
  Car,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Navigation,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const vehicleTypes = [
  {
    title: "Taxi & Cab",
    description:
      "Comfortable cars for local journeys, outstation trips, business travel and personal transportation.",
    suitableFor: "Individuals, couples and small families",
    icon: Car,
  },
  {
    title: "Airport Transfer",
    description:
      "Pre-arranged airport pickup and drop services with vehicles selected according to passenger and luggage requirements.",
    suitableFor: "Airport arrivals and departures",
    icon: Plane,
  },
  {
    title: "Tempo Traveller",
    description:
      "Spacious tempo travellers suitable for family holidays, group tours, functions and sightseeing trips.",
    suitableFor: "Families and medium-sized groups",
    icon: Users,
  },
  {
    title: "Bus Service",
    description:
      "Bus arrangements for group tours, pilgrimages, events, functions, institutional trips and long-distance travel.",
    suitableFor: "Large groups and organised tours",
    icon: Bus,
  },
];

const travelPurposes = [
  "Local city travel",
  "Outstation journeys",
  "Airport pickup and drop",
  "Family holidays",
  "Group tours",
  "Corporate travel",
  "Wedding and event transportation",
  "Pilgrimage trips",
  "Sightseeing journeys",
  "Hotel and resort transfers",
];

const bookingSteps = [
  {
    number: "01",
    title: "Share your journey",
    description:
      "Tell us your pickup location, destination, travel date and preferred time.",
  },
  {
    number: "02",
    title: "Confirm passenger details",
    description:
      "Share the number of passengers, luggage details and any special requirements.",
  },
  {
    number: "03",
    title: "Choose your vehicle",
    description:
      "We will help you select a suitable cab, tempo traveller or bus for the journey.",
  },
  {
    number: "04",
    title: "Confirm the booking",
    description:
      "Complete the booking and receive the required trip and vehicle information.",
  },
];

const serviceBenefits = [
  {
    title: "Vehicles for every group",
    description:
      "Options for individual travellers, families, small groups and large groups.",
    icon: Users,
  },
  {
    title: "Local and outstation travel",
    description:
      "Vehicle arrangements for nearby travel as well as long-distance journeys.",
    icon: Navigation,
  },
  {
    title: "Planned around your schedule",
    description:
      "Bookings arranged according to your travel date, pickup point and preferred time.",
    icon: CalendarDays,
  },
  {
    title: "Travel assistance",
    description:
      "Our team helps you choose the right vehicle and plan the transportation requirements.",
    icon: ShieldCheck,
  },
];

const VehicleServicesPage = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello FlyBy, I would like to enquire about taxi and vehicle services."
  );

  useEffect(() => {
    document.title =
      "Taxi, Cab, Tempo Traveller & Bus Services in Wayanad | FlyBy";

    const description =
      "Book taxis, cabs, airport transfers, tempo travellers and buses for local and outstation travel with FlyBy Tours & Travels in Mananthavady, Wayanad.";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    const ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    const ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://www.flybytoursandtravels.in/taxi-services"
      );
    }

    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Taxi & Vehicle Services in Wayanad | FlyBy"
      );
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    if (ogUrl) {
      ogUrl.setAttribute(
        "content",
        "https://www.flybytoursandtravels.in/taxi-services"
      );
    }

    return () => {
      document.title =
        "FlyBy Tours & Travels | International & India Tour Packages, Visa, Flight Tickets, Study Abroad UK";

      if (canonical) {
        canonical.setAttribute(
          "href",
          "https://www.flybytoursandtravels.in/"
        );
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-slate-50 text-slate-900">
        {/* Hero section */}
        <section className="relative min-h-[760px] overflow-hidden bg-slate-950 pt-32 text-white">
          {/* Background colours */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

          {/* Decorative road lines */}
          <div className="absolute bottom-0 left-1/2 h-[350px] w-[900px] -translate-x-1/2 rotate-[-8deg] rounded-[50%] border-t-2 border-dashed border-white/10" />

          <div className="absolute bottom-[-80px] left-1/2 h-[350px] w-[1100px] -translate-x-1/2 rotate-[-8deg] rounded-[50%] border-t border-white/5" />

          <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero left content */}
            <div>
              <Link
                to="/#taxi-services"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to homepage
              </Link>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur">
                <MapPin className="h-4 w-4" />
                Local and Outstation Vehicle Booking
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-7xl">
                Your journey,
                <span className="block text-blue-400">
                  our responsibility.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Reliable taxis, airport transfers, tempo travellers and buses
                arranged according to your route, passenger count and travel
                requirements.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/917304991052?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white transition hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                </a>

                <a
                  href="tel:+917304991052"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Call +91 73049 91052
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-5 sm:grid-cols-4">
                <div>
                  <p className="text-2xl font-bold text-white">Local</p>
                  <p className="mt-1 text-sm text-slate-400">
                    City journeys
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">
                    Outstation
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Long-distance trips
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">Airport</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Pickup and drop
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">Groups</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Traveller and bus
                  </p>
                </div>
              </div>
            </div>

            {/* Hero right vehicle panel */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                      Available vehicle types
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      Choose your ride
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                    <Navigation className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                      <Car className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        Taxi & Cab
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        For individuals, couples and small families
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                      <Plane className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        Airport Transfer
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Scheduled airport pickup and drop
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                      <Users className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        Tempo Traveller
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Comfortable transportation for families and groups
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                      <Bus className="h-7 w-7" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        Bus Service
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Suitable for tours, events and large groups
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-blue-500/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                  <p className="text-sm leading-6 text-blue-100">
                    Share your pickup point, destination, date and passenger
                    count to check vehicle availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle types section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.22em] text-blue-700">
                Choose your vehicle
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Vehicle options for every travel requirement
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tell us your passenger count, destination and luggage
                requirements. We will help you choose a suitable vehicle.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {vehicleTypes.map((vehicle) => {
                const Icon = vehicle.icon;

                return (
                  <article
                    key={vehicle.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white transition group-hover:bg-blue-600">
                        <Icon className="h-8 w-8" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold">
                          {vehicle.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {vehicle.description}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                          <Users className="h-4 w-4" />
                          {vehicle.suitableFor}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Travel purposes section */}
        <section className="bg-blue-950 px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.22em] text-blue-300">
                More than a simple taxi booking
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
                Transportation planned around your journey
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Every journey has different requirements. FlyBy helps arrange
                transportation according to your route, passenger count,
                travel purpose and schedule.
              </p>

              <a
                href={`https://wa.me/917304991052?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Check Vehicle Availability
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {travelPurposes.map((purpose) => (
                <div
                  key={purpose}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-300" />

                  <span className="font-medium text-blue-50">
                    {purpose}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.22em] text-blue-700">
                Why book through FlyBy
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                One team for your travel and transportation
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-900/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking process section */}
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.22em] text-blue-700">
                Simple booking process
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Book your vehicle in four steps
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {bookingSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7"
                >
                  <span className="absolute -right-2 -top-5 text-8xl font-bold text-blue-100">
                    {step.number}
                  </span>

                  <div className="relative">
                    <p className="text-sm font-bold text-blue-700">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-5 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final call to action */}
        <section className="px-6 py-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-800 to-blue-500 p-8 text-white shadow-2xl sm:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <MapPin className="h-10 w-10" />

                <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
                  Where are you travelling?
                </h2>

                <p className="mt-5 text-lg leading-8 text-blue-50">
                  Send us your pickup point, destination, date and passenger
                  count. Our team will help you find a suitable vehicle.
                </p>
              </div>

              <a
                href={`https://wa.me/917304991052?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VehicleServicesPage;