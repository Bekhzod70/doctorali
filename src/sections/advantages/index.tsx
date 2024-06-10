import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";

const data = [
  {
    description:
      "advantage.item1.description",
    icon: "/mehrigiyo/images/icons/32.svg",
  },
  {
    description:
      "advantage.item2.description",
    icon: "/mehrigiyo/images/icons/leaf.svg",
  },
  {
    description:
      "advantage.item3.description",
    icon: "/mehrigiyo/images/icons/box.svg",
  },
  {
    description:
      "advantage.item4.description",
    icon: "/mehrigiyo/images/icons/body2.svg",
  },
  {
    description:
      "advantage.item5.description",
    icon: "/mehrigiyo/images/icons/list.svg",
  },
  {
    description:
      "advantage.item6.description",
    icon: "/mehrigiyo/images/icons/call.svg",
  },
  {
    description:
      "advantage.item7.description",
    icon: "/mehrigiyo/images/icons/uzb.svg",
  },
  {
    description:
      "advantage.item8.description",
    icon: "/mehrigiyo/images/icons/4.svg",
  },
  {
    description:
      "advantage.item9.description",
    icon: "/mehrigiyo/images/icons/gift.svg",
  },
];

const Advantages = () => {
  return (
    <Section>
      <div>
        <SectionTitle className="sm:mb-20 mb-14 text-center">
          <Translation text="advantage.title" />
        </SectionTitle>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 gap-y-4">
          {data.map(({ description, icon }, index) => (
            <div
              data-aos="fade-up"
              className="bg-white px-[10px] py-[15px] border-[1px] border-[#EBEBEB] rounded-[11px] text-center "
              key={index}
            >
              <img src={icon} alt="icon" className="size-[46px] mx-auto" />
              <div className="mt-[15px]">
                <p className="mt-[10px] text-base text-green"><Translation text={description}/></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Advantages;
