import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { productData } from "./data";
import ProductCard from "./product-card";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Product = () => {
  return (
    <Section className="bg-green relative">
      <img
        src="/images/bg/product-bg.png"
        alt="bg image"
        className="absolute right-0 top-0 sm:block hidden"
      />
      <img
        src="/images/bg/product-bg-sm.png"
        alt="bg image"
        className="absolute right-0 top-[60px] sm:hidden"
      />
      <div className="py-20">
        <SectionTitle className="text-orange max-w-[941px] mb-[60px]">
          Откройте для себя преимущества нашего продукта
        </SectionTitle>
        <div className="sm:grid hidden lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {productData.map((productProps) => (
            <ProductCard key={productProps.info} {...productProps} />
          ))}
        </div>
        <div className="sm:hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".product-arrow-left",
              prevEl: ".product-arrow-right",
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 4,
              },
            }}
            id="benefit-slider"
            className="h-full !items-end"
          >
            {productData.map((props) => (
              <SwiperSlide key={props.imageUrl} className="!h-[unset]">
                <ProductCard {...props} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-[10px] sm:hidden relative z-10 justify-center mt-10">
          <Button
            size="icon"
            variant="warning"
            className="product-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronLeft className="text-white group-disabled:text-gray" />
          </Button>
          <Button
            size="icon"
            variant="warning"
            className="product-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
          >
            <ChevronRight className="text-white group-disabled:text-gray" />
          </Button>
        </div>
      </div>
    </Section>
  );
};
export default Product;
