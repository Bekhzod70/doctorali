import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Pagination } from "swiper/modules";
import Translation from "@/components/translation";

const data = [
  {
    imageUrl: "/mehrigiyo/images/doctors/zokirnew.png",
    name: "ourTeam.doctor1.name",
    profession: "ourTeam.doctor1.profession",
    experence: "ourTeam.doctor1.experence",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/shahobiddin.png",
    name: "ourTeam.doctor2.name",
    profession: "ourTeam.doctor2.profession",
    experence: "ourTeam.doctor2.experence",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/xojimurod.png",
    name: "ourTeam.doctor3.name",
    profession: "ourTeam.doctor3.profession",
    experence: "ourTeam.doctor3.experence",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/dilshodbek.png",
    name: "ourTeam.doctor4.name",
    profession: "ourTeam.doctor4.profession",
    experence: "ourTeam.doctor4.experence",
  },
  {
    imageUrl: "/mehrigiyo/images/doctors/Axror.png",
    name: "ourTeam.doctor5.name",
    profession: "ourTeam.doctor5.profession",
    experence: "ourTeam.doctor5.experence",
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
                  <Translation text={name}/>
                </h1>
                <p className="max-sm:text-xs text-base max-sm:text-center mt-1">
                  <Translation text={profession}/>
                </p>
                <p className="text-[10px] text-center md:text-left mt-1">
                  <Translation text={experence}/>
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
