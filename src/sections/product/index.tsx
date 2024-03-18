import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { productData } from "./data";
import ProductCard from "./product-card";
import { Grid, Pagination } from "swiper/modules";
import Translation from "@/components/translation";

const Product = () => {
  return (
    <Section className="bg-green relative" id="about">
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
          <Translation text="product.title" />
        </SectionTitle>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-5 gap-2">
          {productData.map((productProps) => (
            <ProductCard key={productProps.info} {...productProps} />
          ))}
        </div>
        {/* <div className="sm:hidden h-[400px]">
          <Swiper
            navigation={{
              nextEl: ".product-arrow-left",
              prevEl: ".product-arrow-right",
            }}
            grid={{
              rows: 2,
            }}
            slidesPerView={2}
            pagination={{
              clickable: true,
              el: "#pagination-wrapper",
              bulletClass: "product-bullet",
              bulletActiveClass: "product-bullet-active",
            }}
            spaceBetween={8}
            id="product-slider"
            modules={[Grid, Pagination]}
            className="h-full !items-end"
          >
            {productData.map((props) => (
              <SwiperSlide key={props.imageUrl} className="!h-[unset]">
                <ProductCard {...props} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            id="pagination-wrapper"
            className="flex justify-center gap-3 child:bg-orange"
          ></div>
        </div> */}
        {/* <div className="flex gap-[10px] sm:hidden relative z-10 justify-center mt-10">
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
        </div> */}
      </div>
    </Section>
  );
};
export default Product;
