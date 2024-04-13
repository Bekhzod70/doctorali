import { useState } from "react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";

/* 
Qandli diabet
Qon bosimi oshishi
Bog'im ogriqlari
Uyqusizlik
Asabiylik
Ortiqcha vazn
Gepatit
Buyraklar shamollashi
Prostatit
Sistit
Jinsiy zaiflik
Soch to'kilishi
Soch Oqarishi
Oq dog'lar
Gijjalar
Revmatizm
Ko'z xiralashishi
*/

const data = [
  {
    info: "Qandli diabet",
    iconUrl: "/images/icons/Frame.svg",
  },
  {
    info: "Qon bosimi oshishi",
    iconUrl: "/images/icons/Frame-1.svg",
  },
  {
    info: "Bog'im og'riqlari",
    iconUrl: "/images/icons/Frame-2.svg",
  },
  {
    info: "Uyqusizlik",
    iconUrl: "/images/icons/Frame-3.svg",
  },
  {
    info: "Asabiylik",
    iconUrl: "/images/icons/Frame-4.svg",
  },
  {
    info: "Ortiqcha vazn",
    iconUrl: "/images/icons/Frame-5.svg",
  },
  {
    info: "Gepatit",
    iconUrl: "/images/icons/Frame-6.svg",
  },
  {
    info: "Buyraklar shamollashi",
    iconUrl: "/images/icons/Frame-7.svg",
  },
  {
    info: "Prostatit",
    iconUrl: "/images/icons/Frame-8.svg",
  },
  {
    info: "Sistit",
    iconUrl: "/images/icons/Frame-9.svg",
  },
  {
    info: "Jinsiy zaiflik",
    iconUrl: "/images/icons/Frame-10.svg",
  },
  {
    info: "Soch to'kilishi",
    iconUrl: "/images/icons/Frame-11.svg",
  },
  {
    info: "Soch oqarishi",
    iconUrl: "/images/icons/Frame-12.svg",
  },
  {
    info: "Oq dog'lar",
    iconUrl: "/images/icons/Frame-13.svg",
  },
  {
    info: "Gijjalar",
    iconUrl: "/images/icons/Frame-14.svg",
  },
  {
    info: "Revmatizm",
    iconUrl: "/images/icons/Frame-15.svg",
  },
  {
    info: "Ko'z xiralashishi",
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
        <SectionTitle className="text-center sm:mb-20 mb-14">
          Sizni qanday muammo bezovta qilmoqda?
        </SectionTitle>
        <div className="sm:flex relative sm:flex-wrap sm:gap-x-5 sm:gap-y-10 sm:justify-center grid grid-cols-2 gap-5">
          {/* <img
            src="/images/icons/seperator.png"
            alt="icon"
            className="absolute -z-10 left-1/2 -translate-x-1/2 xs:top-[8.7rem] top-[6.8rem] sm:hidden"
          />
          <img
            src="/images/icons/seperator.png"
            alt="icon"
            className="absolute -z-10 left-1/2 -translate-x-1/2 xs:top-[20.5rem] top-[16.8rem] sm:hidden"
          /> */}
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
              <p className="sm:text-heading4 xs:text-paragraph2 text-sm font-medium text-center">
                {item.info}
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
                {item.info}
              </p>
            </div>
          ))}
        </div>
        <div className="sm:hidden mt-5 flex justify-center">
          {!showAll ? (
            <p
              onClick={toggleShowAll}
              className="font-medium text-orange text-center underline"
            >
              {"Barchasini ko'rish"}
            </p>
          ) : (
            <p
              onClick={toggleShowAll}
              className="font-medium text-orange text-center underline"
            >
              {"Orqaga qaytarish"}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Problem;
