export const indiaDestinations = [
  {
    slug: "manali",
    name: "Manali",
    cardTitle: "Manali",
    image: "/assets/Manali.jpg",
    homeImage: "/assets/Manali.jpg",
    featured: true,
    tagline: "Make time for a mountain getaway.",
    intro:
      "Planning a Manali holiday? Share your preferred dates, departure city, trip duration and budget with FlyBy Tours & Travels. Our team can discuss travel options based on the pace and experience you are looking for.",
  },
  {
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    cardTitle: "Kerala Backwaters",
    image: "/assets/kerala.webp",
    featured: false,
    tagline: "Plan a break with time to slow down.",
    intro:
      "Explore Kerala backwater holiday options with FlyBy Tours & Travels. Tell us your dates, number of travellers and accommodation preferences so we can discuss a suitable proposal. Any houseboat stay or other experience must be confirmed in your quotation.",
  },
  {
    slug: "goa",
    name: "Goa",
    cardTitle: "Goa Beach Holiday",
    image: "/assets/goa.png",
    homeImage: "/assets/goa.png",
    featured: true,
    tagline: "Choose your own holiday rhythm.",
    intro:
      "Plan your Goa getaway with FlyBy Tours & Travels. Whether you prefer a relaxed break, a couple’s holiday or time away with family and friends, share your travel preferences so our team can discuss suitable arrangements.",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    cardTitle: "Kashmir Holiday",
    // Existing placeholder retained from your current website.
    // Replace with a genuine Kashmir image when available.
    image: "/assets/Manali.jpg",
    featured: false,
    tagline: "Start planning the getaway you have in mind.",
    intro:
      "Discuss your Kashmir holiday with FlyBy Tours & Travels. Share your dates, preferred duration, budget and places of interest. Your final route and activities should be confirmed in a written proposal, subject to the conditions applicable to your trip.",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    cardTitle: "Rajasthan Heritage Tour",
    image: "/assets/Rajasthan.jpeg",
    homeImage: "/assets/rajastan.cms",
    featured: true,
    tagline: "Build a journey around the places you want to explore.",
    intro:
      "Planning a Rajasthan trip? FlyBy Tours & Travels can help you discuss destination choices, travel arrangements and accommodation preferences. Tell us which places interest you and how much time you have before choosing a proposed route.",
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    cardTitle: "Varanasi Spiritual Trip",
    image: "/assets/Varanasi.webp",
    featured: false,
    tagline: "Make space for a meaningful journey.",
    intro:
      "Discuss your Varanasi travel plans with FlyBy Tours & Travels. Share the purpose of your visit, preferred dates and any specific requirements. Visits, local assistance and other arrangements should be checked against your written proposal before booking.",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    cardTitle: "Mumbai",
    image: "/assets/mumbai.avif",
    featured: false,
    tagline: "Plan a city break around your interests.",
    intro:
      "Explore Mumbai travel options with FlyBy Tours & Travels. Tell us your departure city, dates and what you would like to do, so our team can discuss arrangements for a short break or Mumbai as part of a wider trip.",
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    cardTitle: "Bengaluru",
    image: "/assets/bangalore.jpg",
    featured: false,
    tagline: "Make your city visit work for you.",
    intro:
      "Planning a Bengaluru visit? FlyBy Tours & Travels can discuss travel and accommodation options based on your dates and preferences. Let us know whether you need a short city stay or want to include Bengaluru in a longer holiday.",
  },
  {
    slug: "delhi-agra",
    name: "Delhi & Agra",
    cardTitle: "Delhi & Agra",
    image: "/assets/delhi_agra.webp",
    homeImage: "/assets/delhi_agra.webp",
    featured: true,
    tagline: "Bring two destinations into one travel plan.",
    intro:
      "Plan a Delhi and Agra trip with FlyBy Tours & Travels. Share your preferred duration, departure city and sightseeing interests. Our team can discuss a proposed route, accommodation and transport arrangements before you confirm.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    cardTitle: "Hyderabad",
    image: "/assets/hyderabad.webp",
    featured: false,
    tagline: "Create a city getaway that suits your plans.",
    intro:
      "Discuss your Hyderabad holiday with FlyBy Tours & Travels. Tell us your travel dates, number of travellers, budget and interests so we can help you review suitable travel options and the proposed booking details.",
  },
  {
    slug: "kodaikanal",
    name: "Kodaikanal",
    cardTitle: "Kodaikanal",
    image: "/assets/kodaikanal.jpg",
    featured: false,
    tagline: "Take a little time away from your routine.",
    intro:
      "Planning a Kodaikanal getaway? Share your preferred dates, departure location and accommodation expectations with FlyBy Tours & Travels. Our team can discuss arrangements for a couple’s break, family holiday or group trip.",
  },
  {
    slug: "ooty",
    name: "Ooty",
    cardTitle: "Ooty",
    image: "/assets/Ooty.jpg",
    featured: false,
    tagline: "Find the right pace for your next break.",
    intro:
      "Explore Ooty holiday options with FlyBy Tours & Travels. Share your travel dates, preferred duration and budget so our team can discuss a proposal that reflects your travel preferences.",
  },
  {
    slug: "mysore",
    name: "Mysore",
    cardTitle: "Mysore",
    image: "/assets/Mysore.webp",
    featured: false,
    tagline: "Make your next short getaway a considered one.",
    intro:
      "Plan your Mysore visit with FlyBy Tours & Travels. Tell us your departure location, dates and interests so our team can discuss options for a dedicated trip or Mysore as part of a wider journey.",
  },
];

export const getIndiaDestination = (slug) =>
  indiaDestinations.find((destination) => destination.slug === slug);

// Preserve the existing homepage order.
const featuredSlugs = [
  "manali",
  "delhi-agra",
  "rajasthan",
  "goa",
];

export const featuredIndiaDestinations = featuredSlugs.map((slug) =>
  getIndiaDestination(slug)
);