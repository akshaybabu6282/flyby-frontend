import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  Route,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getServiceBySlug, services } from "../data/services";

const websiteUrl = "https://www.flybytoursandtravels.in";

const updateMetaTag = (selector, attribute, value) => {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
};

const ServicePage = () => {
  const { slug } = useParams();

  const serviceName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const seoTitle = `${serviceName} in Wayanad`;

  const seoDescription = `Get reliable ${serviceName.toLowerCase()} support from FlyBy Tours & Travels in Mananthavady, Wayanad. Contact our team for travel guidance, documentation support and booking information.`;

  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (!service) return;

    const pageTitle = `${service.title} in Wayanad | FlyBy Tours & Travels`;

    const pageDescription = `${service.intro} Contact FlyBy Tours & Travels in Mananthavady, Wayanad for assistance.`;

    const pageUrl = `${websiteUrl}/services/${service.slug}`;

    document.title = pageTitle;

    updateMetaTag(
      'meta[name="description"]',
      "content",
      pageDescription
    );

    updateMetaTag(
      'meta[property="og:title"]',
      "content",
      pageTitle
    );

    updateMetaTag(
      'meta[property="og:description"]',
      "content",
      pageDescription
    );

    updateMetaTag(
      'meta[property="og:url"]',
      "content",
      pageUrl
    );

    updateMetaTag(
      'link[rel="canonical"]',
      "href",
      pageUrl
    );

    return () => {
      document.title =
        "FlyBy Tours & Travels | International & India Tour Packages, Visa, Flight Tickets, Study Abroad UK";

      updateMetaTag(
        'link[rel="canonical"]',
        "href",
        `${websiteUrl}/`
      );
    };
  }, [service]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello FlyBy, I would like more information about ${service.title}.`
  );

  return (
    <>

      <SEO
        title={`${seoTitle} | FlyBy Tours & Travels`}
        description={seoDescription}
        path={`/services/${slug}`}
      />
      
      <Navbar />

      <main className="bg-slate-50 text-slate-900">
        {/* Hero section */}
        <section className="relative min-h-[620px] overflow-hidden pt-32">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/80 to-slate-900/30" />

          <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-6 py-16">
            <div className="max-w-3xl text-white">
              <Link
                to="/#services"
                className="mb-8 inline-flex items-center gap-2 text-blue-200 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all services
              </Link>

              <p className="mb-4 font-semibold uppercase tracking-[0.24em] text-blue-300">
                FlyBy Tours & Travels
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
                {service.intro}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/917304991052?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enquire on WhatsApp
                </a>

                <a
                  href="tel:+917304991052"
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  Call +91 73049 91052
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About service */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
              About the service
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Professional assistance from enquiry to completion
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {service.description}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-950/5">
            <h2 className="text-2xl font-bold">
              What we can help with
            </h2>

            <ul className="mt-6 space-y-4">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="bg-blue-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-300">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Four simple steps
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Contact our team and we will guide you through the
                requirements and next steps.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <article
                  key={step}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 font-bold">
                    {index + 1}
                  </div>

                  <p className="mt-5 leading-7 text-blue-50">
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry section */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white shadow-xl sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <Route className="h-9 w-9" />

                <h2 className="mt-5 text-3xl font-bold">
                  Need help with {service.shortTitle}?
                </h2>

                <p className="mt-3 text-lg text-blue-50">
                  Share your requirement with our team and we will guide
                  you through the next steps.
                </p>
              </div>

              <a
                href={`https://wa.me/917304991052?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Start Your Enquiry
              </a>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-2xl font-bold">
            Explore other services
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  {item.shortTitle}
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicePage;