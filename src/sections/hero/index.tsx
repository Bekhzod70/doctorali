import { Button } from "@/components/ui/button";
import Section from "../components/section";
import { Phone } from "lucide-react";
import Slider from "./slider";
import Chip from "@/components/chip";
import Translation from "@/components/translation";

const Hero = () => {
  return (
    <Section className="mt-0">
      <div className="flex gap-[10px] xl:flex-row flex-col">
        <div className="xl:w-1/2 w-full bg-green rounded-[40px] overflow-hidden sm:p-[50px] px-5 py-10 relative">
          <img
            src="/images/landing-bg-shape.png"
            alt="bg shape"
            className="absolute bottom-0 right-0 pointer-events-none"
          />
          <Chip>
            <Translation text="hero.collection_ali" />
          </Chip>
          <h1 className="text-white font-remark sm:text-heading1 text-heading2">
            <Translation text="hero.title" />
          </h1>
          <p className="text-paragraph1 text-gray-light mt-[30px] mb-[120px]">
            <Translation text="hero.subtitle" />
          </p>
          <Button variant="warning" className="w-full">
            <Phone className="shrink-0" />
            <span className="sm:hidden">
              <Translation text="links.connect" />
            </span>
            <span className="sm:block hidden">
              <Translation text="connect.btn" />
            </span>
          </Button>
        </div>
        <div className="xl:w-1/2 w-full">
          <Slider />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
