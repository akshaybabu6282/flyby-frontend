import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Home, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 pb-20 pt-36 sm:px-6">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Page Not Found
          </p>

          <p
            aria-hidden="true"
            className="mt-4 text-[110px] font-bold leading-none tracking-tight text-slate-200 sm:text-[170px]"
          >
            404
          </p>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Looks like a wrong turn.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            The page you are looking for may have moved, or the address may be
            incorrect. Let us help you get back to planning your journey.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 sm:w-auto"
            >
              <Home size={18} aria-hidden="true" />
              Back to Homepage
            </Link>

            <a
              href="https://wa.me/917304991052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 sm:w-auto"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Contact FlyBy
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-7">
            <p className="mb-4 text-sm text-slate-500">
              Looking for one of these?
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <Link
                to="/#services"
                className="text-sm font-medium text-slate-700 hover:underline"
              >
                Our Services
              </Link>

              <Link
                to="/taxi-services"
                className="text-sm font-medium text-slate-700 hover:underline"
              >
                Taxi &amp; Vehicle Services
              </Link>

              <Link
                to="/india-packages"
                className="text-sm font-medium text-slate-700 hover:underline"
              >
                India Tour Packages
              </Link>
            </div>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Return to FlyBy
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFoundPage;