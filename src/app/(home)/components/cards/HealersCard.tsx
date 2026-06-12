import { HealersProps } from "@/@types/landingPageTypes";
import Image from "next/image";

const HealersCard: React.FC<HealersProps["cards"][0]> = ({
  image,
  name,
  profession,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="relative w-full shadow aspect-4/4.5 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="w-full space-y-1">
        <p className="font-primary text-dark text-xl">{name}</p>
        <p className="">{profession}</p>
      </div>
    </div>
  );
};

export default HealersCard;
