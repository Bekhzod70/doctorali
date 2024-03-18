import Translation from "@/components/translation";
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const BenefitCard = ({ imageUrl, title }: Props) => {
  return (
    <div className="xl:w-[300px] w-[48%] h-auto rounded-[36px] p-2 bg-gray-light">
      <div className="flex flex-col gap-y-4 items-center">
        <div className="sm:w-[200px] sm:h-[200px] rounded-full border-4 border-orange">
          <Image
            src={imageUrl}
            alt={title}
            className="w-full max-sm:w-[155px] max-xs:w-[120px] max-xs:h-[120px] h-full max-sm:h-[155px] object-cover rounded-inherit"
            width={1500}
            height={1500}
          />
        </div>
        <div className="text-center">
          <h3 className="sm:text-2xl text-button2">
            <Translation text={title} />
          </h3>
          {/* <p className="text-paragraph2 text-gray">
            <Translation text={subtitle} />
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default BenefitCard;
