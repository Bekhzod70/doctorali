import Section from "../components/section";
import SectionTitle from "../components/section-title";

const data = [
  {
    description:
      "32 yillik izlanishlar natijasida ishlab chiqilgan mahsulotlar",
    icon: "/mehrigiyo/images/icons/32.svg",
  },
  {
    description:
      "Organik komponentlardan tashkil topgan tabiiy mahsulotlar",
    icon: "/mehrigiyo/images/icons/leaf.svg",
  },
  {
    description:
      "Xomashyo yetishtirish, ishlab chiqarish, hammasi nazoratliligi",
    icon: "/mehrigiyo/images/icons/box.svg",
  },
  {
    description:
      "Tarkibida kimyoviy moddalar yo‘qligi sabab nojo‘ya taʼsirlarni keltirib chiqarmaydi.",
    icon: "/mehrigiyo/images/icons/body2.svg",
  },
  {
    description:
      "Dunyo tan olgan xalqaro sertifikatlar",
    icon: "/mehrigiyo/images/icons/list.svg",
  },
  {
    description:
      "Mutaxassislikdan konsultatsiya olish bepul",
    icon: "/mehrigiyo/images/icons/call.svg",
  },
  {
    description:
      "O‘zbekiston bo‘ylab bepul yetkazib berish xizmati",
    icon: "/mehrigiyo/images/icons/uzb.svg",
  },
  {
    description:
      "Mijozlarimizni natijaga chiqarish uchun doim aloqadamiz",
    icon: "/mehrigiyo/images/icons/4.svg",
  },
  {
    description:
      "Doimiy mijozlar uchun sovg‘alar",
    icon: "/mehrigiyo/images/icons/gift.svg",
  },
];

const Advantages = () => {
  return (
    <Section>
      <div>
        <SectionTitle className="sm:mb-20 mb-14 text-center">
          Afzalliklarimiz
        </SectionTitle>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-3 gap-y-4">
          {data.map(({ description, icon }, index) => (
            <div
              data-aos="fade-up"
              className="bg-white px-[10px] py-[15px] border-[1px] border-[#EBEBEB] rounded-[11px] text-center "
              key={index}
            >
              <img src={icon} alt="icon" className="size-[46px] mx-auto" />
              <div className="mt-[15px]">
                <p className="mt-[10px] text-base text-green">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Advantages;
