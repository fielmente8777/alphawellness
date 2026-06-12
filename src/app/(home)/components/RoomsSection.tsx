import { RoomsSectionProps } from "@/@types/landingPageTypes";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import RoomsCard from "./cards/RoomsCard";
import LinkButton from "@/components/buttons/LinkButton";

const RoomsSection: React.FC<RoomsSectionProps> = ({
  title,
  description,
  roomsData,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="background-color-2" containerClassName="md:space-y-14 space-y-8">
      <div className="max-w-4xl space-y-2 mx-auto">
        <SectionHeading title={title} textCenter />
        <p className="text-center">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
        {roomsData.map((room, index) => (
          <RoomsCard key={index} {...room} />
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

export default RoomsSection;
