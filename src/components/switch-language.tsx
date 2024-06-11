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

import RussiaFlag from "./icons/russia-flag";
import UzbekFlag from "./icons/uzbek-flag";
import EnglishFlag from "./icons/england-flag";
import Translation from "./translation";

type ILanguage = "ru" | "uz" | "en";

const languages = [
  {
    label: "O‘zbek",
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
    (locale as ILanguage) || "uz"
  );

  const changeLanguage = (currentLanguage: string) => {
    try {
      router.push({ pathname, query }, asPath, {
        locale: currentLanguage,
        scroll: false,
      });
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
      label: "Ўзбек",
    },
    en: {
      icon: <EnglishFlag />,
      label: "English",
    },
  };

  return (
    <div className="border-2 !p-5 lg:border-[#F9F9F9] border-white bg-transparent">
      <div className="flex items-center justify-center gap-1">
        <div className="text-gray flex items-center gap-[6px]">
          {infoSelectLanguage[selectedLang]?.icon}
          {/* Язык: */}
          <Translation text="label.language" />:
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
