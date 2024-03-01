import { Button } from "@/components/ui/button";
import Section from "../components/section";
import { Phone } from "lucide-react";
import Slider from "./slider";
import Chip from "@/components/chip";

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
          <Chip>Набор Doctor Ali</Chip>
          <h1 className="text-white font-remark sm:text-heading1 text-heading2">
            Природная сила для вашего здоровья
          </h1>
          <p className="text-paragraph1 text-gray-light mt-[30px] mb-[120px]">
            Инновационный набор для поддержки внутренних органов
          </p>
          <Button variant="warning" className="w-full">
            <Phone className="shrink-0" />
            <span>
              <span className="sm:inline hidden">Получить</span>{" "}
              <span className="max-sm:capitalize">беспатную</span> консультацию
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
