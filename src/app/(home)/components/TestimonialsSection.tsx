import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import TestimonialsSlider from "./slider/TestimonialsSlider";

export interface TestimonialsSectionProps {
  title: string;
  img: string;
  testimonials: {
    review: string;
    name: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  img,
  testimonials,
  buttons,
}) => {
  return (
    <Section
      defaultPadding={false}
      className=" grid md:grid-cols-2 grid-cols-1 items-center max-md:px-4 max-md:gap-4 max-md:py-12"
    >
      <div className="w-full relative md:aspect-4/3 aspect-square md:block hidden">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      <div className="md:pl-8 max-w-2xl md:space-y-8 space-y-10">
        <SectionHeading title={title} />
        <div className="w-full relative md:aspect-4/3 aspect-square max-md:block hidden">
          <Image src={img} alt={title} fill className="object-cover" />
        </div>
        <TestimonialsSlider cards={testimonials} />
        <ul className="flex flex-wrap lg:justify-center lg:gap-4 gap-2 w-full items-center">
          {buttons.map((button, i) => (
            <li key={i} className="max-md:w-full">
              <LinkButton
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient border-none max-md:w-full justify-center rounded-full py-3 px-4"
                whatsAppIcon={i === 1}
                callIcon={i === 0}
                calendarIcon={i === 2}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
