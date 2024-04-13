import Seperation from "@/components/icons/seperation";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const data = [
  {
    title: "32",
    subtitle: "Kompaniyaning ochilganiga 32 yil dan oshdi",
  },
  {
    title: "10+",
    subtitle: "Mahsulotlarimiz 10 dan ziyod davlatlarga eksport qilinadi",
  },
  {
    title: "100+",
    subtitle: "100 turdan ortiq dorivor giyohlar yetishtiriladi",
  },
  {
    title: "500+",
    subtitle: "500 nafardan ziyod mutaxassislar faoliyat olib boradi",
  },
  {
    title: "1 000 000",
    subtitle: "Mamnun mijozlar soni 1 000 000 nafardan oshadi",
  },
  {
    title: "500+",
    subtitle: "Giyohlar 500 gektardan katta maydonda o'stiriladi",
  },
];

const Trusted = () => {
  const boxStyle = "";
  const boxTitleStyle =
    "sm:text-heading2 text-heading3 gradient-text font-times-new-roman";

  return (
    <Section className="">
      <SectionTitle className="text-center sm:mb-10 mb-7">
        Faoliyatimiz raqamlarda
      </SectionTitle>
      <div className="grid sm:grid-cols-3 relative grid-cols-2 flex-wrap gap-5 lg:justify-between justify-evenly">
        <span className="sm:hidden absolute left-1/2 -translate-x-1/2 -z-10 top-[5rem]">
          <Seperation />
        </span>
        <span className="sm:hidden absolute left-1/2 -translate-x-1/2 -z-10 top-[16.8rem]">
          <Seperation />
        </span>
        {data.map((item, i) => (
          <div
            data-aos="fade-up"
            key={i}
            className={
              "flex flex-col sm:gap-4 gap-2 max-sm:rounded-[20px] max-sm:h-[169px] w-full border-2 items-center max-sm:shadow-card-shadow py-10 md:px-[30px] px-2 border-light"
            }
          >
            <h1 className="md:text-heading2 sm:text-heading3 text-[26px] text-center gradient-text max-sm:font-semibold">
              {/* {item.title} */}
              {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: { isVisible: boolean }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? (
                    ) : null}
                  </div>
                )}
              </VisibilitySensor> */}
              <CountUp
                start={0}
                duration={3}
                separator=" "
                enableScrollSpy
                end={parseInt(item.title.replace(/\s/g, ""), 10)}
              />
              {item.title.includes("+") && "+"}
            </h1>
            <p className="lg:text-base text-sm text-center max-sm:font-medium max-sm:text-xs">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Trusted;
