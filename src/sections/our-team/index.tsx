import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Pagination } from "swiper/modules";

const data = [
  {
    imageUrl: "/images/doctors/zokirjon.png",
    name: "Muhammedjonov Zokirjon",
  },
  {
    imageUrl: "/images/doctors/shahobiddin.png",
    name: "Nasriddinov Shahobiddin",
  },
  {
    imageUrl: "/images/doctors/xojimurod.png",
    name: "Mo'minov Xojimurod",
  },
  {
    imageUrl: "/images/doctors/dilshodbek.png",
    name: "Ergashev Dilshodbek",
  },
  {
    imageUrl: "/images/doctors/zokirjon.png",
    name: "Muhammedjonov Zokirjon",
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
          slidesPerView={1}
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
          {data.map(({ imageUrl, name }, i) => (
            <SwiperSlide key={i}>
              <div className="w-[335px] max-sm:mx-auto">
                <div className="h-[335px] bg-light">
                  <img src={imageUrl} alt="" />
                </div>
                <h1 className="text-xl max-sm:text-center gradient-text font-medium mt-[26px]">
                  {name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default OurTeam;
