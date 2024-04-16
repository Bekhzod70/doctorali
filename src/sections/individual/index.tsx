import Section from "../components/section";
import SectionTitle from "../components/section-title";

const Individual = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-y-8">
        <div className="max-lg:order-2 max-sm:hidden">
          <img
            src="/mehrigiyo/images/individual.jpg"
            alt="individual"
            className="sm:h-[415px] w-full object-cover lg:rounded-tl-[150px]"
          />
        </div>
        <div className="flex flex-col lg:justify-between max-lg:gap-4">
          <SectionTitle className="max-sm:text-center">
            Har bir mijozga individual yondashuv
          </SectionTitle>
          <div className="sm:hidden">
            <img
              data-aos="fade-up"
              src="/mehrigiyo/images/individual.jpg"
              alt="individual"
              className="sm:h-[415px] w-full object-cover lg:rounded-tl-[150px]"
            />
          </div>
          <ul className="sm:text-gray text-gray-600 sm:text-xl text-base grid gap-5">
            <li className="flex gap-3" data-aos="fade-up">
              <div className="size-1.5 bg-gray shrink-0 rounded-full mt-3" />
              <span>
                “Doctor Ali” kompaniyasi koʻp yillardan buyon yurtdoshlarimizga
                salomatlikni qayta tiklash masalasida koʻmak berib kelmoqda.
              </span>
            </li>
            <li className="flex gap-3" data-aos="fade-up">
              <div className="size-1.5 bg-gray shrink-0 rounded-full mt-3" />
              <span>
                Bizning oliy toifali shifokorlar har bir bemorga individual
                yondashuvni taʼminlashadi.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Individual;
