import { Button } from "@/components/ui/button";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Check } from "lucide-react";

/*
“Rohat” kompleksi
Jinsiy kasalliklarga tabiiy yechim beradi;
Reproduktiv salomatlikni yaxshilashga koʻmaklashadi;
Jinsiy zaiflikka qarshi kurashda ijobiy natija koʻrsatadi;
Prostata bezi kasalliklarining oldini olishga yordam beradi.

Safo kompleksi
Qazg'oqlarda
Soch to'kilishida
Oqarishda
Yog'lanishda va boshqa soch muammolarida yordam beradi

Detoxioma 
Organizmni toksin va parazitlardan tozalaydi;
Jigarni yogʻ bosishining oldini oladi;
Markaziy asab tizimini tinchlantiradi;
Ortiqcha vaznga qarshi kurashda yordam beradi.
*/

const data = [
  {
    imageUrl: "/images/product/doctor-ali.jpg",
    title: "“Doctor Ali” kompleksi",
    benefits: [
      "Qondagi qand miqdorini normallashtirishda;",
      "Qon bosimini bir meʼyorda ushlab turishda;",
      "Asabiylik va uyqusizlikning oldini olishda;",
      "Kamqonlikka qarshi kurashishda yordam beradi.",
    ],
  },
  {
    imageUrl: "/images/product/rohat.jpg",
    title: "“Rohat” kompleksi",
    benefits: [
      "Jinsiy kasalliklarga tabiiy yechim beradi.",
      "Reproduktiv salomatlikni yaxshilashga koʻmaklashadi.",
      "Jinsiy zaiflikka qarshi kurashda ijobiy natija koʻrsatadi.",
      "Prostata bezi kasalliklarining oldini olishga yordam beradi.",
    ],
  },
  {
    imageUrl: "/images/product/safo.jpg",
    title: "Safo kompleksi",
    benefits: [
      "Qazg'oqlarda",
      "Soch to'kilishida",
      "Oqarishda",
      "Yog'lanishda va boshqa soch muammolarida yordam beradi",
    ],
  },
  {
    imageUrl: "/images/product/detoxioma.jpg",
    title: "Detoxioma",
    benefits: [
      "Organizmni toksin va parazitlardan tozalaydi.",
      "Jigarni yogʻ bosishining oldini oladi.",
      "Markaziy asab tizimini tinchlantiradi.",
      "Ortiqcha vaznga qarshi kurashda yordam beradi.",
    ],
  },
  {
    imageUrl: "/images/product/rohat.jpg",
    title: "“Rohat” kompleksi",
    benefits: [
      "Jinsiy kasalliklarga tabiiy yechim beradi.",
      "Reproduktiv salomatlikni yaxshilashga koʻmaklashadi.",
      "Jinsiy zaiflikka qarshi kurashda ijobiy natija koʻrsatadi.",
      "Prostata bezi kasalliklarining oldini olishga yordam beradi.",
    ],
  },
];

const OurProduct = () => {
  return (
    <Section id="about">
      <div>
        <SectionTitle className="text-center sm:mb-[60px] mb-7">
          Bizning mahsulotlar
        </SectionTitle>
        <div>
          <div className="max-sm:hidden">
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
              {data.map(({ benefits, imageUrl, title }, i) => (
                <SwiperSlide key={i} className="!h-[unset]">
                  <div className="xs:w-[335px] mx-auto bg-light h-full flex flex-col justify-between">
                    <div>
                      <div className="w-full h-[302px]">
                        <img
                          src={imageUrl}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="pt-5 px-[15px]">
                        <h1 className="text-xl text-green font-medium">
                          {title}
                        </h1>
                        <ul className="mt-[14px] text-gray grid gap-3">
                          {benefits.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <div className="size-1.5 bg-gray shrink-0 rounded-full mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pb-5 mt-7 px-[15px]">
                      <div className="">
                        <Button className="w-full" variant="outline">
                          Batafsil
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="sm:hidden">
            {data.map(({ benefits, imageUrl, title }, i) => (
              <div
                className="w-full mx-auto bg-light h-full py-[30px] flex flex-col justify-between px-4 rounded-[10px]"
                key={i}
              >
                <div>
                  <div className="w-full h-[302px] overflow-auto rounded-[10px]">
                    <img
                      src={imageUrl}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="pt-5 px-[15px]">
                    <h1 className="text-xl text-green font-medium">{title}</h1>
                    <ul className="mt-[14px] text-gray grid gap-3">
                      {benefits.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 border-b border-[#C4C4C4] pb-3 last:border-b-0"
                        >
                          <div className="size-4 center-mode border border-orange shrink-0 rounded-full mt-1">
                            <Check className="text-orange size-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pb-5 mt-7 px-[15px]">
                  <div className="">
                    <Button className="w-full">Batafsil</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurProduct;