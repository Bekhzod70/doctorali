import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";

const data = [
  {
    src: "/images/flag/russia.png",
    title: "world.state1",
  },
  {
    src: "/images/flag/america.png",
    title: "world.state2",
  },
  {
    src: "/images/flag/saudi.png",
    title: "world.state3",
  },
  {
    src: "/images/flag/qirgi.png",
    title: "world.state4",
  },
  {
    src: "/images/flag/tojik.png",
    title: "world.state5",
  },
  {
    src: "/images/flag/qozoq.png",
    title: "world.state6",
  },
];

const World = () => {
  return (
    <Section>
      <SectionTitle className="text-center">
      <Translation text="world.title"/>
      </SectionTitle>

      <div className="relative ">
        <div className="flex flex-wrap justify-between mt-10 gap-10">
          {data.map(({ src, title }, index) => (
            <div key={index} className="size-[75px]">
              <img src={src} alt="country" />
              <p className="text-center text-[14px] font-times-new-roman"><Translation text={title}/></p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default World;
