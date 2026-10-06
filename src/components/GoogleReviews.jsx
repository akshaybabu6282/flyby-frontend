import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, MessageSquareQuote } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Flyby%20Tours%20%26%20Travels&query_place_id=ChIJ808ZuonfpTsRq1RlukmHKck";

// Manually selected genuine Google reviews.
// Add or update reviews here when needed.
// Always use the actual Google star rating, not stars written in the text.
const reviews = [
  {
    id: "mohd-ane",
    name: "mohd ane",
    rating: 5,
    text: "Had a great experience with Flyby Tours & Travels for my visa activation. The process was smooth and well handled. The staff were very helpful, responsive, and explained everything clearly. I really appreciate their support and professional service. Highly recommended for visa-related services!",
  },
  {
    id: "muhammed-sufail",
    name: "Muhammed Sufail P S",
    rating: 5,
    text: "It was an excellent experience with Fly By, as we were given the opportunity to visit Malaysia. The travel experience was commendable, and the overall support provided was very satisfactory.",
  },
  {
    id: "shahabas-rv",
    name: "shahabas rv",
    rating: 5,
    text: "I had a very good experience with Flyby Tours and Travels. The team was friendly, professional, and helpful throughout the process. They responded to my questions clearly and guided me whenever I needed assistance. Overall, I’m happy with their service and would recommend Flyby to others.",
  },
  {
    id: "niyas-m",
    name: "NIYAS M",
    rating: 5,
    text: "I had an excellent experience with Flyby Tours & Travels. The team is highly professional, friendly, and genuinely committed to providing the best service. They guided me through every step of the process with patience and transparency, making everything smooth and hassle-free.",
  },
  {
    id: "manaf-kp",
    name: "Manaf Kp",
    rating: 5,
    text: "⭐⭐⭐⭐⭐ Excellent service! The staff were very helpful, friendly, and professional. They explained everything clearly and made the whole travel process easy and smooth. I am very satisfied with their service and highly recommend this travel agency to everyone.",
  },
];

const getInitials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

const GoogleReviews = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Customer Experiences
            </p>

            <h2
              id="reviews-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Selected Customer Reviews
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Hear from customers who have shared their experiences with FlyBy
              Tours &amp; Travels on Google.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See all FlyBy reviews on Google Maps, opens in a new tab"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
          >
            See All Reviews on Google
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700"
                >
                  {getInitials(review.name)}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {review.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Reviewed on Google
                  </p>
                </div>
              </div>

              <div
                role="img"
                aria-label={`${review.rating} out of 5 stars`}
                className="mb-4 flex items-center gap-1"
              >
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={17}
                    aria-hidden="true"
                    className={
                      starIndex < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-100 text-slate-200"
                    }
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-7 text-slate-600">
                <p>{review.text}</p>
              </blockquote>

              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-400">
                <MessageSquareQuote size={15} aria-hidden="true" />
                Customer feedback
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
            className="flex h-full flex-col justify-center rounded-2xl bg-slate-900 p-7 text-white sm:p-8"
          >
            <MessageSquareQuote
              size={34}
              aria-hidden="true"
              className="mb-6 text-slate-300"
            />

            <h3 className="text-2xl font-semibold leading-snug">
              Your experience matters to us.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Travelled with FlyBy or used our services? Visit our Google profile
              to read more customer feedback or share your own experience.
            </p>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Visit Our Google Profile
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          Selected 5-star reviews from Google, added manually. These are not all
          reviews and do not represent the overall Google rating.
        </p>
      </div>
    </section>
  );
};

export default GoogleReviews;