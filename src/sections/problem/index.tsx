import { useState } from "react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";

const data = [
  {
    info: "problem.item1.info",
    iconUrl: "/images/icons/Frame.svg",
  },
  {
    info: "problem.item2.info",
    iconUrl: "/images/icons/Frame-1.svg",
  },
  {
    info: "problem.item3.info",
    iconUrl: "/images/icons/Frame-2.svg",
  },
  {
    info: "problem.item4.info",
    iconUrl: "/images/icons/Frame-3.svg",
  },
  {
    info: "problem.item5.info",
    iconUrl: "/images/icons/Frame-4.svg",
  },
  {
    info: "problem.item6.info",
    iconUrl: "/images/icons/Frame-5.svg",
  },
  {
    info: "problem.item7.info",
    iconUrl: "/images/icons/Frame-6.svg",
  },
  {
    info: "problem.item8.info",
    iconUrl: "/images/icons/Frame-7.svg",
  },
  {
    info: "problem.item9.info",
    iconUrl: "/images/icons/Frame-8.svg",
  },
  {
    info: "problem.item10.info",
    iconUrl: "/images/icons/Frame-9.svg",
  },
  {
    info: "problem.item11.info",
    iconUrl: "/images/icons/Frame-10.svg",
  },
  {
    info: "problem.item12.info",
    iconUrl: "/images/icons/Frame-11.svg",
  },
  {
    info: "problem.item13.info",
    iconUrl: "/images/icons/Frame-12.svg",
  },
  {
    info: "problem.item14.info",
    iconUrl: "/images/icons/Frame-13.svg",
  },
  {
    info: "problem.item15.info",
    iconUrl: "/images/icons/Frame-14.svg",
  },
  {
    info: "problem.item16.info",
    iconUrl: "/images/icons/Frame-15.svg",
  },
  {
    info: "problem.item17.info",
    iconUrl: "/images/icons/Frame-16.svg",
  },
];

const Problem = () => {
  const [showAll, setShowAll] = useState(false);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const renderedData = showAll ? data : data.slice(0, 6);

  return (
    <Section id="catalog">
      <div className="">
        <SectionTitle className="text-center sm:mb-20 mb-2">
          <Translation text="problem.title" />
        </SectionTitle>
        <div className="flex relative flex-wrap sm:gap-x-5 sm:gap-y-10 sm:justify-center gap-5">
          <img
            src="/images/icons/seperator.svg"
            alt="icon"
            className="absolute -z-10 left-1/2 -translate-x-1/2 xs:top-[8.7rem] top-[6.8rem] sm:hidden"
          />
          <img
            src="/images/icons/seperator.svg"
            alt="icon"
            className="absolute -z-10 left-1/2 -translate-x-1/2 xs:top-[20.5rem] top-[16.8rem] sm:hidden"
          />
          {renderedData.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex sm:hidden flex-col gap-[18px] max-sm:shadow-card-shadow max-sm:mx-auto max-sm:size-[169px] max-xs:size-[140px] max-xs:w-full max-sm:justify-center max-sm:rounded-[20px] items-center sm:w-[264px]"
            >
              <div className="sm:size-[114px] xs:size-20 size-16 center-mode bg-light rounded-full">
                <img
                  src={item.iconUrl}
                  alt="icon"
                  className="sm:size-16 xs:size-12 size-10"
                />
              </div>
              <p className="sm:text-heading4 xs:text-paragraph2 text-green font-times-new-roman text-sm text-center">
              <Translation text={item.info} />
              </p>
            </div>
          ))}
          {data.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="sm:flex hidden flex-col gap-[18px] max-sm:shadow-card-shadow max-sm:mx-auto max-sm:size-[169px] max-xs:size-[140px] max-xs:w-full max-sm:justify-center max-sm:rounded-[20px] items-center sm:w-[264px]"
            >
              <div className="sm:size-[114px] xs:size-20 size-16 center-mode bg-light rounded-full">
                <img
                  src={item.iconUrl}
                  alt="icon"
                  className="sm:size-16 xs:size-12 size-10"
                />
              </div>
              <p className="sm:text-heading4 xs:text-paragraph2 text-sm font-medium text-center">
                <Translation text={item.info} />
              </p>
            </div>
          ))}
        </div>
        <div className="sm:hidden mt-5 flex justify-center">
          {!showAll ? (
            <p
              onClick={toggleShowAll}
              className="font-medium text-black text-center underline"
            >
              {<Translation text="problem.seeAll" />}
            </p>
          ) : (
            <p
              onClick={toggleShowAll}
              className="font-medium text-orange text-center underline"
            >
              {<Translation text="problem.hidden" />}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Problem;
