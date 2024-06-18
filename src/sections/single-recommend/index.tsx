import Play from "@/components/icons/play";
import Section from "../components/section";
import { HTMLAttributes, useState } from "react";
import VideoModal from "@/components/video-modal";
import Translation from "@/components/translation";

interface PlayBoxProps extends HTMLAttributes<HTMLSpanElement> {}

const PlayBox = (props: PlayBoxProps) => {
  return (
    <span
      className="absolute text-white cursor-pointer left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:w-20 w-[60px] sm:h-20 h-[60px] rounded-full center-mode bg-orange"
      {...props}
    >
      <Play />
    </span>
  );
};

const SingleRecommend = () => {
  const [open, setOpen] = useState(false);

  const openVideoModal = () => setOpen(true);

  return (
    <Section className="!mt-0">
      <div className="lg:block hidden">
        <div className="nested-border rounded-[52px]">
          <div className="nested-border rounded-[47px]">
            <div className="nested-border rounded-[42px]">
              <div>
                <div className="h-[516px] flex items-end p-5 relative w-full rounded-[40px] overflow-hidden">
                  <img
                    src="/images/professor.jpg"
                    alt="recommend image"
                    className="w-full h-full object-cover absolute -z-[2] left-0 top-0"
                  />
                  <PlayBox onClick={openVideoModal} />
                  <div className="w-full h-full absolute -z-[1] left-0 top-0 bg-black/20" />
                  <div className="py-6 px-5 rounded-[20px] bg-white max-w-[50%] inline-block">
                    {/* <h4 className="text-orange text-xl">
                      <Translation text="label.recommend" />
                    </h4> */}
                    <h2 className="text-xl text-green font-medium">
                      <Translation text="label.recommend" />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <div className="bg-gray-light mb-2 py-[18px] px-[14px] rounded-[20px]">
            {/* <h4 className="text-orange text-base">
              <Translation text="label.recommend" />
            </h4> */}
            <h2 className="text-xl text-green font-medium">
              <Translation text="label.recommend" />
            </h2>
          </div>
          <div className="rounded-[40px] overflow-hidden w-full sm:h-auto h-[332px] relative">
            <img
              src="https://i3.ytimg.com/vi/yGPxiTo39ok/maxresdefault.jpg"
              alt="recommend image"
              className="w-full h-full object-cover"
            />
            <PlayBox onClick={openVideoModal} />
          </div>
        </div>
      </div>
      {open && (
        <VideoModal
          open={open}
          setOpen={setOpen}
          video={"https://youtu.be/yGPxiTo39ok?si=JTbu01GWPQWOR_pQ"}
        />
      )}
    </Section>
  );
};

export default SingleRecommend;
