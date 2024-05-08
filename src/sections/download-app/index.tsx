import Section from "../components/section";
import SectionTitle from "../components/section-title";

const DownloadApp = () => {
  return (
    <Section className="sm:!mt-[250px]">
      <div className="bg-primary-gradient sm:py-[60px] pt-10 sm:px-[70px] px-[20px] rounded-tr-[50px] rounded-bl-[50px] relative">
        <div className="flex lg:flex-row lg:items-start items-center flex-col gap-4">
          <div className="lg:w-1/2">
            <div className="lg:mb-[121px] mb-1 lg:text-start">
              <SectionTitle className="text-white font-bold text-center">
                “Doctor Ali” ilovasini yuklab oling.
              </SectionTitle>
              <p
                className="sm:text-xl text-[18px] text-white mt-6 font-[600]"
                data-aos="fade-up"
              >
                Yangi imkoniyatlarga ega bo'ling
              </p>
              <div className="py-[8px] mt-[6px]">
                <h3 className="float-left mr-[10px] w-[39px] h-[39px] bg-white bg-opacity-15 rounded-[10px] flex justify-center items-center"><span className="unbounded text-white font-bold text[20px]">1</span></h3>
                <p className="text-white text-[14px]">Mahsulotlarga toʻgʻridan-toʻgʻri buyurtma berish</p>
              </div>
                <img src="/mehrigiyo/images/icons/line.svg" />
                <div className="py-[8px]">
                <h3 className="float-left mr-[10px] w-[39px] h-[39px] bg-white bg-opacity-15 rounded-[10px] flex justify-center items-center"><span className="unbounded text-white font-bold text[20px]">2</span></h3>
                <p className="text-white text-[14px]">Mutaxassislarimizdan bepul konsultatsiya olish</p>
              </div>
              <img src="/mehrigiyo/images/icons/line.svg" />
                <div className="py-[8px]">
                <h3 className="float-left mr-[10px] w-[39px] h-[39px] bg-white bg-opacity-15 rounded-[10px] flex justify-center items-center"><span className="unbounded text-white font-bold text[20px]">3</span></h3>
                <p className="text-white text-[14px]">Oʻzingizga qulay vaqtda shifokor qabuliga yozilish.</p>
              </div>
            </div>
            <div className="sm:flex hidden lg:justify-start justify-center items-center gap-[11px]">
              <a
                data-aos="fade-up"
                href="https://play.google.com/store/apps/details?id=com.mehrigiyo.doctor_ali"
                target="_blank"
              >
                <img
                  src="/mehrigiyo/images/icons/googleplay.svg"
                  alt="google play"
                  className="sm:h-[50px] h-10"
                />
              </a>
              <a
                href="https://apps.apple.com/uz/app/doctor-ali/id6469584476"
                data-aos="fade-up"
              >
                <img
                  src="/mehrigiyo/images/icons/appstore.svg"
                  alt="appstore"
                  data-aos="zoom-in"
                  className="sm:h-[50px] h-10"
                />
              </a>
            </div>
          </div>
          <div>
            <img
              data-aos="zoom-in"
              src="/mehrigiyo/images/App Story.png"
              alt="app story"
              className="lg:absolute 2xl:w-[645.74px] w-[274px] 2xl:-bottom-20 -bottom-10"
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden flex mt-6 lg:justify-start justify-center items-center gap-[11px]">
        <a
          href="https://play.google.com/store/apps/details?id=com.mehrigiyo.doctor_ali"
          data-aos="fade-up"
        >
          <img
            src="/mehrigiyo/images/icons/googleplay.svg"
            alt="google play"
            className="h-[50px]"
          />
        </a>
        <a
          href="https://apps.apple.com/uz/app/doctor-ali/id6469584476"
          data-aos="fade-up"
        >
          <img
            src="/mehrigiyo/images/icons/appstore.svg"
            alt="appstore"
            className="h-[50px]"
          />
        </a>
      </div>
    </Section>
  );
};

export default DownloadApp;
