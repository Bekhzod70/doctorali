import Translation from "@/components/translation";
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const BenefitCard = ({ imageUrl, subtitle, title }: Props) => {
  return (
    <div className="xl:w-[335px] w-full h-full rounded-[36px] pt-5 px-5 pb-[34px] bg-gray-light">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="w-[255px] h-[255px] rounded-full border-4 border-orange">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-inherit"
            width={1500}
            height={1500}
          />
        </div>
        <div className="text-center">
          <h3 className="text-heading4 mb-3">
            <Translation text={title} />
          </h3>
          <p className="text-paragraph2 text-gray">
            <Translation text={subtitle} />
          </p>
        </div>
      </div>
    </div>
  );
};
export default BenefitCard;
