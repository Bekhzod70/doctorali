import { Swiper } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import {
  clientsFeedback,
  expertsFeedback,
  feedbackData,
  starFeedback,
} from "./data";
import Play from "@/components/icons/play";
import VideoModal from "@/components/video-modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Translation from "@/components/translation";

interface FeedbackSliderPorps {
  feedback: { imageUrl: string; videoUrl: string }[];
  setVideo: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  number: number;
}

const FeedbackSlider = ({
  feedback,
  setVideo,
  setOpen,
  number,
}: FeedbackSliderPorps) => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        navigation={{
          nextEl: ".feedback-arrow-left",
          prevEl: ".feedback-arrow-right",
        }}
        pagination={{
          clickable: true,
          el: `#pagination-feedback-wrapper-${number}`,
          bulletClass: `feedback-bullet`,
          bulletActiveClass: `feedback-bullet-active`,
        }}
        slidesPerView={"auto"}
        spaceBetween={30}
        id="feedback-slider"
        className="h-full !items-end"
      >
        {feedback.map(({ imageUrl, videoUrl }, i) => (
          <SwiperSlide key={i} className="!h-[unset] !w-auto">
            <div className="sm:w-[690px] w-[325px] sm:h-[356px] h-[213px] relative sm:rounded-[48px] rounded-[38px] overflow-hidden group">
              <Image
                src={imageUrl}
                alt="feedback image"
                className="h-full w-full object-cover group-hover:scale-105 transition"
                width={1000}
                height={1000}
              />
              {/* <div
                className="w-full h-full absolute left-0 top-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                }}
              /> */}
              {/* <p className="text-paragraph1 absolute left-[30px] bottom-10 max-w-[220px] text-white">
                {info}
              </p> */}
              <Button
                onClick={() => {
                  setVideo(videoUrl);
                  setOpen(true);
                }}
                size="icon"
                className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              >
                <Play />
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id={`pagination-feedback-wrapper-${number}`}
        className="flex justify-center mt-4 gap-[6px] w-auto"
      ></div>
    </div>
  );
};

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
      <div className="flex justify-between items-end">
        {/* <div>
          <SectionTitle className="max-w-[1013px] text-white">
            <Translation text="feedback.title" />
          </SectionTitle>
        </div> */}
      </div>
      <div className="flex flex-col gap-y-6">
        <div>
          <h2 className="text-white font-medium text-xl sm:mb-5 mb-3 sm:text-4xl">
            <Translation text="feedback.experts" />
          </h2>
          <FeedbackSlider
            number={1}
            feedback={expertsFeedback}
            setVideo={setSelectedVideo}
            setOpen={setOpen}
          />
        </div>
        <div>
          <h2 className="text-white font-medium text-xl sm:mb-5 mb-3 sm:text-4xl">
            <Translation text="feedback.clients" />
          </h2>
          <FeedbackSlider
            number={2}
            feedback={clientsFeedback}
            setVideo={setSelectedVideo}
            setOpen={setOpen}
          />
        </div>
        <div>
          <h2 className="text-white font-medium text-xl mb-3 sm:text-2xl">
            <Translation text="feedback.star" />
          </h2>
          <FeedbackSlider
            number={3}
            feedback={starFeedback}
            setVideo={setSelectedVideo}
            setOpen={setOpen}
          />
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} video={selectedVideo} />
    </Section>
  );
};

export default Feedback;
