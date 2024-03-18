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
import Image from "next/image";
import Translation from "@/components/translation";

const Health = () => {
  const [image, setImage] = useState(healthData[0].imageUrl);

  return (
    <Section id="catalog">
      <div className="flex xlg:flex-row flex-col gap-5">
        <div className="xlg:w-1/2">
          <div className="mb-8 xlg:hidden">
            <SectionTitle>
              <Translation text="health.title" />
              {/* Эксклюзивный комплекс для здоровья */}
            </SectionTitle>
            <p className="text-paragraph1 text-gray mt-5">
              {/* Состав и уникальные преимущества */}
              <Translation text="health.subtitle" />
            </p>
          </div>
          <div className="w-full xlg:h-[620px] sm:h-[600px] max-sm:h-[300px] rounded-[40px]">
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
          <div className="mb-[46px] xlg:block hidden">
            <SectionTitle>
              <Translation text="health.title" />
              {/* Эксклюзивный комплекс для здоровья */}
            </SectionTitle>
            <p className="text-paragraph1 text-gray mt-5">
              {/* Состав и уникальные преимущества */}
              <Translation text="health.subtitle" />
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-y-4"
          >
            {healthAccordionData.map(({ answer, question }, i) => (
              <AccordionItem value={`item-${i}`} key={question}>
                <AccordionTrigger>
                  <Translation text={question} />
                </AccordionTrigger>
                <AccordionContent>
                  <Translation text={answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default Health;
