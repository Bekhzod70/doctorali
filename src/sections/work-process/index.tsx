import Section from "../components/section";
import SectionTitle from "../components/section-title";

/*
01
Shifobaxsh giyohlarni oʻzimiz yetishtiramiz
Jarayonni tajribali mutaxassislarimiz yordamida toʻliq nazorat qilamiz va sifatning oliy darajasini taʼminlaymiz.

02
Oʻsimliklarga zamonaviy usullar bilan ishlov beramiz
Ularni tayyor mahsulot koʻrinishiga keltirishda ilgʻor texnologiyalardan foydalanamiz.

03
Qulay koʻrinishda qadoqlaymiz
Mahsulotlarimizning barchasi isteʼmolingiz uchun qulay qadoqlarda boʻlishi haqida qaygʻuramiz.

04
Buyurtmangizni bepul yetkazib beramiz
Oʻzbekistonning qaysi hududida istiqomat qilishingizdan qatʼiy nazr buyurtmangizni uyingizgacha eltib berishni oʻz zimmamizga olamiz.
*/

const data = [
  {
    number: "01",
    title: "Shifobaxsh giyohlarni oʻzimiz yetishtiramiz",
    content:
      "Jarayonni tajribali mutaxassislarimiz yordamida toʻliq nazorat qilamiz va sifatning oliy darajasini taʼminlaymiz.",
  },
  {
    number: "02",
    title: "Oʻsimliklarga zamonaviy usullar bilan ishlov beramiz",
    content:
      "Ularni tayyor mahsulot koʻrinishiga keltirishda ilgʻor texnologiyalardan foydalanamiz.",
  },
  {
    number: "03",
    title: "Qulay koʻrinishda qadoqlaymiz",
    content:
      "Mahsulotlarimizning barchasi isteʼmolingiz uchun qulay qadoqlarda boʻlishi haqida qaygʻuramiz.",
  },
  {
    number: "04",
    title: "Buyurtmangizni bepul yetkazib beramiz",
    content:
      "Oʻzbekistonning qaysi hududida istiqomat qilishingizdan qatʼiy nazr buyurtmangizni uyingizgacha eltib berishni oʻz zimmamizga olamiz.",
  },
];

const WorkProcess = () => {
  return (
    <Section className="px-[20px]">
      <SectionTitle className="md:mb-20 mb-9 text-center">
        Ish jarayoni bilan tanishing
      </SectionTitle>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {data.map(({ number, title, content }, i) => (
          <div
            data-aos="fade-up"
            className="bg-white grid gap-[14px] sm:py-10 py-4 sm:px-[30px] px-5 border sm:border-light border-border max-sm:rounded-xl"
            key={i}
          >
            <h2 className="sm:text-heading4 text-5xl gradient-text font-medium unbounded">
              {number}
            </h2>
            <h1 className="text-green font-medium text-[19px]">{title}</h1>
            <p className="sm:text-gray text-gray-600 text-base">{content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WorkProcess;
