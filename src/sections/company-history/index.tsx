import { useState } from "react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";

const CompanyHistory = () => {
  const [showAll, setShowAll] = useState(false);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Section id="company-history">
      <div className="grid xl:grid-cols-2 grid-cols-1 sm:gap-5 gap-8">
        <div>
          <SectionTitle className="sm:mb-[61px] mb-10 max-sm:text-center">
            <Translation text="companyHistory.title" />
          </SectionTitle>
          <div className="grid gap-5">
            <p
              className="text-gray sm:text-xl text-base sm:hidden"
              data-aos="fade-up"
            >
            <Translation text="companyHistory.info1" /> {" "}
              {!showAll && (
                <span
                  onClick={toggleShowAll}
                  className="text-black font-medium"
                >
                <Translation text="companyHistory.again" />
                </span>
              )}
            </p>
            {showAll && (
              <>
                <p
                  data-aos="fade-up"
                  className="text-gray sm:text-xl text-base sm:hidden"
                >
                  <Translation text="companyHistory.info2" />
                </p>
                <p
                  data-aos="fade-up"
                  className="text-gray sm:text-xl text-base sm:hidden"
                >
                  <Translation text="companyHistory.info3" />
                </p>
              </>
            )}
            <p
              className="text-gray sm:text-xl text-base sm:block hidden"
              data-aos="fade-up"
            >
              <Translation text="companyHistory.info1" />{" "}
            </p>
            <p
              data-aos="fade-up"
              className="text-gray sm:text-xl text-base sm:block hidden"
            >
              <Translation text="companyHistory.info2" />
            </p>
            <p
              data-aos="fade-up"
              className="text-gray sm:text-xl text-base sm:block hidden"
            >
              <Translation text="companyHistory.info3" />
            </p>
          </div>
        </div>
        <div>
          <img
            data-aos="fade-up"
            src="/mehrigiyo/images/history.jpeg"
            alt="history"
            className="h-[225px] object-cover xl:ml-auto mx-auto max-sm:rounded-[25px] sm:rounded-tr-[140px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default CompanyHistory;
