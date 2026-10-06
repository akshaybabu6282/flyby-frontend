import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  Clock3,
  Mail,
  RefreshCcw,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CancellationRefundPolicy = () => {
  useEffect(() => {
    document.title =
      "Cancellation and Refund Policy | FlyBy Tours & Travels";

    const description =
      "Read the FlyBy Tours & Travels policy covering booking cancellations, supplier charges, refund eligibility and processing timelines.";

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
        "https://www.flybytoursandtravels.in/cancellation-and-refund-policy"
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
              <RefreshCcw className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Booking changes and refunds
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
              Cancellation and Refund Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              This policy explains how cancellation requests, supplier
              charges, refund eligibility and processing timelines are
              generally handled by FlyBy Tours & Travels.
            </p>

            <p className="mt-6 text-sm text-blue-300">
              Last updated: 6 October 2026
            </p>
          </div>
        </section>

        {/* Policy content */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.32fr_0.68fr]">
            {/* Summary */}
            <aside className="h-fit rounded-3xl bg-blue-950 p-7 text-white lg:sticky lg:top-28">
              <AlertTriangle className="h-8 w-8 text-amber-300" />

              <h2 className="mt-5 text-2xl font-bold">
                Before cancelling
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-6 text-blue-100">
                <p>
                  Contact FlyBy as soon as possible if your plans change.
                </p>

                <p>
                  Cancellation charges depend on the selected service and
                  supplier conditions.
                </p>

                <p>
                  Some bookings and service charges may be non-refundable.
                </p>

                <p>
                  Refunds can be processed only after the relevant supplier
                  confirms eligibility.
                </p>

                <p>
                  Bank, payment-gateway or transaction charges may apply.
                </p>
              </div>
            </aside>

            {/* Full policy */}
            <div className="space-y-8">
              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  1. Scope of this policy
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  This policy applies to cancellation and refund requests for
                  services arranged through FlyBy Tours & Travels, including
                  flight tickets, hotel bookings, tour packages,
                  transportation, visa assistance, attestation, passport
                  assistance, Umrah services and other travel-related
                  arrangements.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  The specific conditions stated in a quotation, invoice,
                  itinerary, booking confirmation or supplier policy may also
                  apply and should be reviewed before payment.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  2. How to request a cancellation
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Cancellation requests should be submitted to FlyBy as soon
                  as possible through WhatsApp, email, telephone or direct
                  office communication.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  A request should include the customer’s name, booking
                  reference, service booked, travel date and reason for
                  cancellation.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  A cancellation is considered received only after FlyBy
                  acknowledges the request. Sending a request does not
                  automatically confirm that the service has been cancelled
                  or that a refund is available.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  3. Supplier cancellation conditions
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Airlines, hotels, tour operators, transportation providers,
                  visa-processing services, educational institutions,
                  insurance providers and other third parties have their own
                  cancellation and refund rules.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy must follow the relevant supplier’s rules when
                  calculating cancellation charges, credits or refunds.
                  Supplier charges may increase as the travel or service date
                  approaches.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  4. Flight tickets
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Flight-ticket cancellation, date changes, name corrections,
                  credits and refunds are governed by the airline’s fare
                  rules.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Some fares may be fully non-refundable. Airline penalties,
                  fare differences, taxes, FlyBy service charges and
                  applicable transaction charges may be deducted from any
                  eligible refund.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Missing a flight or failing to cancel before departure may
                  result in the booking being treated as a no-show, with
                  reduced or no refund eligibility.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  5. Hotels, resorts and tour packages
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Hotel, resort and package cancellations are subject to the
                  cancellation deadline and conditions of the relevant
                  property, tour operator and included service providers.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Special promotional rates, peak-season bookings, holiday
                  bookings, group reservations and certain package components
                  may be non-refundable or subject to higher cancellation
                  charges.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  If a package contains several services, each component may
                  have a different cancellation condition.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  6. Taxi and vehicle bookings
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Cancellation charges for taxis, airport transfers, tempo
                  travellers and buses depend on the vehicle provider, route,
                  travel date, cancellation time and any advance commitments
                  already made.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Last-minute cancellations, no-shows, failure to arrive at
                  the agreed pickup point or cancellation after the vehicle
                  has been dispatched may be non-refundable.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  7. Visa, passport and attestation services
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Government fees, embassy fees, consular charges,
                  application fees, appointment charges, courier costs and
                  processing or service charges may be non-refundable once an
                  application or process has started.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Visa rejection, delay, withdrawal, document request or a
                  change in travel plans does not automatically create a
                  right to a refund.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy does not control the decisions or processing timelines
                  of embassies, consulates, government departments or
                  immigration authorities.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  8. Study-abroad services
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  University fees, application fees, visa fees, deposits,
                  counselling charges and third-party service fees are
                  subject to the conditions of the relevant institution,
                  government authority or provider.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Admission refusal, visa refusal, withdrawal or a change in
                  the student’s plans does not automatically guarantee a
                  refund.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  9. Non-refundable amounts
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Depending on the booking and work already completed, the
                  following may be non-refundable:
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                  <li>Supplier cancellation penalties</li>
                  <li>Non-refundable airline fares</li>
                  <li>Non-refundable hotel or package rates</li>
                  <li>Visa, embassy, consular or government fees</li>
                  <li>Application and appointment fees</li>
                  <li>Documentation and processing charges</li>
                  <li>FlyBy service or consultation charges</li>
                  <li>Courier, delivery and communication costs</li>
                  <li>Payment-gateway and banking charges</li>
                  <li>Costs already paid or committed to third parties</li>
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  10. Refund calculation
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  If a refund is available, it will generally be calculated
                  after deducting applicable supplier penalties, service
                  charges, government fees, transaction costs and other
                  non-refundable amounts.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy will provide available information about the refund
                  calculation after receiving confirmation from the relevant
                  provider.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  11. Refund processing time
                </h2>

                <div className="mt-5 flex gap-3 rounded-2xl bg-blue-50 p-5 text-blue-950">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0" />

                  <p className="leading-7">
                    Refund timing begins only after the relevant supplier has
                    approved and released the eligible amount.
                  </p>
                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  Processing time varies according to the airline, hotel,
                  tour operator, transportation provider, bank, payment
                  method and other parties involved. FlyBy cannot guarantee a
                  fixed refund date when the funds are controlled by a third
                  party.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Once an eligible amount is received by FlyBy and the
                  required details are verified, it will be processed through
                  an appropriate payment method.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  12. Changes instead of cancellation
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Some suppliers may permit a date change, travel credit,
                  name correction or alternative arrangement instead of a
                  cancellation. Such options are subject to availability,
                  fare differences, penalties and supplier approval.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  13. Supplier cancellation or disruption
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  If an airline, hotel, tour operator or other provider
                  cancels or materially changes a service, the available
                  alternatives, credits or refunds will be determined by that
                  provider’s policy and applicable rules.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  FlyBy will provide reasonable assistance in communicating
                  available options but cannot promise a refund beyond what
                  the provider approves.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  14. Events outside reasonable control
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Cancellations or disruptions caused by weather, natural
                  disasters, strikes, public-health events, political
                  conditions, government restrictions, border closures,
                  transport disruption or other events outside reasonable
                  control remain subject to supplier policies and the
                  circumstances of the event.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  15. Payment disputes and duplicate payments
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  If you believe a duplicate or incorrect payment has been
                  made, contact FlyBy promptly with the payment date, amount,
                  transaction reference and relevant booking information.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Any valid excess amount will be reviewed after verifying
                  the transaction and outstanding booking charges.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  16. Policy updates
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  This policy may be updated when supplier conditions,
                  FlyBy’s services or applicable requirements change. The
                  current version will be published on this page with the
                  revision date.
                </p>
              </article>

              <article className="rounded-3xl bg-blue-950 p-7 text-white sm:p-9">
                <Mail className="h-8 w-8 text-blue-300" />

                <h2 className="mt-5 text-2xl font-bold">
                  17. Cancellation and refund contact
                </h2>

                <p className="mt-4 leading-8 text-blue-100">
                  Contact FlyBy with your booking information if you need to
                  request a cancellation or ask about refund eligibility.
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
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/917304991052"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:text-blue-200"
                    >
                      +91 73049 91052
                    </a>
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

                <Link
                  to="/terms-and-conditions"
                  className="rounded-full border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Read Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CancellationRefundPolicy;