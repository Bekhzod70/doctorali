import { Button } from "@/components/ui/button";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Check } from "lucide-react";
import Translation from "@/components/translation";

const data = [
  {
    imageUrl: "/images/product/doctor-ali.jpg",
    title: "ourProduct.product1.title",
    connect: "+998787773103",
    benefits: [
      "ourProduct.product1.benefits1",
      "ourProduct.product1.benefits2",
      "ourProduct.product1.benefits3",
      "ourProduct.product1.benefits4"
    ]
  },
  {
    imageUrl: "/images/product/rohat.jpg",
    title: "ourProduct.product2.title",
    connect: "+998984447077",
    benefits: [
      "ourProduct.product2.benefits1",
      "ourProduct.product2.benefits2",
      "ourProduct.product2.benefits3",
      "ourProduct.product2.benefits4"
    ],
  },
  {
    imageUrl: "/images/product/safo.jpg",
    title: "ourProduct.product3.title",
    connect: "+998982227077",
    benefits: [
      "ourProduct.product3.benefits1",
      "ourProduct.product3.benefits2",
      "ourProduct.product3.benefits3",
      "ourProduct.product3.benefits4"
    ],
  },
  {
    imageUrl: "/images/product/detoxioma.jpeg",
    title: "ourProduct.product4.title",
    connect: "+998982227077",
    benefits: [
      "ourProduct.product4.benefits1",
      "ourProduct.product4.benefits2",
      "ourProduct.product4.benefits3"
    ],
  },
  // TODO: change image
  {
    imageUrl: "/images/product/sustav.jpeg",
    title: "ourProduct.product5.title",
    connect: "+998984447077",
    benefits: [
      "ourProduct.product5.benefits1",
      "ourProduct.product5.benefits2",
      "ourProduct.product5.benefits3",
      "ourProduct.product5.benefits4"
    ],
  },
];

const OurProduct = () => {
  return (
    <Section id="our-product">
      <div>
        <SectionTitle className="text-center sm:mb-[60px] mb-7">
          <Translation text="ourProduct.title" />
        </SectionTitle>
        <div>
          <div className="max-sm:hidden" data-aos="fade-up">
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
              {data.map(({ benefits, imageUrl, title, connect }, i) => (
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
                          <Translation text={title} />
                        </h1>
                        <ul className="mt-[14px] text-black grid gap-3">
                          {benefits.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <div className="size-1.5 bg-gray shrink-0 rounded-full mt-2" />
                              <span><Translation text={item}/></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="pb-5 mt-7 px-[15px]">
                      <a href={`tel:${connect}`} className="block w-full">
                        <Button className="w-full" variant="outline">
                          <Translation text="ourProduct.button"/>
                        </Button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="sm:hidden">
            {data.map(({ benefits, imageUrl, title, connect }, i) => (
              <div
                className="w-full mx-auto mb-7 bg-light h-full py-[20px] flex flex-col justify-between px-4 rounded-[10px]"
                data-aos="fade-up"
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
                  <div className="pt-5">
                    <h1 className="text-[18px] text-green font-medium font-times-new-roman font-bold"><Translation text={title}/></h1>
                    <ul className="mt-[14px] text-[#262626] text-[14px] font-times-new-roman grid gap-3">
                      {benefits.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 border-b border-[#C4C4C4] pb-3 last:border-b-0"
                        >
                          <div className="size-4 ml-2 center-mode border border-orange shrink-0 rounded-full mt-1">
                            <Check className="text-orange size-3" />
                          </div>
                          <span><Translation text={item}/></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pb-5 mt-2 px-[15px]">
                  <div className="">
                    <a href={`tel:${connect}`} className="block w-full">
                      <Button className="w-full h-[70px] text-[20px] bg-white" variant="outline">
                        <Translation text="ourProduct.buttonMobile"/>
                      </Button>
                    </a>
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
