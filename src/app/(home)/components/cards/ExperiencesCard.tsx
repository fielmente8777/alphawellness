import { ExperiencesProps } from "@/@types/landingPageTypes";
import Image from "next/image";

const ExperiencesCard: React.FC<ExperiencesProps["cards"][0]> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow">
      <div className="relative w-full aspect-4/3">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 space-y-3 border-x border-b rounded-b-2xl border-secondary">
        <p className="font-primary text-dark text-2xl">{title}</p>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ExperiencesCard;
