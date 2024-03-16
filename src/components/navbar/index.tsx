import { navLinks } from "@/constants/nav-links";
import Logo from "../icons/logo";
import SwitchLanguage from "../switch-language";
import { Button } from "../ui/button";
import { ChevronRight, Phone } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "./useScroll";
import { useToggle } from "@/hooks/useToggle";
import Hamburger from "./hamburger";
import MobilNav from "./mobil-nav";
import Translation from "../translation";

const Navbar = () => {
  const [isOpen, toggle] = useToggle();
  const { isScrolled } = useScroll();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed w-full top-0 h-[84px] left-0 z-50 bg-background transition-all duration-200 flex items-center",
        isScrolled ? "h-[84px]" : "2xl:h-[132px]",
        isOpen ? "max-xlg:bg-[#F9F9F9]" : ""
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="sm:w-[92px] w-[70px]">
            <Logo />
          </div>
          <div className="lg:block hidden">
            <SwitchLanguage />
          </div>

          <nav className="xlg:block hidden">
            <ul className="flex gap-5">
              {navLinks.map(({ label, to }) => (
                <li key={label + to}>
                  <a href={to}>
                    <Button variant="ghost">
                      <Translation text={label} />
                      {/* {label} */}
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center sm:gap-5 gap-2">
            <a href="#contacts">
              <Button className="sm:inline-flex hidden">
                <Phone />
                <Translation text="links.contact" />
              </Button>
            </a>
            <a href="#contacts">
              <Button size="icon" className="sm:hidden">
                <Phone className="h-6 w-6" />
              </Button>
            </a>
            <a href="#consultation1">
              <Button variant="warning" className="xlg:inline-flex hidden">
                <Translation text="links.connect" />
                <ChevronRight className="h-5 w-5" />
              </Button>
            </a>

            <Hamburger toggle={toggle} isOpen={isOpen} />
          </div>
        </div>
      </div>

      <MobilNav isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
