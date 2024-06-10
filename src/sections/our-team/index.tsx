import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Pagination } from "swiper/modules";
import Translation from "@/components/translation";

const data = [
  {
    imageUrl: "/mehrigiyo/images/doctors/zokirnew.png",
    name: "Muhammedjonov Zokirjon",
    profession: "Professor",
    experence: "30 yillik tajribaga ega Oliy toifali shifokor. Minglab bemorlarning sevimli shifokori.",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/shahobiddin.png",
    name: "Nasriddinov Shahobiddin",
    profession: "Oliy toifali shifokor",
    experence: "30 yillik tajribaga ega Oliy toifali shifokor. Infeksionist. Ko'plab bemorlarning salomatligiga hissa qo'shib kelayotgan inson.",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/xojimurod.png",
    name: "Mo'minov Xojimurod",
    profession: "Oliy toifali shifokor",
    experence: "6 yillik tajribaga ega shifokor. Terapevt. Xalqimiz salomatligi uchun mehnat qilib kelayotgan professional mutaxassis.",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/dilshodbek.png",
    name: "Ergashev Dilshodbek",
    profession: "Oliy toifali shifokor",
    experence: "29 yillik tajribaga ega Oliy toifali shifokor. Okulist. Xalqimiz xizmatidagi shifokor. ",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/Axror.png",
    name: "Mahsudov Axror",
    profession: "Shifokor",
    experence: "15 yillik tajribaga ega Shifokor. Dotsent (jigar kasalliklari bo'yicha).",
  },
];

const OurTeam = () => {
  return (
    <Section>
      <SectionTitle className="text-center sm:mb-[60px] mb-10">
        <Translation text="ourTeam.title" />
      </SectionTitle>
      <div data-aos="fade-up">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            710: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 4,
            },
          }}
          modules={[Pagination]}
          className="!pb-10 h-full"
          id="pagination-slider"
        >
          {data.map(({ imageUrl, name, profession, experence }, i) => (
            <SwiperSlide key={i}>
              <div className="sm:w-[335px] max-sm:mx-auto">
                <div className="sm:h-[335px] h-[163px] bg-light overflow-hidden">
                  <img
                    src={imageUrl}
                    alt=""
                    className="max-sm:h-full object-cover"
                  />
                </div>
                <h1 className="sm:text-xl text-xs max-sm:text-center gradient-text font-medium mt-[26px]">
                  {name}
                </h1>
                <p className="max-sm:text-xs text-base max-sm:text-center mt-1">
                  {profession}
                </p>
                <p className="text-[10px] text-center md:text-left mt-1">
                  {experence}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default OurTeam;
