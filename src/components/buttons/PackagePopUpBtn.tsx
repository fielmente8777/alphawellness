"use client";
import { useWebContext } from "@/context-api/WebContext";
import type { packagesType } from "../../@types/landingPageTypes";

type PopupButtonProps = packagesType["packagesData"][0] & {
  label?: string;
  className?: string;
};
const PackagePopUpBtn: React.FC<PopupButtonProps> = ({
  label,
  className = "",

  ...props
}) => {
  const {
    SetIsOpenPackagePopUp,
    setCta,
    setDescription,
    setDetails,
    setMoreInfo,
    setImage,
    setName,
  } = useWebContext();
  const onclick = ({
    cta,
    description,
    details,
    moreinfo,
    image,
    name,
  }: PopupButtonProps) => {
    SetIsOpenPackagePopUp(true);
    setCta(cta);
    setDescription(description);
    setDetails(details);
    setMoreInfo(moreinfo ?? []);
    setImage(image);
    setName(name);
  };


  return (


    <button
      className={`transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95  ${className}`}
      {...props}
      onClick={() => onclick(props)}
    >
      {label}
    </button>
  );
};

export default PackagePopUpBtn;
