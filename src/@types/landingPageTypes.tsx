import { JSX } from "react/jsx-runtime";

export interface packagesType {
  title: string;
  buttons: {
    label: string;
    href: string;
  }[];
  packagesData: {
    image: string;
    name: string;
    duration: string;
    description: string;
    cta: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface RoomsSectionProps {
  title: string;
  description: string;
  roomsData: {
    name: string;
    roomType: string[];
    description: string;
    amities: {
      icon: JSX.Element;
      title: string;
    }[];
    popUpAmities: {
      title: string;
      amities: {
        icon?: JSX.Element;
        title: string;
      }[];
    }[];
    cta: {
      label: string;
      href: string;
    };
    images: string[];
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface ExperiencesProps {
  tag: string;
  title: string;
  description: string;
  cards: {
    image: string;
    title: string;
    description: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface HealersProps {
  tag: string;
  title: string;
  description: string;
  cards: {
    image: string;
    name: string;
    profession: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}
