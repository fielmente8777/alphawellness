"use client";

import { createContext, JSX, useContext, useState } from "react";

interface OpenGalleryProps {
  images: string[];
  index?: number;
}
interface OpenAmenityModalArray {
  amenityType: string;
  amenities: string[];
}
type PopUpAmenity = {
  title: string;
  amities: {
    title: string;
    icon?: JSX.Element;
  }[];
};
interface WebContextType {
  isOpenNavBar: boolean;
  setIsOpenNavBar: (open: boolean) => void;

  isOpenPackagePopUp: boolean;
  SetIsOpenPackagePopUp: (open: boolean) => void;

  openImageModal: boolean;
  setOpenImageModal: (open: boolean) => void;

  isOpenFormPopUp: boolean;
  setIsOpenFormPopUp: (open: boolean) => void;

  passImagesArray: string[];
  setPassImagesArray: (images: string[]) => void;

  openAmenityModal: boolean;
  setOpenAmenityModal: (open: boolean) => void;

  imageCurrentIndex: number;
  setImageCurrentIndex: (index: number) => void;

  amenityModalArray: OpenAmenityModalArray[];
  setAmenityModalArray: (array: OpenAmenityModalArray[]) => void;

  openGallery: ({ images, index }: OpenGalleryProps) => void;

  cta: { label: string; href: string }[];
  setCta: React.Dispatch<
    React.SetStateAction<{ label: string; href: string }[]>
  >;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  details: string[];
  setDetails: React.Dispatch<React.SetStateAction<string[]>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;

  closeGallery: () => void;

  isAmenityOpen: boolean;
  setIsAmenityOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  popUpAminityData: PopUpAmenity[];
  setPopUpAminityData: React.Dispatch<React.SetStateAction<PopUpAmenity[]>>;
}

const WebContext = createContext<WebContextType>({
  isOpenNavBar: false,
  setIsOpenNavBar: () => {},

  isOpenPackagePopUp: false,
  SetIsOpenPackagePopUp: () => {},

  cta: [],
  setCta: () => {},
  description: "",
  setDescription: () => {},
  details: [],
  setDetails: () => {},
  image: "",
  setImage: () => {},
  name: "",
  setName: () => {},

  isOpenFormPopUp: false,
  setIsOpenFormPopUp: () => {},

  openImageModal: false,
  setOpenImageModal: () => {},

  passImagesArray: [],
  setPassImagesArray: () => {},

  imageCurrentIndex: 0,
  setImageCurrentIndex: () => {},

  openAmenityModal: false,
  setOpenAmenityModal: () => {},

  amenityModalArray: [],
  setAmenityModalArray: () => {},

  openGallery: () => {},

  closeGallery: () => {},

  isAmenityOpen: false,
  setIsAmenityOpen: () => {},

  roomName: "",
  setRoomName: () => {},

  popUpAminityData: [],
  setPopUpAminityData: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}

export const WebProvider = ({ children }: WebProviderProps) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  const [openImageModal, setOpenImageModal] = useState(false);

  const [isOpenFormPopUp, setIsOpenFormPopUp] = useState(false);

  const [passImagesArray, setPassImagesArray] = useState<string[]>([]);

  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);

  const [openAmenityModal, setOpenAmenityModal] = useState(false);
  const [amenityModalArray, setAmenityModalArray] = useState<
    OpenAmenityModalArray[]
  >([]);

  const [isAmenityOpen, setIsAmenityOpen] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [popUpAminityData, setPopUpAminityData] = useState<PopUpAmenity[]>([]);
  const [isOpenPackagePopUp, SetIsOpenPackagePopUp] = useState(false);

  const [cta, setCta] = useState<{ label: string; href: string }[]>([]);
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState<string[]>([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const openGallery = ({ images, index = 0 }: OpenGalleryProps) => {
    setPassImagesArray(images);

    setImageCurrentIndex(index);

    setOpenImageModal(true);
  };

  const closeGallery = () => {
    setOpenImageModal(false);

    setPassImagesArray([]);

    setImageCurrentIndex(0);
  };

  return (
    <WebContext.Provider
      value={{
        isAmenityOpen,
        setIsAmenityOpen,

        isOpenPackagePopUp,
        SetIsOpenPackagePopUp,

        cta,
        setCta,

        description,
        setDescription,

        details,
        setDetails,

        image,
        setImage,

        name,
        setName,
        roomName,
        setRoomName,

        popUpAminityData,
        setPopUpAminityData,

        isOpenNavBar,
        setIsOpenNavBar,

        isOpenFormPopUp,
        setIsOpenFormPopUp,

        openImageModal,
        setOpenImageModal,

        passImagesArray,
        setPassImagesArray,

        imageCurrentIndex,
        setImageCurrentIndex,

        openAmenityModal,
        setOpenAmenityModal,

        amenityModalArray,
        setAmenityModalArray,

        openGallery,

        closeGallery,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);

  if (context === undefined) {
    throw new Error("useWebContext must be used within a WebProvider");
  }

  return context;
};
