import { Swiper } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { sertificateData } from "./data";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";

const Sertificate = () => {
  const [zoom, setZoomed] = useState(0);

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
            className="sertificate-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            variant="warning"
            className="sertificate-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".sertificate-arrow-left",
            prevEl: ".sertificate-arrow-right",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          id="sertificate-slider"
          className="h-full !items-end"
        >
          {sertificateData.map((sertificateImgUrl, i) => (
            <SwiperSlide key={i} className="!h-[unset]">
              <div className="w-[335px] relative child:!cursor-pointer slider-item-wrapper">
                <Button
                  size="icon"
                  className="absolute top-[30px] right-[30px] z-20"
                  onClick={() => setZoomed(i + 1)}
                >
                  <ZoomIn className="text-orange" />
                </Button>
                <ControlledZoom
                  isZoomed={zoom === i + 1}
                  onZoomChange={(value) => {
                    if (!value) {
                      setZoomed(0);
                    }
                  }}
                  zoomImg={{
                    src: sertificateImgUrl,
                    alt: "Sertificate",
                  }}
                  zoomMargin={20}
                >
                  <img
                    src={sertificateImgUrl}
                    alt="Sertificate"
                    className="w-full !cursor-default"
                  />
                </ControlledZoom>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-[10px] sm:hidden justify-center mt-10">
          <Button
            size="icon"
            variant="warning"
            className="sertificate-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            variant="warning"
            className="sertificate-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Sertificate;
