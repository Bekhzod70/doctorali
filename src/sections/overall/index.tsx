import Seperation from "@/components/icons/seperation";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Translation from "@/components/translation";
import { overallData } from "./overall-data";

const Trusted = () => {
  const boxStyle = "";
  const boxTitleStyle =
    "sm:text-heading2 text-heading3 gradient-text font-times-new-roman";

  return (
    <Section className="">
      <SectionTitle className="text-center sm:mb-10 mb-7">
        <Translation text="overall.title" />
      </SectionTitle>
      <div className="grid sm:grid-cols-3 relative grid-cols-2 flex-wrap gap-5 lg:justify-between justify-evenly">
        <span className="sm:hidden absolute left-1/2 -translate-x-1/2 -z-10 top-[5rem]">
          <Seperation />
        </span>
        <span className="sm:hidden absolute left-1/2 -translate-x-1/2 -z-10 top-[16.8rem]">
          <Seperation />
        </span>
        {/* {overallData.map((item, i) => ( */}
        {overallData.map(({ title, subtitle }, i) => (
          <div
            data-aos="fade-up"
            key={i}
            className={
              "flex flex-col sm:gap-4 gap-2 max-sm:rounded-[20px] max-sm:h-[169px] w-full border-2 items-center max-sm:shadow-card-shadow py-10 md:px-[30px] px-2 border-light"
            }
          >
            <h1 className="unbounded font-medium md:text-heading2 sm:text-heading3 xs:text-[26px] text-xl text-center gradient-text max-sm:font-semibold">
              <CountUp
                start={0}
                duration={3}
                separator=" "
                enableScrollSpy
                end={parseInt(title.replace(/\s/g, ""), 10)}
              />
              {title.includes("+") && "+"}
            </h1>
            <p className="lg:text-base text-sm text-center max-sm:font-medium max-sm:text-xs">
              <Translation text={subtitle} />
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Trusted;
