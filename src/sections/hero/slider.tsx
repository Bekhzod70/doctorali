import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Popover from "./popover";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
      id="hero-slider"
      className="xl:h-full max-sm:h-[474px]"
    >
      <SwiperSlide>
        <div className="relative w-full h-full rounded-[40px]  overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="/images/landing.jpg"
            alt="landing image"
            className="rounded-inherit w-full h-full transition-all object-cover"
          />
          <Popover
            text="Элискир Doctor Ali"
            left="left-[37%]"
            top="top-[38%]"
            position="left-center"
          />
          <Popover
            text="Элискир Doctor Ali"
            left="left-[20%]"
            top="top-[14%]"
            position="right-center"
          />
          <Popover
            text="Элискир Doctor Ali"
            right="right-[40%]"
            top="top-[26%]"
            position="left-center"
          />
          <Popover
            text="Элискир Doctor Ali"
            right="xlg:right-[20%] right-[15%]"
            top="top-[48%]"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full rounded-[40px]  overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="/images/landing.jpg"
            alt=""
            className="rounded-inherit w-full h-full transition-all object-cover"
          />
        </div>
      </SwiperSlide>

      <div className="absolute top-[5%] right-[30px] flex gap-[10px] z-10">
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
