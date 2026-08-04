"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import LinkButton from "../buttons/LinkButton";
import { offerPageData } from "./Offerpopupdata";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    if (hasBeenDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasBeenDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenDismissed(true);
  };

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={handleClose}
    >
      <div
        className="p-4 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto hide-scroll rounded-lg bg-[#FFF9F1]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-primary absolute top-2 left-2 z-20 hover:bg-primary hover:text-white w-8 aspect-square rounded-full bg-secondary flex items-center justify-center"
          onClick={handleClose}
          type="button"
          aria-label="Close popup"
        >
          ✕
        </button>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div className="flex flex-col gap-4 items-center justify-center text-center overflow-x-clip">
            <div className="w-full relative aspect-4/2.5 lg:hidden block">
              <Image
                src="/popup-img-1.png"
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="bg-tertiary text-white px-4 py-1 uppercase font-primary text-sm relative after:absolute after:inset-y-1 after:-inset-x-1 after:z-[-1] after:bg-primary">
                {offerPageData?.badge}
              </p>
              <h2 className="text-primary text-2xl md:text-3xl capitalize font-primary">
                {offerPageData?.title}
              </h2>
              <p className="text-xl font-primary text-primary">
                {offerPageData?.subtitle}
              </p>
              <p className="text-3xl lg:text-4xl font-bold text-tertiary">
                {offerPageData?.price}
              </p>
            </div>
            <div className="w-full border-dashed scale-x-200 border-secondary border-[0.5px]" />
            <p className="text-primary">{offerPageData?.description}</p>
            <div className="flex flex-col gap-4 w-full">
              {offerPageData?.features.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] gap-4 justify-start text-left"
                >
                  <div className="bg-[#74564280] w-10 aspect-square flex items-center justify-center rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-lg text-secondary font-primary uppercase">
                      {feature.title}
                    </p>
                    <p className="text-primary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <LinkButton
              href={offerPageData?.link.href}
              label={offerPageData?.link.label}
              calendarIcon
              className="bg-tertiary border-none w-full justify-center text-white rounded-full! py-2!"
            />
          </div>
          <div className="w-full relative aspect-4/7.75 lg:block hidden">
            <Image
              src="/popup-img-2.png"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;