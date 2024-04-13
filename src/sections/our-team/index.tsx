import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Pagination } from "swiper/modules";

const data = [
  {
    imageUrl: "/images/doctors/zokirjon.png",
    name: "Muhammedjonov Zokirjon",
    profession: "Professor",
  },
  {
    imageUrl: "/images/doctors/shahobiddin.png",
    name: "Nasriddinov Shahobiddin",
    profession: "Oliy toifali shifokor",
  },
  {
    imageUrl: "/images/doctors/xojimurod.png",
    name: "Mo'minov Xojimurod",
    profession: "Oliy toifali shifokor",
  },
  {
    imageUrl: "/images/doctors/dilshodbek.png",
    name: "Ergashev Dilshodbek",
    profession: "Oliy toifali shifokor",
  },
  {
    imageUrl: "/images/doctors/zokirjon.png",
    name: "Muhammedjonov Zokirjon",
    profession: "Oliy toifali shifokor",
  },
];

const OurTeam = () => {
  return (
    <Section>
      <SectionTitle className="text-center sm:mb-[60px] mb-10">
        Jamoamiz bilan tanishing
      </SectionTitle>
      <div>
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
          {data.map(({ imageUrl, name, profession }, i) => (
            <SwiperSlide key={i}>
              <div className="sm:w-[335px] max-sm:mx-auto">
                <div className="sm:h-[335px] h-[163px] bg-light">
                  <img src={imageUrl} alt="" className="max-sm:h-full" />
                </div>
                <h1 className="sm:text-xl text-xs max-sm:text-center gradient-text font-medium mt-[26px]">
                  {name}
                </h1>
                <p className="max-sm:text-xs text-base max-sm:text-center mt-1">
                  {profession}
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
