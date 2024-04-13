import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Section from "../components/section";
import SectionTitle from "../components/section-title";

const countries = [
  "/images/flag/qirgi.png",
  "/images/flag/america.png",
  "/images/flag/china.png",
  "/images/flag/qozoq.png",
  "/images/flag/russia.png",
  "/images/flag/tojik.png",
];

const World = () => {
  return (
    <Section>
      <SectionTitle className="text-center">
        Bizni butun dunyo tan olmoqda
      </SectionTitle>

      <ScrollArea className="relative !overflow-auto">
        <div className="flex justify-center mt-10 gap-5 overflow-auto">
          {countries.map((country, index) => (
            <div key={index} className="size-[60px]">
              <img src={country} alt="country" />
            </div>
          ))}
        </div>
        <ScrollBar
          className="w-[100%] h-[2px] bg-border"
          orientation="horizontal"
        />
      </ScrollArea>
      <div className="mt-14">
        <img
          src="/images/icons/map-base.png"
          alt="map"
          className="object-cover mx-auto pointer-events-none"
        />
      </div>
    </Section>
  );
};

export default World;
