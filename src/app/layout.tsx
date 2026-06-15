import type { Metadata } from "next";
import { GFS_Didot, Montserrat, Tenor_Sans } from "next/font/google";
import "./globals.css";
import "./style.scss";
import LandingFooter from "@/components/footer/LandingFooter";
import ImagePopup from "@/components/pop-up/ImagePopup";
import { WebProvider } from "@/context-api/WebContext";
import PopUpForm from "@/components/pop-up/PopUpForm";
import Script from "next/script";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Call from "@/components/ContactButton/Call";
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
      className={`${gfsDidot.variable} ${montserrat.variable} ${tenor.variable} antialiased`}
    >
      <body className="" suppressHydrationWarning={true}>
        <WebProvider>
          {children}
          <LandingFooter />
          <ImagePopup />
          <PopUpForm />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
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
