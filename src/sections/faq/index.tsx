import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";
import { faqData } from "./faq-data";

const Faq = () => {
  return (
    <Section className="py-10 bg-orange">
      <SectionTitle className="text-white sm:mb-16 mb-7">
        <Translation text="faq.title" />
      </SectionTitle>
      <div>
        <Accordion type="single" collapsible className="flex flex-col gap-y-4">
          {faqData.map(({ answer, question }, i) => (
            <AccordionItem value={`item-${i}`} key={question}>
              <AccordionTrigger className="max-sm:text-base">
                <Translation text={question} />
              </AccordionTrigger>
              <AccordionContent>
                <Translation text={answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default Faq;
