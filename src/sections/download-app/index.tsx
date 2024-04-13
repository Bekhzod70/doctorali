import Section from "../components/section";
import SectionTitle from "../components/section-title";

const DownloadApp = () => {
  return (
    <Section className="sm:!mt-[250px]">
      <div className="bg-primary-gradient sm:py-[60px] py-10 sm:px-[70px] px-3 rounded-tr-[50px] rounded-bl-[50px] relative">
        <div className="flex lg:flex-row lg:items-start items-center flex-col gap-4">
          <div className="lg:w-1/2">
            <div className="lg:mb-[121px] mb-10 lg:text-start text-center">
              <SectionTitle className="text-white">
                Ilovamizni yuklab oling
              </SectionTitle>
              <p className="sm:text-xl text-base text-white mt-6">
                Shifokorlarimizdan bepul konsultatsiya va mahsulotlar haqida
                to‘liq ma’lumotga ega bo‘ling.
              </p>
            </div>
            <div className="sm:flex hidden lg:justify-start justify-center items-center gap-[11px]">
              <a
                href="https://play.google.com/store/apps/details?id=com.mehrigiyo.doctor_ali"
                target="_blank"
              >
                <img
                  src="/images/icons/googleplay.svg"
                  alt="google play"
                  className="sm:h-[50px] h-10"
                />
              </a>
              <a href="https://apps.apple.com/uz/app/doctor-ali/id6469584476">
                <img
                  src="/images/icons/appstore.svg"
                  alt="appstore"
                  className="sm:h-[50px] h-10"
                />
              </a>
            </div>
          </div>
          <div>
            <img
              src="/images/App Story.png"
              alt="app story"
              className="lg:absolute 2xl:w-[645.74px] w-[470px] 2xl:-bottom-20 -bottom-10"
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden flex mt-6 lg:justify-start justify-center items-center gap-[11px]">
        <a href="">
          <img
            src="/images/icons/googleplay.svg"
            alt="google play"
            className="sm:h-[50px] h-10"
          />
        </a>
        <a href="">
          <img
            src="/images/icons/appstore.svg"
            alt="appstore"
            className="sm:h-[50px] h-10"
          />
        </a>
      </div>
    </Section>
  );
};

export default DownloadApp;
