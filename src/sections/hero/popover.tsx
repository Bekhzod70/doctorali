import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

type Position = "left" | "right" | "right-center" | "left-center";

interface Props {
  text: string;
  top: string;
  left?: string;
  right?: string;
  position?: Position;
}

const Popover = ({ text, left, right, top, position = "left" }: Props) => {
  const getPosition = (position: Position): string => {
    switch (position) {
      case "left":
        return "right-1/2 rounded-tr-none";

      case "right":
        return "left-1/2 rounded-tl-none";

      case "right-center":
        return "left-1/2 sm:rounded-tr-full sm:rounded-tl-none max-sm:-translate-x-1/2";

      case "left-center":
        return "sm:right-1/2 max-sm:left-1/2 sm:rounded-tr-none max-sm:-translate-x-1/2";

      default:
        return "";
    }
  };

  return (
    <div className={cn("absolute group rounded-full", left, right, top)}>
      <Button
        variant="ghost"
        className="bg-white w-10 h-10 p-0 hover:bg-orange text-orange hover:text-white transition"
      >
        <Plus className="w-5 h-5 text-inherit" />
      </Button>
      <span
        className={cn(
          "absolute top-[calc(100%_+_4px)] z-40 w-max py-[10px] px-5 rounded-full bg-white hidden group-hover:block",
          getPosition(position)
        )}
      >
        {text}
      </span>
    </div>
  );
};
export default Popover;
