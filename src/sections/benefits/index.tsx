import { Swiper } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import BenefitCard from "./benefit-card";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { data } from "./data";
import Translation from "@/components/translation";

const Benefits = () => {
  return (
    <Section className="sm:!mb-[83px] !mb-10">
      <div className="flex justify-between items-end sm:mb-16 mb-[30px]">
        <div>
          <SectionTitle className="max-w-[600px]">
            <Translation text="benefits.title" />
          </SectionTitle>
        </div>

        <div className="hidden gap-[10px] sm:flex">
          <Button
            size="icon"
            className="benefit-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            className="benefit-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
      <div className="sm:hidden flex flex-wrap gap-2">
        {data.map((props, i) => (
          <BenefitCard key={i} {...props} />
        ))}
      </div>
      <div className="sm:block hidden">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".benefit-arrow-left",
            prevEl: ".benefit-arrow-right",
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 4,
            },
          }}
          id="benefit-slider"
          className="h-full !items-end"
        >
          {data.map((props) => (
            <SwiperSlide key={props.imageUrl} className="!h-[unset]">
              <BenefitCard {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-[10px] sm:hidden justify-center mt-10">
          <Button
            size="icon"
            className="benefit-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            className="benefit-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
