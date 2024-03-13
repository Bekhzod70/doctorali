import { useState } from "react";
import Section from "../components/section";
import { healthAccordionData, healthData } from "./data";
import { cn } from "@/lib/utils";
import SectionTitle from "../components/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Shield from "@/components/icons/shield";
import Image from "next/image";
import Translation from "@/components/translation";

const Health = () => {
  const [image, setImage] = useState(healthData[0].imageUrl);

  return (
    <Section>
      <div className="flex xlg:flex-row flex-col gap-5">
        <div className="xlg:w-1/2">
          <div className="w-full xlg:h-[620px] max-sm:h-[511px] rounded-[40px]">
            <Image
              src={image}
              alt="health image"
              className="h-full w-full object-cover rounded-inherit"
              width={1000}
              height={1000}
            />
          </div>
          <div
            className="flex gap-5 sm:justify-center mt-[30px] overflow-auto"
            id="health-scrollbar"
          >
            {healthData.map(({ imageUrl, info }) => (
              <div key={imageUrl}>
                <div
                  className={cn(
                    "w-[138px] h-[138px] rounded-full cursor-pointer",
                    imageUrl === image
                      ? "border-2 border-orange opacity-60"
                      : ""
                  )}
                  onClick={() => setImage(imageUrl)}
                >
                  <Image
                    src={imageUrl}
                    alt="health image"
                    className="h-full w-full object-cover rounded-inherit"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="text-button1 mt-[22px] text-center">
                  <Translation text={info} />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="xlg:w-1/2">
          <div className="mb-[46px]">
            <SectionTitle>Эксклюзивный комплекс для здоровья</SectionTitle>
            <p className="text-paragraph1 text-gray mt-5">
              Состав и уникальные преимущества
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-y-4"
          >
            {healthAccordionData.map(({ answer, icon, question }, i) => (
              <AccordionItem value={`item-${i}`} key={question}>
                <AccordionTrigger icon={icon}>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default Health;
