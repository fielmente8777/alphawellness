import { TestimonialsSectionProps } from "../TestimonialsSection";

const TestimonialCard: React.FC<
  TestimonialsSectionProps["testimonials"][0]
> = ({ name, review: description }) => {
  return (
    <div className="space-y-4">
      <p className="text-light">{description}</p>
      <h3 className="text-dark font-semibold text-[1.063rem]">{name}</h3>
    </div>
  );
};

export default TestimonialCard;
