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
        src="/mehrigiyo/images/bg/product-bg.png"
        alt="bg image"
        className="absolute right-0 top-0 sm:block hidden"
      />
      <img
        src="/mehrigiyo/images/bg/product-bg-sm.png"
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
      </div>
    </Section>
  );
};
export default Product;
