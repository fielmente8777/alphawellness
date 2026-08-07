import { packagesType } from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import PackagePopUpBtn from "@/components/buttons/PackagePopUpBtn";
import Image from "next/image";
import { FC } from "react";

const OurPackagesCard: FC<packagesType["packagesData"][0]> = ({
  description,
  name,
  cta,
  image,
  details,
  moreinfo,
}) => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full aspect-4/3.5 border-x border-primary rounded-t-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="border-x border-b rounded-b-2xl p-4 grid grid-rows-[auto_2.5fr_.5fr] grid-flow-row gap-4 border-tertiary">
        <p className="md:text-2xl font-primary text-2xl text-tertiary">
          {name}
        </p>
        <div className="">
          <p className="text-light grow line-clamp-2">{description}</p>
          <PackagePopUpBtn
            label="Know more"
            className="capitalize font-semibold text-primary mt-3 underline underline-offset-4"
            description={description}
            details={details}
            moreinfo={moreinfo}
            image={image}
            name={name}
            cta={cta}
            duration={""}
          />
        </div>
        <ul className="flex max-lg:flex-col  lg:gap-4 gap-2  items-center">
          {cta.map((button, i) => (
            <li key={i} className="max-md:w-full">
              <LinkButton
                {...button}
                target={i !== 2 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="bg-tertiary text-white border-none max-md:w-full justify-center rounded-full py-3 px-4"
                whatsAppIcon={i === 0}
                // callIcon={i === 2}
                calendarIcon={i === 1}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurPackagesCard;

export const ArrowIcon = () => (
  <svg
    width={11}
    height={12}
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7695 0.634306C11.0763 0.946722 11.0763 1.45326 10.7695 1.76567L1.86473 10.8323C1.5579 11.1447 1.06041 11.1447 0.753565 10.8323C0.446728 10.5199 0.446728 10.0134 0.753565 9.70103L9.65838 0.634306C9.9652 0.32189 10.4626 0.32189 10.7695 0.634306Z"
      fill="currentColor"
    />
    <path
      d="M0 1.19999C0 0.75817 0.35178 0.399994 0.785714 0.399994H10.2143C10.6482 0.399994 11 0.75817 11 1.19999V10.8C11 11.2418 10.6482 11.6 10.2143 11.6C9.78034 11.6 9.42857 11.2418 9.42857 10.8V1.99999H0.785714C0.35178 1.99999 0 1.64182 0 1.19999Z"
      fill="currentColor"
    />
  </svg>
);

// <div className="bg-background md:py-14 py-5 box-shadow md:px-12 px-4 rounded-3xl border border-tertiary">
//       <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6">
//         <div className="grid grid-cols-1 max-md:gap-6 md:grid-cols-7 md:col-span-4 md:divide-x-[0.5px] max-md:divide-y-[0.5px]  divide-primary items-center">
//           <div className="flex  justify-center items-center gap-3 col-span-4  max-md:pb-4">
//             <div className="w-15 md:w-20 aspect-square bg-tertiary text-white rounded-full flex justify-center items-center">
//               <div className="w-8 aspect-square relative">
//                 <Image
//                   src={"/landing-page/spa.png"}
//                   alt={name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//             <div className="grow w-full">
//               <h3 className="md:text-[2rem] font-primary text-2xl text-tertiary">
//                 {name}
//               </h3>
//               <p className="text-light md:text-lg mt-3">{duration}</p>
//             </div>
//           </div>
//           <div className="md:pl-6 max-md:pt-1.5 col-span-3">
//             <p className="text-light md:text-lg">{description}</p>
//           </div>
//         </div>
//         <div className="md:col-span-1">
//           <LinkButton {...cta} className="w-full rounded-full justify-center text-tertiary" calendarIcon={true} />
//         </div>
//       </div>
//     </div>
