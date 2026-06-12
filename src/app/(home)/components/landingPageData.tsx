import { contact } from "@/utils/constent";
import { DoctorIcon, HealthBadgeIcon, HeartIcon } from "@/utils/landingIcon";

export const landingPageData = {
  bannerData: {
    video: {
      src: "/alpha-may-video.mp4",
      poster: "/alpha-may-video.png",
    },
    benefit:
      "<span class='text-secondary' >Save 15%</span> when you book direct · No prepayment · Free cancellation",
  },

  milestoneData: [
    {
      icon: <HeartIcon />,
      number: "99",
      sign: "%",
      description: "Customer Satisfaction Achieved By Us",
    },
    {
      icon: <HealthBadgeIcon />,
      number: "20",
      sign: "+",
      description: "Years of Healing Expertise",
    },
    {
      icon: <DoctorIcon />,
      number: "28",
      description: "Highly Specialized Expert Therapists",
    },
  ],

  aboutData: {
    image: "/landing-page/about-us.png",
    tag: "ABOUT ALPHA WELLNESS RESORT",
    title: "Not just treatment. A total health transformation.",
    description: [
      "At Alpha Wellness Resort, we go beyond symptoms. We identify and fix the root cause of your disease using functional medicine, advanced diagnostics, and holistic therapies, combining the best of modern science with ancient Ayurveda.",
      "Unlike conventional healthcare, we don't just manage your condition, we help your body heal itself, naturally.",
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  titles: [
    "Reverse diabetes, thyroid, obesity & chronic diseases",
    "Reduce dependency on long-term medications",
    "Restore energy, metabolism & mental clarity",
  ],

  packagesSectionData: {
    title: "Alpha Wellness Packages",
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
    packagesData: [
      {
        name: "Diabetes Reversal",
        duration: "3 Nights",
        description:
          "Reduce HbA1c, improve insulin sensitivity, regain metabolic control naturally.",
        cta: {
          label: "Book Now",
          href: "#form",
        },
      },
      {
        name: "Obesity Reset",
        duration: "3 Nights",
        description:
          "Lose weight sustainably by fixing hormones, gut health, and metabolism.",
        cta: {
          label: "Book Now",
          href: "#form",
        },
      },
      {
        name: "Thyroid Harmony",
        duration: "3 Nights",
        description:
          "Balance hormones and restore energy without lifelong dependency.",
        cta: {
          label: "Book Now",
          href: "#form",
        },
      },
      {
        name: "Gut Healing",
        duration: "3 Nights",
        description:
          "Fix digestion, inflammation, and immunity at the root level.",
        cta: {
          label: "Book Now",
          href: "#form",
        },
      },
      {
        name: "Stress & Sleep Reset",
        duration: "3 Nights",
        description:
          "Rewire your nervous system, improve sleep, and eliminate burnout.",
        cta: {
          label: "Book Now",
          href: "#form",
        },
      },
      {
        name: "Detox & Longevity",
        duration: "3 Nights",
        description:
          "Cleanse, rejuvenate, and optimize your body for long-term vitality.",
        cta: {
          label: "Book Now",
          href: "#form",
        },
      },
    ],
  },

  rooms: {
    title: "Luxury Wellness Cottages",
    description:
      "Serene spaces designed for deep rest and renewal, in nature's lap, where fresh air, open landscapes, and tranquil surroundings restore mind, body, and soul.",
    roomsData: [
      {
        images: [
          "/landing-page/rooms/studio-1.png",
          "/landing-page/rooms/studio/DSC05616.webp",
          "/landing-page/rooms/studio/DSC05618.webp",
          "/landing-page/rooms/studio/DSC05619.webp",
          "/landing-page/rooms/studio/DSC05621.webp",
          "/landing-page/rooms/studio/DSC05622.webp",
          "/landing-page/rooms/studio/DSC05623.webp",
          "/landing-page/rooms/studio/DSC05628.webp",
          "/landing-page/rooms/studio/DSC05629.webp",
        ],
        name: "STUDIO COTTAGE",
      },
      {
        images: [
          "/landing-page/rooms/deluxe-1.png",
          "/landing-page/rooms/deluxe/DSC05649.webp",
          "/landing-page/rooms/deluxe/DSC05652.webp",
          "/landing-page/rooms/deluxe/DSC05657.webp",
          "/landing-page/rooms/deluxe/DSC05739.webp",
          "/landing-page/rooms/deluxe/DSC05744.webp",
          "/landing-page/rooms/deluxe/DSC05745.webp",
        ],
        name: "DELUXE COTTAGE",
      },
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  slidingGallery: [
    "/landing-page/gallery/Rectangle-4117.png",
    "/landing-page/gallery/Rectangle-4118.png",
    "/landing-page/gallery/Rectangle-4119.png",
    "/landing-page/gallery/Rectangle-4120.png",
    "/landing-page/gallery/Rectangle-4121.png",
    "/landing-page/gallery/Rectangle-4122.png",
    "/landing-page/gallery/Rectangle-4123.png",
    "/landing-page/gallery/Rectangle-4124.png",
  ],

  experiences: {
    tag: "THE SANCTUARY",
    title: "What you'll experience",
    description:
      "A premium, peaceful space where every detail nurtures your healing.",
    cards: [
      {
        image: "/landing-page/experiences/1.png",
        title: "Luxury Wellness Rooms",
        description:
          "Serene spaces designed for deep rest and renewal, in nature's lap.",
      },
      {
        image: "/landing-page/experiences/2.png",
        title: "Organic Dining",
        description: "Farm-to-table Sattvic cuisine crafted by expert chefs.",
      },
      {
        image: "/landing-page/experiences/3.png",
        title: "Ayurveda Spa & Therapy",
        description:
          "Ancient healing treatments in a contemporary luxury setting.",
      },
      {
        image: "/landing-page/experiences/4.png",
        title: "Meditation Gardens",
        description:
          "Tranquil spaces surrounded by nature for inner reflection.",
      },
      {
        image: "/landing-page/experiences/5.png",
        title: "Nature Walking Trails",
        description: "Guided forest therapy walks through coconut groves.",
      },
      {
        image: "/landing-page/experiences/6.png",
        title: "Yoga Pavilion",
        description: "Open-air practice space with panoramic sunrise views.",
      },
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  healers: {
    tag: "MEET THE TEAM",
    title: "Healers Who Lead by Experience",
    description:
      "Each specialist is handpicked for their deep expertise, compassionate care, and commitment to evidence-based holistic healing.",
    cards: [
      {
        image: "/landing-page/healers/healer-1.png",
        name: "Dr. Rizwan Ahmed S. A",
        profession: "Functional medicine and Ayurveda",
      },
      {
        image: "/landing-page/healers/healer-2.png",
        name: "Dr. Rakshith M.M",
        profession: "Functional medicine and Ayurveda",
      },
      {
        image: "/landing-page/healers/healer-3.png",
        name: "Dr. Arshiya Anjum",
        profession: "Functional medicine and Ayurveda",
      },
      {
        image: "/landing-page/healers/healer-4.png",
        name: "Dr. Joy Varghese",
        profession: "Functional medicine and Ayurveda",
      },
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  testimonials: {
    title: "Guest Experiences",
    img: "/landing-page/testimonials.png",
    testimonials: [
      {
        review:
          "Alpha wellness resort is located in mountains, near Forest and also near the bank of great river, Kaveri.Environment is so beautiful and weather is also wonderful. Wellness activities like Yoga, Spa therapy, Nature walk, Naturopathy therapy, Meditation, Nutritional diet concepts for healthy life and informative knowledge related to chronic diseases by expertise doctors was mind-blowing. Resort provides wholesome meals. Staff is also qualified and well mannered. Highly recommended.",
        name: "Kamal Gera",
      },
      {
        review:
          "Alpha wellness resort is located in mountains, near Forest and also near the bank of great river, Kaveri.Environment is so beautiful and weather is also wonderful. Wellness activities like Yoga, Spa therapy, Nature walk, Naturopathy therapy, Meditation, Nutritional diet concepts for healthy life and  informative knowledge related to chronic diseases by expertise doctors/therapists was mind-blowing. Resort provides wholesome meals with nutritional balanced / customised diet to health conscious guests. Staff is also qualified , well experienced and well mannered.The  transparency of package includes- Spa therapy / editation /Yoga/ Stay / Customised food/ Swimming pool .Lastly we enjoy a lot here with my family and spent wonderful time in wellness resort.",
        name: "Yasinali polara",
      },
      {
        review:
          "It's was a great experiences I enjoyed the three days with all my wonderful ayurvedic treatment Finally the day come I m leaving will miss everyone's I would say a place to relax enjoy your day yourself Delightful food with exotic treats . As it's solo trip but I never felt alone all are very helpful and caring",
        name: "Seetasareet Patra",
      },
      {
        review:
          "rejuvenating experience, often featuring organic, locally sourced, and healthy dining, along with top-tier amenities like heated pools and spa services. highly professional, attentive staff, and peaceful, green environments, making them ideal for detoxing and escaping daily routines.",
        name: "Rahul Arora",
      },
      {
        review:
          "Combines modern medical advancements with functional medicine for holistic healing. Residential, clinical, and wellness treatment areas. Highly recommend.",
        name: "Neha Chawala",
      },
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },
};
