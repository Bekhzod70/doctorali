import { SetStateAction } from "react";
import FadeModal from "./fade-modal";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface Props {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  video: string;
}

const VideoModal = ({ open, setOpen, video }: Props) => {
  return (
    <FadeModal open={open} setOpen={setOpen}>
      <div
        className="lg:w-full w-[90%] max-w-[960px] object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full md:max-h-[33rem] max-h-[55vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
          url={video}
        />
      </div>
    </FadeModal>
  );
};

export default VideoModal;
