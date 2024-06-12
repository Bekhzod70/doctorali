import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Pagination } from "swiper/modules";
import Translation from "@/components/translation";

const data = [
  {
    name: "Halal",
    imageUrl: "/mehrigiyo/images/sertificate/halal.png",
  },
  {
    name: "ISO 9001",
    imageUrl: "/mehrigiyo/images/sertificate/iso.png",
  },
  {
    name: "USDA organic",
    imageUrl: "/mehrigiyo/images/sertificate/usda.png",
  },
  {
    name: "EU Organik",
    imageUrl: "/mehrigiyo/images/sertificate/organic.png",
  },
  {
    name: "Non GMO",
    imageUrl: "/mehrigiyo/images/sertificate/non.png",
  },
];

const OurSertificates = () => {
  return (
    <Section>
      <SectionTitle className="sm:mb-20 mb-14 text-center">
        <Translation text="ourSertificates.title"/>
      </SectionTitle>
      <div className="grid max-sm:hidden xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-3">
        {data.map(({ imageUrl, name }, i) => (
          <div
            data-aos="fade-up"
            className="border border-light rounded-tr-[40px] py-[30px] lg:px-12"
            key={i}
          >
            <div className="flex flex-col gap-7 items-center">
              <img
                src={imageUrl}
                alt="Halal"
                className="md:size-[136px] size-[100px] rounded-full"
              />
              <h1 className="md:text-heading4 sm:text-2xl text-xl text-green font-medium text-center">
                {name}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden" data-aos="fade-up">
        <div
          // className="!pb-10 h-full grid grid-cols-2 gap-6"
          className="!pb-10 h-full flex flex-wrap justify-center gap-6"
          id="pagination-slider"
        >
          {data.map(({ imageUrl, name }, i) => (
            <div key={i} className="w-[45%]">
              <div className="w-[100%] border border-[#F9F9F9] py-[20px] lg:px-12 rounded-tr-[25px] bg-white" key={i}>
                <div className="flex flex-col gap-3 items-center">
                  <img
                    src={imageUrl}
                    alt="Halal"
                    className="md:size-[136px] sm:size-[100px] size-[84px] rounded-full"
                  />
                  <h1 className="md:text-heading4 sm:text-2xl text-[18px] text-green font-medium text-center">
                    {name}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurSertificates;
