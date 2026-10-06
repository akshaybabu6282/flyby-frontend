import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

const Services = () => {
  const mainServices = services.filter(
    (service) =>
      service.slug !== "taxi-cab-bus-traveller-services"
  );

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 px-6 py-24"
    >
      {/* Background decorations */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Everything you need to travel
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            Our Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From planning and documentation to bookings and complete travel
            assistance, FlyBy helps make every stage of your journey easier.
          </p>
        </motion.div>

        {/* Services list */}
        <div className="grid gap-6 lg:grid-cols-2">
          {mainServices.map((service, index) => {
            const serviceNumber = String(index + 1).padStart(2, "0");

            const isLastOddCard =
              mainServices.length % 2 !== 0 &&
              index === mainServices.length - 1;

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 2) * 0.1,
                }}
                className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl ${
                  isLastOddCard ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`flex h-full flex-col ${
                    isLastOddCard
                      ? "md:grid md:grid-cols-[0.8fr_1.2fr]"
                      : "sm:grid sm:grid-cols-[0.9fr_1.1fr]"
                  }`}
                >
                  {/* Service image */}
                  <div className="relative min-h-[230px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 text-sm font-bold text-white backdrop-blur">
                      {serviceNumber}
                    </span>
                  </div>

                  {/* Service content */}
                  <div className="flex min-h-[230px] flex-col p-7">
                    <div className="mb-5 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />

                    <h3 className="text-2xl font-bold leading-tight text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.intro}
                    </p>

                    <div className="mt-auto pt-7">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 font-bold text-blue-700 transition hover:text-blue-900"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        View Service
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-blue-700 group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom contact prompt */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-blue-950 px-7 py-8 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-bold">
              Not sure which service you need?
            </h3>

            <p className="mt-2 text-blue-200">
              Tell us your travel requirement and our team will guide you.
            </p>
          </div>

          <a
            href="https://wa.me/917304991052?text=Hello%20FlyBy%2C%20I%20need%20help%20with%20a%20travel%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-6 py-3 font-bold text-blue-900 transition hover:bg-blue-50"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;