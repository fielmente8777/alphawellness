import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import AmenitiesPopup from "@/components/pop-up/AmenitiesPopup";
import ImagePopup from "@/components/pop-up/ImagePopup";
import PopUpForm from "@/components/pop-up/PopUpForm";
import OfferPopup from "@/components/popup/Popup";

  
import RoomDetailsPoUp from "@/components/pop-up/RoomDetailsPoUp";
import { WebProvider } from "@/context-api/WebContext";
import { contact } from "@/utils/constent";
import type { Metadata } from "next";
import { Fraunces, GFS_Didot, IBM_Plex_Mono, Montserrat, Tenor_Sans, Work_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./style.scss";
const gfsDidot = GFS_Didot({
  variable: "--font-gfs-didot",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const tenor = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: "400",
});


const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500', '600'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['500'],
})


export const metadata: Metadata = {
  title:
    "Alpha Wellness Resort | Functional Medicine & Ayurveda Retreat in Mysore",
  description:
    "Reverse diabetes, thyroid disorders, obesity, gut issues, stress, and chronic diseases naturally at Alpha Wellness Resort, Mysore. Experience functional medicine, Ayurveda, luxury wellness stays, organic dining, yoga, and holistic healing.",
  keywords: [
    "Alpha Wellness Resort",
    "Functional Medicine Resort Mysore",
    "Ayurveda Retreat Karnataka",
    "Diabetes Reversal Program",
    "Obesity Wellness Retreat",
    "Thyroid Healing Program",
    "Gut Health Retreat India",
    "Luxury Wellness Resort",
    "Holistic Healing Retreat",
    "Wellness Tourism India",
    "Detox Retreat Mysore",
    "Stress Management Retreat",
    "Ayurveda Wellness Resort",
    "Chronic Disease Reversal",
    "Nature Wellness Retreat",
  ],
  openGraph: {
    title:
      "Alpha Wellness Resort | Functional Medicine & Ayurveda Retreat in Mysore",
    description:
      "Reverse diabetes, thyroid disorders, obesity, gut issues, stress, and chronic diseases naturally at Alpha Wellness Resort, Mysore. Experience functional medicine, Ayurveda, luxury wellness stays, organic dining, yoga, and holistic healing.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gfsDidot.variable} ${montserrat.variable} ${tenor.variable} ${fraunces.variable} ${workSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="E_5MfKghUUN7r-di4Mp7a6VBtuXgsdND5logjz5enOo"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R40MJRGC2Q"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-R40MJRGC2Q');`}
        </Script>

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PG977SWP');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className="" suppressHydrationWarning={true}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PG977SWP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <WebProvider>
          {children}
          <ImagePopup />
          <OfferPopup />
          <PopUpForm />
          <RoomDetailsPoUp />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[1]} />
          <AmenitiesPopup />
        </WebProvider>
      </body>
      {/* <!-- Eazbot Script (Next.js) --> */}
      <Script id="chatbot-config" strategy="afterInteractive">
        {`
    window.eazbotConfig = {
       ndid: "65a11374-3cea-458e-9565-e8ef5c8dc462",
       hid: "14042953",
    };
  `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
