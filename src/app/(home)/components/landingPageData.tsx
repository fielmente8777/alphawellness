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
        details: [
          "PCOS (Polycystic Ovary Syndrome) is more than a reproductive condition. It is a metabolic and hormonal disorder often driven by insulin resistance, chronic inflammation, stress, and hormonal imbalances that can lead to irregular periods, weight gain, acne, hair thinning, fertility challenges, and other long-term health concerns. At Alpha Wellness Resort, the PCOS Hormonal Reset Program is designed to address these root causes rather than simply suppress symptoms with medication. By combining functional medicine, advanced hormone and metabolic testing, Ayurveda, personalized nutrition, stress management, therapeutic yoga, and targeted lifestyle interventions, the program aims to improve insulin sensitivity, restore hormonal balance, regulate menstrual cycles, support fertility, and promote sustainable weight management. Each guest receives a doctor-led, personalized treatment plan tailored to their unique hormonal profile, helping achieve long-term metabolic health, improved reproductive wellness, and lasting symptom relief through natural, evidence-based care.",
        ],
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
        details: [
          "Back pain is often more than a result of ageing or physical strain. It is commonly caused by poor posture, prolonged sitting, muscle weakness, inflammation, disc degeneration, or nerve compression that gradually worsens over time. The Spine Vitality & Pain Reversal Program at Alpha Wellness Resort is designed to treat these underlying causes through a comprehensive, non-surgical rehabilitation approach. By integrating functional medicine, Ayurveda, Kati Basti therapy, physiotherapy, therapeutic yoga, posture correction, and personalized lifestyle interventions, the program focuses on reducing inflammation, relieving pain, restoring spinal mobility, strengthening the core muscles, and preventing future recurrence. Every guest receives a doctor-led, individualized treatment plan based on detailed assessments, making it suitable for conditions such as chronic lower back pain, slip disc, sciatica, cervical spondylosis, and posture-related pain, while promoting long-term spinal health, improved movement, and a better quality of life.",
        ],
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
        details: [
          "The liver plays a vital role in detoxification, metabolism, digestion, and energy production, making its health essential for overall well-being. At Alpha Wellness Resort, the Liver Health program is designed to support individuals with fatty liver, elevated liver enzymes, metabolic disorders, and lifestyle-related liver dysfunction through a root-cause approach rather than symptom management. By integrating functional medicine, advanced diagnostic assessments, Ayurveda, personalized nutrition, therapeutic yoga, stress reduction, and targeted detoxification therapies, the program aims to reduce inflammation, improve liver function, enhance fat metabolism, and support the body's natural detoxification processes. Each treatment plan is tailored to the individual's health profile, helping restore metabolic balance, improve energy levels, optimize digestion, and promote long-term liver health in a serene, healing environment.",
        ],
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
        details: [
          "Diabetes is a chronic metabolic condition that develops when the body is unable to produce enough insulin or use it effectively, leading to consistently high blood sugar levels that can affect the heart, kidneys, eyes, nerves, and overall health if left unmanaged. At Alpha Wellness Resort, diabetes care focuses on addressing the root causes rather than simply controlling symptoms. Their integrative approach combines functional medicine, advanced diagnostics, Ayurveda, personalized nutrition, therapeutic yoga, stress management, and lifestyle modification to improve insulin sensitivity, regulate metabolism, reduce inflammation, and support long-term blood sugar balance. Each guest receives an individualized treatment plan designed to reduce dependence on medication where appropriate, enhance energy levels, promote healthy weight management, and restore overall metabolic wellness in a peaceful healing environment.",
        ],
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
        details: [
          "Gut health is the foundation of overall wellness, influencing digestion, immunity, metabolism, hormone balance, and even mental well-being. At Alpha Wellness Resort, the Gut Restoration program is designed to identify and address the root causes of digestive issues such as bloating, acidity, constipation, irritable bowel symptoms, food sensitivities, and chronic inflammation. By combining functional medicine, advanced diagnostic testing, personalized nutrition, Ayurveda, therapeutic yoga, stress management, and targeted healing therapies, the program works to restore a healthy gut microbiome, repair the intestinal lining, improve nutrient absorption, and reduce inflammation. Rather than simply managing symptoms, the focus is on rebuilding long-term digestive health, enhancing energy levels, strengthening immunity, and supporting the body's natural healing processes for lasting wellness.",
        ],
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
        details: [
          "Metabolic health is the foundation of how your body converts food into energy, regulates hormones, maintains a healthy weight, and controls blood sugar, making it essential for long-term wellness. At Alpha Wellness Resort, the Metabolic Reset program is designed to address the root causes of metabolic dysfunction through an integrative approach that combines functional medicine, advanced diagnostics, Ayurveda, personalized nutrition, therapeutic yoga, and targeted lifestyle interventions. Rather than focusing solely on weight loss, the program aims to improve insulin sensitivity, optimize metabolism, rebalance hormones, reduce chronic inflammation, and enhance energy production, helping the body function more efficiently. Every treatment plan is tailored to the individual's unique health profile, supporting sustainable weight management, improved metabolic performance, better overall vitality, and a reduced risk of chronic lifestyle diseases through long-term lifestyle transformation.",
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      // {
      //   image: "/therapies/Sleep-Reset.jpg",
      //   name: "Stress & Sleep Reset",
      //   duration: "3 Nights",
      //   description:
      //     "Rewire your nervous system, improve sleep, and eliminate burnout.",
      //   details: [""],
      //   cta: [
      //     { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      //     { label: "BOOK NOW", href: "#form" },
      //   ],
      // },
      {
        image: "/therapies/Panchakarma-Detox.jpg",
        name: "Panchakarma Detox",
        duration: "3 Nights",

        description:
          "Deeply cleanse the body, eliminate toxins, and restore internal balance with authentic Ayurvedic detox.",
        details: [
          "Panchakarma is a traditional Ayurvedic detoxification and rejuvenation therapy designed to deeply cleanse the body, eliminate accumulated toxins, restore the balance of the body's natural energies, and promote holistic healing. At Alpha Wellness Resort, the Panchakarma program combines authentic Ayurvedic therapies with physician-led care, functional medicine insights, personalized nutrition, therapeutic yoga, meditation, and lifestyle guidance to deliver a comprehensive wellness experience. Rather than offering a one-size-fits-all detox, each program is tailored to the individual's health condition and wellness goals, helping improve digestion, enhance metabolism, reduce stress, strengthen immunity, increase energy levels, and support the body's natural ability to heal and regenerate. Set within a peaceful, nature-rich environment, the program provides a restorative experience that nurtures both physical and mental well-being while encouraging long-term health and vitality.",
        ],
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
        details: [
          "Quality sleep is essential for physical recovery, mental clarity, hormonal balance, and overall health, yet chronic stress, lifestyle habits, and underlying health conditions can significantly disrupt restorative rest. At Alpha Wellness Resort, the Sleep Restoration program is designed to identify and address the root causes of poor sleep rather than simply masking the symptoms. Through an integrative approach that combines functional medicine, advanced health assessments, Ayurveda, personalized nutrition, therapeutic yoga, meditation, stress management, and holistic healing therapies, the program helps regulate the body's natural sleep-wake cycle, calm the nervous system, reduce stress, and improve sleep quality. Each treatment plan is tailored to the individual's health profile and sleep challenges, with the goal of restoring deep, restorative sleep, improving daytime energy and focus, supporting emotional well-being, and promoting long-term health through sustainable lifestyle changes.",
        ],
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
        details: [
          "Ayurvedic Rejuvenation at Alpha Wellness Resort is a holistic wellness program designed to restore balance, vitality, and long-term well-being by combining the timeless principles of Ayurveda with modern functional medicine. Rather than offering temporary relaxation, the program focuses on revitalizing the body and mind through personalized Ayurvedic therapies, therapeutic massages, herbal treatments, customized nutrition, yoga, meditation, and lifestyle guidance tailored to each individual's health needs. This integrative approach helps reduce physical and mental fatigue, improve circulation, enhance digestion, strengthen immunity, relieve stress, and promote natural healing from within. Set in a serene, nature-inspired environment, the rejuvenation program encourages deep relaxation, renewed energy, improved mental clarity, and sustainable wellness, allowing guests to return home feeling healthier, refreshed, and better equipped to maintain long-term vitality.",
        ],
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
        details: [
          "Stress and anxiety can have a profound impact on both physical and emotional well-being, affecting sleep, focus, energy levels, hormonal balance, and overall quality of life. At Alpha Wellness Resort, the Stress & Anxiety (Calm) program is designed to help guests regain emotional balance by addressing the root causes of chronic stress rather than simply relieving its symptoms. Through an integrative approach that combines functional medicine, advanced health assessments, Ayurveda, personalized nutrition, therapeutic yoga, meditation, breathwork, and holistic healing therapies, the program works to calm the nervous system, reduce stress hormones, improve mental clarity, and build long-term emotional resilience. Every wellness plan is tailored to the individual's unique health profile, helping restore inner calm, enhance sleep quality, improve mood and focus, and create sustainable lifestyle habits that support lasting mental and physical well-being.",
        ],
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
        details: [
          "Cellular Anti-Ageing at Alpha Wellness Resort is a science-backed longevity program designed to promote healthy ageing by improving the body's ability to repair, regenerate, and function at the cellular level. Rather than focusing only on visible signs of ageing, the program addresses the underlying biological processes that influence energy production, inflammation, recovery, and metabolic health. By integrating functional medicine, advanced diagnostics, personalized nutrition, Ayurveda, therapeutic yoga, stress management, and evidence-based regenerative therapies, the program supports cellular repair, enhances mitochondrial function, strengthens immunity, and improves overall vitality. Each treatment plan is customized to the individual's health profile and wellness goals, helping increase energy, slow age-related decline, optimize physical and cognitive performance, and encourage long-term healthspan through sustainable lifestyle transformation.",
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/worklife.webp",
        name: "Wellbeing For The Workplace",
        duration: "",
        description:
          "It is well known and scientifically proven that wellness leads to productivity. It is not uncommon for today’s workforce to feel exhausted, unsatisfied and stressed at the workplace and bring home insomnia. The sedentary lifestyle works against the health of our body, plaguing us with illnesses like eye strain, dry eyes, back ache, cervical spasm and carpel tunnel syndrome. A healthy mind, soul and body ensures we stay energized throughout the day and enhances concentration and productivity.",
        details: [
          "Naad brings you and your team a transformational journey that brings back the balance of the five senses, while restoring good health and wellness.",
        ],
        moreinfo: [
          {
            title: "Benefits To Your Associates",
            list: [
              "Improved insight into one's wellness and resiliency needs",
              "Improved health and wellbeing",
              "Stress management along with work-life balance.",
            ],
          },
          {
            title: "Benefits To Your Organisation",
            list: [
              "Employee health assessment enabled",
              "Improved workplace morale",
              "Increased staff productivity & retention",
            ],
          },
          {
            title: "Inclusions",
            list: [
              "Individual wellness consultation",
              "Body composition analysis",
              "A combination of Ayurveda and Naturopathy therapies",
              "Dental consultation",
              "Yogic kriyas such as Jal Neti, Kunjal Kriya, and Laghu Shankh Prakshalan",
              "Therapeutic Yoga",
              "Pranayama",
              "Guided meditation",
              "Access to fitness and leisure activities such as gym, miniature golf, lawn tennis, badminton, temperature-controlled swimming pool, reflexology track and more",
              "Wellness cuisine including breakfast, lunch, dinner, refreshments and non-alcoholic beverages",
            ],
          },
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/weight.webp",
        name: "Weight Management",
        duration: "10, 14, 21 or 28 Nights",
        description:
          "The therapies part of this program (such as Shirodhara, Nasya, Shiroabhyanga, Acupuncture and Reflexology amongst others) shall be planned and customised by our resident doctors after an individual consultation with them.",
        details: [],
        moreinfo: [
          {
            title: "Benefits",
            list: [
              "Helps in preventing & alleviating diabetes",
              "Decreases the risk of stroke",
              "Strengthens the heart",
              "Builds immunity against weight related illnesses",
              "Full mind & body detox",
              "Increases vigour & vitality",
            ],
          },
          {
            title: "Inclusions",
            list: [
              "Individual wellness consultation",
              "Body composition analysis",
              "A combination of Ayurveda and Naturopathy therapies",
              "Dental consultation",
              "Yogic kriyas such as Jal Neti, Kunjal Kriya, and Laghu Shankh Prakshalan",
              "Therapeutic Yoga",
              "Pranayama",
              "Guided meditation",
              "Access to fitness and leisure activities such as gym, miniature golf, lawn tennis, badminton, temperature-controlled swimming pool, reflexology track and more",
              "Wellness cuisine including breakfast, lunch, dinner, refreshments and non-alcoholic beverages",
              "10, 14, 21 or 28 nights stay",
            ],
          },
          // {
          //   title: "Therapies Included",
          //   list: [
          //     "The therapies part of this program (such as Shirodhara, Nasya, Shiroabhyanga, Acupuncture and Reflexology amongst others) shall be planned and customised by our resident doctors after an individual consultation with them."
          //   ],
          // },
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/sport.jpg",
        name: "Sports Injury Management",
        duration: "14, 21 or 28 Nights",
        description:
          "Sports Injury Management can minimise the damage to a muscle or joint and increase the chance of full recovery, while improving performance, enhancing overall health and preventing further injury. It can also help in maintaining and continuing physical activity throughout one's life.",
        details: [],
        moreinfo: [
          {
            title: "Benefits",
            list: [
              "Reduced pain and swelling",
              "Decreased tissue inflammation",
              "Reduced muscle degeneration",
              "Reduced risk of injury",
              "Increased balance and coordination",
              "Improved joint health",
              "Increased mobility and range of motion",
              "Muscle spasm relief",
              "Continued strengthening of weakened muscles",
            ],
          },
          {
            title: "Inclusions",
            list: [
              "Individual wellness consultation",
              "Body composition analysis",
              "A combination of Ayurveda and Naturopathy therapies",
              "Dental consultation",
              "Yogic kriyas such as Jal Neti, Kunjal Kriya, and Laghu Shankh Prakshalan",
              "Therapeutic Yoga",
              "Pranayama",
              "Guided meditation",
              "Access to fitness and leisure activities such as gym, miniature golf, lawn tennis, badminton, temperature-controlled swimming pool, reflexology track and more",
              "Wellness cuisine including breakfast, lunch, dinner, refreshments and non-alcoholic beverages",
              "14, 21 or 28 nights stay",
            ],
          },
          {
            title: "Therapies Included",
            list: [
              "The therapies part of this program (such as Abhyanga, Choorna Pinda Sweda, Patra Pinda Sweda, Upanaha Sweda and Packs/compress amongst others) shall be planned and customised by our resident doctors after an individual consultation with them.",
            ],
          },
          {
            title: "Disclaimer",
            list: [
              "Please note that Naad's doctors may request for certain medical reports prior to confirmation of your reservation for this program.",
            ],
          },
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/spine.jpeg",
        name: "Spine Care",
        duration: "10, 14, 21 or 28 Nights",
        description:
          "The spine is one of the most important parts of the body which gives it structure and support. It aids free movement and bending with flexibility.\n\nSome of the common diseases affecting the spine are cervical spondylitis, lumbar spondylitis, sciatica and degeneration of disc to name a few.",
        details: [
          "Spine Care by Naad helps in improving spine health which also enhances overall wellbeing.",
        ],
        moreinfo: [
          {
            title: "Benefits",
            list: [
              "Reduced pain and swelling",
              "Decreased tissue inflammation",
              "Reduced degeneration",
              "Increased balance and coordination",
              "Muscle spasm relief",
              "Continued strengthening of weakened muscles",
            ],
          },
          {
            title: "Inclusions",
            list: [
              "Individual wellness consultation",
              "Body composition analysis",
              "A combination of Ayurveda and Naturopathy therapies",
              "Dental consultation",
              "Yogic kriyas such as Jal Neti, Kunjal Kriya, and Laghu Shankh Prakshalan",
              "Therapeutic Yoga",
              "Pranayama",
              "Guided meditation",
              "Access to fitness and leisure activities such as gym, miniature golf, lawn tennis, badminton, temperature-controlled swimming pool, reflexology track and more",
              "Wellness cuisine including breakfast, lunch, dinner, refreshments and non-alcoholic beverages",
              "10, 14, 21 or 28 nights stay",
            ],
          },
          {
            title: "Therapies Included",
            list: [
              "The therapies part of this program (such as Sarvangadhara, Choorna Pinda Sweda, Patra Pinda Sweda, Kati Basti and Greeva Basti amongst others) shall be planned and customised by our resident doctors after an individual consultation with them.",
            ],
          },
          {
            title: "Disclaimer",
            list: [
              "Please note that Naad's doctors may request for certain medical reports prior to confirmation of your reservation for this program.",
            ],
          },
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/pcos.webp",
        name: "Polycystic Ovarian Syndrome (PCOS) Management",
        duration: "10, 14, 21 or 28 Nights",
        description:
          "Polycystic ovarian syndrome (PCOS) is a condition in women caused by hormonal imbalance and characterised by irregular menstruation, weight gain, hair growth on the face and body, mood swings, anxiety, depression and sleep disorders.",
        details: [
          "It can also contribute towards long term health challenges such as diabetes, heart disease and infertility.",
          "Naad's PCOS Management program includes integrated therapies which help in maintaining the hormonal balance and managing insulin resistance.",
        ],
        moreinfo: [
          {
            title: "Benefits",
            list: [
              "Regulation of hormonal imbalance",
              "Regulation of the menstrual cycle",
              "Reduced dependency on medication",
              "Reduced insulin resistance",
              "Weight management",
              "Improved sleeping patterns",
            ],
          },
          {
            title: "Inclusions",
            list: [
              "Individual wellness consultation",
              "Body composition analysis",
              "A combination of Ayurveda and Naturopathy therapies",
              "Dental consultation",
              "Yogic kriyas such as Jal Neti, Kunjal Kriya, and Laghu Shankh Prakshalan",
              "Therapeutic Yoga",
              "Pranayama",
              "Guided meditation",
              "Access to fitness and leisure activities such as gym, miniature golf, lawn tennis, badminton, temperature-controlled swimming pool, reflexology track and more",
              "Wellness cuisine including breakfast, lunch, dinner, refreshments and non-alcoholic beverages",
              "10, 14, 21 or 28 nights stay",
            ],
          },
          {
            title: "Therapies Included",
            list: [
              "The therapies part of this program (such as Udwarthanam, Abhyanga, Ushma Choorna Pinda Sweda and Mud Pack amongst others) shall be planned and customised by our resident doctors after an individual consultation with them.",
            ],
          },
          {
            title: "Disclaimer",
            list: [
              "Please note that Naad's doctors may request for certain medical reports prior to confirmation of your reservation for this program.",
            ],
          },
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/diabetes.webp",
        name: "Diabetes Management",
        duration: "14, 21 or 28 Nights",
        description:
          "Diabetes is a metabolic disorder in which your blood glucose or blood sugar levels are too high due to either one or combined factors like insulin insufficiency and insulin resistance. Each factor has its own causative parameters which result in either Type 1 Diabetes, which is genetic in nature or Type 2 Diabetes, which can be both acquired and genetic.",
        details: [
          "Naad's Diabetic Management program helps you regulate the symptoms of diabetes and maintain good health in the long-run through a holistic healing approach, which encompasses regulated diet, fitness and lifestyle corrections.",
        ],
        moreinfo: [
          {
            title: "Benefits",
            list: [
              "Balanced fasting and post-prandial sugar levels",
              "Long-term HbA1C control",
              "Prevention of diabetes related complications",
            ],
          },
          {
            title: "Inclusions",
            list: [
              "Individual wellness consultation",
              "Body composition analysis",
              "A combination of Ayurveda and Naturopathy therapies",
              "Dental consultation",
              "Yogic kriyas such as Jal Neti, Kunjal Kriya, and Laghu Shankh Prakshalan",
              "Therapeutic Yoga",
              "Pranayama",
              "Guided meditation",
              "Access to fitness and leisure activities such as gym, miniature golf, lawn tennis, badminton, temperature-controlled swimming pool, reflexology track and more",
              "Wellness cuisine including breakfast, lunch, dinner, refreshments and non-alcoholic beverages",
              "14, 21 or 28 nights stay",
            ],
          },
          {
            title: "Therapies Included",
            list: [
              "The therapies part of this program (such as Dhanyamladhara, Choorna Pinda Sweda, Udwarthanam and Compress/packs amongst others) shall be planned and customised by our resident doctors after an individual consultation with them.",
            ],
          },
          {
            title: "Disclaimer",
            list: [
              "Please note that Naad's doctors may request for certain medical reports prior to confirmation of your reservation for this program.",
            ],
          },
        ],
        cta: [
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        image: "/therapies/arthritis.webp",
        name: "Arthritis Management",
        duration: "10, 14, 21 or 28 Nights",
        description:
          "The ancient Ayurvedic texts describe two basic types of arthritis that correspond with osteoarthritis (Sandhigata Vata) and rheumatoid arthritis (Ama Vata).",
        details: [
          "In Osteoarthritis, the vitiated Vata afflicts the joints and causes destruction of the cartilages and reduction in the Synovial Fluid inside the joint capsule, leading to swelling which results in the condition similar to painful movement. In Amavata vitiation of Vata Dosha and accumulation of Ama take place in joints, which simulate rheumatoid arthritis (RA) in modern parlance.",
          "Pain, swelling and stiffness in the joints are the most common symptoms of arthritis.",
          "Naad's Arthritis Management program endeavours to ease these symptoms, increase joint mobility and balance the aggravated dosha.",
        ],
        moreinfo: [
          {
            title: "Benefits",
            list: [
              "Muscle spasm relief",
              "Reduced pain and swelling",
              "Prevents tissue degeneration",
              "Reduces dependence on medication",
              "Increased mobility and range of motion",
            ],
          },
          {
            title: "Inclusions",
            list: [
              "Individual wellness consultation",
              "Body composition analysis",
              "A combination of Ayurveda and Naturopathy therapies",
              "Dental consultation",
              "Yogic kriyas such as Jal Neti, Kunjal Kriya, and Laghu Shankh Prakshalan",
              "Therapeutic Yoga",
              "Pranayama",
              "Guided meditation",
              "Access to fitness and leisure activities such as gym, miniature golf, lawn tennis, badminton, temperature-controlled swimming pool, reflexology track and more",
              "Wellness cuisine including breakfast, lunch, dinner, refreshments and non-alcoholic beverages",
              "10, 14, 21 or 28 nights stay",
            ],
          },
          {
            title: "Therapies Included",
            list: [
              "The therapies part of this program (such as Choorna Pinda Sweda, Upanaha Sweda, Compress/packs and Acupuncture amongst others) shall be planned and customised by our resident doctors after an individual consultation with them.",
            ],
          },
          {
            title: "Disclaimer",
            list: [
              "Please note that Naad's doctors may request for certain medical reports prior to confirmation of your reservation for this program.",
            ],
          },
        ],
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
