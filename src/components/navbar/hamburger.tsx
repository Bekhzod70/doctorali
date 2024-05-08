import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger = ({ isOpen, toggle }: Props) => {
  return (
    <Button
      size="icon"
      className={cn(
        "relative xlg:hidden !bg-gray-light",
        isOpen ? "!bg-white hover:!bg-white" : ""
      )}
      variant="ghost"
      onClick={toggle}
    >
      <div className="block w-full absolute sm:left-4 left-3">
        <span
          className={cn(
            "block absolute h-0.5 bg-black w-7 text-white transform transition duration-500 ease-in-out",
            isOpen ? "rotate-45" : "-translate-y-1.5 bg-gray"
          )}
        ></span>
        <span
          className={cn(
            "block absolute h-0.5 bg-black w-7 text-white transform transition duration-500 ease-in-out",
            isOpen ? "opacity-0" : "bg-gray"
          )}
        ></span>
        <span
          className={cn(
            "block absolute h-0.5 bg-black w-5 text-white transform transition-all duration-500 ease-in-out",
            isOpen ? "-rotate-45 w-7" : "translate-y-1.5 bg-gray"
          )}
        ></span>
      </div>
    </Button>
  );
};
export default Hamburger;
