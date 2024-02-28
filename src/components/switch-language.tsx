import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./ui/button";
import RussiaFlag from "./icons/russia-flag";
import UzbekFlag from "./icons/uzbek-flag";
import EnglandFlag from "./icons/england-flag";

type ILanguage = "ru" | "uz" | "en";

const languages = [
  {
    label: "Uzbek",
    value: "uz",
  },
  {
    label: "Русский",
    value: "ru",
  },
  {
    label: "English",
    value: "en",
  },
];

const SwitchLanguage = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [selectedLang, setSelectedLang] = useState<ILanguage>(
    (locale as ILanguage) || "ru"
  );

  const changeLanguage = (currentLanguage: string) => {
    try {
      router.push({ pathname, query }, asPath, { locale: currentLanguage });
    } catch (err) {
      console.error(err);
    }
  };

  const infoSelectLanguage = {
    ru: {
      icon: <RussiaFlag />,
      label: "Русский",
    },
    uz: {
      icon: <UzbekFlag />,
      label: "Uzbek",
    },
    en: {
      icon: <EnglandFlag />,
      label: "English",
    },
  };

  return (
    <div className="border-2 !p-5 border-[#F9F9F9] bg-transparent rounded-full">
      <div className="flex items-center gap-1">
        <div className="text-gray flex items-center gap-[6px]">
          {infoSelectLanguage[selectedLang]?.icon}
          Язык:
        </div>
        <Select
          onValueChange={(e: ILanguage) => {
            setSelectedLang(e);
            changeLanguage(e);
          }}
          value={selectedLang}
        >
          <SelectTrigger className="border-none font-normal focus:ring-0 focus:shadow-none !ring-offset-0 w-auto sm:text-base text-sm !h-auto p-0 bg-transparent gap-[10px]">
            <SelectValue>{infoSelectLanguage[selectedLang].label}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {languages.map(({ label, value }) => (
                <SelectItem
                  key={value}
                  value={value}
                  className="text-secondary-foreground font-normal"
                >
                  <span className="flex items-center gap-1">
                    {infoSelectLanguage[value as ILanguage].icon}
                    {label}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SwitchLanguage;
