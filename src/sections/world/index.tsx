import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Section from "../components/section";
import SectionTitle from "../components/section-title";

const data = [
  {
    src: "/mehrigiyo/images/flag/russia.png",
    title: "Rossiya",
  },
  {
    src: "/mehrigiyo/images/flag/america.png",
    title: "AQSH",
  },
  {
    src: "/mehrigiyo/images/flag/saudi.png",
    title: "Xitoy",
  },
  {
    src: "/mehrigiyo/images/flag/qirgi.png",
    title: "Qirg'iziston",
  },
  {
    src: "/mehrigiyo/images/flag/tojik.png",
    title: "Tajikistan",
  },
  {
    src: "/mehrigiyo/images/flag/qozoq.png",
    title: "Qozog’iston",
  },
];

const World = () => {
  return (
    <Section>
      <SectionTitle className="text-center">
      “Doctor Ali” mahsulotlari jahon bozorini egallamoqda
      </SectionTitle>

      <div className="relative ">
        <div className="flex flex-wrap justify-between mt-10 gap-10">
          {data.map(({ src, title }, index) => (
            <div key={index} className="size-[75px]">
              <img src={src} alt="country" />
              <p className="text-center text-[14px] font-times-new-roman">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default World;
