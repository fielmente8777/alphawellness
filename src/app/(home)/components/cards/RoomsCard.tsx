"use client";
import { RoomsSectionProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

const RoomsCard: React.FC<RoomsSectionProps["roomsData"][0]> = ({
  images,
  name,
}) => {
  return (
    <div className="bg-white p-2 border border-primary room-card">
      <SwiperCarousel
        data={images}
        className="w-full"
        swiperSlideClassName="w-full"
        modules={[Autoplay, Navigation]}
        loop
        slidesPerView={1}
        spaceBetween={24}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        navigation={true}
        renderSlide={(src) => (
          <div className="w-full relative md:aspect-4/3 aspect-4/3.5">
            <Image
              src={src}
              alt={name}
              fill
              sizes="100vw"
              className="object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4 px-2 py-1 backdrop-blur-sm rounded-lg border-white border bg-[#202020]/30 z-20">
              <p className="text-white text-sm uppercase">
                {name}
              </p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default RoomsCard;
