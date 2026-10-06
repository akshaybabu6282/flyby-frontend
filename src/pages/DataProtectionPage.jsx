import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Database,
  ExternalLink,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title =
      "Privacy Policy | FlyBy Tours & Travels";

    const description =
      "Read the FlyBy Tours & Travels Privacy Policy to understand how personal information is collected, used, stored and protected.";

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
        "https://www.flybytoursandtravels.in/privacy-policy"
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
              <ShieldCheck className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Your information matters
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              This policy explains how FlyBy Tours & Travels collects, uses,
              shares and protects personal information when you use our
              website or contact us for travel services.
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
              <LockKeyhole className="h-8 w-8 text-blue-300" />

              <h2 className="mt-5 text-2xl font-bold">
                Privacy summary
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                We collect only the information reasonably required to
                respond to enquiries and arrange requested travel services.
              </p>

              <div className="mt-7 space-y-4 text-sm text-blue-100">
                <div className="flex gap-3">
                  <UserCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span>
                    Information is used for enquiries and requested services.
                  </span>
                </div>

                <div className="flex gap-3">
                  <Database className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span>
                    Data is retained only as reasonably necessary.
                  </span>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span>
                    Reasonable safeguards are used to protect information.
                  </span>
                </div>
              </div>
            </aside>

            {/* Full policy */}
            <div className="space-y-8">
              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  1. About this policy
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  This Privacy Policy applies to information collected
                  through the FlyBy Tours & Travels website, WhatsApp,
                  telephone, email and direct travel-service enquiries.
                  By contacting us or requesting a service, you acknowledge
                  the practices described in this policy.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  2. Information we may collect
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Depending on your enquiry or requested service, we may
                  collect:
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                  <li>Name and contact information</li>
                  <li>Phone number, email address and WhatsApp details</li>
                  <li>Travel dates, destinations and passenger information</li>
                  <li>
                    Passport, visa, identity or supporting-document details
                    when required for a requested service
                  </li>
                  <li>
                    Academic information when requesting study-abroad
                    assistance
                  </li>
                  <li>
                    Pickup location, destination, passenger count and luggage
                    information for vehicle bookings
                  </li>
                  <li>
                    Payment and transaction details related to confirmed
                    bookings
                  </li>
                  <li>
                    Website usage information collected through analytics
                    technologies
                  </li>
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  3. How we use information
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We may use information to:
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                  <li>Respond to enquiries and provide quotations</li>
                  <li>
                    Arrange flights, hotels, tours, visas, transportation and
                    other requested services
                  </li>
                  <li>
                    Review and process documents provided for travel-related
                    assistance
                  </li>
                  <li>
                    Communicate booking information, updates and service
                    requirements
                  </li>
                  <li>Provide customer assistance</li>
                  <li>Maintain transaction and business records</li>
                  <li>Improve website content and service quality</li>
                  <li>
                    Comply with applicable legal and regulatory obligations
                  </li>
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  4. Sharing information
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Information may be shared only when reasonably required to
                  provide a requested service. Depending on the booking, this
                  may include airlines, hotels, tour operators,
                  transportation providers, educational institutions,
                  insurance providers, visa-processing services, government
                  authorities, embassies, consulates or other relevant
                  service providers.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  We do not sell personal information. Third-party providers
                  may process information according to their own policies,
                  legal requirements and service terms.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  5. WhatsApp, email and external platforms
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  When you contact FlyBy through WhatsApp, email, telephone,
                  social media, Google or another external service, that
                  platform may process information according to its own
                  privacy policy. Please avoid sending unnecessary sensitive
                  information before our team confirms what is required for
                  your requested service.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  6. Website analytics and cookies
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  The website may use analytics technologies, including
                  Google Analytics, to understand general website usage,
                  page visits, device information and traffic patterns.
                  These tools may use cookies or similar technologies.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  You may manage cookies through your browser settings.
                  Disabling some technologies may affect how certain website
                  features work.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  7. Data retention
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Information is retained only for as long as reasonably
                  necessary to respond to enquiries, provide requested
                  services, maintain appropriate business records, resolve
                  disputes and comply with legal, accounting or regulatory
                  requirements.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  8. Information security
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  We use reasonable administrative and technical measures to
                  protect personal information from unauthorised access,
                  misuse, loss or disclosure. However, no internet,
                  electronic communication or storage system can be
                  guaranteed to be completely secure.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  9. Your choices and requests
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Subject to applicable law and necessary verification, you
                  may contact us to:
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                  <li>Ask what personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>
                    Request deletion of information that is no longer
                    required
                  </li>
                  <li>
                    Withdraw consent for future use where processing is based
                    on consent
                  </li>
                  <li>Raise a concern about our handling of information</li>
                </ul>

                <p className="mt-5 leading-8 text-slate-600">
                  Some information may need to be retained where required for
                  confirmed bookings, legal obligations, record keeping or
                  dispute resolution.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  10. Children’s information
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Travel bookings may sometimes include children. A parent,
                  legal guardian or authorised adult should provide the
                  necessary information and consent for a child’s booking or
                  travel-related service.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  11. External links
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  The website may contain links to WhatsApp, Google Maps,
                  social media platforms or other external services. FlyBy is
                  not responsible for the privacy practices, availability or
                  content of external websites and platforms.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <h2 className="text-2xl font-bold">
                  12. Policy updates
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  This policy may be updated when our services, website
                  practices or legal requirements change. The latest version
                  will be published on this page with an updated revision
                  date.
                </p>
              </article>

              <article className="rounded-3xl bg-blue-950 p-7 text-white sm:p-9">
                <Mail className="h-8 w-8 text-blue-300" />

                <h2 className="mt-5 text-2xl font-bold">
                  13. Contact us about privacy
                </h2>

                <p className="mt-4 leading-8 text-blue-100">
                  For questions, corrections, withdrawal requests or privacy
                  concerns, contact FlyBy Tours & Travels.
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
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Return to Homepage
                </Link>

                <a
                  href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20have%20a%20question%20about%20your%20Privacy%20Policy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
                >
                  Contact FlyBy
                  <ExternalLink className="h-4 w-4" />
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

export default PrivacyPolicy;