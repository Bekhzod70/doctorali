import { navLinks } from "@/constants/nav-links";
import Logo from "../icons/logo";
import SwitchLanguage from "../switch-language";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight, Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "./useScroll";
import { useToggle } from "@/hooks/useToggle";
import Hamburger from "./hamburger";
import MobilNav from "./mobil-nav";

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
                  <Link href={to}>
                    <Button variant="ghost">{label}</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center sm:gap-5 gap-2">
            <Button className="sm:inline-flex hidden">
              <Phone />
              Контакты
            </Button>
            <Button size="icon" className="sm:hidden">
              <Phone className="h-6 w-6" />
            </Button>
            <Button variant="warning" className="xlg:inline-flex hidden">
              Бесплатная консультация
              <ChevronRight className="h-5 w-5" />
            </Button>

            <Hamburger toggle={toggle} isOpen={isOpen} />
          </div>
        </div>
      </div>

      <MobilNav isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
