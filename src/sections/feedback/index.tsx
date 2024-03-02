import { Swiper } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { feedbackData } from "./data";
import Play from "@/components/icons/play";
import VideoModal from "@/components/video-modal";
import { useEffect, useState } from "react";
import Image from "next/image";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    if (!open) {
      setSelectedVideo("");
    }
  }, [open]);

  return (
    <Section className="bg-orange py-20">
      <div className="flex justify-between items-end mb-16">
        <div>
          <SectionTitle className="max-w-[1013px] text-white">
            Реальные отзывы об эффективности нашего продукта
          </SectionTitle>
        </div>

        <div className="hidden gap-[10px] sm:flex">
          <Button
            size="icon"
            variant="warning"
            className="feedback-arrow-right arrow disabled:bg-gray-light bg-green hover:bg-green/90 disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            variant="warning"
            className="feedback-arrow-left arrow disabled:bg-gray-light bg-green hover:bg-green/90 disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".feedback-arrow-left",
            prevEl: ".feedback-arrow-right",
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
            1040: {
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
          {feedbackData.map(({ imageUrl, info, videoUrl }, i) => (
            <SwiperSlide key={i} className="!h-[unset]">
              <div className="max-w-[335px] h-[594px] relative rounded-[48px] overflow-hidden group slider-item-wrapper">
                <div className="w-[128px] h-[30px] absolute z-10 top-0 left-1/2 -translate-x-1/2 rounded-b-[16px] bg-orange" />
                <Image
                  src={imageUrl}
                  alt="feedback image"
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                  width={1000}
                  height={1000}
                />
                <div
                  className="w-full h-full absolute left-0 top-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                  }}
                />
                <p className="text-paragraph1 absolute left-[30px] bottom-10 max-w-[220px] text-white">
                  {info}
                </p>
                <Button
                  onClick={() => {
                    setSelectedVideo(videoUrl);
                    setOpen(true);
                  }}
                  size="icon"
                  className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[84px] h-[84px]"
                >
                  <Play />
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-[10px] sm:hidden justify-center mt-10">
          <Button
            size="icon"
            variant="warning"
            className="feedback-arrow-right arrow disabled:bg-gray-light bg-green hover:bg-green disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            variant="warning"
            className="feedback-arrow-left arrow disabled:bg-gray-light bg-green hover:bg-green disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} video={selectedVideo} />
    </Section>
  );
};

export default Feedback;
