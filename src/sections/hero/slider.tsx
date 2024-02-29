// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
      id="hero-slider"
    >
      <SwiperSlide>
        <div className="relative w-full h-full rounded-[40px]  overflow-hidden">
          <img
            src="/images/landing.png"
            alt=""
            className="rounded-inherit w-full h-full transition-all"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full rounded-[40px]  overflow-hidden">
          <img
            src="/images/landing.png"
            alt=""
            className="rounded-inherit w-full h-full transition-all"
          />
        </div>
      </SwiperSlide>

      <div className="absolute top-10 right-[30px] flex gap-[10px] z-10">
        <Button
          size="icon"
          variant="ghost"
          className="arrow-right arrow bg-white"
        >
          <ChevronLeft className="text-green-dark" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="arrow-left arrow bg-white"
        >
          <ChevronRight className="text-green-dark" />
        </Button>
      </div>
    </Swiper>
  );
};

export default Slider;
