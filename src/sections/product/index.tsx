import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { productData } from "./data";

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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {productData.map(({ imageUrl, info }) => (
            <div
              className="relative h-[235px] py-[30px] px-5 lg:[&:nth-child(6n_+_3)]:col-span-2 lg:[&:nth-child(6n_+_4)]:col-span-2 rounded-[30px] group overflow-hidden"
              key={info}
            >
              <h3 className="lg:text-heading4 text-paragraph1 text-white relative z-10 font-medium max-w-[416px]">
                {info}
              </h3>
              <img
                src={imageUrl}
                alt="product image"
                className="w-full h-full absolute left-0 top-0 object-cover rounded-inherit group-hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Product;
