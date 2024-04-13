import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Play } from "lucide-react";
import { clientsFeedback, expertsFeedback } from "../feedback/data";
import VideoModal from "@/components/video-modal";

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
        }}
        slidesPerView={"auto"}
        spaceBetween={30}
        id="pagination-slider"
        className="!pb-10"
      >
        {feedback.map(({ imageUrl, videoUrl }, i) => (
          <SwiperSlide key={i} className="!h-[unset] !w-auto">
            <div className="sm:w-[690px] w-[169px] sm:h-[356px] h-[95.21px] relative sm:rounded-[48px] rounded-[10px] overflow-hidden group">
              <Image
                src={imageUrl}
                alt="feedback image"
                className="h-full w-full object-cover group-hover:scale-105 transition"
                width={1000}
                height={1000}
              />
              <Button
                onClick={() => {
                  setVideo(videoUrl);
                  setOpen(true);
                }}
                size="icon"
                className="text-white max-sm:size-[27px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              >
                <Play className="max-sm:size-4 max-sm:ml-[2px]" />
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VideoInformation = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    if (!open) {
      setSelectedVideo("");
    }
  }, [open]);

  return (
    <Section>
      <SectionTitle className="sm:mb-[50px] mb-7 text-center">
        Mijozlarimiz nima deydi?
      </SectionTitle>
      <div className="hidden sm:block">
        <Tabs defaultValue="client">
          <div className="flex justify-center sm:mb-20 mb-5">
            <TabsList>
              <TabsTrigger value="client">
                Mijozlar ({clientsFeedback.length})
              </TabsTrigger>
              <TabsTrigger value="experts">
                Tajribali Mutaxassislar ({expertsFeedback.length})
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="client">
            <FeedbackSlider
              number={2}
              feedback={clientsFeedback}
              setVideo={setSelectedVideo}
              setOpen={setOpen}
            />
          </TabsContent>
          <TabsContent value="experts">
            <FeedbackSlider
              number={2}
              feedback={expertsFeedback}
              setVideo={setSelectedVideo}
              setOpen={setOpen}
            />
          </TabsContent>
        </Tabs>
      </div>
      <div className="sm:hidden">
        <FeedbackSlider
          number={2}
          feedback={clientsFeedback}
          setVideo={setSelectedVideo}
          setOpen={setOpen}
        />
        <SectionTitle className="my-[30px] text-center">
          Mutaxassislar fikri
        </SectionTitle>
        <FeedbackSlider
          number={2}
          feedback={expertsFeedback}
          setVideo={setSelectedVideo}
          setOpen={setOpen}
        />
      </div>
      <VideoModal open={open} setOpen={setOpen} video={selectedVideo} />
    </Section>
  );
};

export default VideoInformation;
