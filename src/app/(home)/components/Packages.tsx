import { packagesType } from "@/@types/landingPageTypes";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import OurPackagesCard from "./cards/OurPackagesCard";

const Packages: React.FC<packagesType> = ({ title, packagesData }) => {
  return (
    <SectionWithContainer>
      {/* <div className="flex max-md:flex-col gap-6 justify-between overflow-hidden"> */}
      {/* <div className="flex items-center justify-between gap-4 w-full"> */}
      <SectionHeading title={title} textCenter />
      {/* <ul className="md:flex hidden lg:gap-4 gap-2 justify-end items-center">
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
      {/* </div> */}
      {/* </div> */}
      <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 md:mt-14 mt-6">
        {packagesData.map((card, index) => (
          <OurPackagesCard key={index} {...card} />
        ))}
      </div>
      {/* <ul className="flex flex-col mt-4 md:hidden lg:gap-4 gap-2  items-center">
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
    </SectionWithContainer>
  );
};

export default Packages;
