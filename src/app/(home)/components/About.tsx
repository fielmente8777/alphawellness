import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/landingIcon";
import Image from "next/image";

interface AboutProps {
  image: string;
  tag: string;
  title: string;
  description: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const About: React.FC<AboutProps> = ({
  tag,
  title,
  description,
  image,
  buttons,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 items-center">
        <div className="w-full relative aspect-[4/3.55] lg:block hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="space-y-3">
            <p className="uppercase text-secondary tracking-widest text-sm flex items-center gap-2">
              {" "}
              <span>
                <Foo />
              </span>
              {tag}
            </p>
            <SectionHeading title={title} />
            <div className="w-full relative aspect-[4/3.55] lg:hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="">{description}</p>
          <ul className="flex flex-wrap lg:gap-4 gap-2 w-full items-center">
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
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default About;
