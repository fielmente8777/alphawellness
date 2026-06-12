import VideoBanner from "@/components/banners/VideoBanner";
import { landingPageData } from "./components/landingPageData";
import About from "./components/About";
import Packages from "./components/Packages";
import RoomsSection from "./components/RoomsSection";
import Experiences from "./components/Experiences";
import Healers from "./components/Healers";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import MilestoneSection from "./components/MilestoneSection";
import SlidingGallery from "./components/SlidingGallery";
import TestimonialsSection from "./components/TestimonialsSection";
import { Container, Section } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";

export default function Home() {
  return (
    <main className="background-color-1">
      <VideoBanner {...landingPageData.bannerData} />
      <Section defaultPadding={false} className="md:hidden block">
        <Container>
          <div
            className="py-6 flex flex-col gap-5 w-full mx-auto"
            id="form"
          >
            <Form1 />
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
      <SlidingTitle items={landingPageData.titles} ariaHidden={true} />
      <TestimonialsSection {...landingPageData.testimonials} />
    </main>
  );
}
