import {
  AirConditioningIcon,
  ComplimentaryBreakfastIcon,
  EarlyCheckInIcon,
  ElectronicSafeIcon,
  FreeWifiIcon,
  ToiletriesIcon,
} from "@/utils/amenityIcons";
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
    title: "Our Signature Therapies",
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
    packagesData: [
      {
        image: "/therapies/PCOS.jpg",
        name: "PCOS & Hormonal Balance",
        duration: "3 Nights",
        description:
          "Correct insulin resistance and rebalance hormones to regulate your cycle, skin and weight — naturally, without lifelong medication.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Spine-Back-Pain.jpg",
        name: "Spine & Back Pain Relief",
        duration: "3 Nights",
        description:
          "Non-surgical relief for chronic back pain, slip disc and sciatica through Ayurveda Kati Basti and physiotherapy.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },

      {
        image: "/therapies/liver-health.jpg",
        name: "Liver Health & Fatty Liver",
        duration: "3 Nights",
        description:
          "Support natural liver detoxification and enhance metabolic function with targeted therapies.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/diabetes-reversal.jpg",
        name: "Diabetes Reversal",
        duration: "3 Nights",
        description:
          "Improve insulin sensitivity and support healthy blood sugar through personalized integrative care.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Gut-Restoration.jpg",
        name: "Gut Restoration",
        duration: "3 Nights",
        description:
          "Restore digestive balance, reduce inflammation, and strengthen your gut microbiome for lasting health.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Metabolic-Reset.jpg",
        name: "Metabolic Reset",
        duration: "3 Nights",
        description:
          "Rebalance hormones, optimize metabolism, and promote sustainable weight management.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Sleep-Reset.jpg",
        name: "Stress & Sleep Reset",
        duration: "3 Nights",
        description:
          "Rewire your nervous system, improve sleep, and eliminate burnout.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Panchakarma-Detox.jpg",
        name: "Panchakarma Detox",
        duration: "3 Nights",
        description:
          "Deeply cleanse the body, eliminate toxins, and restore internal balance with authentic Ayurvedic detox.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },

      {
        image: "/therapies/Sleep-Restoration.jpg",
        name: "Sleep Restoration",
        duration: "3 Nights",
        description:
          "Improve sleep quality and recovery to enhance energy, focus, and overall wellbeing.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Ayurvedic-Rejuvenation.jpg",
        name: "Ayurvedic Rejuvenation",
        duration: "3 Nights",
        description:
          "Revitalize your body and mind with personalized Ayurvedic therapies for long-term vitality.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Anxiety.jpg",
        name: "Stress & Anxiety",
        duration: "3 Nights",
        description:
          "Relieve stress, calm the nervous system, and build emotional resilience naturally.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/Anti-Ageing.jpg",
        name: "Cellular Anti-Ageing",
        duration: "3 Nights",
        description:
          "Support healthy aging by enhancing cellular repair, energy production, and overall vitality.",
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
    ],
  },

  rooms: {
    title: "Explore Luxury Wellness Cottages",
    description: "DESIGNED FOR LUXURY STAYS & HOLISTIC SERENITY",
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
        name: "Studio Cottage",
        roomType: ["2 Pax", "1 King Bed"],
        description:
          "Our Studio Cottage redefine indulgence with expansive layouts and elevated design, crafted for guests who seek more space, privacy, and a truly immersive stay experience.",
        amities: [
          {
            icon: <EarlyCheckInIcon />,
            title: "Early Check-in *",
          },
          {
            icon: <ComplimentaryBreakfastIcon />,
            title: "Complimentary Breakfast",
          },
          {
            icon: <FreeWifiIcon />,
            title: "Free Wi-Fi",
          },
          {
            icon: <AirConditioningIcon />,
            title: "Air Conditioning",
          },
          {
            icon: <ElectronicSafeIcon />,
            title: "Electronic Safe",
          },
          {
            icon: <ToiletriesIcon />,
            title: "Toiletries",
          },
        ],
        popUpAmities: [
          {
            title: "Popular with Guests",
            amities: [
              { title: "Air Conditioning" },
              {
                title: "Iron/Ironing Board",
              },
              { title: "Bathroom" },
              { title: "Wi-Fi" },
            ],
          },
          {
            title: "Basic Facilities",
            amities: [{ title: "Kettle" }],
          },
          {
            title: "Bathroom",
            amities: [
              { title: "Hairdryer" },
              { title: "Hot & Cold Water" },
              {
                title: "Toiletries",
              },
              {
                title: "Towels",
              },
            ],
          },
        ],
        cta: {
          label: "Book Now",
          href: `#form`,
        },
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
        name: "Deluxe Cottage",
        roomType: ["2 Pax", "1 King Bed"],
        description:
          "Our Deluxe Cottage are thoughtfully designed to offer a seamless blend of comfort, functionality, and modern elegance ideal for guests who value both relaxation and efficiency.",
        amities: [
          {
            icon: <EarlyCheckInIcon />,
            title: "Early Check-in *",
          },
          {
            icon: <ComplimentaryBreakfastIcon />,
            title: "Complimentary Breakfast",
          },
          {
            icon: <FreeWifiIcon />,
            title: "Free Wi-Fi",
          },
          {
            icon: <AirConditioningIcon />,
            title: "Air Conditioning",
          },
          {
            icon: <ElectronicSafeIcon />,
            title: "Electronic Safe",
          },
          {
            icon: <ToiletriesIcon />,
            title: "Toiletries",
          },
        ],
        popUpAmities: [
          {
            title: "Popular with Guests",
            amities: [
              { title: "Air Conditioning" },
              {
                title: "Iron/Ironing Board",
              },
              { title: "Bathroom" },
              { title: "Wi-Fi" },
            ],
          },
          {
            title: "Basic Facilities",
            amities: [{ title: "Kettle" }],
          },
          {
            title: "Bathroom",
            amities: [
              { title: "Hairdryer" },
              { title: "Hot & Cold Water" },
              {
                title: "Toiletries",
              },
              {
                title: "Towels",
              },
            ],
          },
        ],
        cta: {
          label: "Book Now",
          href: `#form`,
        },
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
        profession: "Functional medicine & NUTRITIONIST",
      },
      {
        image: "/landing-page/healers/healer-2.png",
        name: "Dr. Rakshith M.M",
        profession: "Functional medicine and Ayurveda",
      },

      {
        image: "/landing-page/healers/healer-4.png",
        name: "Dr. Joy Varghese",
        profession: "SENIOR CONSULTANT FOR FATTY LIVER & METABOLIC DISORDERS",
      },
      {
        image: "/landing-page/healers/healer-3.png",
        name: "Dr. Arshiya Anjum",
        profession: "Functional medicine PRACTITIONER",
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
