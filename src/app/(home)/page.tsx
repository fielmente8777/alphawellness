import VideoBanner from "@/components/banners/VideoBanner";
import Form2 from "@/components/forms/Form2";
import { Container, Section } from "@/components/sectionComponants";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Healers from "./components/Healers";
import { landingPageData } from "./components/landingPageData";
import MilestoneSection from "./components/MilestoneSection";
import Packages from "./components/Packages";
import RoomsSection from "./components/RoomsSection";
import SlidingGallery from "./components/SlidingGallery";
import TestimonialsSection from "./components/TestimonialsSection";
import LandingFooter from "@/components/footer/LandingFooter";

export default function Home() {
  return (
    <main className="background-color-1">
      <VideoBanner {...landingPageData.bannerData} />
      <Section defaultPadding={false} className="md:hidden block">
        <Container>
          <div className="py-6 flex flex-col gap-5 w-full mx-auto" id="form">
            <Form2 singleDate />
            <p
              className="text-sm text-light max-w-3xl text-center mx-auto"
              dangerouslySetInnerHTML={{
                __html: landingPageData.bannerData.benefit,
              }}
            />
          </div>
        </Container>
      </Section>
      <MilestoneSection data={landingPageData.milestoneData} />
      <About {...landingPageData.aboutData} />
      <SlidingTitle items={landingPageData.titles} />
      <Packages {...landingPageData.packagesSectionData} />
      <RoomsSection {...landingPageData.rooms} />
      <SlidingGallery images={landingPageData.slidingGallery} />
      <SlidingTitle items={landingPageData.titles} ariaHidden={true} />
      <Experiences {...landingPageData.experiences} />
      <Healers {...landingPageData.healers} />
      <Section className="">
        <Container>
          <div className="bg-background2 py-6 px-1.5 border border-tertiary box-shadow rounded-[20px] flex flex-col gap-5 w-full mx-auto">
            <Form2 singleDate />
            <p
              className="text-sm text-light max-w-3xl text-center mx-auto"
              dangerouslySetInnerHTML={{
                __html: landingPageData.bannerData.benefit,
              }}
            />
          </div>
        </Container>
      </Section>
      <SlidingTitle items={landingPageData.titles} ariaHidden={true} />
      <TestimonialsSection {...landingPageData.testimonials} />
      <LandingFooter />
    </main>
  );
}
