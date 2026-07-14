"use client";

import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LinkButton from "../buttons/LinkButton";

const RoomDetailsPoUp = () => {
  const {
    isOpenPackagePopUp,
    SetIsOpenPackagePopUp,
    cta,
    details,
    image,
    name,
  } = useWebContext();

  useEffect(() => {
    if (isOpenPackagePopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenPackagePopUp]);

  return (
    <div
      className={`fixed inset-0 z-999999 flex items-center justify-center bg-primary/50 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isOpenPackagePopUp
          ? "opacity-100 scale-100 visible"
          : "opacity-0 scale-95 invisible"
      }`}
    >
      <div className="max-w-5xl rounded-2xl overflow-hidden max-lg:max-h-[80vh] max-lg:h-full overflow-y-auto  w-full bg-white py-8 relative">
        <button
          onClick={() => SetIsOpenPackagePopUp(false)}
          className="absolute top-4  right-4 bg-primary z-20 cursor-pointer text-white p-2 rounded-full aspect-square hover:bg-secondary hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          <AiOutlineClose size={20} />
        </button>
        <div className="grid lg:grid-cols-2 grid-cols-1 px-4 gap-4 max-lg:mt-7">
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-4/3">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <ul className="lg:flex hidden max-lg:flex-col  lg:gap-4 gap-2  items-center">
              {cta.map((button, i) => (
                <li key={i} className="max-md:w-full">
                  <LinkButton
                    {...button}
                    target={i !== 2 ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="btn-gradient border-none max-md:w-full justify-center rounded-full py-3 px-4"
                    whatsAppIcon={i === 0}
                    // callIcon={i === 2}
                    calendarIcon={i === 1}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-primary text-dark text-2xl">{name}</p>
            <p className="">{details}</p>
            <ul className="max-lg:flex hidden max-lg:flex-col  lg:gap-4 gap-2  items-center">
              {cta.map((button, i) => (
                <li key={i} className="max-md:w-full">
                  <LinkButton
                    {...button}
                    target={i !== 2 ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="btn-gradient border-none max-md:w-full justify-center rounded-full py-3 px-4"
                    whatsAppIcon={i === 0}
                    // callIcon={i === 2}
                    calendarIcon={i === 1}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPoUp;
