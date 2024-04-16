import { Button } from "@/components/ui/button";

import { ArrowRight, Phone } from "lucide-react";
import Slider from "./slider";

import Translation from "@/components/translation";
import GhostLogo from "@/components/icons/ghost-logo";

const Hero = () => {
  return (
    <section className="">
      <div className="grid grid-cols-12">
        <div className="xl:col-span-6 col-span-12 xl:h-[640px]">
          <div className="w-full h-full bg-green overflow-hidden flex flex-col justify-between sm:p-[50px] xl:!pl-[100px] px-5 py-10 relative z-10">
            <div>
              <span className="absolute bottom-0 left-0 -z-10">
                <GhostLogo />
              </span>
              <h1 className="text-white sm:text-[70px] sm:text-start text-center sm:leading-[70px] font-times-new-roman text-[34px] max-sm:leading-[34px]">
                {/* <Translation text="hero.title" /> */}
                Mehrigiyo – biz bilan sogʻlom turmush tarzini tanlang!
              </h1>
              <p className="text-paragraph1 text-gray-light max-sm:text-center sm:mt-[30px] mt-[14px] xl:mb-[120px]">
                <Translation text="hero.subtitle" />
              </p>
            </div>
            <div className="xl:hidden my-[30px] max-sm:h-[354px] overflow-hidden max-sm:rounded-3xl">
              <img
                src="/images/hero2.jpg"
                alt=""
                className="size-full object-cover"
              />
              {/* <Slider /> */}
            </div>

            <a href="#consultation1" className="sm:block hidden">
              <Button className="w-full">
                <span className="sm:hidden">
                  <Translation text="links.connect" />
                </span>
                <span className="sm:block hidden">
                  <Translation text="connect.btn" />
                </span>
                <ArrowRight className="shrink-0 size-5" />
              </Button>
            </a>
            <a href="tel:+998787773103" className="sm:hidden">
              <Button className="w-full">
                <Phone className="shrink-0" />
                <span className="sm:hidden">
                  <Translation text="links.connect" />
                </span>
                <span className="sm:block hidden">
                  <Translation text="connect.btn" />
                </span>
              </Button>
            </a>
          </div>
        </div>
        <div className="col-span-6 xl:h-[640px]">
          <div className="xl:block hidden h-full">
            <img
              src="/images/hero2.jpg"
              alt=""
              className="size-full object-cover"
            />
            {/* <Slider /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
