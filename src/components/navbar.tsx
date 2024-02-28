import { navLinks } from "@/constants/nav-links";
import Logo from "./icons/logo";
import SwitchLanguage from "./switch-language";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY >= 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 left-0 bg-background transition-all flex items-center",
        isScrolled ? "h-[84px]" : "h-[132px]"
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-[92px]">
            <Logo />
          </div>
          <div>
            <SwitchLanguage />
          </div>
          <div>
            <nav>
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
          </div>
          <div className="flex items-center gap-5">
            <Button>
              <Phone />
              Контакты
            </Button>
            <Button variant="warning">
              Бесплатная консультация
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* <ul
        className={`md:block top-full absolute bg-orange md:z-auto z-[-1] left-0 w-full transition-all duration-500 ease-in ${
          true ? "h-0" : "h-screen"
        }`}
      >
        <h1 className="text-3xl">content</h1>

        <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500">
          Get Started
        </button>
      </ul> */}
      {/* <div className="absolute bottom-0 left-0">
        <div></div>
      </div> */}
    </header>
  );
};

export default Navbar;
