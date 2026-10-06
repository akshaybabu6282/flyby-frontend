import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const serviceLinks = [
  {
    label: "Air Ticket Booking",
    to: "/services/air-ticket-booking",
  },
  {
    label: "Visit Visa Services",
    to: "/services/visit-visa-services",
  },
  {
    label: "Visa Stamping",
    to: "/services/visa-stamping-saudi-kuwait",
  },
  {
    label: "Hotel & Resort Booking",
    to: "/services/hotel-resort-booking",
  },
  {
    label: "Tour Packages",
    to: "/services/tour-packages",
  },
  {
    label: "Study Abroad (UK)",
    to: "/services/study-abroad-uk",
  },
  {
    label: "Certificate Attestation",
    to: "/services/certificate-attestation",
  },
  {
    label: "Umrah Packages",
    to: "/services/umrah-packages",
  },
  {
    label: "Passport Services",
    to: "/services/passport-services",
  },
  {
    label: "Taxi & Vehicle Services",
    to: "/taxi-services",
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About FlyBy", to: "/#about" },
  { label: "Our Services", to: "/#services" },
  { label: "India Tour Packages", to: "/india-packages" },
  { label: "Customer Reviews", to: "/#reviews" },
  { label: "Contact Us", to: "/#contact" },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  {
    label: "Cancellation & Refund Policy",
    to: "/cancellation-and-refund-policy",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Let Us Help You Plan
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Your next journey starts with a conversation.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Connect with our team for travel planning, bookings, visa guidance
              and vehicle enquiries.
            </p>
          </div>

          <a
            href="https://wa.me/917304991052"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Talk to FlyBy
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link
              to="/"
              aria-label="FlyBy Tours and Travels homepage"
              className="inline-block text-3xl font-bold tracking-tight text-white"
            >
              FlyBy
            </Link>

            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
              Tours &amp; Travels
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Travel assistance from Mananthavady, Wayanad. We help with flights,
              visas, tours, hotel bookings, overseas education guidance and
              vehicle arrangements.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Clock size={17} aria-hidden="true" />
                Office Hours
              </div>

              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex flex-wrap justify-between gap-2">
                  <dt className="text-slate-400">Monday to Saturday</dt>
                  <dd className="text-slate-200">10 AM to 7 PM</dd>
                </div>

                <div className="flex justify-between gap-2">
                  <dt className="text-slate-400">Sunday</dt>
                  <dd className="text-slate-200">Closed</dd>
                </div>
              </dl>
            </div>
          </div>

          <nav aria-label="Footer services">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm leading-6 text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-label="Footer quick links">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Explore FlyBy
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm leading-6 text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer legal links" className="mt-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Legal &amp; Policies
              </h3>

              <ul className="space-y-3">
                {policyLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm leading-6 text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>

            <address className="space-y-5 not-italic">
              <a
                href="tel:+917304991052"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Phone
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                />

                <span>
                  <span className="mb-1 block text-xs text-slate-500">
                    Call Us
                  </span>
                  +91 73049 91052
                </span>
              </a>

              <a
                href="https://wa.me/917304991052"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <MessageCircle
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                />

                <span>
                  <span className="mb-1 block text-xs text-slate-500">
                    WhatsApp
                  </span>
                  Send a Travel Enquiry
                </span>
              </a>

              <a
                href="mailto:flyby.mndy@gmail.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                />

                <span className="min-w-0">
                  <span className="mb-1 block text-xs text-slate-500">
                    Email
                  </span>
                  <span className="break-all">flyby.mndy@gmail.com</span>
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Flyby%20Tours%20%26%20Travels&query_place_id=ChIJ808ZuonfpTsRq1RlukmHKck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-slate-400 transition-colors hover:text-white"
              >
                <MapPin
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                />

                <span>
                  <span className="mb-1 block text-xs text-slate-500">
                    Visit Our Office
                  </span>
                  Mysore Road, Mananthavady
                  <br />
                  Wayanad, Kerala 670645
                  <span className="mt-2 flex items-center gap-1 text-xs text-slate-300">
                    Get Directions
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </span>
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-6 text-slate-500">
            © {currentYear} FlyBy Tours &amp; Travels. All rights reserved.
          </p>

          <p className="text-xs leading-6 text-slate-500">
            Mananthavady, Wayanad, Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;