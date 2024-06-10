import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";


const data = [
  {
    number: "01",
    title: "workProcess.item1.title",
    content:
      "workProcess.item1.content",
  },
  {
    number: "02",
    title: "workProcess.item2.title",
    content:
    "workProcess.item2.content",
  },
  {
    number: "03",
    title: "workProcess.item3.title",
    content:
    "workProcess.item3.content",
  },
  {
    number: "04",
    title: "workProcess.item4.title",
    content:
    "workProcess.item4.content",
  },
];

const WorkProcess = () => {
  return (
    <Section className="px-[20px]">
      <SectionTitle className="md:mb-20 mb-9 text-center">
        <Translation text="workProcess.title" />
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
            <h1 className="text-green font-medium text-[19px]"><Translation text={title} /></h1>
            <p className="sm:text-gray text-gray-600 text-base"><Translation text={content} /></p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WorkProcess;
