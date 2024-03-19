import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import SwitchLanguage from "../switch-language";
import Translation from "../translation";

const MobilNav = ({
  isOpen,
  toogle,
}: {
  isOpen: boolean;
  toogle: () => void;
}) => {
  return (
    <div
      className={cn(
        "xlg:hidden top-full absolute bg-[#F9F9F9] md:z-auto -z-10 left-0 w-full overflow-hidden transition-all duration-200 ease-in",
        !isOpen ? "h-0" : "h-[calc(100vh_-_84px)] max-h-screen"
      )}
    >
      <div className="max-w-md mx-auto h-[calc(100vh_-_84px)] py-[26px] px-4">
        <div className="w-full flex flex-col lg:justify-evenly justify-center h-full">
          {/* <div></div> */}
          <div className="flex flex-col gap-[18px]">
            {navLinks.map(({ label, to }) => (
              <a href={to} key={label + to}>
                <Button
                  onClick={toogle}
                  variant="ghost"
                  className="w-full bg-white hover:bg-white"
                >
                  <Translation text={label} />
                </Button>
              </a>
            ))}

            <a href="tel:+998787773103">
              <Button variant="warning" className="w-full" onClick={toogle}>
                <Translation text={"links.connect"} />
                <ChevronRight className="h-5 w-5" />
              </Button>
            </a>
            <div className="lg:hidden">
              <SwitchLanguage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobilNav;
