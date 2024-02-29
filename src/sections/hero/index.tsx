import { Button } from "@/components/ui/button";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Phone } from "lucide-react";
import Slider from "./slider";

const Hero = () => {
  return (
    <Section className="pt-0">
      <div className="flex gap-[10px]">
        <div className="w-1/2 bg-green rounded-[40px] overflow-hidden p-[50px] relative">
          <img
            src="/images/landing-bg-shape.png"
            alt="bg shape"
            className="absolute top-0 right-0 pointer-events-none"
          />
          <span className="inline-block py-[10px] px-5 rounded-full border border-white text-white text-base mb-5">
            Набор Doctor Ali
          </span>
          <SectionTitle className="text-white">
            Природная сила для вашего здоровья
          </SectionTitle>
          <p className="text-paragraph1 text-gray-light mt-[30px] mb-[120px]">
            Инновационный набор для поддержки внутренних органов
          </p>
          <Button variant="warning" className="w-full">
            <Phone />
            <span>Получить беспатную консультацию</span>
          </Button>
        </div>
        <div className="w-1/2">
          <div>
            <Slider />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Hero;
