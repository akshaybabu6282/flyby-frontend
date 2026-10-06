export const services = [
  {
    slug: "air-ticket-booking",
    title: "Air Ticket Booking",
    shortTitle: "Air Tickets",
    image: "/assets/air_ticket.jpg",
    intro:
      "Book domestic and international flights with personal assistance from enquiry to departure.",
    description:
      "FlyBy Tours & Travels helps travellers compare convenient flight options, understand baggage rules and complete their booking with confidence. Whether you are travelling for a holiday, work, education or a family visit, our team can help you find a suitable itinerary and guide you through the details.",
    highlights: [
      "Domestic and international flight booking",
      "Route and fare guidance",
      "Baggage and travel information",
      "Support for families and group travellers",
    ],
    process: [
      "Share your destination, travel dates and passenger count.",
      "We check suitable routes and available options.",
      "Confirm your preferred itinerary.",
      "Receive your booking details and travel guidance.",
    ],
  },

  {
    slug: "visit-visa-services",
    title: "Visit Visa Services",
    shortTitle: "Visit Visa",
    image: "/assets/visit_visa.avif",
    intro:
      "Clear guidance and application support for visit visas to popular international destinations.",
    description:
      "Our visit visa service helps you understand the required documents, application steps and important travel conditions. We guide you through the process carefully so that your application is organised and complete before submission.",
    highlights: [
      "Document checklist assistance",
      "Application guidance",
      "Travel-purpose based support",
      "Updates throughout the process",
    ],
    process: [
      "Tell us the country and purpose of travel.",
      "Receive the relevant document checklist.",
      "Submit the required information for review.",
      "Proceed with the application and receive updates.",
    ],
  },

  {
    slug: "visa-stamping-saudi-kuwait",
    title: "Visa Stamping for Saudi Arabia & Kuwait",
    shortTitle: "Visa Stamping",
    image: "/assets/visa_stamping.webp",
    intro:
      "Assistance with visa stamping procedures for travellers to Saudi Arabia and Kuwait.",
    description:
      "FlyBy provides step-by-step assistance for Saudi Arabia and Kuwait visa stamping. We help you prepare the required documents, understand the applicable procedure and avoid preventable delays caused by incomplete submissions.",
    highlights: [
      "Saudi Arabia visa stamping support",
      "Kuwait visa stamping support",
      "Document verification guidance",
      "Clear process updates",
    ],
    process: [
      "Share your visa and travel details.",
      "Receive a personalised document checklist.",
      "Complete document verification and submission.",
      "Track the process with assistance from our team.",
    ],
  },

  {
    slug: "hotel-resort-booking",
    title: "Hotel & Resort Booking",
    shortTitle: "Hotels & Resorts",
    image: "/assets/hotels&resorts.jpeg",
    intro:
      "Hotel and resort options selected around your destination, budget and travel style.",
    description:
      "From convenient city stays to relaxing resorts, we help you choose accommodation that fits your trip. Tell us your destination, dates, group size and preferences, and we will assist you in finding a suitable stay.",
    highlights: [
      "Hotels and resorts for different budgets",
      "Family and group accommodation",
      "Domestic and international destinations",
      "Location and room-selection guidance",
    ],
    process: [
      "Share your destination, dates and group size.",
      "Tell us your preferred budget and room type.",
      "Review the suitable stay options.",
      "Confirm your preferred hotel or resort.",
    ],
  },

  {
    slug: "tour-packages",
    title: "Tour Packages",
    shortTitle: "Tour Packages",
    image: "/assets/tour_packages.jpeg",
    intro:
      "Thoughtfully planned domestic and international holidays with support throughout your journey.",
    description:
      "FlyBy creates travel plans for couples, families, groups and individual travellers. Our packages can bring together transport, accommodation and sightseeing based on your available dates, interests and budget.",
    highlights: [
      "Domestic and international packages",
      "Custom itineraries",
      "Family, couple and group travel",
      "Accommodation and sightseeing support",
    ],
    process: [
      "Tell us where and when you want to travel.",
      "Share your group size, interests and budget.",
      "Review the proposed itinerary.",
      "Confirm the plan and prepare for your trip.",
    ],
  },

  {
    slug: "study-abroad-uk",
    title: "Study Abroad in the UK",
    shortTitle: "Study Abroad (UK)",
    image: "/assets/study_abroad.jpg",
    intro:
      "Personal guidance for students planning their higher education journey in the United Kingdom.",
    description:
      "We support students as they explore UK study opportunities and prepare for the application journey. Our team provides practical guidance on course choices, documents and the steps involved in moving from enquiry to departure.",
    highlights: [
      "Course and institution guidance",
      "Application document assistance",
      "Student visa process guidance",
      "Pre-departure travel support",
    ],
    process: [
      "Discuss your academic background and goals.",
      "Explore suitable study options.",
      "Prepare and submit the required documents.",
      "Complete visa and pre-departure preparation.",
    ],
  },

  {
    slug: "certificate-attestation",
    title: "Certificate Attestation",
    shortTitle: "Attestation",
    image: "/assets/ATTESTATION.jpg",
    intro:
      "Guidance for document and certificate attestation required for overseas purposes.",
    description:
      "Certificate attestation can involve multiple steps depending on the document and destination country. FlyBy helps you understand the applicable requirements and prepare documents for education, employment, residency and other official purposes.",
    highlights: [
      "Educational certificate guidance",
      "Personal document guidance",
      "Destination-specific assistance",
      "Process and document updates",
    ],
    process: [
      "Share the document type and destination country.",
      "Receive the applicable requirements.",
      "Prepare and submit the documents.",
      "Follow the attestation process with our guidance.",
    ],
  },

  {
    slug: "umrah-packages",
    title: "Umrah Packages",
    shortTitle: "Umrah Package",
    image: "/assets/umrah.png",
    intro:
      "Organised Umrah travel assistance designed to make your sacred journey comfortable and clear.",
    description:
      "Our Umrah support brings essential travel arrangements together with clear guidance. We assist pilgrims and families with package information, flights, accommodation and the travel preparation required for the journey.",
    highlights: [
      "Umrah travel package assistance",
      "Flight and accommodation support",
      "Family and group enquiries",
      "Pre-travel guidance",
    ],
    process: [
      "Share your intended travel period and group size.",
      "Review available package details.",
      "Complete the required booking formalities.",
      "Receive final travel information and guidance.",
    ],
  },

  {
    slug: "passport-services",
    title: "Passport Services",
    shortTitle: "Passport Service",
    image: "/assets/PASSPORT SERVICE.jpg",
    intro:
      "Application guidance for new passports, renewals and related passport services.",
    description:
      "FlyBy helps applicants understand passport requirements and prepare for the application process. We offer guidance for new applications, renewals and common passport-related needs while keeping the process clear and manageable.",
    highlights: [
      "New passport application guidance",
      "Passport renewal assistance",
      "Document checklist support",
      "Appointment preparation guidance",
    ],
    process: [
      "Tell us the passport service you require.",
      "Receive the appropriate document checklist.",
      "Prepare the application details.",
      "Proceed with the official application and appointment.",
    ],
  },
];

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};