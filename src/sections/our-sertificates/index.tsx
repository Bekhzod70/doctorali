import Section from "../components/section";
import SectionTitle from "../components/section-title";
// Halal
// ISO 9001
// USDA organic
// Organic Product
// Non GMO

const data = [
  {
    name: "Halal",
    imageUrl: "/images/sertificate/halal.png",
  },
  {
    name: "ISO 9001",
    imageUrl: "/images/sertificate/iso.png",
  },
  {
    name: "USDA organic",
    imageUrl: "/images/sertificate/usda.png",
  },
  {
    name: "Organic Product",
    imageUrl: "/images/sertificate/organic.png",
  },
  {
    name: "Non GMO",
    imageUrl: "/images/sertificate/non.png",
  },
];

const OurSertificates = () => {
  return (
    <Section>
      <SectionTitle className="sm:mb-20 mb-14">
        Bizning sertifikatlar
      </SectionTitle>
      <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-3">
        {data.map(({ imageUrl, name }, i) => (
          <div
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
    </Section>
  );
};

export default OurSertificates;
