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
    info: "Bog'im ogriqlari",
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
    info: "Soch Oqarishi",
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
  return (
    <Section className="">
      <div className="">
        <SectionTitle className="text-center sm:mb-20 mb-14">
          Sizni qanday muammo bezovta qilmoqda?
        </SectionTitle>
        <div className="sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-10 sm:justify-center grid grid-cols-2 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[18px] items-center sm:w-[264px]"
            >
              <div className="sm:size-[114px] size-20 center-mode bg-light rounded-full">
                <img
                  src={item.iconUrl}
                  alt="icon"
                  className="sm:size-16 size-12"
                />
              </div>
              <p className="sm:text-heading4 text-paragraph2 font-medium text-center">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Problem;
