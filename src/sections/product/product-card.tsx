import Image from "next/image";

interface Props {
  imageUrl: string;
  info: string;
}

const ProductCard = ({ imageUrl, info }: Props) => {
  return (
    <div
      className="relative h-[235px] py-[30px] px-5 lg:[&:nth-child(6n_+_3)]:col-span-2 lg:[&:nth-child(6n_+_4)]:col-span-2 rounded-[30px] group overflow-hidden"
      key={info}
    >
      <h3 className="lg:text-heading4 text-paragraph1 text-white relative z-10 font-medium max-w-[416px]">
        {info}
      </h3>
      <Image
        width={500}
        height={500}
        src={imageUrl}
        alt="product image"
        className="w-full h-full absolute left-0 top-0 object-cover rounded-inherit group-hover:scale-105 transition"
      />
    </div>
  );
};

export default ProductCard;
