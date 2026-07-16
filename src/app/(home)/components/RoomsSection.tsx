import { RoomsSectionProps } from "@/@types/landingPageTypes";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import RoomsCard from "./cards/RoomsCard";
import LinkButton from "@/components/buttons/LinkButton";
import PopupButton from "@/components/buttons/PopupButton";

const RoomsSection: React.FC<RoomsSectionProps> = ({
  title,
  description,
  roomsData,
}) => {
  return (
    <SectionWithContainer sectionClassName="background-color-2" containerClassName="md:space-y-14 space-y-8">
      <div className="max-w-4xl space-y-2 mx-auto">
        <p className="text-center text-secondary font-semibold">{description}</p>
        <SectionHeading title={title} textCenter />
      </div>
      {/* <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
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
              className="bg-tertiary text-white border-none max-md:w-full justify-center rounded-full py-3 px-4"
              whatsAppIcon={i === 1}
              callIcon={i === 0}
              calendarIcon={i === 2}
            />
          </li>
        ))}
      </ul> */}
       <div className="md:space-y-16 space-y-10">
        {roomsData.map((card, index) => (
          <div className="grid xl:grid-cols-7 grid-cols-1 gap-4" key={index}>
            <div
              className={`xl:col-span-4 xl:block hidden ${index % 2 === 0 ? "order-1" : "order-2"}`}
            >
              <RoomsCard images={card.images} name={card.name} />
            </div>
            <div
              className={`md:col-span-3 flex flex-col rounded-2xl border border-primary box-shadow gap-6 card-2 md:px-6 px-2.5 py-8.75 ${index % 2 === 0 ? "order-2" : "order-1"}`}
            >
              <div className="space-y-2">
                <h3 className="md:text-[2rem] text-xl text-primary font-primary">
                  {card.name}
                </h3>

                {/* room type or room size info */}
                <ul className="flex items-center gap-2">
                  {card.roomType.map((roomType, index) => (
                    <li key={index} className="text-lg text-[#343434]">
                      {roomType}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-xl:block hidden">
                <RoomsCard images={card.images} name={card.name} />
              </div>

              {/* primary amenities */}
              <ul className="flex max-sm:flex-col md:items-center gap-2">
                {card.amities.slice(0, 2).map((amenity, index) => (
                  <li
                    key={index}
                    className={`text-primary max-sm:text-xs w-fit text-nowrap flex gap-2 items-center border border-primary px-2 py-1 rounded-lg ${index === 0 ? "bg-white" : "bg-background-color-2"}`}
                  >
                    <span>{amenity.icon}</span>
                    <span>{amenity.title}</span>
                  </li>
                ))}
              </ul>

              {/* room description */}

              <p className="text-lg text-[#686767]">{card.description}</p>

              {/* secondary amenities */}
              <ul className="grid md:grid-cols-2 grid-cols-1 gap-6 border border-primary bg-background2 rounded-xl p-4">
                {card.amities.slice(2).map((amenity, index) => (
                  <li key={index} className={`text-[#002B21] flex gap-2`}>
                    <span>{amenity.icon}</span>
                    <span>{amenity.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex max-md:flex-col gap-4 md:items-center justify-between">
                <LinkButton
                  label={card.cta.label}
                  href={card.cta.href}
                  calendarIcon
                  className="md:w-fit w-full justify-center bg-tertiary text-white border-none text-white rounded-full!"
                />
                <PopupButton
                  label="All Suite Amenities"
                  className="text-primary underline underline-offset-2"
                  roomName={card.name}
                  popUpAminityData={card.popUpAmities}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default RoomsSection;
