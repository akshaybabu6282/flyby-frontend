export const internationalDestinations = [
  {
    slug: "malaysia",
    name: "Malaysia",
    image: "/assets/malaysia.avif",
    tagline: "City discoveries and a refreshing holiday escape.",
    intro:
      "Planning a Malaysia holiday? FlyBy Tours & Travels can help you explore travel options based on your interests, preferred dates and budget. Contact our team to discuss your trip and request a personalised proposal.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    image: "/assets/dubai.avif",
    tagline: "Plan a city holiday your way.",
    intro:
      "Explore your Dubai holiday options with FlyBy Tours & Travels. Whether you are planning a couple’s getaway, a family holiday or a group trip, speak with our team about your preferences before choosing your travel arrangements.",
  },
  {
    slug: "thailand",
    name: "Thailand",
    image: "/assets/tailand.webp",
    tagline: "Make room for discovery, relaxation and adventure.",
    intro:
      "Create a Thailand travel plan that matches the way you want to explore. FlyBy Tours & Travels can help you discuss destination choices, travel dates and accommodation preferences before preparing a trip proposal.",
  },
  {
    slug: "bali",
    name: "Bali",
    image: "/assets/Bali.jpg",
    tagline: "Slow down and make time for a memorable getaway.",
    intro:
      "Planning a Bali getaway? Share your travel dates, budget and holiday preferences with FlyBy Tours & Travels. Our team can help you explore suitable travel arrangements for a honeymoon, couple’s holiday, family trip or group getaway.",
  },
  {
    slug: "maldives",
    name: "Maldives",
    image: "/assets/maidives.jpg",
    tagline: "A holiday built around time to unwind.",
    intro:
      "Discuss your Maldives holiday with FlyBy Tours & Travels. Tell us your preferred dates, number of travellers and accommodation expectations so we can help you explore suitable options and explain the proposed booking details.",
  },
  {
    slug: "phuket",
    name: "Phuket",
    image: "/assets/phuket.jpg",
    tagline: "Choose your own balance of relaxation and exploration.",
    intro:
      "Plan your Phuket getaway with guidance from FlyBy Tours & Travels. We can help you discuss travel options based on your dates, budget and interests, whether Phuket is your main destination or part of a wider Thailand holiday.",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    image: "/assets/Azerbaijan.webp",
    tagline: "Discover a different direction for your next holiday.",
    intro:
      "Interested in travelling to Azerbaijan? FlyBy Tours & Travels can help you explore trip options and discuss your preferred travel dates, accommodation and experiences before you decide on a booking.",
  },
  {
    slug: "egypt",
    name: "Egypt",
    image: "/assets/egypt.jpg",
    tagline: "Plan a journey inspired by your curiosity.",
    intro:
      "Start planning your Egypt holiday with FlyBy Tours & Travels. Share the places and experiences you are interested in, along with your dates and budget, so our team can discuss a suitable travel proposal with you.",
  },
  {
    slug: "singapore",
    name: "Singapore",
    image: "/assets/Singapore.jpg",
    tagline: "Make your next city getaway feel effortless.",
    intro:
      "Explore Singapore travel options with FlyBy Tours & Travels. From a short break to a family holiday, our team can discuss your travel preferences and help you review proposed arrangements before booking.",
  },
  {
    slug: "paris",
    name: "Paris",
    image: "/assets/Paris.jpg",
    tagline: "Make time for the city you have been dreaming of.",
    intro:
      "Planning a Paris holiday? FlyBy Tours & Travels can help you discuss travel arrangements for a dedicated city break or Paris as part of a wider trip. Contact us with your dates, budget and travel preferences to begin.",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    image: "/assets/Switzerland.jpg",
    tagline: "Give your next holiday a fresh perspective.",
    intro:
      "Discuss your Switzerland travel plans with FlyBy Tours & Travels. Share your preferred dates, trip duration and interests so our team can help you explore options for a standalone holiday or a wider European journey.",
  },
];

export const getInternationalDestination = (slug) =>
  internationalDestinations.find(
    (destination) => destination.slug === slug
  );