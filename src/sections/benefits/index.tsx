import { Swiper } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import BenefitCard from "./benefit-card";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { data } from "./data";

const Benefits = () => {
  return (
    <Section>
      <div className="flex justify-between items-end mb-16">
        <div>
          <SectionTitle className="max-w-[576px]">
            Преимущества для всего организма
          </SectionTitle>
        </div>

        <div className="hidden gap-[10px] sm:flex">
          <Button
            size="icon"
            variant="warning"
            className="benefit-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            variant="warning"
            className="benefit-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".benefit-arrow-left",
            prevEl: ".benefit-arrow-right",
          }}
          breakpoints={{
            // when window width is >= 320px
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            1400: {
              slidesPerView: 4,
              spaceBetween: 4,
            },
          }}
          id="benefit-slider"
          className="sm:!block !hidden h-full !items-end"
        >
          {data.map((props) => (
            <SwiperSlide key={props.imageUrl} className="!h-[unset]">
              <BenefitCard {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
        <ul className="flex flex-col gap-y-[15px] sm:hidden">
          {data.map((props) => (
            <li key={props.imageUrl}>
              <BenefitCard {...props} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Benefits;
