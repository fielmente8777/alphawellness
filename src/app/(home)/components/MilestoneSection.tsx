import { SectionWithContainer } from "@/components/sectionComponants";
import { JSX } from "react/jsx-runtime";

interface MilestoneSectionProps {
  data: {
    icon: JSX.Element;
    number: string;
    sign?: string;
    description: string;
  }[];
}

const MilestoneSection: React.FC<MilestoneSectionProps> = ({ data }) => {
  return (
    <SectionWithContainer sectionClassName="border border-secondary box-shadow">
      <div className="grid lg:grid-cols-3 md:grid-cols-[1fr_1fr_2fr] gap-10">
        {data.map((milestone, index) => (
          <div key={index} className="flex items-center gap-4 max-w-sm font-secondary">
            <div>{milestone.icon}</div>
            <p className="md:lg:text-[4rem]/0 text-4xl text-secondary">
              <span className="">{milestone.number}</span>
              {milestone.sign && (
                <sup className="lg:text-5xl/0 text-2xl">{milestone.sign}</sup>
              )}
            </p>
            <p className="text-secondary">{milestone.description}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default MilestoneSection;
