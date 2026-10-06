import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  FileCheck2,
  Mail,
  Scale,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title =
      "Terms and Conditions | FlyBy Tours & Travels";

    const description =
      "Read the terms governing enquiries, quotations, bookings, payments, travel documents and services provided by FlyBy Tours & Travels.";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://www.flybytoursandtravels.in/terms-and-conditions"
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

      <main className="bg-slate-50 text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-blue-950 px-6 pb-20 pt-40 text-white">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to homepage
            </Link>

            <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
              <Scale className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Please read before booking
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
              Terms and Conditions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              These terms explain the conditions that apply when you request
              or book travel-related services through FlyBy Tours & Travels.
            </p>

            <p className="mt-6 text-sm text-blue-300">
              Last updated: 6 October 2026
            </p>
          </div>
        </section>

        {/* Terms content */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.32fr_0.68fr]">
            {/* Summary */}
            <aside className="h-fit rounded-3xl bg-blue-950 p-7 text-white lg:sticky lg:top-28">
              <FileCheck2 className="h-8 w-8 text-blue-300" />

              <h2 className="mt-5 text-2xl font-bold">
                Important booking points
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-6 text-blue-100">
                <p>
                  Prices and availability may change until a booking is
                  confirmed.
                </p>

                <p>
                  Traveller names and document details must be checked
                  carefully before confirmation.
                </p>

                <p>
                  Airline, hotel, embassy and supplier conditions may also
                  apply.
                </p>

                <p>
                  Visa approval cannot be guaranteed by FlyBy.
                </p>

                <p>
                  Cancellation and refund eligibility depend on the selected
                  service and supplier rules.
                </p>
              </div>
            </aside>

            {/* Full terms */}
            <div className="space-y-8">
              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  1. Acceptance of these terms
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  By requesting a quotation, submitting documents, making a
                  payment or confirming a service through FlyBy Tours &
                  Travels, you acknowledge that you have read and accepted
                  these Terms and Conditions.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Additional terms imposed by airlines, hotels, tour
                  operators, transportation providers, educational
                  institutions, insurance companies, embassies, consulates,
                  government authorities and other suppliers may also apply.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  2. Travel services
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy may assist with services including flight tickets,
                  hotel and resort bookings, tour packages, visa guidance,
                  visa stamping, document attestation, passport assistance,
                  Umrah packages, study-abroad guidance, taxis, airport
                  transfers, tempo travellers and buses.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  The availability, scope and conditions of each service
                  depend on the traveller’s requirements and the relevant
                  third-party provider.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  3. Quotations and availability
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Quotations are based on information and availability at the
                  time they are prepared. Airfares, hotel rates,
                  transportation charges, taxes, exchange rates, government
                  fees and other supplier charges may change without prior
                  notice.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  A quotation does not guarantee availability or price until
                  the required payment has been received and the service has
                  been confirmed by FlyBy and the relevant provider.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  4. Traveller information
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Customers are responsible for providing accurate names,
                  dates of birth, contact information, passport details,
                  travel dates, destinations and other information required
                  for the requested service.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Names used for flight tickets, visas and other reservations
                  should match the traveller’s official documents. Costs
                  arising from incorrect or incomplete information provided
                  by a customer may be payable by the customer.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  5. Passports, visas and travel documents
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Travellers are responsible for ensuring that their
                  passports, visas, permits, health documents and other
                  travel requirements are valid and appropriate for the
                  complete journey, including transit destinations.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy may provide document checklists and application
                  guidance, but requirements may change. The final decision
                  on any visa, permit, admission or immigration matter is
                  made by the relevant embassy, consulate, institution or
                  government authority.
                </p>

                <div className="mt-6 flex gap-3 rounded-2xl bg-amber-50 p-5 text-amber-900">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                  <p className="leading-7">
                    FlyBy does not guarantee visa approval, processing time,
                    admission approval or entry into any country.
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  6. Payments and confirmation
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  A service is considered confirmed only after the applicable
                  payment has been received and confirmation has been issued.
                  Some bookings may require full advance payment, while
                  others may require an initial deposit followed by a balance
                  payment.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Customers should verify the payment recipient and booking
                  details before transferring funds. Payment deadlines must
                  be followed to avoid changes in price or loss of
                  availability.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  7. Booking confirmation
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Customers should review all confirmations immediately,
                  including traveller names, dates, routes, accommodation,
                  room types, vehicle requirements and included services.
                  Any error should be reported to FlyBy as soon as possible.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Changes requested after confirmation may be subject to
                  availability, supplier conditions and additional charges.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  8. Package inclusions and exclusions
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Only services specifically listed in a confirmed quotation
                  or itinerary are included. Meals, transfers, sightseeing,
                  entrance fees, insurance, taxes, baggage and other services
                  are included only when clearly stated.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Personal expenses and services not specifically identified
                  as included are the traveller’s responsibility.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  9. Transportation services
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Vehicle arrangements depend on route, availability,
                  passenger count, luggage and travel requirements.
                  Customers must provide accurate pickup information and be
                  ready at the agreed time.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Waiting charges, parking fees, tolls, permit fees, route
                  changes, additional distance and services beyond the agreed
                  booking may result in additional charges where applicable.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  10. Changes by suppliers
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Airlines, hotels, tour operators, transportation providers
                  and other suppliers may change schedules, routes,
                  accommodation, vehicles or other arrangements for
                  operational, safety or regulatory reasons.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy will provide reasonable assistance when informed of a
                  material change, but alternative arrangements and refunds
                  remain subject to the relevant provider’s rules and
                  availability.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  11. Cancellations and refunds
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Cancellation and refund eligibility depends on the selected
                  service, cancellation time, supplier conditions and costs
                  already incurred. Airline, hotel, visa, tour,
                  transportation and service charges may be non-refundable.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Please read the separate Cancellation and Refund Policy and
                  the conditions provided with your quotation or
                  confirmation.
                </p>

                <Link
                  to="/cancellation-and-refund-policy"
                  className="mt-5 inline-flex font-bold text-blue-700 transition hover:text-blue-900"
                >
                  Read the Cancellation and Refund Policy
                </Link>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  12. Traveller conduct and responsibility
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Travellers are responsible for following applicable laws,
                  airline rules, hotel policies, transportation requirements,
                  immigration conditions and reasonable instructions from
                  service providers.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Customers are responsible for their personal belongings,
                  documents, valuables, health needs and conduct during the
                  journey.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  13. Events outside reasonable control
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Travel services may be affected by weather, natural
                  disasters, strikes, political events, public-health
                  situations, government restrictions, border closures,
                  transport disruption, technical issues or other events
                  outside the reasonable control of FlyBy or the service
                  provider.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  In such situations, available changes, credits or refunds
                  will depend on the affected provider’s rules and the
                  circumstances.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  14. Third-party service providers
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Many travel arrangements are provided by independent third
                  parties. Their own terms, policies and limitations apply to
                  their services.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy acts as an intermediary or travel-service facilitator
                  for such arrangements and will provide reasonable
                  assistance with service-related issues within the scope of
                  the booking.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  15. Website content
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Website descriptions, photographs and package information
                  are provided for general guidance. Final services,
                  facilities, schedules, prices and inclusions are determined
                  by the confirmed quotation or booking document.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Website content may be updated, corrected or changed without
                  prior notice.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  16. Privacy
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Personal information is handled as described in the FlyBy
                  Privacy Policy.
                </p>

                <Link
                  to="/privacy-policy"
                  className="mt-5 inline-flex font-bold text-blue-700 transition hover:text-blue-900"
                >
                  Read the Privacy Policy
                </Link>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  17. Applicable law
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  These terms are governed by the applicable laws of India.
                  Any dispute should first be raised directly with FlyBy so
                  that both parties can attempt to resolve it reasonably.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Subject to applicable consumer-protection and other
                  mandatory laws, unresolved disputes will be subject to the
                  jurisdiction of the appropriate courts in Kerala, India.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  18. Changes to these terms
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy may update these Terms and Conditions when services,
                  supplier arrangements or legal requirements change. The
                  latest version will be displayed on this page with the
                  revision date.
                </p>
              </article>

              <article className="rounded-3xl bg-blue-950 p-7 text-white sm:p-9">
                <Mail className="h-8 w-8 text-blue-300" />

                <h2 className="mt-5 text-2xl font-bold">
                  19. Contact FlyBy
                </h2>

                <p className="mt-4 leading-8 text-blue-100">
                  Contact our team if you have questions about these terms or
                  the conditions applying to a specific booking.
                </p>

                <div className="mt-6 space-y-3 text-blue-100">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:flyby.mndy@gmail.com"
                      className="font-semibold text-white hover:text-blue-200"
                    >
                      flyby.mndy@gmail.com
                    </a>
                  </p>

                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+917304991052"
                      className="font-semibold text-white hover:text-blue-200"
                    >
                      +91 73049 91052
                    </a>
                  </p>

                  <p>
                    Location: Mananthavady, Wayanad, Kerala, India
                  </p>
                </div>
              </article>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Return to Homepage
                </Link>

                <a
                  href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20have%20a%20question%20about%20your%20Terms%20and%20Conditions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Contact FlyBy
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

export default TermsAndConditions;