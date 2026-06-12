import { HealersProps } from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/landingIcon";
import HealersCard from "./cards/HealersCard";

const Healers: React.FC<HealersProps> = ({
  cards,
  tag,
  title,
  description,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="background-color-2" containerClassName="md:space-y-14 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="uppercase text-secondary tracking-widest text-sm flex items-center justify-center gap-2">
          {" "}
          <span>
            <Foo />
          </span>
          {tag}
        </p>
        <SectionHeading title={title} />
        <p className="">{description}</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-6">
        {cards.map((card, index) => (
          <HealersCard key={index} {...card} />
        ))}
      </div>
      <ul className="flex flex-wrap lg:justify-center lg:gap-4 gap-2 w-full items-center">
        {buttons.map((button, i) => (
          <li key={i} className="max-md:w-full">
            <LinkButton
              {...button}
              target={i !== 2 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="btn-gradient border-none max-md:w-full justify-center rounded-full py-3 px-4"
              whatsAppIcon={i === 1}
              callIcon={i === 0}
              calendarIcon={i === 2}
            />
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default Healers;
