import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import SwitchLanguage from "../switch-language";

const MobilNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={cn(
        "xlg:hidden top-full absolute bg-[#F9F9F9] md:z-auto -z-10 left-0 w-full overflow-hidden transition-all duration-200 ease-in",
        !isOpen ? "h-0" : "h-[calc(100vh_-_84px)] max-h-screen"
      )}
    >
      <div className="max-w-md mx-auto h-[calc(100vh_-_84px)] py-[26px] px-4">
        <div className="w-full flex flex-col lg:justify-evenly justify-between h-full">
          <div></div>
          <div className="flex flex-col gap-[18px]">
            {navLinks.map(({ label, to }) => (
              <Link href={to} key={label + to}>
                <Button
                  variant="ghost"
                  className="w-full bg-white hover:bg-white"
                >
                  {label}
                </Button>
              </Link>
            ))}

            <Button variant="warning" className="w-full">
              Бесплатная консультация
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="lg:hidden">
            <SwitchLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobilNav;
