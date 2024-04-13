import Section from "../components/section";
import SectionTitle from "../components/section-title";

const data = [
  {
    title: "Tarkibiy komponentlar",
    description:
      "Bizning barcha mahsulotlar tabiiy giyohlardan va dorivor oʻsimliklardan tayyorlangan.",
    icon: "/images/icons/Medical Shield.svg",
  },
  {
    title: "Yosh-u qariga birdek mos keladi",
    description:
      "Mahsulotlarni nafaqat yoshi kattalar, balki yoshlar va kichik yoshdagi bolalar ham isteʼmol qilishlari mumkin.",
    icon: "/images/icons/Pill.svg",
  },
  {
    title: "Nojoʻya taʼsiri yoʻq",
    description:
      "Tarkibida kimyoviy moddalar yoʻqligi sabab nojoʻya taʼsirlarni keltirib chiqarmaydi.",
    icon: "/images/icons/Body.svg",
  },
  {
    title: "Universal vosita",
    description:
      "Mahsulotlar bir yoki ikki emas, bir necha xil kasalliklarning oldini olishda ijobiy natija koʻrsatadi.",
    icon: "/images/icons/Stethoscope.svg",
  },
];

const Advantages = () => {
  return (
    <Section>
      <div>
        <SectionTitle className="sm:mb-20 mb-14 text-center">
          Bizning afzalliklar
        </SectionTitle>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {data.map(({ description, icon, title }, index) => (
            <div
              className="bg-primary-gradient px-[30px] py-[35px] rounded-tr-[40px]"
              key={index}
            >
              <img src={icon} alt="icon" className="size-[72px]" />
              <div className="mt-[15px]">
                <h1 className="text-white font-medium text-xl">{title}</h1>
                <p className="mt-[10px] text-base text-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Advantages;
