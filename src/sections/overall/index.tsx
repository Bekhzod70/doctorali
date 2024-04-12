import Section from "../components/section";

const data = [
  {
    title: "32yil",
    subtitle: "Kompaniyamiz ochilganiga",
  },
  {
    title: "100+",
    subtitle: "Mahsulot turlari",
  },
  {
    title: "500+",
    subtitle: "Bizning mutaxassislar",
  },
  {
    title: "1mln+",
    subtitle: "Mamnun mijozlar",
  },
  {
    title: "500+gektar",
    subtitle: "Giyohlar yetishtiriladigan hudud",
  },
];

const Trusted = () => {
  const boxStyle =
    "flex flex-col gap-4 max-w-[264px] w-full border-2 py-10 px-[30px] border-light";
  const boxTitleStyle =
    "sm:text-heading2 text-heading3 gradient-text font-times-new-roman";

  return (
    <Section className="!mt-[100px]">
      <div className="flex items-center flex-wrap gap-5 lg:justify-between justify-evenly">
        <div className={boxStyle}>
          <h1 className={boxTitleStyle}>
            32<span className="text-[22px]">yil</span>
          </h1>
          <p>Kompaniyamiz ochilganiga</p>
        </div>
        <div className={boxStyle}>
          <h1 className={boxTitleStyle}>100+</h1>
          <p>Mahsulot turlari</p>
        </div>
        <div className={boxStyle}>
          <h1 className={boxTitleStyle}>500+</h1>
          <p>Bizning mutaxassislar</p>
        </div>
        <div className={boxStyle}>
          <h1 className={boxTitleStyle}>
            1<span className="text-[22px]">mln</span>+
          </h1>
          <p>Mamnun mijozlar</p>
        </div>
        <div className={boxStyle}>
          <h1 className={boxTitleStyle}>
            500+<span className="text-[22px]">gektar</span>
          </h1>
          <p>Giyohlar yetishtiriladigan hudud</p>
        </div>
      </div>
    </Section>
  );
};

export default Trusted;
